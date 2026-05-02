import portrait from "@/assets/portrait.jpg";
import { ArrowRight, Mail, Code2, Server, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
            Available for new projects
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Natnael <span className="gradient-text">Deribe</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">
            Laravel Backend Developer{" "}
            <span className="text-muted-foreground">|</span> IT Systems Specialist{" "}
            <span className="text-muted-foreground">|</span>{" "}
            <span className="text-primary">Creative Designer</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building reliable backend systems, supporting IT infrastructure, and creating
            clean visual identities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full gradient-bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              View Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow"
            >
              <Mail className="h-4 w-4" />
              Contact Me
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
                className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-4 rounded-[2rem] gradient-soft blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={portrait}
                alt="Natnael Deribe portrait"
                width={768}
                height={896}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass animate-float absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Currently
              </div>
              <div className="text-sm font-semibold">Droga Consulting PLC</div>
            </div>
            <div className="glass animate-float absolute -right-4 top-8 rounded-2xl px-4 py-3 shadow-soft [animation-delay:1s]">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Award
              </div>
              <div className="text-sm font-semibold">🥇 Gold Medal — TVET</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
