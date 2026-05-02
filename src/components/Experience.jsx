import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    role: "Technical Support Representative & Laravel Backend Developer",
    org: "Droga Consulting PLC",
    period: "2024 — Present",
  },
  { role: "IT Officer", org: "Droga Pharma PLC", period: "2022 — 2024" },
  { role: "Internship", org: "Addis Media Network", period: "2019 — 2020" },
];

const education = [
  {
    degree: "BSc Computer Science",
    org: "Addis Ababa University",
    period: "2020 — Present",
  },
  {
    degree: "Hardware & Networking",
    org: "Tegbareid Polytechnic College",
    period: "2018 — 2022",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Journey
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Column icon={Briefcase} title="Experience" items={experience} keyA="role" keyB="org" />
          <Column icon={GraduationCap} title="Education" items={education} keyA="degree" keyB="org" />
        </div>

        <div className="glass-card mt-6 flex flex-col items-center gap-4 rounded-3xl p-7 text-center shadow-glow sm:flex-row sm:text-left">
          <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-bg-primary text-primary-foreground shadow-glow">
            <Award className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-primary">Award</div>
            <div className="font-display text-xl font-semibold">Gold Medal — Ethiopia TVET Agency</div>
            <div className="text-sm text-muted-foreground">Entrance Security System</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Column({ icon: Icon, title, items, keyA, keyB }) {
  return (
    <div className="glass-card rounded-3xl p-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>

      <ol className="relative space-y-6 border-l border-border pl-6">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary shadow-glow ring-4 ring-background" />
            <div className="text-xs uppercase tracking-wider text-primary">{it.period}</div>
            <div className="mt-1 font-semibold">{it[keyA]}</div>
            <div className="text-sm text-muted-foreground">{it[keyB]}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
