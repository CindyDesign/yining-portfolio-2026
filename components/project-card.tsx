import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

/**
 * Featured-work row: accent label, headline, summary, and pill button on the
 * left; preview image on the right. Rows are separated by a hairline rule.
 */
export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <div className="w-full">
      <div className="h-px w-full bg-line" />
      <Link
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noopener noreferrer" : undefined}
        aria-label={`View project: ${project.title}`}
        className="group flex flex-col gap-8 py-9 md:flex-row md:items-start md:gap-16"
      >
        <div className="flex flex-1 flex-col gap-5 md:pt-1">
          <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-accent">
            {project.index} — {project.period}
          </span>

          <h3 className="text-2xl font-light leading-[1.18] tracking-tight text-ink sm:text-[32px]">
            {project.title}
          </h3>

          <p className="max-w-[460px] text-base leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <span
            className="mt-3 inline-flex items-center gap-2 self-start rounded-full
                       border border-ink px-[22px] py-[13px] text-sm font-medium text-ink
                       transition-colors duration-300 ease-soft group-hover:bg-ink/5"
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

        <div className="relative aspect-[8/5] w-full shrink-0 overflow-hidden rounded md:w-[600px]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </div>
  );
}
