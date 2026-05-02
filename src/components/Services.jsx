import { Code2, Server, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Laravel Backend Development",
    desc: "Production-grade Laravel applications: REST APIs, authentication, role-based access, MVC architecture and admin dashboards.",
    points: ["REST APIs & CRUD", "MySQL & migrations", "Auth & roles"],
  },
  {
    icon: Server,
    title: "IT Systems & Technical Support",
    desc: "End-to-end IT support: server and database administration, networking, CCTV, biometric devices and hardware maintenance.",
    points: ["Network setup", "CCTV & Biotime", "Linux & Odoo"],
  },
  {
    icon: Palette,
    title: "Creative Design & Branding",
    desc: "Logo design, full brand identity systems and motion graphics built with Photoshop, Illustrator, After Effects and Blender.",
    points: ["Logo & Identity", "Visual systems", "Motion graphics"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            What I <span className="gradient-text">do</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three disciplines, one consistent standard — reliable, well-built, and clean.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points }, i) => (
            <article
              key={title}
              className="glass-card glow-on-hover group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full gradient-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mb-1 text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>

                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
