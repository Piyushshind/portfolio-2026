import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const live = project.links?.live;

  const inner = (
    <article className="glass border-gradient relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
      {/* accent glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          project.accent === "cyan" ? "bg-cyan/30" : "bg-violet/30"
        )}
      />

      <div className="flex items-start justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-primary">
          {live ? "Live ↗" : project.featured ? "Featured" : "Project"}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
      </div>

      <h3 className="mt-4 font-heading text-2xl font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-primary/80">{project.blurb}</p>
      <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );

  return (
    <TiltCard className="group h-full">
      {live ? (
        <a href={live} target="_blank" rel="noreferrer" className="block h-full" aria-label={`${project.title} — visit live site`}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </TiltCard>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="04"
        title="Selected work"
        subtitle="A few products I've designed and engineered end-to-end."
      />

      <RevealGroup className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.title} className="[perspective:1200px]">
            <ProjectCard project={p} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
