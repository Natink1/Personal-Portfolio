import portrait from "@/assets/portrait.png";

const stats = [
  { value: "5+", label: "UPTIME_YEARS" },
  { value: "20+", label: "PROJECTS_SHIPPED" },
  { value: "3", label: "CORE_DOMAINS" },
  { value: "1", label: "GOLD_MEDALS" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                [SYS.ABOUT]
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Engineering reliable systems, <span className="gradient-text">designing clean ones.</span>
              </h2>
            </div>

            <div className="relative w-full max-w-sm sm:max-w-xs lg:max-w-xs animate-fade-up">
              <div className="absolute -inset-2 border border-primary/10 bg-primary/5" />
              <div className="glass relative overflow-hidden rounded-md p-2 shadow-glow group">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={portrait}
                    alt="Natnael Deribe portrait"
                    width={768}
                    height={896}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 -translate-y-[100%] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-[scan_2.5s_ease-in-out_infinite] group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/90 px-2.5 py-1.5 font-mono text-[10px] uppercase text-foreground backdrop-blur-md border border-border/50">
                    <span className="h-1.5 w-1.5 bg-emerald-400 animate-pulse" /> SYS_ADMIN // ONLINE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Natnael Deribe, a Laravel backend developer and IT systems
              specialist focused on building robust web applications and keeping the
              infrastructure behind them running smoothly. My core work spans backend
              architecture with Laravel and PHP, REST API design, MySQL data modeling,
              and admin dashboards with proper authentication and role management.
            </p>
            <p>
              On the IT side, I handle server and database administration, network
              configuration, CCTV installation, biometric attendance systems, and
              day-to-day hardware and software maintenance for organizations that need
              dependable infrastructure.
            </p>
            <p>
              Alongside this, I work as a creative designer — crafting logos, brand
              identities and motion graphics. It&apos;s a complementary skill and a
              long-time hobby that pairs naturally with the technical side of my work.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card glow-on-hover p-5 text-left font-mono border-l-2 border-l-primary/30 hover:border-l-primary"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{s.label}</div>
              <div className="mt-2 text-3xl font-semibold text-foreground">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
