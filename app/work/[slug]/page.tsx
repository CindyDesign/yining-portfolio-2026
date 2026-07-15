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

      <span className="mt-10 block text-sm font-medium text-ink-muted">
        {project.period}
      </span>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">{project.summary}</p>

      {project.meta && (
        <dl
          className={`mt-10 grid gap-6 border-y border-line py-8 ${
            project.meta.company ? "grid-cols-2 sm:grid-cols-4" : "sm:grid-cols-3"
          }`}
        >
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-muted">Role</dt>
            <dd className="mt-1 text-sm text-ink">{project.meta.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-muted">Timeline</dt>
            <dd className="mt-1 text-sm text-ink">{project.meta.timeline}</dd>
          </div>
          {project.meta.company && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-muted">Company</dt>
              <dd className="mt-1 text-sm text-ink">{project.meta.company}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-muted">Team</dt>
            <dd className="mt-1 text-sm text-ink">{project.meta.team}</dd>
          </div>
        </dl>
      )}

      {project.hero && (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-black/5">
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      )}

      {project.caseStudy?.map((section) => (
        <section key={section.heading} className="mt-14">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </div>
          {section.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {section.subsections && (
            <div className="mt-6 space-y-6">
              {section.subsections.map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-base font-semibold text-ink">{sub.title}</h3>
                  {sub.body && (
                    <p className="mt-2 leading-relaxed text-ink-muted">{sub.body}</p>
                  )}
                  {sub.bullets && (
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-ink-muted">
                      {sub.bullets.map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {section.image && (
            <figure className="mt-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black/5">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              {section.image.caption && (
                <figcaption className="mt-3 text-sm text-ink-muted">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </section>
      ))}

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
