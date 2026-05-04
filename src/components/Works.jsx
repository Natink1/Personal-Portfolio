import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { categories, projects } from "@/data/projects";

export default function Works() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Works & Projects
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Selected <span className="gradient-text">work</span>
            </h2>
          </div>

          <div className="glass flex flex-wrap gap-1 rounded-full p-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active === c
                    ? "gradient-bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="glass-card glow-on-hover group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                <div className="absolute left-3 top-3">
                  <span className="glass rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(p)}
                  className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-label={`View ${p.title}`}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full gradient-bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow">
                    View Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[10px] text-foreground/80"
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

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/70 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card relative w-full max-w-3xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass text-foreground hover:text-primary"
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
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                {selected.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold">{selected.title}</h3>
              <p className="mt-3 text-muted-foreground">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
