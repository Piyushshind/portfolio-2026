import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { socials } from "@/data/resume";

const links = [
  { icon: GithubIcon, href: socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="glass border-gradient relative overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan/20 blur-[100px]" />

          <p className="font-mono text-sm tracking-wide text-primary">05 — Contact</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient-animated">great</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
            I&apos;m currently open to new opportunities and interesting projects. Have a role or
            an idea in mind? My inbox is always open.
          </p>

          <div className="mt-10 flex justify-center">
            <Magnetic>
              <a
                href={`mailto:${socials.email}`}
                className="group inline-flex max-w-full items-center justify-center gap-2 break-all rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-3.5 text-sm font-medium text-[#04101a] shadow-lg shadow-cyan/20 transition-shadow hover:shadow-cyan/40 sm:px-7 sm:py-4 sm:text-base"
              >
                {socials.email}
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
