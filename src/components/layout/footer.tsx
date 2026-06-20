import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { profile, socials } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a href="#home" className="font-heading text-xl font-semibold">
            Piyush<span className="text-gradient">.</span>
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Designed &amp; built by {profile.name} · {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-[#04101a] transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
