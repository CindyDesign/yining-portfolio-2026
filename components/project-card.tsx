import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  /** Flip image to the left on alternating rows for visual rhythm */
  reverse?: boolean;
  priority?: boolean;
};

/**
 * Featured-work card.
 *
 * Hover behavior (pointer devices only — `group` + `md:` guards keep touch
 * targets calm and respect prefers-reduced-motion via globals.css):
 *  - the whole card lifts and its border brightens
 *  - the preview image scales up inside its clipped frame
 *  - the "View Project" affordance shifts its arrow
 */
export function ProjectCard({ project, reverse, priority }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      aria-label={`View project: ${project.title}`}
      className="group block rounded-3xl border border-white/5 bg-ink-card/60
                 p-6 transition-all duration-500 ease-soft will-change-transform
                 hover:-translate-y-1 hover:border-white/15
                 hover:shadow-2xl hover:shadow-glow-violet/10
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-glow-plum sm:p-8"
    >
      <div
        className={`grid items-center gap-8 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text column */}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-haze-muted">
            {project.period}
          </span>

          <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
            <span className="text-haze-muted">{project.index} / </span>
            {project.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-haze sm:text-base">
            {project.summary}
          </p>

          <span
            className="mt-8 inline-flex items-center gap-2 self-start rounded-full
                       border border-white/15 px-5 py-2.5 text-sm font-medium text-white
                       transition-colors duration-300 ease-soft group-hover:border-white/40"
          >
            View Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
            >
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Preview column — image scales within a clipped frame */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-ink-700">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-soft
                       group-hover:scale-[1.06]"
          />
        </div>
      </div>
    </Link>
  );
}
