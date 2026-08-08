import portrait from "@/assets/portrait.png";
import { ArrowRight, Mail, Code2, Server, Sparkles, Github } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-primary bg-primary/8 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
            Available for new projects
          </div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Developer · Systems · Designer
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Natnael <span className="gradient-text">Deribe</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-foreground/90 sm:text-xl">
            Backend Developer <span className="text-muted-foreground">|</span> IT Support Specialist{" "}
            <span className="text-muted-foreground">|</span>{" "}
            <span className="text-primary">Creative Designer</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building reliable backend systems, supporting IT infrastructure, and creating clean
            visual identities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-md gradient-bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
            >
              View Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/Natink1"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub profile"
              className="glass grid h-11 w-11 place-items-center rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: Code2, label: "Laravel / PHP" },
              { icon: Server, label: "IT Infrastructure" },
              { icon: Sparkles, label: "Brand & Motion" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-3 border border-primary/15 bg-primary/5" />
          <div className="glass relative overflow-hidden rounded-md p-2 shadow-glow">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={portrait}
                alt="Natnael Deribe portrait"
                width={768}
                height={896}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/85 px-2.5 py-1.5 font-mono text-[10px] uppercase text-foreground backdrop-blur-md">
                <span className="h-1.5 w-1.5 bg-emerald-400" /> Addis Ababa, ET
              </div>
            </div>
            {/* <div className="glass animate-float absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Currently
              </div>
              <div className="text-sm font-semibold">Droga Consulting PLC</div>
            </div> */}
          </div>
          <div className="glass animate-float absolute -bottom-7 right-2 rounded-md px-4 py-3 shadow-soft [animation-delay:1s] sm:-right-12 sm:bottom-5">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Award</div>
            <div className="text-sm font-semibold">Gold Medal — TVET</div>
          </div>
        </div>
      </div>
    </section>
  );
}
