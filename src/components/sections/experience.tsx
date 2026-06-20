import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { experiences } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Experience"
        subtitle="Where I've worked and the products I've helped build."
      />

      <div className="relative">
        {/* continuous gradient rail */}
        <span
          aria-hidden
          className="absolute bottom-4 left-[9px] top-3 w-px bg-gradient-to-b from-cyan via-violet/60 to-transparent"
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.06}>
              <div className="relative pl-12">
                {/* node */}
                <span className="absolute left-0 top-2 grid h-5 w-5 place-items-center rounded-full bg-background ring-1 ring-border">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan to-violet" />
                </span>

                <article className="glass rounded-3xl p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-mono text-sm text-muted-foreground">{exp.period}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>
                  </div>

                  {exp.current && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      Current role
                    </span>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan to-violet" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
