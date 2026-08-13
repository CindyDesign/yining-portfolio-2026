"use client";

import { useEffect, useRef } from "react";

/**
 * Animated wave field behind the hero, in the spirit of Stripe's gradient mesh.
 *
 * Palette is deliberately narrow: Orange 45 (#bc532b) plus greys, no other hue.
 * The orange is masked toward the lower-right and damped across the upper-left
 * so the headline — and especially the #bc532b accent words inside it — keep
 * their contrast against the background rather than sinking into it.
 *
 * Isolated as its own client component so the hero itself stays server-rendered.
 * Honours prefers-reduced-motion by painting a single frame and stopping, and
 * pauses entirely when the tab is hidden.
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2  u_res;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p  = uv * vec2(u_res.x / u_res.y, 1.0);
  float t = u_time * 0.05;

  // Two drifting noise fields displace a low-frequency wave.
  float w1 = fbm(p * 1.5 + vec2(t, t * 0.45));
  float w2 = fbm(p * 3.0 - vec2(t * 0.6, t * 0.25));
  float wave = sin((uv.x * 2.0 + w1 * 1.5 + w2 * 0.4 + t * 0.7) * 3.14159) * 0.5 + 0.5;

  vec3 white  = vec3(1.0);
  vec3 grey1  = vec3(0.949, 0.957, 0.968);   // #f2f4f7
  vec3 grey2  = vec3(0.878, 0.890, 0.906);   // #e0e3e7
  vec3 orange = vec3(0.737, 0.325, 0.169);   // #bc532b  Orange 45

  vec3 col = mix(white, grey1, smoothstep(0.15, 0.85, wave));
  col = mix(col, grey2, smoothstep(0.55, 1.0, w1) * 0.45);

  // uv.y is 0 at the bottom. The headline is vertically centred and its accent
  // words are themselves #bc532b, so orange behind them would collapse their
  // contrast. Confine it to the bottom band, which the text never reaches at
  // any viewport height.
  float band = smoothstep(0.78, 1.0, 1.0 - uv.y);
  float orangeAmt = smoothstep(0.40, 0.98, wave) * band * 0.42;
  col = mix(col, orange, orangeAmt);

  // Second guard: lift everything above the band toward white. #bc532b only
  // clears 4.76:1 on pure white, so the accent words need the field behind them
  // kept close to it — the wave stays legible, just quieter where text sits.
  float lift = smoothstep(0.18, 0.42, uv.y);
  col = mix(col, white, lift * 0.62);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) return; // no WebGL: the plain background stays, nothing breaks

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]), // one oversized triangle
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const draw = (t: number) => {
      resize();
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    // Accumulate elapsed time rather than measuring from a fixed start, so
    // pausing and resuming continues the wave instead of snapping it back.
    let last = 0;
    let elapsed = 0;

    const loop = (now: number) => {
      if (last) elapsed += (now - last) / 1000;
      last = now;
      draw(elapsed);
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    };

    const play = () => {
      if (reduced.matches || document.hidden) return;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    // Static single frame when motion is reduced; animate otherwise.
    if (reduced.matches) draw(0);
    else play();

    const onVisibility = () => (document.hidden ? stop() : play());
    const onMotionChange = () => {
      stop();
      if (reduced.matches) draw(0);
      else play();
    };
    const onResize = () => {
      if (!raf) draw(0);
    };

    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onMotionChange);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", onResize);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  /*
   * The hero is width-capped at max-w-shell; the wave should still run edge to
   * edge, so the canvas breaks out to the full viewport width.
   */
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2"
    />
  );
}
