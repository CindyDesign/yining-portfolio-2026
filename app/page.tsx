import { Hero } from "@/components/hero";
import { LandingFooter } from "@/components/landing-footer";
import { LandingNav } from "@/components/landing-nav";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <LandingNav />

      <main className="flex-1">
        <Hero />

        <section id="work" className="mx-auto max-w-shell px-6 pb-24">
          <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.06em] text-ink-muted">
            Selected Work
          </p>
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
      </main>

      <LandingFooter />
    </div>
  );
}
