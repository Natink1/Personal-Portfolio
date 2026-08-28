import { useEffect, useRef, useState } from "react";

import portrait1 from "@/assets/portrait.png";
import portrait2 from "@/assets/portrait2.png";

const stats = [
  { value: "5+", label: "UPTIME_YEARS" },
  { value: "20+", label: "PROJECTS_SHIPPED" },
  { value: "3", label: "CORE_DOMAINS" },
  { value: "1", label: "GOLD_MEDALS" },
];

export default function About() {
  const portraits = [portrait1, portrait2];
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50, active: false });
  const aboutCardRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPortraitIndex((currentIndex) => (currentIndex + 1) % portraits.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [portraits.length]);

  const handleGlowMove = (event) => {
    const card = aboutCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setGlowPosition({ x, y, active: true });
  };

  const handleGlowLeave = () => {
    setGlowPosition((current) => ({ ...current, active: false }));
  };

  return (
    <section id="about" className="relative">
      <div className="mt-20 mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="max-w-xl">
              <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                [SYS.ABOUT]
              </span>
              {/* <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Engineering reliable systems,{" "}
                <span className="gradient-text">designing clean ones.</span>
              </h2> */}
            </div>

            <div className="ml-15 relative w-full max-w-sm animate-fade-up sm:max-w-md lg:max-w-sm">
              <div className="absolute -inset-2 border border-primary/10 bg-primary/5" />
              <div className="glass group relative overflow-hidden rounded-md p-2 shadow-glow">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={portrait1}
                    alt=""
                    aria-hidden="true"
                    width={768}
                    height={896}
                    className="block h-full w-full object-cover opacity-0"
                  />
                  {portraits.map((portrait, index) => (
                    <img
                      key={portrait}
                      src={portrait}
                      alt="Natnael Deribe portrait"
                      width={768}
                      height={896}
                      className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 ${
                        index === portraitIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                      }`}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-0 -translate-y-[100%] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-[scan_2.5s_ease-in-out_infinite] group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 border border-border/50 bg-background/90 px-2.5 py-1.5 font-mono text-[10px] uppercase text-foreground backdrop-blur-md">
                    <span className="h-1.5 w-1.5 bg-emerald-400 animate-pulse" /> SYS_ADMIN //
                    ONLINE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={aboutCardRef}
            onPointerMove={handleGlowMove}
            onPointerLeave={handleGlowLeave}
            onPointerBlur={handleGlowLeave}
            className=" about-card-glow glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10"
            style={{
              "--glow-x": `${glowPosition.x}%`,
              "--glow-y": `${glowPosition.y}%`,
              "--glow-opacity": glowPosition.active ? 1 : 0,
            }}
          >
            <div className="about-card-glow-spot pointer-events-none absolute inset-0 transition-opacity duration-300" />
            <div className="mt-5pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)] border border-white/5" />
            <div className="relative space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Natnael Deribe, a Laravel backend developer and IT systems specialist
                focused on building robust web applications and keeping the infrastructure behind
                them running smoothly. My core work spans backend architecture with Laravel and PHP,
                REST API design, MySQL data modeling, and admin dashboards with proper
                authentication and role management.
              </p>
              <p>
                On the IT side, I handle server and database administration, network configuration,
                CCTV installation, biometric attendance systems, and day-to-day hardware and
                software maintenance for organizations that need dependable infrastructure.
              </p>
              <p>
                Alongside this, I work as a creative designer, crafting logos, brand identities, and
                motion graphics. It&apos;s a complementary skill and a long-time hobby that pairs
                naturally with the technical side of my work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card glow-on-hover border-l-2 border-l-primary/30 p-5 text-left font-mono hover:border-l-primary"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-2 text-3xl font-semibold text-foreground">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
