import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { skillMarquee, skills } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Skills & tools"
          subtitle="The technologies I reach for to design, build, and ship."
        />
      </div>

      {/* moving marquee */}
      <div className="mask-fade-x relative mb-14 overflow-hidden py-2">
        <div className="animate-marquee flex w-max gap-3">
          {[...skillMarquee, ...skillMarquee].map((s, i) => (
            <span
              key={i}
              className="glass whitespace-nowrap rounded-full px-5 py-2 font-mono text-sm text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* groups */}
      <div className="mx-auto max-w-6xl px-6">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <RevealItem key={group.title}>
              <div className="glass h-full rounded-3xl p-6 transition-colors duration-300 hover:border-cyan/40">
                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
