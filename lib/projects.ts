export type CaseStudySubsection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudySection = {
  heading: string;
  /** One or more paragraphs of body copy */
  body: string[];
  /** Optional flat bullet list shown after the paragraphs */
  bullets?: string[];
  /** Optional sub-headings (each with its own body and/or bullets) */
  subsections?: CaseStudySubsection[];
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
  meta?: { role: string; team: string; timeline: string; company?: string };
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
    title: "Mobile External Transfer Redesign — PNC Bank",
    period: "July 2025 - August 2025",
    summary:
      "Redesigned PNC's external transfer flow, cutting a multi-day verification wait to minutes and lifting connected-account rate 35% for 544K+ users.",
    image: "/projects/ExternalTransfer%20MobileThumbnail.jpg",
    imageAlt: "External Transfer mobile redesign",
    href: "/work/external-transfer-mobile-redesign",
    meta: {
      role: "Senior Product Designer",
      timeline: "July 2025 - August 2025",
      company: "PNC Bank",
      team: "Cross-functional pod (Product, Engineering, Design)",
    },
    caseStudy: [
      {
        heading: "Context",
        body: [
          "PNC is a top-ten bank in the US, with 10 million people using its native mobile app monthly. I am the lead designer for the external transfer feature, which helps users move money from their PNC accounts to other bank accounts.",
        ],
      },
      {
        heading: "Importance",
        body: [
          "Overhauled the entire mobile external transfer experience to combat a 45% enrollment abandonment rate that was costing the bank millions. Streamlined the onboarding process and established structural consistency across all payment and transfer flows.",
        ],
      },
      {
        heading: "The Problem",
        body: [
          "External transfer enrollment was bleeding users before they ever initiated a transaction, resulting in a 35% abandonment rate partway through the process alongside inconsistent interaction patterns during the make-a-transfer process.",
        ],
        subsections: [
          {
            title: "Multi-day verification wait times",
            body: "Trial deposits required 1–2 business days before a user could even confirm their external account, killing momentum at the exact moment intent was highest.",
          },
          {
            title: "Redundant steps within enrollment",
            body: "Enrollment forced users through separate deposit-verification and identity-verification steps that could be collapsed without compromising security.",
          },
          {
            title: "Inconsistent interaction pattern",
            body: "Inconsistent interaction patterns across the external transfer experience reduced predictability, ultimately undermining the systemic trust that is absolutely critical to a high-fidelity financial transaction flow.",
          },
        ],
      },
      {
        heading: "The Solution",
        body: [],
        bullets: [
          "Successfully aligned product, engineering, and risk partners to abandon legacy trial deposits, transitioning the platform toward real-time account verification to boost activation velocity and user trust.",
          "Collapsed redundant verification steps by combining trial-deposit confirmation with additional identity verification into a single pass.",
          "Established one consistent transfer flow from entry point to success screen so the experience felt identical whether a user started from account overview, transfers, or settings.",
        ],
      },
      {
        heading: "Outcomes & Impact",
        body: [],
        bullets: ["Status: Shipped to production; live in PNC's mobile app."],
        subsections: [
          {
            title: "Hard Metrics",
            bullets: [
              "544K external transfer users on the redesigned flow",
              "108K enrollments processed post-launch",
              "435.2K connected accounts",
              "100K+ users moved through the new real-time verification",
              "+25% improvement in enrollment completion",
              "-49 seconds average reduction in sign-up flow time",
              "35% increase in connected-account rate",
            ],
          },
        ],
      },
      {
        heading: "Deep Dive: Process, Iterations, and Trade-offs",
        body: [],
        subsections: [
          {
            title: "Upgrading from trial deposits to real-time verification",
            body: "While trial deposits were historically favored as a secure ownership proof, we leveraged customer advocacy insights to align partners around a modern paradigm: micro-deposits are now less secure than real-time one-time passcodes and add unnecessary friction without protecting the user.",
          },
          {
            title: "Cut enrollment process from 16 steps into 10 steps",
            body: "Redesigned and consolidated a legacy 16-step pre-enrollment and post-enrollment flow into a highly optimized 10-step experience, while mapping out a future-state architecture to reduce the entire funnel to 6 friction-free steps.",
          },
          {
            title:
              "Establish global pattern consistency to enable seamless, intuitive interactions",
            bullets: [
              "Standardized transfer entry points for a consistent look, added a prominent visual tile for clarity, and included subtext for user guidance.",
              "Led a generative card-sorting workshop to restructure the six core transaction fields, converging on a single, high-predictability input order that mirrors user mental models.",
              "Established a clear visual hierarchy across all pages, ensuring content, containers, and background colors create distinction between different levels of information.",
            ],
          },
        ],
      },
      {
        heading: "Other Contribution",
        body: [],
        subsections: [
          {
            title: "AI-assisted design system building",
            body: "I used AI to systematically stress-test our newly structured transaction fields — generating robust copy and data states for edge cases.",
          },
          {
            title: "QA testing",
            body: "Partnered with engineering to sequence backend verification changes alongside the UI rebuild, ensuring the compressed flow didn't outpace fraud/compliance checks.",
          },
        ],
      },
      {
        heading: "Lesson Learned",
        body: [
          "What I've learned is that leadership is the driving force behind innovation and growth in the evolving field of product design. Learning through diverse experiences from users and key stakeholders has become a cornerstone of my journey, shaping my perspective and fostering continuous improvement.",
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
    image: "/projects/GenesisThumania.jpg",
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
    image: "/projects/Help%20Center%20Mobile%20ExperienceThumbnail.jpg",
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
