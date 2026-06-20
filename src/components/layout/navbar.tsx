import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/data/resume";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useTheme } from "@/hooks/use-theme";
import { Magnetic } from "@/components/shared/magnetic";
import { cn } from "@/lib/utils";

const ids = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto max-w-5xl">
        <nav className="glass flex items-center justify-between rounded-full py-2 pl-5 pr-2 shadow-lg shadow-black/10">
          <a href="#home" className="flex items-center gap-2.5 font-heading text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet text-sm font-bold text-[#04101a]">
              PS
            </span>
            <span className="hidden sm:block">Piyush</span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.replace("#", "");
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-secondary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>

            <Magnetic className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Let&apos;s talk
              </a>
            </Magnetic>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass absolute inset-x-0 top-full mt-2 rounded-3xl p-2 md:hidden"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
