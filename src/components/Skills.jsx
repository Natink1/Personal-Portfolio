import { Database, Network, Brush } from "lucide-react";

const groups = [
  {
    icon: Database,
    title: "Backend",
    accent: "Primary focus",
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
    skills: ["Logo Design", "Branding", "Photoshop", "Illustrator", "After Effects", "Blender"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A toolkit built for <span className="gradient-text">real systems</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, accent, skills }) => (
            <div key={title} className="glass-card glow-on-hover rounded-3xl p-7">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary">
                  {accent}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
