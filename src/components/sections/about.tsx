import { Briefcase, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { profile } from "@/data/resume";

const chips = ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind"];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="01"
        title="About me"
        subtitle="A frontend engineer obsessed with clean architecture and delightful detail."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        {/* text + stats */}
        <div className="lg:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="glass h-full rounded-2xl p-5">
                  <div className="text-gradient font-heading text-3xl font-semibold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* profile card */}
        <div className="lg:col-span-2">
          <Reveal delay={0.1}>
            <div className="glass border-gradient sticky top-28 rounded-3xl p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet font-heading text-2xl font-bold text-[#04101a]">
                  PS
                </div>
                <div>
                  <div className="font-heading text-xl font-semibold">{profile.name}</div>
                  <div className="text-sm text-muted-foreground">{profile.role}</div>
                </div>
              </div>

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {profile.location}
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase className="h-4 w-4 text-primary" /> {profile.experienceYears} years
                  of experience
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" /> Currently @ NSP Global Tech
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
