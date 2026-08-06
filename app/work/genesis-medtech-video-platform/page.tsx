import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

/**
 * Bespoke case-study layout for the Genesis MedTech platform, built to match
 * the Figma at node 60:19068. Static route, taking precedence over the shared
 * `app/work/[slug]/page.tsx` template.
 *
 * Panel images come from the Figma `Background`/`Pen` nodes and carry the grey
 * panel and 48px radius baked in. Six blocks have no visual in the design and
 * render as full-width text.
 */

const project = getProject("genesis-medtech-video-platform")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};

const NAV = [
  { label: "Solution", href: "#solution" },
  { label: "Problem", href: "#problem" },
  { label: "Outcomes & Impact", href: "#outcomes" },
  { label: "Process, Iterations, and Trade-offs", href: "#process" },
  { label: "Next Steps", href: "#next" },
  { label: "Lessons Learned", href: "#lessons" },
];

type Block = {
  title: string;
  body: string;
  images?: { src: string; w: number; h: number }[];
};

const img = (src: string, w: number, h: number) => ({ src, w, h });

const SOLUTIONS: Block[] = [
  {
    title: "Uploading Process",
    body: "A guided upload with AI-prefilled surgery descriptions and automated flagging of patient-identifiable frames.",
  },
  {
    title: "AI-assisted editor",
    body: "AI-assisted editor that surfaces unusable and sensitive clips for surgeon review before publishing.",
  },
];

const OUTCOMES = [
  {
    lead: "For surgeons, the tool achieved the goals:",
    results: [
      "Enable video uploads with a CES > 7.5",
      "Reduce video-editing time by 15%",
      "AI efficiency in both uploading and editing",
    ],
    images: [img("/projects/gen-outcomes-surgeons.png", 752, 468)],
  },
  {
    lead: "For Genesis MedTech, the product achieved the goals:",
    results: [
      "85% surgeon satisfaction during upload",
      "68% editing retention at MVP",
      "AI error rates (auto-fill) held under 20%",
    ],
    images: [img("/projects/gen-outcomes-company.png", 752, 468)],
  },
];

const PROCESS: Block[] = [
  {
    title: "Upload flow — processing page vs. direct-to-editor",
    body: "I mapped two navigation directions and ran a comparative usability study. The version showing a processing state before the editor scored 89% usability, better matching users' mental models.",
  },
  {
    title: "Stepped input, driven by user confidence",
    body: "Research showed surgeons don't mind manual data entry — they mind re-entering data that already lives in hospital systems. Testing a 3-step form against a single-screen form, users preferred the stepped version because breaking up the task built confidence. This insight also shaped our push to auto-populate post-surgery data from partner hospitals (10+ onboarded so far).",
    images: [
      img("/projects/gen-stepped-1.png", 752, 752),
      img("/projects/gen-stepped-2.png", 752, 752),
    ],
  },
  {
    title: "Advocating legal disclosures through evidence",
    body: "Legal wanted dense disclosures on the upload page. Rather than push back directly, I mocked it up and tested with surgeons; the results showed the text was overwhelming, and I successfully proposed moving it to a separate static page so users could stay focused.",
  },
  {
    title: "Helping surgeons save time and mental effort on editing",
    body: "For the AI-integrated one-click editing, I collaborated with the AI engineering team to understand current strengths and technical limitations. Internal data set the range we designed for — the longest surgery video ran 36 hours, with a median length of 3 hours — so we designed for edge cases to improve inclusivity, reliability, and usability for all users.",
  },
  {
    title: "Sensitive-clip UI — clarity over alarm",
    body: "For AI-flagged sensitive frames, I tested a cautionary orange treatment against a neutral, on-brand blue with plain-language copy. Surgeons — being highly educated and prone to over-reading UI — strongly preferred the calmer version, which scored significantly higher. We paired this with a “confirm deletions” pattern (over grayed-out restores) that users found clearer and more controllable.",
    images: [
      img("/projects/gen-sensitive-1.png", 624, 624),
      img("/projects/gen-sensitive-2.png", 624, 624),
    ],
  },
  {
    title: "Usability testing on the AI editing feature",
    body: "We designed quick-access entry points for common editing tools. We conducted mid-fidelity usability testing to ensure users could easily find and use each editing feature. All key tools met user expectations.",
    images: [img("/projects/gen-usability.png", 1152, 774)],
  },
  {
    title: "Scoping with trade-offs",
    body: "Using an NN/g-based trade-off framework weighing user value against budget and timeline, the team scored features through structured voting. The Pen Tool ranked lowest (7.5) — still “desired,” but deferred from the 2025 roadmap to protect MVP focus.",
    images: [img("/projects/gen-tradeoffs.png", 1152, 774)],
  },
];

const NEXT_STEPS: Block[] = [
  {
    title: "Post-launch: listen, iterate, expand.",
    body: "We collected real feedback from pilot users and realized the model's outputs were basic — but users said ~80% of their surgeries are routine, and they'd still use the AI-generated text as a starting point. We decided to continue refining the AI pre-fill feature and monitor engagement post-release.",
    images: [img("/projects/gen-next-steps.png", 624, 200)],
  },
  {
    title: "Validated demand, real integrations underway.",
    body: "Users want post-surgery data to auto-populate the form, so we confirmed technical feasibility with the dev lead and secured legal and data-sharing approvals with partner hospitals. We've onboarded 10+ affiliate hospitals so far and are actively expanding integration coverage.",
  },
];

function Panels({ images, alt }: { images: Block["images"]; alt: string }) {
  if (!images?.length) return null;
  return (
    <div className="flex flex-col gap-6">
      {images.map((im, i) => (
        <Image
          key={im.src}
          src={im.src}
          alt={images.length > 1 ? `${alt} (${i + 1} of ${images.length})` : alt}
          width={im.w}
          height={im.h}
          sizes="(max-width: 768px) 100vw, 624px"
          className="h-auto w-full"
        />
      ))}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-medium leading-8 text-ink">
      {children}
    </h2>
  );
}

function SplitBlock({ title, body, images }: Block) {
  const hasImages = Boolean(images?.length);
  return (
    <div
      className={
        hasImages
          ? "grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          : "py-6"
      }
    >
      <div className="flex flex-col gap-2 pt-3">
        <h3 className="text-lg font-medium leading-6 text-ink">{title}</h3>
        <p className="max-w-3xl leading-relaxed text-ink-muted">{body}</p>
      </div>
      <Panels images={images} alt={title} />
    </div>
  );
}

export default function GenesisCaseStudy() {
  return (
    <article className="mx-auto max-w-shell px-6 py-10">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M14 8H3M7 4L3 8l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to work
      </Link>

      {/* Hero */}
      <header className="mt-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          {["Design Lead", "Research Lead", "Genesis MedTech", project.period].map(
            (pill) => (
              <span
                key={pill}
                className="rounded-full border border-ink-hairline px-2 py-1 text-[10px] uppercase leading-4 tracking-[0.6px] text-ink"
              >
                {pill}
              </span>
            )
          )}
        </div>

        <h1 className="max-w-4xl text-4xl font-normal leading-tight tracking-[-1.2px] text-ink-strong sm:text-5xl sm:leading-[48px]">
          Genesis MedTech AI-Assisted Surgical Video Platform
        </h1>

        <p className="max-w-3xl pt-3 leading-6 text-ink-muted">
          Genesis MedTech is a global medical device company serving 400+ U.S. hospitals.
          Partnering with 2 PMs and a team of 6 developers, I designed an all-in-one
          platform that lets surgeons upload and edit operative videos with AI assistance
          — reaching 85% surgeon satisfaction on upload and a 68% editing retention rate
          at MVP (vs. 60% benchmark).
        </p>

        <nav aria-label="Case study sections" className="flex flex-wrap items-center gap-2 pb-4">
          {NAV.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-sm text-line">|</span>}
              <a
                href={item.href}
                className="rounded-full px-2.5 py-1 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>
      </header>

      {/* The Solution */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="solution">The Solution</SectionHeading>
        {SOLUTIONS.map((s) => (
          <SplitBlock key={s.title} {...s} />
        ))}
      </section>

      {/* The Problem */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="problem">The Problem</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Leading surgeons publish operative videos on platforms like YouTube — to reflect
          on their own procedures and help younger doctors learn. But mainstream platforms
          fail them: surgical footage gets misclassified as graphic content and removed,
          and limited editing tools force surgeons into separate software to finish their
          videos.
        </p>
        <Image
          src="/projects/gen-problem.png"
          alt="Limitations of mainstream video platforms for surgical footage"
          width={1152}
          height={720}
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="mt-2 h-auto w-full"
        />
      </section>

      {/* Outcomes & Impact */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="outcomes">Outcomes &amp; Impact</SectionHeading>
        {OUTCOMES.map((group) => (
          <div
            key={group.lead}
            className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          >
            <div className="flex flex-col gap-3 pt-3">
              <p className="leading-relaxed text-ink">{group.lead}</p>
              <ul className="space-y-2">
                {group.results.map((r) => (
                  <li key={r} className="leading-relaxed text-ink-muted">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <Panels images={group.images} alt={group.lead} />
          </div>
        ))}
      </section>

      {/* Deep Dive */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="process">
          Deep Dive: Process, Iterations, and Trade-offs
        </SectionHeading>
        {PROCESS.map((p) => (
          <SplitBlock key={p.title} {...p} />
        ))}
      </section>

      {/* Next steps */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="next">Next steps</SectionHeading>
        {NEXT_STEPS.map((n) => (
          <SplitBlock key={n.title} {...n} />
        ))}
      </section>

      {/* Lessons Learned */}
      <section className="mt-11 flex flex-col gap-4 pb-12">
        <SectionHeading id="lessons">Lessons Learned</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Designing for surgeons taught me that expertise changes how people read an
          interface. Highly educated users over-analyzed our UI copy and found cautionary
          visuals alarming — so clarity and calm outperformed &ldquo;helpful&rdquo;
          emphasis at every turn. I also learned to advocate through evidence, not
          opinion: when Legal pushed for dense on-page disclosures, a quick mockup and
          user test moved the decision faster than any argument could. Most of all, I saw
          that in high-stakes domains, earning user trust isn&rsquo;t a final polish — it&rsquo;s
          the design constraint that shapes every flow.
        </p>
      </section>

      <div className="mt-16 border-t border-line pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M14 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to all work
        </Link>
      </div>
    </article>
  );
}
