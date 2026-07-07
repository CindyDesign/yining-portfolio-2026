import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-shell px-6 pb-24">
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reverse={i % 2 === 1}
              priority={i === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
