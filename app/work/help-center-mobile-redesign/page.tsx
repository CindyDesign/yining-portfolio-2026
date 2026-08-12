import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

/**
 * Bespoke case-study layout for the Help Center redesign, built to match the
 * Figma at node 71:19407. This is a static route, so it takes precedence over
 * the shared `app/work/[slug]/page.tsx` template.
 *
 * Panel images are rendered from the Figma `Background` nodes. They already
 * carry the grey panel and its 48px corner radius baked in, so they need no
 * wrapper styling. Blocks whose Figma section has no visual render full-width
 * text rather than a half-empty row.
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

type PanelImage = {
  src: string;
  w: number;
  h: number;
  /**
   * Figma wraps some images in a grey `Background` frame (#f2f4f7, 64px pad,
   * 48px radius). Recreating that in CSS lets the image itself ship at 2x —
   * rendering the composed frame instead would cap it at 1x canvas size.
   */
  panel?: boolean;
};

type Block = {
  title: string;
  /** Optional label between the heading and the body (Figma 154:5999) */
  subtitle?: string;
  body: string;
  images?: PanelImage[];
  /**
   * "split" (default) puts the image in a right-hand column beside the text.
   * "stacked" runs the text full width with the image below it, matching the
   * 1152-wide panels in Figma.
   */
  layout?: "split" | "stacked";
};

const img = (src: string, w: number, h: number, panel = false): PanelImage => ({
  src,
  w,
  h,
  panel,
});

const SOLUTIONS: Block[] = [
  {
    title: "Locator",
    body: "A Locator with accessible, distinct icons replacing ambiguous color-only differentiation, breadcrumbs for orientation, and filters repositioned for lower cognitive load",
    images: [img("/projects/Locator1.gif", 1872, 2156)],
  },
  {
    title: "Request a Call flow",
    body: "A Request a Call flow restructured to route all account types (not just personal banking) to the correct helpline, with simplified language and clearer page hierarchy.",
    images: [img("/projects/RequestACall.gif", 1872, 2156)],
  },
];

// Order and titles follow Figma 145:5754. "(detractor range)" is deliberately
// left off the completion-rate card: it describes NPS, and is used correctly on
// the NPS card below.
const PROBLEM_STATS = [
  {
    title: "Low Completion Rate",
    body: "Locator flow completion rate is only 60%; Request a Call completion rate is 56%",
  },
  {
    title: "Risk of increasing cost",
    body: "Projected 27% increase in live support costs by Q4 2025 if left unaddressed",
  },
  {
    title: "Low NPS",
    body: "Locator NPS: 6/10; Request a Call NPS: 6.5/10 (detractor range)",
  },
];

/**
 * Figma 152:5971 replaces the old bullet lists + stat images with two rows of
 * three metric tiles. Two corrections against that source, both noted for
 * review:
 *  - The Request a Call NPS tile reads 8.0 but its caption said "6 to 7.5",
 *    contradicting its own figure; caption corrected to "6 to 8", which matches
 *    the previously published copy.
 *  - "Out perform goal" -> "Outperforms goal".
 */
const OUTCOMES = [
  {
    title: "Locator Flow",
    metrics: [
      { figure: "89%", label: "Task completion", note: "Outperforms goal" },
      {
        figure: "1s",
        label: "Reach location detail",
        note: "Users now reach location details in under 1 second",
      },
      { figure: "7.5", label: "NPS Score", note: "NPS improved from 6 to 7.5" },
    ],
  },
  {
    title: "Request a Call Flow",
    metrics: [
      { figure: "89%", label: "Task completion", note: "Outperforms goal" },
      {
        figure: "13%",
        label: "Reduced cost",
        note: "Users self-serve in the app",
      },
      { figure: "8.0", label: "NPS Score", note: "NPS improved from 6 to 8" },
    ],
  },
];

const PROCESS: Block[] = [
  {
    // Figma 72:20152. Source reads "...due to locator features were hidden and
    // scattered", which is ungrammatical; "because ... were" keeps the meaning.
    title:
      "Challenge one: Users struggled to access the location details page because locator features were hidden and scattered",
    subtitle: "Icons lead to confusion",
    body: "Users assumed colorful icons were interactive, then abandoned the flow when they weren't. Our decision was to replace the old icons with accessible pictorial + word-mark icons, validated with the accessibility team.",
    images: [
      img("/projects/LoctorNotWorking.gif", 1872, 2156),
      img("/projects/Locator2.gif", 1872, 2156),
    ],
  },
  {
    title: "Duo entry points lead to confusion",
    body: "Users felt overwhelmed by dual interactions on the small search bar and often experienced fat-fingering issues, which, as confirmed by PNC's accessibility coach, also failed to meet the bank's WCAG triple A standard. To reduce interaction and cognitive load, I separated the filters from the search bar. After exploring placement options and accounting for top notifications, I positioned the filters at the bottom.",
    images: [
      img("/projects/hc-filters-1.png", 624, 774),
      img("/projects/hc-filters-2.png", 624, 774),
    ],
  },
  {
    // Figma 157:5633
    title:
      "Challenge Two: The 'Request a Call' flow only supported personal banking accounts, with ambiguous labels and poorly structured pages that confused users.",
    subtitle: "Enhancing the request a call work flow",
    body: "Knowing the flow worked for supported accounts, but failed for 46% of users, I worked with Product Owner Frank and developer Divya to inventory unsupported accounts and their specific phone numbers.",
    // Figma 73:19902 ("image 112") is 1152 wide — full width, not a side panel.
    images: [img("/projects/hc-account-inventory.jpg", 2304, 882)],
    layout: "stacked",
  },
  {
    title: "6 Minutes Saved",
    body: "Users can now be routed to the right helpline, which saves them an average of 6 minutes.",
    // Figma 73:19913 ("image 111"). Raw asset is 2x the 624x773 canvas frame.
    images: [img("/projects/hc-routing.jpg", 1248, 1547)],
  },
  {
    title: "Building visual consistency and clear content",
    body: "Besides, looking at the overall experience, the flow had redundant, unclear content and confusing grouping of information, so I partnered with content designer Jenny to simplify language, unify content standards, and ensure users clearly understand each button and choice.",
    // Figma 73:22672 ("image 117") is 1152 wide — full width below the text.
    images: [img("/projects/hc-content-standards.jpg", 2304, 618)],
    layout: "stacked",
  },
  {
    title: "Restructuring for Clarity",
    body: "Since Help Center features are self-explanatory, we removed redundant top text and subtext to keep focus on the main message. For the sake of time, not going to mention some other feature level changes on this page.",
    // Figma 73:38198 ("image 119") already carries the #f2f4f7 field, and in
    // Figma it fills Background 71:19619 edge to edge — the container's nominal
    // 64px padding is overridden by the fixed-size child. Wrapping it in a CSS
    // panel would inset it twice and shrink the screens, so it renders bare.
    images: [img("/projects/hc-clarity.png", 2304, 1560)],
    layout: "stacked",
  },
  {
    title: "Aligning IA with how users actually think.",
    body: "Additionally, we restructured the page IA by moving generic inquiry selection to a secondary action, aligning with users' mental models, clarifying progress, and reducing uncertainty.",
    // Figma 73:38214 ("image 111") — 624 wide, side column.
    images: [img("/projects/hc-ia.jpg", 1248, 1547)],
  },
];

function Panels({
  images,
  alt,
  full = false,
}: {
  images: Block["images"];
  alt: string;
  /** Full-bleed images occupy the 1152 content width, not the 624 side column. */
  full?: boolean;
}) {
  if (!images?.length) return null;
  return (
    <div className="flex flex-col gap-6">
      {images.map((im, i) => {
        // Anything not wrapped in a CSS panel carries the 48px radius itself.
        // Whole-panel renders already have it baked in, so re-applying the same
        // value is a no-op; GIFs and bare inner images genuinely need it.
        const isGif = im.src.toLowerCase().endsWith(".gif");
        const picture = (
          <Image
            key={im.src}
            src={im.src}
            alt={images.length > 1 ? `${alt} (${i + 1} of ${images.length})` : alt}
            width={im.w}
            height={im.h}
            sizes={
              full ? "(max-width: 1200px) 100vw, 1152px" : "(max-width: 768px) 100vw, 624px"
            }
            // The image optimizer flattens animated GIFs to their first frame.
            // Serving them unoptimized is what keeps the animation alive.
            unoptimized={isGif}
            className={`h-auto w-full${im.panel ? "" : " rounded-panel-lg"}`}
          />
        );
        return im.panel ? (
          <div
            key={im.src}
            className="flex items-center justify-center rounded-panel-lg bg-surface p-6 sm:p-16"
          >
            {picture}
          </div>
        ) : (
          picture
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

function SplitBlock({ title, subtitle, body, images, layout = "split" }: Block) {
  const hasImages = Boolean(images?.length);
  const isSplit = hasImages && layout === "split";
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
        {subtitle && (
          <p className="leading-6 text-ink-hairline">{subtitle}</p>
        )}
        <p className="max-w-3xl leading-relaxed text-ink-muted">{body}</p>
      </div>
      <Panels images={images} alt={title} full={!isSplit} />
    </div>
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
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="solution">Key Solution</SectionHeading>
        {SOLUTIONS.map((s) => (
          <SplitBlock key={s.title} {...s} />
        ))}
      </section>

      {/* The Problem */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="problem">The Problem</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          App reviews and call center data showed users struggling to find branch details
          or request a callback, driving live support costs up and satisfaction scores
          down. The numbers made the stakes clear:
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_STATS.map((stat) => (
            <li
              key={stat.title}
              className="flex flex-col gap-2 rounded-card border border-line-soft bg-bg p-6"
            >
              <h3 className="text-lg font-medium leading-6 text-ink">{stat.title}</h3>
              <p className="leading-relaxed text-ink-muted">{stat.body}</p>
            </li>
          ))}
        </ul>
        {/* Figma 174:5636 ("image 126"), which carries the #f2f4f7 field itself —
            the grey Pen wrapper is gone from the design. Downscaled from a
            3456px source to 2x, and the alpha flattened onto the same grey. */}
        <Image
          src="/projects/hc-problem.png"
          alt="PNC Help Center screen with arrows tracing two paths: Request a Call to the Call PNC screen, and Locate PNC to the Locator map"
          width={2304}
          height={1560}
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="mt-2 h-auto w-full rounded-panel"
        />
      </section>

      {/* Outcomes & Impact */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="outcomes">Outcomes &amp; Impact</SectionHeading>
        <div className="flex flex-col gap-16">
          {OUTCOMES.map((group) => (
            <div key={group.title} className="flex flex-col gap-8">
              <h3 className="text-lg font-medium leading-6 text-ink">{group.title}</h3>
              <ul className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {group.metrics.map((m, i) => (
                  <li
                    key={m.label}
                    className={`flex items-center gap-6 px-0 py-2 lg:px-6 ${
                      i < group.metrics.length - 1
                        ? "lg:border-r lg:border-line-soft"
                        : ""
                    }`}
                  >
                    <span className="shrink-0 text-5xl font-light tracking-[-1.32px] text-ink-stat sm:text-[66px] sm:leading-[71.28px]">
                      {m.figure}
                    </span>
                    <span className="flex flex-col gap-[11px]">
                      <span className="text-lg font-medium leading-6 text-ink-stat">
                        {m.label}
                      </span>
                      <span className="leading-relaxed text-ink-muted">{m.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Design & Research Process */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="process">Design &amp; Research Process</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          During user interview sessions, I partnered with Product Manager Frank and
          Researcher Drew to pinpoint exactly where and why users were getting stuck in
          location details or request a callback. I compiled key observations and user
          quotes into thematic groups, with two recurring sentiments emerging.
        </p>
        <Image
          src="/projects/hc-interviews.jpg"
          alt="User interview observations and quotes grouped into themes"
          width={2304}
          height={1442}
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="mt-2 h-auto w-full"
        />
        {PROCESS.map((p) => (
          <SplitBlock key={p.title} {...p} />
        ))}
      </section>

      {/* Other Contribution */}
      <section className="mt-32 flex flex-col gap-6">
        <SectionHeading id="other">Other Contribution</SectionHeading>
        <SplitBlock
          title="Accessibility as a lasting standard, not a checkbox."
          body="Collaborated with PNC's accessibility coach to bring the Locator and icon system up to WCAG AAA standards — work that later informed accessibility practices beyond this project."
          // Figma 184:5713 ("image 127") at its native 2496x1100 — 4x the placed
          // size. Kept full-res rather than downscaled: it is mostly flat colour,
          // so the whole file is under 90KB.
          images={[img("/projects/hc-accessibility.png", 2496, 1100)]}
        />
      </section>

      {/* Lessons Learned */}
      <section className="mt-32 flex flex-col gap-4 pb-12">
        <SectionHeading id="lessons">Lessons Learned / Next Steps</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Support is foundational to how users feel about their bank, especially when
          they&rsquo;re vulnerable (e.g., fraud). Key takeaways: interfaces should guide
          through smart defaults rather than explanation; plain language matters most in
          high-stakes moments; accessibility is core to trust, not optional. Looking
          ahead, I&rsquo;m exploring agent AI (conversational support) to make help faster
          and more adaptive, because good product design means respecting users&rsquo; time
          and intelligence, especially when money is on the line.
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
