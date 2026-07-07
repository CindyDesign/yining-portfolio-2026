export type CaseStudySection = {
  heading: string;
  /** One or more paragraphs of body copy */
  body: string[];
  /** Optional image shown after the paragraphs */
  image?: { src: string; alt: string; caption?: string };
};

export type Project = {
  /** Zero-padded display index, e.g. "01" */
  index: string;
  slug: string;
  title: string;
  period: string;
  summary: string;
  /** Card preview image */
  image: string;
  imageAlt: string;
  href: string;
  external?: boolean;
  /** Meta shown at the top of the case study */
  meta?: { role: string; team: string; timeline: string };
  /** Optional hero image for the case study page */
  hero?: { src: string; alt: string };
  caseStudy?: CaseStudySection[];
};

/**
 * Featured work, in render order.
 *
 * Changelog (2026 rebuild):
 *  - Removed "02 / Dashboard Design from 0-1"
 *  - Added Genesis MedTech 0-to-1 video platform
 *  - Added Help Center mobile redesign
 *  - Card images pulled from the project decks
 *  - Added full case-study content
 */
export const projects: Project[] = [
  {
    index: "01",
    slug: "external-transfer-mobile-redesign",
    title: "External Transfer Mobile Redesign",
    period: "Q4 2023 – Q1 2024",
    summary:
      "Helping customers efficiently transfer between PNC accounts and external accounts, with a clearer flow and verification.",
    image: "/projects/external-transfer.jpg",
    imageAlt: "External Transfer mobile redesign",
    href: "/work/external-transfer-mobile-redesign",
    meta: {
      role: "UX/UI Design",
      team: "PNC Mobile",
      timeline: "Q4 2023 – Q1 2024",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "PNC customers regularly move money between their own PNC accounts and accounts held at other banks. The existing external-transfer flow made this harder than it needed to be — unclear account selection, ambiguous verification, and no confidence that a transfer would arrive on time.",
          "The redesign focused on a clearer step-by-step flow: choosing accounts, entering an amount and frequency, and verifying with a one-time passcode before confirming.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "Customers weren't sure which accounts they could transfer between, how long a transfer would take, or whether it had gone through. That uncertainty pushed people toward slower channels like calling support or visiting a branch.",
        ],
      },
      {
        heading: "What I designed",
        body: [
          "A guided transfer flow with clear account pickers, an explicit amount and frequency step, and a one-time passcode verification screen that reassures customers their money is protected before the final confirmation.",
        ],
      },
    ],
  },
  {
    index: "02",
    slug: "genesis-medtech-video-platform",
    title: "Building a 0‑to‑1 Video Uploading and Editing Platform for Genesis MedTech",
    period: "2024",
    summary:
      "A labor-saving tool that lets doctors upload and edit surgical videos — designed 0-to-1 with a small cross-functional team in a one-month sprint.",
    image: "/projects/genesis-medtech.jpg",
    imageAlt: "Genesis MedTech surgical video editor",
    href: "/work/genesis-medtech-video-platform",
    meta: {
      role: "Lead UX Designer",
      team: "1 PM · 4 front-end engineers · 1 UX researcher",
      timeline: "1 month design timeline",
    },
    hero: {
      src: "/projects/genesis-editor.jpg",
      alt: "Genesis MedTech video editor showing surgical footage",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "Our project set out to build a labor-saving tool for doctors that allows users to upload and edit surgical videos. Genesis MedTech needed a platform its surgeons could actually rely on — not a general-purpose video editor bent to fit a clinical workflow.",
          "As the lead designer on a team of a PM, four front-end engineers, and a UX researcher, I owned the end-to-end experience across a one-month build.",
        ],
        image: {
          src: "/projects/genesis-team.jpg",
          alt: "The Genesis MedTech project team collaborating",
          caption: "A one-month sprint with a tight, cross-functional team.",
        },
      },
      {
        heading: "Understanding the users",
        body: [
          "Surgeons upload patient information manually and want to transfer existing information from hospital systems rather than re-enter it. They also want a fair review process so their videos aren't unfairly flagged as graphic content, and tools to redact sensitive patient information before sharing.",
          "These insights pointed to three needs: save surgeons time, protect patient privacy, and give them confidence their work won't be blocked without recourse.",
        ],
      },
      {
        heading: "Benchmarking the landscape",
        body: [
          "We audited how existing video tools handled navigation, uploading, editing, management, and AI. The takeaway: most were either hard to navigate or lacked built-in editing — leaving a gap for a clean, purpose-built clinical editor with a clear stepper-driven upload.",
        ],
        image: {
          src: "/projects/genesis-features.jpg",
          alt: "Feature comparison across competing video platforms",
          caption: "Comparing navigation, uploading, editing, and use of AI.",
        },
      },
      {
        heading: "Designing the flow",
        body: [
          "We explored routing users directly to the editing page after upload versus a lighter multi-step path, and tested one-page versus three-page upload forms to reduce information overload while keeping each step scannable.",
          "A recurring theme was minimizing zig-zag eye movement across the form, so we aligned fields into a single predictable column and used a pre-processing state to guide users into the editor.",
        ],
        image: {
          src: "/projects/genesis-mobile.jpg",
          alt: "Mobile upload flow explorations for Genesis MedTech",
          caption: "Exploring upload entry points and layouts.",
        },
      },
    ],
  },
  {
    index: "03",
    slug: "help-center-mobile-redesign",
    title: "Redesign Help Center Mobile Experience",
    period: "2024",
    summary:
      "Reworking PNC's in-app Help Center — used by 10M monthly visitors — so users can find branches and request callbacks without friction.",
    image: "/projects/help-center.jpg",
    imageAlt: "PNC Help Center mobile screens",
    href: "/work/help-center-mobile-redesign",
    meta: {
      role: "UX/UI Design",
      team: "1 PM · 4 front-end engineers · 1 UX researcher",
      timeline: "1 month design timeline",
    },
    hero: {
      src: "/projects/help-storefront.jpg",
      alt: "PNC Bank branch storefront",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "PNC is a top-ten bank in the US, and 10 million people visit the app monthly. The in-app Help Center is where many of them turn when something goes wrong — but the experience made getting help harder than it should be.",
          "The goal: redesign the Help Center mobile experience so people can reliably find a branch and request a callback.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "Two failures showed up again and again: users couldn't easily find a branch, and users couldn't request a callback. Location details were buried because the locator's features were hidden and scattered across the screen.",
        ],
      },
      {
        heading: "The cost of friction",
        body: [
          "PNC user satisfaction sat at 5.4/10, with an NPS of 6.0 for the locator and 6.5 for 'Request a Call.' Only 60% of users successfully found location details, and 56% succeeded at requesting a call.",
          "Left unaddressed, real-person call-support costs were projected to rise 27% in 2025 as frustrated customers quietly stopped engaging with their PNC accounts.",
        ],
        image: {
          src: "/projects/help-metrics.jpg",
          alt: "Baseline satisfaction and NPS metrics for the Help Center",
          caption: "The baseline: low satisfaction and NPS across key tasks.",
        },
      },
      {
        heading: "Listening to users",
        body: [
          "In interviews, the confusion was vivid. “So I just kept tapping on different colorful icons to see if they would take me somewhere,” one participant told us. Another assumed the edit-filter control was for filtering an address rather than refining locator results.",
          "These moments confirmed the core issue wasn't missing features — it was discoverability. People couldn't tell what was tappable or where it would lead.",
        ],
        image: {
          src: "/projects/help-interviews.jpg",
          alt: "Remote user interview sessions",
          caption: "User interviews surfaced repeated discoverability breakdowns.",
        },
      },
      {
        heading: "The redesign",
        body: [
          "I restructured the locator and 'Request a Call' flows so the primary actions are obvious and consistently placed, replacing scattered colorful icons with a clear hierarchy that guides users to branch details and callback requests in fewer taps.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
