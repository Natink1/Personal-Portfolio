import { useEffect } from "react";
import { Briefcase, GraduationCap, Award, ArrowUpRight } from "lucide-react";

const experience = [
  {
    role: "Technical Support Representative & Laravel Backend Developer",
    org: "Droga Consulting PLC",
    period: "2024 — now",
    details: ["Laravel APIs and web apps", "Linux, networks, and databases", "Biotime and access systems"],
  },
  {
    role: "IT Officer & Graphics Designer",
    org: "Droga Pharma PLC",
    period: "2022 — 2024",
    details: ["IT infrastructure and support", "CCTV installation and monitoring", "Corporate website projects"],
  },
  { role: "Graphics Designer", org: "Simbatech Trading PLC", period: "2025 — now", details: ["Brand visuals", "Social media content", "Motion graphics"] },
  { role: "Internship", org: "Addis Media Network", period: "2019 — 2020", details: ["Technical and media support"] },
];

const education = [
  {
    degree: "BSc Computer Science",
    org: "Addis Ababa University",
    period: "2020 — 2026",
  },
  {
    degree: "Hardware & Networking",
    org: "Tegbareid Polytechnic College",
    period: "2018 — 2022",
  },
];

export default function Experience() {
  useEffect(() => {
    const section = document.querySelector("#experience");
    if (!section) return undefined;

    const items = section.querySelectorAll(".experience-scroll-item");
    const award = section.querySelector(".experience-award");

    items.forEach((item) => {
      item.classList.remove("experience-revealed");
      item.removeAttribute("aria-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        items.forEach((item, index) => {
          window.setTimeout(() => item.classList.add("experience-revealed"), index * 190);
        });
        if (award) window.setTimeout(() => award.classList.add("experience-revealed"), items.length * 190);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -18%", threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            [SYS.EXPERIENCE]
          </span>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:gap-8">
          <Column icon={Briefcase} title="Experience" items={experience} keyA="role" keyB="org" />
          <Column icon={GraduationCap} title="Education" items={education} keyA="degree" keyB="org" />
        </div>

        <div className="experience-award mt-10 flex flex-col items-center gap-4 border-t border-border/60 pt-8 text-center sm:flex-row sm:text-left">
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
    <div className={`experience-column py-2 ${title === "Experience" ? "experience-column-left" : "experience-column-right"}`}>
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h3>
      </div>

      <ol className="relative space-y-6 border-l border-border pl-6">
        {items.map((it, i) => (
          <li
            key={i}
            className="experience-item experience-scroll-item group relative"
            style={{ "--item-delay": `${i * 190}ms` }}
          >
            <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary shadow-glow ring-4 ring-background" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-mono text-sm uppercase tracking-wider text-primary">{it.period}</div>
                <div className="mt-2 font-display text-xl font-semibold sm:text-2xl">{it[keyA]}</div>
                <div className="mt-1 text-base text-muted-foreground">{it[keyB]}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            {it.details && (
              <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted-foreground">
                {it.details.map((detail) => <li key={detail}>• {detail}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
