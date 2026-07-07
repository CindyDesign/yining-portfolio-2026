export type Project = {
  /** Zero-padded display index, e.g. "01" */
  index: string;
  slug: string;
  title: string;
  period: string;
  summary: string;
  /** Public path or remote URL for the preview image */
  image: string;
  imageAlt: string;
  href: string;
  /** External case study (Behance, deck, etc.) when there is no internal route */
  external?: boolean;
};

/**
 * Featured work, in render order.
 *
 * Changelog (2026 rebuild):
 *  - Removed "02 / Dashboard Design from 0-1"
 *  - Added Genesis MedTech 0-to-1 video platform
 *  - Added Help Center mobile redesign
 */
export const projects: Project[] = [
  {
    index: "01",
    slug: "external-transfer-mobile-redesign",
    title: "External Transfer Mobile Redesign",
    period: "Q4 2023 – Q1 2024",
    summary:
      "Helping customers efficiently transfer between PNC accounts and external accounts, with a clearer flow and verification.",
    image: "/projects/external-transfer.png",
    imageAlt: "PNC external transfer mobile screens",
    href: "/work/external-transfer-mobile-redesign",
  },
  {
    index: "02",
    slug: "genesis-medtech-video-platform",
    title: "Building a 0‑to‑1 Video Uploading and Editing Platform for Genesis MedTech",
    period: "2024",
    summary:
      "A labor-saving tool that lets doctors upload and edit surgical videos — designed 0-to-1 with a 1 PM, 4 engineers and a UX researcher in a one-month timeline.",
    image: "/projects/genesis-medtech.png",
    imageAlt: "Genesis MedTech video editor dashboard",
    href: "/work/genesis-medtech-video-platform",
  },
  {
    index: "03",
    slug: "help-center-mobile-redesign",
    title: "Redesign Help Center Mobile Experience",
    period: "2024",
    summary:
      "Reworking PNC's in-app Help Center — used by 10M monthly visitors — so users can find branches and request callbacks without friction.",
    image: "/projects/help-center.png",
    imageAlt: "PNC Help Center mobile screens",
    href: "/work/help-center-mobile-redesign",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
