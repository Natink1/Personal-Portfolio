import { ArrowRight, Mail, Code2, Server, Sparkles, Github, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import portrait1 from "@/assets/portrait.png";
import portrait2 from "@/assets/portrait2.png";

export default function Hero() {
  const portraits = [portrait1, portrait2];
  const [portraitIndex, setPortraitIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPortraitIndex((current) => (current + 1) % portraits.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [portraits.length]);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative order-2 mx-auto w-full max-w-md animate-fade-up [animation-delay:200ms] lg:order-1 lg:mx-0">
          <div className="hero-orbit-ring absolute -inset-5 hidden rounded-full border border-primary/15 lg:block" />
          <div className="hero-orbit-ring hero-orbit-ring-delayed absolute -inset-10 hidden rounded-full border border-primary/10 lg:block" />

          <div className="glass relative h-[510px] w-full overflow-hidden rounded-[2rem]  shadow-glow">
            <div className="absolute inset-0 hero-image-pattern opacity-35" />
            {portraits.map((portrait, index) => (
              <img
                key={portrait}
                src={portrait}
                alt="Natnael Deribe"
                className={`absolute inset-2 h-[494px] w-[calc(100%-1rem)] rounded-[1.55rem] object-cover object-top transition-opacity duration-700 will-change-[opacity] ${
                  index === portraitIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-2 bottom-2 h-28 rounded-b-[1.55rem] bg-gradient-to-t from-background/95 via-background/45 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-3 py-2 font-mono text-[10px] uppercase text-foreground backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available to work
            </div>
          </div>
        </div>

        <div className="order-1 animate-fade-up lg:order-2">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-primary bg-primary/8 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
            [SYS.STATUS] // AVAILABLE
          </div>

          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            <span className="text-primary">{`>`}</span> SOFTWARE DEVELOPER{" "}
            <span className="text-primary">/</span> IT SPECIALIST <span className="animate-pulse">_</span>
          </p>

          <h1 className="relative inline-block font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Natnael <span className="gradient-text">Deribe</span>
            <Cpu className="absolute -right-8 -top-8 h-12 w-12 animate-[spin_10s_linear_infinite] text-primary/10 sm:-right-16 sm:-top-10 sm:h-20 sm:w-20" />
          </h1>

          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-foreground/90 sm:text-xl">
            Backend developer <span className="text-muted-foreground">·</span> IT specialist{" "}
            <span className="text-muted-foreground">·</span>{" "}
            <span className="text-primary">Designer</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Backend developer and IT specialist. I build useful systems, keep infrastructure running, and create clear visual identities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-md gradient-bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s talk
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
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="hero-chip animate-float flex items-center gap-2 border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Icon className="h-3 w-3 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
