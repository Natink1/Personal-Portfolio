import { Database, Network, Brush, Terminal, Radar, Workflow } from "lucide-react";

const groups = [
  {
    icon: Database,
    title: "Backend",
    accent: "Primary focus",
    summary: "Laravel APIs, auth flows, dashboard logic, and dependable data models.",
    skills: [
      "Laravel",
      "PHP",
      "REST APIs",
      "MySQL",
      "Authentication",
      "CRUD",
      "MVC",
      "Admin Dashboards",
    ],
  },
  {
    icon: Network,
    title: "IT Systems",
    accent: "Core expertise",
    summary: "Networks, support operations, device setup, and production reliability.",
    skills: [
      "Server & DB Administration",
      "Network Configuration",
      "CCTV Installation",
      "Hardware & Software Maintenance",
      "Linux",
      "Odoo",
      "Biotime",
    ],
  },
  {
    icon: Brush,
    title: "Creative Design",
    accent: "Complementary",
    summary: "Identity work, visual polish, and motion that helps products feel finished.",
    skills: ["Logo Design", "Branding", "Photoshop", "Illustrator", "After Effects", "Blender"],
  },
];

const terminalSkills = [
  { label: "Linux", type: "system", level: "stable" },
  { label: "Odoo", type: "operations", level: "active" },
  { label: "Biotime", type: "attendance", level: "active" },
  { label: "CCTV Installation", type: "security", level: "field" },
  { label: "Photoshop", type: "design", level: "creative" },
  { label: "Illustrator", type: "branding", level: "creative" },
  { label: "After Effects", type: "motion", level: "rendering" },
  { label: "Blender", type: "3d", level: "building" },
];

const telemetry = [
  { icon: Radar, label: "Response", value: "Fast support loops" },
  { icon: Workflow, label: "Delivery", value: "Build + maintain" },
  { icon: Terminal, label: "Mode", value: "Hybrid operator" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="pointer-events-none absolute right-[-8rem] top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              [SYS.SKILL_MATRIX]
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A toolkit built for <span className="gradient-text">real systems</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Beyond backend engineering, I work across IT operations and creative tooling. This
              section now surfaces those supporting skills the same way I think about them in
              practice: as live modules inside one working system.
            </p>

            <div className="mt-8 grid gap-4">
              {telemetry.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className="glass-card skill-pulse rounded-2xl p-4"
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                        {label}
                      </div>
                      <div className="mt-1 text-sm text-foreground">{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-3xl border border-border/70 bg-[#06090a] p-5 shadow-glow sm:p-6">
            <div className="terminal-scanline pointer-events-none absolute inset-0 opacity-70" />

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                skills@natink1:~/other-capabilities
              </div>
              <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                live stream
              </div>
            </div>

            <div className="mt-5 font-mono text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 text-primary">
                <span>skills@natink1</span>
                <span>$</span>
                <span className="text-foreground">cat other-skills.log</span>
              </div>

              <div className="skills-terminal-marquee mt-4 h-[18.5rem] overflow-hidden rounded-2xl border border-border/60 bg-background/20 px-4 py-3">
                <div className="skills-terminal-track">
                  {[...terminalSkills, ...terminalSkills].map((skill, index) => (
                    <div
                      key={`${skill.label}-${index}`}
                      className="skills-terminal-row flex items-center justify-between gap-4 border-b border-border/40 py-3"
                    >
                      <div className="min-w-0">
                        <div className="text-foreground">{skill.label}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          module::{skill.type}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-primary sm:inline">
                          {skill.level}
                        </span>
                        <span className="signal-bars" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-primary">
                <span>skills@natink1</span>
                <span>$</span>
                <span className="terminal-cursor inline-block h-3 w-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, accent, summary, skills }, index) => (
            <div
              key={title}
              className="glass-card glow-on-hover skill-card-loop relative overflow-hidden rounded-3xl p-7"
              style={{ animationDelay: `${index * 1.2}s` }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-80" />
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary">
                  {accent}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="group rounded-2xl border border-border/80 bg-background/35 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/8"
                  >
                    <div className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
