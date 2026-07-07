import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-haze-muted transition-colors hover:text-white"
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

      <span className="mt-10 block text-sm font-medium text-haze-muted">
        {project.period}
      </span>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-haze">{project.summary}</p>

      {project.meta && (
        <dl className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-haze-muted">Role</dt>
            <dd className="mt-1 text-sm text-white">{project.meta.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-haze-muted">Team</dt>
            <dd className="mt-1 text-sm text-white">{project.meta.team}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-haze-muted">Timeline</dt>
            <dd className="mt-1 text-sm text-white">{project.meta.timeline}</dd>
          </div>
        </dl>
      )}

      {project.hero && (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-700">
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      {project.caseStudy?.map((section) => (
        <section key={section.heading} className="mt-14">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-haze">
                {para}
              </p>
            ))}
          </div>
          {section.image && (
            <figure className="mt-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink-700">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              {section.image.caption && (
                <figcaption className="mt-3 text-sm text-haze-muted">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </section>
      ))}

      <div className="mt-16 border-t border-white/10 pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-haze"
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
