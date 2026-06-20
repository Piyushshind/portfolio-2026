import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { profile, socials } from "@/data/resume";
import { Magnetic } from "@/components/shared/magnetic";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const socialLinks = [
  { icon: GithubIcon, href: socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* availability */}
        <motion.div variants={item}>
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p variants={item} className="mt-9 font-mono text-sm tracking-wide text-primary">
          Hi, I&apos;m
        </motion.p>

        {/* name */}
        <motion.h1
          variants={item}
          className="mt-2 font-heading font-semibold leading-[0.88] text-[clamp(3.25rem,13vw,9rem)]"
        >
          <span className="block">Piyush</span>
          <span className="text-gradient-animated block">Shinde</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-6 font-mono text-base text-muted-foreground sm:text-lg"
        >
          Frontend Engineer
          <span className="mx-2 text-primary">/</span>
          React Specialist
          <span className="mx-2 text-primary">/</span>
          UI Architect
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline} {profile.experienceYears} years turning complex enterprise
          requirements into clean, maintainable, high-performance interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3.5 font-medium text-[#04101a] shadow-lg shadow-cyan/20 transition-shadow hover:shadow-cyan/40"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glass border-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium transition-colors hover:text-foreground"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </Magnetic>
        </motion.div>

        {/* socials */}
        <motion.div variants={item} className="mt-12 flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-cyan to-violet"
          />
        </span>
      </motion.a>
    </section>
  );
}
