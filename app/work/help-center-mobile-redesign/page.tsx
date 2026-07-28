import Link from "next/link";
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

/**
 * Bespoke case-study layout for the Help Center redesign, built to match the
 * Figma at node 71:19407. This is a static route, so it takes precedence over
 * the shared `app/work/[slug]/page.tsx` template — Genesis and External
 * Transfer continue to render from that template untouched.
 *
 * Image panels are placeholders pending export from Figma. Each one states the
 * asset it expects and holds the exact aspect ratio from the design, so the
 * page reads at its true length before the visuals land.
 */

const project = getProject("help-center-mobile-redesign")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};

const NAV = [
  { label: "Solution", href: "#solution" },
  { label: "Problem", href: "#problem" },
  { label: "Outcomes & Impact", href: "#outcomes" },
  { label: "Process, Iterations, and Trade-offs", href: "#process" },
  { label: "Lesson Learned", href: "#lessons" },
];

const SOLUTIONS = [
  {
    title: "Locator",
    body: "A Locator with accessible, distinct icons replacing ambiguous color-only differentiation, breadcrumbs for orientation, and filters repositioned for lower cognitive load",
    asset: "Locator screens",
  },
  {
    title: "Request a Call flow",
    body: "A Request a Call flow restructured to route all account types (not just personal banking) to the correct helpline, with simplified language and clearer page hierarchy.",
    asset: "Request a Call screens",
  },
];

const PROBLEM_STATS = [
  "Locator flow success completion rate is only 60%; Request a Call success completion rate is 56% (detractor range)",
  "Locator NPS: 6/10; Request a Call NPS: 6.5/10 (detractor range)",
  "Help Center Customer Satisfaction Score: 5.4/10 (below the 7.5 target)",
  "Projected 27% increase in live support costs by Q4 2025 if left unaddressed",
];

const OUTCOMES = [
  {
    title: "Locator Flow",
    results: [
      "Locator task success: 60% → 89%",
      "NPS improved from 6 to 7.5",
      "Users now reach location details in under 1 second",
    ],
    asset: "Locator before / after",
  },
  {
    title: "Request a Call Flow",
    results: [
      "Request a Call task success: 56% → 88%",
      "NPS improved from 6 to 8",
    ],
    asset: "Request a Call before / after",
  },
];

const PROCESS = [
  {
    title: "Icons lead to confusion",
    body: "Users assumed colorful icons were interactive, then abandoned the flow when they weren't. Our decision was to replaced the old icons with accessible pictorial + word-mark icons, validated with the accessibility team.",
    asset: "Icon exploration",
  },
  {
    title: "Duo entry point lead to confusion",
    body: "Users felt overwhelmed by dual interactions on the small search bar and often experienced fat-fingering issues, which, as confirmed by PNC's accessibility coach, also failed to meet the bank's WCAG triple A standard. To reduce interaction and cognitive load, I separated the filters from the search bar. After exploring placement options and accounting for top notifications, I positioned the filters at the bottom.",
    asset: "Filter placement explorations",
  },
  {
    title: "Enhancing the request a call work flow",
    body: "Knowing the flow worked for supported accounts, but failed for 46% of users, I worked with Product Owner Frank and developer Divya to inventory unsupported accounts and their specific phone numbers",
    asset: "Account routing inventory",
  },
  {
    title: "6 Minutes Saved",
    body: "Now users who can be routed to the right helpline, which saves more on average 6 minutes of their time.",
    asset: "Routing outcome",
  },
  {
    title: "Building visual consistency and clear content",
    body: "Beside, looking at the overall experience, the flow had redundant, unclear content and confusing grouping of information, so I partnered with content designer Jenny to simplify language and unify content standard and ensure users clearly understand each button and choice.",
    asset: "Content standards",
  },
  {
    title: "Restructuring for Clarity",
    body: "Since Help Center features are self-explanatory, we removed redundant top text and subtext to keep focus on the main message. For the sake of time, not going to mention some other feature level changes on this page.",
    asset: "Before / after hierarchy",
  },
  {
    title: "Aligning IA with how users actually think.",
    body: "Additionally, we restructured the page IA by moving generic inquiry selection to a secondary action, aligning with users' mental models, clarifying progress, and reducing uncertainty.",
    asset: "IA restructure",
  },
];

/** Placeholder standing in for a Figma export, holding the designed aspect. */
function ImagePanel({ label, ratio = "aspect-[624/340]" }: { label: string; ratio?: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-panel-lg bg-surface ${ratio}`}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <span className="px-6 text-center text-label uppercase tracking-label text-ink-muted">
        {label}
      </span>
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

export default function HelpCenterCaseStudy() {
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
          {["Design Lead", "Research Lead", "PNC Bank", project.period].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-ink-hairline px-2 py-1 text-[10px] uppercase leading-4 tracking-[0.6px] text-ink"
            >
              {pill}
            </span>
          ))}
        </div>

        <h1 className="max-w-4xl text-4xl font-normal leading-tight tracking-[-1.2px] text-ink-strong sm:text-5xl sm:leading-[48px]">
          {project.title}
        </h1>

        <p className="max-w-3xl pt-3 leading-6 text-ink-muted">
          PNC&rsquo;s Help Center was failing 10M+ monthly app users as a critical
          touchpoint for one of the top 10 banks in the U.S. Users discovering fraud or
          needing urgent support were getting lost in unclear icons, inaccessible
          features, and dead-end flows. I led research and redesign of the Locator and
          Request a Call flows, partnering with a Product Manager, Researcher, Developer,
          and Content Designer.
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

      {/* Key Solution */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="solution">Key Solution</SectionHeading>
        {SOLUTIONS.map((s) => (
          <div
            key={s.title}
            className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          >
            <div className="flex flex-col gap-2 pt-3">
              <h3 className="text-lg font-medium leading-6 text-ink">{s.title}</h3>
              <p className="leading-relaxed text-ink-muted">{s.body}</p>
            </div>
            <ImagePanel label={s.asset} ratio="aspect-[624/773]" />
          </div>
        ))}
      </section>

      {/* The Problem */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="problem">The Problem</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          App reviews and call center data showed users struggling to find branch details
          or request a callback, driving up live support costs and satisfaction scores.
          The numbers made the stakes clear:
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PROBLEM_STATS.map((stat) => (
            <li
              key={stat}
              className="rounded-panel bg-surface p-6 leading-relaxed text-ink-muted"
            >
              {stat}
            </li>
          ))}
        </ul>
        <ImagePanel label="Research synthesis" ratio="aspect-[1152/720]" />
      </section>

      {/* Outcomes & Impact */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="outcomes">Outcomes &amp; Impact</SectionHeading>
        {OUTCOMES.map((o) => (
          <div
            key={o.title}
            className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          >
            <div className="flex flex-col gap-2 pt-3">
              <h3 className="text-lg font-medium leading-6 text-ink">{o.title}</h3>
              <ul className="mt-1 space-y-2">
                {o.results.map((r) => (
                  <li key={r} className="leading-relaxed text-ink-muted">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <ImagePanel label={o.asset} ratio="aspect-[624/340]" />
          </div>
        ))}
      </section>

      {/* Design & Research Process */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="process">Design &amp; Research Process</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          During user interview sessions, I partnered with Product Manager Frank and
          Researcher Drew to pinpoint exactly where and why users were getting stuck in
          location details or request a callback. I compiled key observation and user
          quotes into thematic groups, 2 recurring sentiments to emerge.
        </p>
        {PROCESS.map((p) => (
          <div
            key={p.title}
            className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32"
          >
            <div className="flex flex-col gap-2 pt-3">
              <h3 className="text-lg font-medium leading-6 text-ink">{p.title}</h3>
              <p className="leading-relaxed text-ink-muted">{p.body}</p>
            </div>
            <ImagePanel label={p.asset} ratio="aspect-[624/440]" />
          </div>
        ))}
      </section>

      {/* Other Contribution */}
      <section className="mt-11 flex flex-col gap-6">
        <SectionHeading id="other">Other Contribution</SectionHeading>
        <div className="grid items-start gap-8 py-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-32">
          <div className="flex flex-col gap-2 pt-3">
            <h3 className="text-lg font-medium leading-6 text-ink">
              Accessibility as a lasting standard, not a checkbox.
            </h3>
            <p className="leading-relaxed text-ink-muted">
              Collaborated with PNC&rsquo;s accessibility coach to bring the Locator and
              icon system up to WCAG AAA standards — work that later informed
              accessibility practices beyond this project.
            </p>
          </div>
          <ImagePanel label="Accessibility audit" ratio="aspect-[624/275]" />
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mt-11 flex flex-col gap-4 pb-12">
        <SectionHeading id="lessons">Lessons Learned / Next Steps</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Support is foundational to how users feel about their bank, especially when
          they&rsquo;re vulnerable (e.g., fraud). Key takeaways: interfaces should guide
          through smart defaults rather than explanation; plain language matters most in
          high-stakes moments; accessibility is core to trust, not optional. Looking
          ahead, I&rsquo;m exploring agent AI (conversational support) to make help faster
          and more adaptive, because good UX means respecting users&rsquo; time and
          intelligence, especially when money is on the line.
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
