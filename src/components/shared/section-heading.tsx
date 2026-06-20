import { Reveal } from "./reveal";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ index, title, subtitle, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mb-12 flex flex-col items-center text-center md:mb-16" : "mb-12 md:mb-16"}>
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-sm tracking-wide text-primary">
          <span>{index}</span>
          <span className="h-px w-12 bg-gradient-to-r from-cyan to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-4 max-w-xl text-base text-muted-foreground ${centered ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
