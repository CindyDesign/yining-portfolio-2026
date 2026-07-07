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
      <span className="text-sm font-medium text-haze-muted">{project.period}</span>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-haze">
        {project.summary}
      </p>
      {/* Case study content goes here. */}
    </article>
  );
}
