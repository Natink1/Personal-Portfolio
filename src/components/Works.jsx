import { useMemo, useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { categories, projects } from "@/data/projects";

export default function Works() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  // Prevent background page from scrolling when modal is open
  useEffect(() => {
    if (selected) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelected(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selected]);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="works" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              [SYS.PROJECTS]
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Selected <span className="gradient-text">work</span>
            </h2>
          </div>

          {/* Clean Category Filters with Modern Typography */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 font-sans text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-glow font-semibold"
                    : "border border-border/70 bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="glass-card glow-on-hover group relative overflow-hidden rounded-2xl border border-border/70 transition-all hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-85" />
                <div className="absolute left-3 top-3">
                  <span className="glass rounded-md px-2.5 py-1 font-sans text-xs font-medium text-primary border border-primary/20 backdrop-blur-md">
                    {p.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 cursor-pointer"
                  aria-label={`View ${p.title}`}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full gradient-bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow">
                    View Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal with Locked Body Scroll and Independent Modal Scroll */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-up overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card relative my-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={selected.image}
                alt={selected.title}
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-sans text-xs font-semibold text-primary">
                  {selected.category}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  STATUS // COMPLETED
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                {selected.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {selected.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-border/50 pt-5 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  Interested in this system?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
                >
                  Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
