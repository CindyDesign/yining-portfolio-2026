import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About",
  description: "About Ningning — UX designer at PNC Bank.",
};

export default function AboutPage() {
  return (
    <div className="dark-ambient flex min-h-screen flex-col bg-ink text-haze">
      <SiteNav />
      <main className="flex-1">
        <section className="mx-auto max-w-shell px-6 py-10">
          <h1 className="max-w-3xl text-3xl font-light leading-snug text-haze sm:text-4xl">
            If you&rsquo;re interested in any form of collaboration, feel free
            sending me an email and we&rsquo;ll get back to you shortly.{" "}
            <a
              href="mailto:ningningerdesign@gmail.com"
              className="text-white underline-offset-4 hover:underline"
            >
              → ningningerdesign@gmail.com
            </a>
          </h1>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-white">About</h2>
              <hr className="mt-4 border-white/10" />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-haze sm:text-base">
                <p>
                  Hi, I am Cindy. I am a UX designer who currently works at PNC Bank.
                  I call myself a UX practitioner, making apps and websites easier to
                  use on a daily basis.
                </p>
                <p>
                  Drawing from combined expertise exceeding 5+ years in UX design,
                  information design, and motion design, I present nimble and swift
                  responses to the demands of the ever-changing tech industry.
                </p>
                <p>
                  My mission is to craft leading-edge digital experiences that cater
                  to diverse industries and audiences on a global scale.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">Enquiries &amp; Jobs</h2>
              <hr className="mt-4 border-white/10" />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-haze sm:text-base">
                <p>
                  I specialize in UX/UI design, branding, and motion design. Looking
                  to kickstart a new project or explore a creative collaboration?
                  Reach out via email — we&rsquo;re excited to hear from you!
                </p>
                <p>
                  I also post my work on Behance, feel free to take a look.{" "}
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4"
                  >
                    → My work on Behance
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
