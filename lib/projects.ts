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
        body: ["Status: Shipped to production; live in PNC's mobile app."],
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
    title: "Genesis MedTech — AI-Assisted Surgical Video Platform",
    period: "Late 2023 – 2025",
    summary:
      "Designed an all-in-one platform that lets surgeons upload and edit operative videos with AI assistance — reaching 85% surgeon satisfaction on upload and a 68% editing retention rate at MVP (vs. 60% benchmark).",
    image: "/projects/GenesisThumania.jpg",
    imageAlt: "Genesis MedTech surgical video editor",
    href: "/work/genesis-medtech-video-platform",
    meta: {
      role: "Product Designer (led discovery research, IA, and interaction design)",
      company: "Genesis MedTech",
      team: "2 PMs · AI engineering · content design",
      timeline: "Late 2023 – 2025",
    },
    hero: {
      src: "/projects/genesis-editor.jpg",
      alt: "Genesis MedTech video editor showing surgical footage",
    },
    caseStudy: [
      {
        heading: "Context",
        body: [
          "Genesis MedTech is a global medical device company serving 400+ U.S. hospitals. I joined as the product designer on a team of 2 PMs, AI engineering, and content design, leading discovery research, information architecture, and interaction design.",
        ],
      },
      {
        heading: "The Problem",
        body: [
          "Leading surgeons publish operative videos on platforms like YouTube — to reflect on their own procedures and help younger doctors learn. But mainstream platforms fail them: surgical footage gets misclassified as graphic content and removed, and limited editing tools force surgeons into separate software to finish their videos.",
          "Genesis's Q4 2023 market research surfaced a consistent signal: senior physicians across community and federal hospitals wanted to create teaching content and build a peer community. I co-led a 3-day (15-hour) alignment workshop with leadership and physician representatives to define the opportunity and product vision.",
          "Our goal: a labor-saving, all-in-one tool to upload and edit surgical videos, with AI accelerating both.",
        ],
        image: {
          src: "/projects/genesis-team.jpg",
          alt: "The Genesis MedTech project team collaborating",
          caption:
            "A 3-day alignment workshop with leadership and physician representatives.",
        },
      },
      {
        heading: "Key Solution",
        body: [
          "A two-part flow: a guided upload with AI-prefilled surgery descriptions and automated flagging of patient-identifiable frames, and an AI-assisted editor that surfaces unusable and sensitive clips for surgeon review before publishing.",
        ],
        image: {
          src: "/projects/genesis-mobile.jpg",
          alt: "Guided upload flow for the Genesis MedTech video platform",
          caption: "The guided, stepped upload flow leading into the editor.",
        },
      },
      {
        heading: "Process & Key Decisions",
        body: [],
        subsections: [
          {
            title: "Upload flow — processing page vs. direct-to-editor",
            body: "I mapped two navigation directions and ran a comparative usability study. The version showing a processing state before the editor scored 89% usability, better matching users' mental models.",
          },
          {
            title: "Stepped input, driven by user confidence",
            body: "Research showed surgeons don't mind manual data entry — they mind re-entering data that already lives in hospital systems. Testing a 3-step form against a single-screen form, users preferred the stepped version because breaking up the task built confidence. This insight also shaped our push to auto-populate post-surgery data from partner hospitals (10+ onboarded so far).",
          },
          {
            title: "Legal disclosures — advocating through evidence",
            body: "Legal wanted dense disclosures on the upload page. Rather than push back directly, I mocked it up and tested with surgeons; the results showed the text was overwhelming, and I successfully proposed moving it to a separate static page so users could stay focused.",
          },
          {
            title: "Sensitive-clip UI — clarity over alarm",
            body: "For AI-flagged sensitive frames, I tested a cautionary orange treatment against a neutral, on-brand blue with plain-language copy. Surgeons — being highly educated and prone to over-reading UI — strongly preferred the calmer version, which scored significantly higher. We paired this with a “confirm deletions” pattern (over grayed-out restores) that users found clearer and more controllable.",
          },
          {
            title: "Scoping with trade-offs",
            body: "Using an NN/g-based trade-off framework weighing user value against budget and timeline, the team scored features through structured voting. The Pen Tool ranked lowest (7.5) — still “desired,” but deferred from the 2025 roadmap to protect MVP focus.",
          },
          {
            title: "Validation checkpoints",
            body: "A tree test on our IA returned 92% success with a 7-second median time-on-task, and mid-fidelity usability testing confirmed all key editing tools met expectations.",
          },
        ],
      },
      {
        heading: "Outcomes",
        body: ["The pilot shipped to partner hospitals with aligned success metrics:"],
        bullets: [
          "85% surgeon satisfaction during upload",
          "68% editing retention at MVP (vs. 60% benchmark)",
          "AI error rates (auto-fill, blank-scene removal) held under 20%",
        ],
        subsections: [
          {
            title: "Next steps",
            body: "Gather pilot feedback to refine real needs, iterate editing flows from usage data, improve AI description accuracy, and explore community features in later phases.",
          },
        ],
      },
      {
        heading: "Lessons Learned",
        body: [
          "Designing for surgeons taught me that expertise changes how people read an interface. Highly educated users over-analyzed our UI copy and found cautionary visuals alarming — so clarity and calm outperformed “helpful” emphasis at every turn.",
          "I also learned to advocate through evidence, not opinion: when Legal pushed for dense on-page disclosures, a quick mockup and user test moved the decision faster than any argument could.",
          "Most of all, I saw that in high-stakes domains, earning user trust isn't a final polish — it's the design constraint that shapes every flow.",
        ],
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
