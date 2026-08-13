import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Figma dropped the "Selected Work" eyebrow; the hero button now labels
          this section instead. scroll-mt keeps the anchor clear of the header. */}
      <section id="work" className="mx-auto max-w-shell scroll-mt-8 px-6 pb-24">
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
