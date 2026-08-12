import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

/**
 * Bespoke case-study layout for the External Transfer redesign, built to match
 * the Figma at node 10:630. Static route, taking precedence over the shared
 * `app/work/[slug]/page.tsx` template.
 *
 * Panel images come from Figma's raw assets (2–3x), downscaled to 2x and
 * flattened onto #f2f4f7. Blocks with no visual in the design render as
 * full-width text.
 */

const project = getProject("external-transfer-mobile-redesign")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};

const NAV = [
  { label: "Solution", href: "#solution" },
  { label: "Problem", href: "#problem" },
  { label: "Outcomes & Impact", href: "#outcomes" },
  { label: "Process, Iterations, and Trade-offs", href: "#process" },
  { label: "Other Contribution", href: "#other" },
  { label: "Lesson Learned", href: "#lessons" },
];

type PanelImage = { src: string; w: number; h: number };

type Block = {
  title: string;
  body: string;
  images?: PanelImage[];
  /**
   * "split" (default) puts images in a 624-wide column beside the text.
   * "stacked" runs the text full width with 1152-wide images below it.
   */
  layout?: "split" | "stacked";
};

const img = (src: string, w: number, h: number): PanelImage => ({ src, w, h });

const SOLUTIONS: Block[] = [
  {
    title: "Instant verification so no wait times",
    body: "Successfully aligned product, engineering, and risk partners to abandon legacy trial deposits, transitioning the platform toward real-time account verification to boost activation velocity and user trust.",
    images: [img("/projects/Instant%20verification.gif", 1872, 2156)],
  },
  {
    title: "8 Steps of Verification",
    body: "Collapsed redundant verification steps by combining trial-deposit confirmation with additional identity verification into a single pass.",
    images: [img("/projects/et-collapsed-steps.png", 624, 774)],
  },
  {
    title: "Consistent Transfer Interaction Pattern",
    body: "Established one consistent transfer flow from entry point to success screen so the experience felt identical whether a user started from account overview, transfers, or settings.",
    images: [img("/projects/Consistent_Transfer.gif", 1872, 2156)],
  },
];

/** Figma 34:50041 — three columns, each an illustration above its own copy. */
const PROBLEMS = [
  {
    title: "Multi-day verification wait times",
    body: "Trial deposits required 1–2 business days before a user could even confirm their external account, killing momentum at the exact moment intent was highest.",
    image: img("/projects/et-problem-wait.png", 350, 252),
  },
  {
    title: "Redundant steps within enrollment",
    body: "Enrollment forced users through separate deposit-verification and identity-verification steps that could be collapsed without compromising security.",
    image: img("/projects/et-problem-redundant.png", 350, 252),
  },
  {
    title: "Inconsistent interaction pattern",
    body: "Inconsistent interaction patterns across the external transfer experience reduced predictability, ultimately undermining the systemic trust that is absolutely critical to a high-fidelity financial transaction flow.",
    image: img("/projects/et-problem-pattern.png", 350, 252),
  },
];

const OUTCOMES = [
  "+25% improvement in enrollment completion",
  "108K enrollments processed post-launch",
  "−49 seconds average reduction in sign-up flow time",
  "544K external transfer users on the redesigned flow",
  "100K+ users moved through instant verification",
];

const PROCESS: Block[] = [
  {
    title:
      "Listening to user desire to upgrade from trial deposits to real-time verification",
    body: "While trial deposits were historically favored as a secure ownership proof, we leveraged customer advocacy insights to align partners around a modern paradigm: micro-deposits are now less secure than real-time one-time passcodes and add unnecessary friction without protecting the user.",
    images: [img("/projects/et-verification-paradigm.png", 2304, 1120)],
    layout: "stacked",
  },
  {
    title: "Cut enrollment process from 16 steps into 10 steps",
    body: "Redesigned and consolidated a legacy 16-step pre-enrollment and post-enrollment flow into a highly optimized 10-step experience, while mapping out a future-state architecture to reduce the entire funnel to 6 friction-free steps.",
    images: [
      img("/projects/et-steps-1.png", 2304, 1560),
      img("/projects/et-steps-2.png", 2304, 1560),
    ],
    layout: "stacked",
  },
  {
    title:
      "Establish global pattern consistency to enable seamless, intuitive interactions",
    body: "The goal across all enhancements is consistency: when the same element behaves predictably, users can complete tasks without learning new patterns.",
  },
  {
    // Figma repeats the previous block's heading here; this block needed a
    // title of its own, written to match its body.
    title: "A single, predictable input order",
    body: "Led a generative card-sorting workshop to restructure the six core transaction fields, converging on a single, high-predictability input order that mirrors user mental models.",
    images: [img("/projects/et-card-sorting.png", 1248, 1548)],
  },
  {
    title: "Consistent entry points, clearer guidance",
    body: "Standardized transfer entry points for a consistent look, added a prominent visual tile for clarity, and included subtext for user guidance.",
    images: [
      img("/projects/et-entry-points-1.png", 2304, 1548),
      img("/projects/et-entry-points-2.png", 2304, 1560),
    ],
    layout: "stacked",
  },
  {
    title: "Clear hierarchy, distinct information levels",
    body: "Established a clear visual hierarchy across all pages, ensuring content, containers, and background colors create distinction between different levels of information.",
    images: [img("/projects/et-hierarchy.png", 2304, 782)],
    layout: "stacked",
  },
];

const OTHER: Block[] = [
  {
    title: "AI-assisted design system building",
    body: "I used AI to systematically stress-test our newly structured transaction fields — generating robust copy and data states for edge cases.",
    images: [img("/projects/et-ai-fields.png", 1504, 1504)],
  },
  {
    title: "QA testing",
    body: "Partnered with engineering to sequence backend verification changes alongside the UI rebuild, ensuring the compressed flow didn't outpace fraud and compliance checks.",
    images: [img("/projects/et-qa.png", 2354, 530)],
    layout: "stacked",
  },
];

function Panels({
  images,
  alt,
  full = false,
}: {
  images?: PanelImage[];
  alt: string;
  full?: boolean;
}) {
  if (!images?.length) return null;
  return (
    <div className="flex flex-col gap-8">
      {images.map((im, i) => {
        // The image optimizer flattens an animated GIF to its first frame, so
        // GIFs are served unoptimized.
        const isGif = im.src.toLowerCase().endsWith(".gif");
        return (
          <Image
            key={im.src}
            src={im.src}
            alt={images.length > 1 ? `${alt} (${i + 1} of ${images.length})` : alt}
            width={im.w}
            height={im.h}
            sizes={
              full
                ? "(max-width: 1200px) 100vw, 1152px"
                : "(max-width: 768px) 100vw, 624px"
            }
            unoptimized={isGif}
            className="h-auto w-full rounded-panel-lg"
          />
        );
      })}
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

function SplitBlock({ title, body, images, layout = "split" }: Block) {
  const isSplit = Boolean(images?.length) && layout === "split";
  return (
    <div
      className={
        isSplit
          ? "grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          : "flex flex-col gap-6 py-6"
      }
    >
      <div className="flex flex-col gap-2 pt-3">
        <h3 className="text-lg font-medium leading-6 text-ink">{title}</h3>
        <p className="max-w-3xl leading-relaxed text-ink-muted">{body}</p>
      </div>
      <Panels images={images} alt={title} full={!isSplit} />
    </div>
  );
}

export default function ExternalTransferCaseStudy() {
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
          {["Design Lead", "Money Movement", "PNC Bank", project.period].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-ink-hairline px-2 py-1 text-[10px] uppercase leading-4 tracking-[0.6px] text-ink"
            >
              {pill}
            </span>
          ))}
        </div>

        <h1 className="max-w-4xl text-4xl font-normal leading-tight tracking-[-1.2px] text-ink-strong sm:text-5xl sm:leading-[48px]">
          Mobile External Transfer Redesign
        </h1>

        <p className="max-w-3xl pt-3 leading-6 text-ink-muted">
          PNC is a top-ten bank in the US, with 10 million people using its native mobile
          app monthly. I am the lead designer for the external transfer feature, which
          helps users move money from their PNC accounts to other bank accounts. I
          overhauled the entire mobile external transfer experience to combat a 45%
          enrollment abandonment rate that was costing the bank millions, streamlining the
          onboarding process and establishing structural consistency across all payment
          and transfer flows.
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
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="solution">The Solution</SectionHeading>
        {SOLUTIONS.map((s) => (
          <SplitBlock key={s.title} {...s} />
        ))}
      </section>

      {/* The Problem */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="problem">The Problem</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          External transfer enrollment was bleeding users before they ever initiated a
          transaction, resulting in a 35% abandonment rate partway through the process,
          alongside inconsistent interaction patterns during the make-a-transfer process.
        </p>
        <ul className="grid gap-10 pt-4 md:grid-cols-3 md:gap-8">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="flex flex-col gap-4">
              <Image
                src={p.image.src}
                alt=""
                width={p.image.w}
                height={p.image.h}
                sizes="(max-width: 768px) 100vw, 350px"
                className="h-auto w-full rounded-panel"
              />
              <h3 className="text-lg font-medium leading-6 text-ink">{p.title}</h3>
              <p className="leading-relaxed text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Outcomes & Impact */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="outcomes">Outcomes &amp; Impact</SectionHeading>
        <div className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32">
          <div className="flex flex-col gap-6 pt-3">
            <p className="leading-relaxed text-ink">
              Product already shipped to production; live in PNC&rsquo;s mobile app.
            </p>
            <ul className="flex flex-col gap-3">
              {OUTCOMES.map((o) => (
                <li key={o} className="leading-relaxed text-ink-muted">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <Panels
            images={[img("/projects/et-outcomes.png", 1248, 1248)]}
            alt="External transfer outcomes"
          />
        </div>
      </section>

      {/* Deep Dive */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="process">
          Deep Dive: Process, Iterations, and Trade-offs
        </SectionHeading>
        {PROCESS.map((p) => (
          <SplitBlock key={p.title} {...p} />
        ))}
      </section>

      {/* Other Contribution */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="other">Other Contribution</SectionHeading>
        {OTHER.map((o) => (
          <SplitBlock key={o.title} {...o} />
        ))}
      </section>

      {/* Lesson Learned */}
      <section className="mt-32 flex flex-col gap-4 pb-12">
        <SectionHeading id="lessons">Lesson Learned</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          What I&rsquo;ve learned is that leadership is the driving force behind innovation
          and growth in the evolving field of product design. Learning through diverse
          experiences from users and key stakeholders has become a cornerstone of my
          journey, shaping my perspective and fostering continuous improvement.
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
