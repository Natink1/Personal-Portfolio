import { ArrowRight, Mail, Code2, Server, Sparkles, Github, Cpu } from "lucide-react";

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
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-primary bg-primary/8 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
            [SYS.STATUS] // ACCEPTING_CONNECTIONS
          </div>

          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">{`>`}</span> DEVELOPER <span className="text-primary">/</span> SYSTEMS <span className="text-primary">/</span> DESIGNER <span className="animate-pulse">_</span>
          </p>
          <h1 className="relative inline-block font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Natnael <span className="gradient-text">Deribe</span>
            <Cpu className="absolute -right-8 -top-8 h-12 w-12 animate-[spin_10s_linear_infinite] text-primary/10 sm:-right-16 sm:-top-10 sm:h-20 sm:w-20" />
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
              { icon: Code2, label: "LARAVEL_PHP" },
              { icon: Server, label: "SYS_ADMIN" },
              { icon: Sparkles, label: "BRAND_MOTION" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-3 w-3 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:200ms]">
          <div className="glass relative overflow-hidden rounded-md border border-border/50 shadow-glow bg-[#050505]">
            <div className="flex items-center gap-2 border-b border-border/50 bg-background/50 px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="ml-auto font-mono text-[10px] text-muted-foreground">sys@natink1:~/portfolio</div>
            </div>
            <div className="p-5 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              <div className="flex items-center gap-2 text-primary">
                <span>sys@natink1</span>
                <span>$</span>
                <span className="text-foreground">./start_systems.sh</span>
              </div>
              <div className="mt-3 space-y-1.5">
                <p className="text-emerald-400 animate-terminal-line" style={{ animationDelay: '0.4s' }}>{`[✓] Booting Laravel core... OK`}</p>
                <p className="text-emerald-400 animate-terminal-line" style={{ animationDelay: '0.8s' }}>{`[✓] Initializing MySQL databases... OK`}</p>
                <p className="text-emerald-400 animate-terminal-line" style={{ animationDelay: '1.2s' }}>{`[✓] Configuring Nginx proxy... OK`}</p>
                <p className="text-emerald-400 animate-terminal-line" style={{ animationDelay: '1.6s' }}>{`[✓] Compiling React components... OK`}</p>
                <p className="text-emerald-400 animate-terminal-line" style={{ animationDelay: '2.0s' }}>{`[✓] Starting design services... OK`}</p>
                <br />
                <p className="text-foreground animate-terminal-line" style={{ animationDelay: '2.4s' }}>SYSTEMS_ONLINE = true</p>
                <p className="animate-terminal-line" style={{ animationDelay: '2.5s' }}>Uptime: <span className="text-primary">99.99%</span></p>
                <p className="animate-terminal-line" style={{ animationDelay: '2.6s' }}>Status: <span className="text-primary">Optimal</span></p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary animate-terminal-line" style={{ animationDelay: '2.8s' }}>
                <span>sys@natink1</span>
                <span>$</span>
                <span className="inline-block h-3 w-2 animate-pulse bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
