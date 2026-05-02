const stats = [
  { value: "5+", label: "Years in Tech" },
  { value: "20+", label: "Projects Delivered" },
  { value: "3", label: "Disciplines" },
  { value: "1", label: "Gold Medal" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering reliable systems, <span className="gradient-text">designing clean ones.</span>
            </h2>
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
              className="glass-card glow-on-hover rounded-2xl p-6 text-center"
            >
              <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
