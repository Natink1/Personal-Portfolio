import { Check, Copy, Droplets, LayoutTemplate, Type } from "lucide-react";
import { useState } from "react";

const colors = [
  { name: "Signal", value: "#9be8c7" },
  { name: "Ink", value: "#15191c" },
  { name: "Paper", value: "#eef2ef" },
  { name: "Accent", value: "#f5bd65" },
];

export default function DesignLab() {
  const [copied, setCopied] = useState(false);

  const copyPalette = async () => {
    await navigator.clipboard?.writeText(
      colors.map((color) => `${color.name}: ${color.value}`).join("\n"),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="design-lab" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              [SYS.DESIGN_LAB]
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The designer&apos;s <span className="gradient-text">eye.</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Technical work is still human work. I use systems, contrast, and motion to make
              complex things easier to understand.
            </p>
          </div>

          <div className="glass-card rounded-md p-5 sm:p-7">
            <div className="border-b border-border/60 pb-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Visual system
              </div>
              <div className="mt-3 font-display text-3xl font-semibold">
                Identity, contrast, and clarity
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                The same discipline used to structure backend systems also shapes how I approach
                branding, typography, and color decisions.
              </p>
            </div>

            <div className="grid gap-8 py-7 sm:grid-cols-[1fr_0.95fr]">
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <div key={color.name} className="group border border-border p-2">
                    <div
                      className="h-20 transition-transform group-hover:-translate-y-1"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                      <span>{color.name}</span>
                      <span>{color.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="rounded-md border border-border bg-background/30 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Design notes
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Clean type hierarchy, restrained motion, and purposeful contrast help the work
                    feel polished without distracting from the message.
                  </p>
                </div>
                <div className="rounded-md border border-border bg-background/30 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Output
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Logos, brand systems, motion graphics, and product visuals that support the
                    technical story instead of competing with it.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <LayoutTemplate className="h-3.5 w-3.5 text-primary" /> Structure
                </span>
                <span className="flex items-center gap-1.5">
                  <Type className="h-3.5 w-3.5 text-primary" /> Type
                </span>
                <span className="flex items-center gap-1.5">
                  <Droplets className="h-3.5 w-3.5 text-primary" /> Color
                </span>
              </div>
              <button
                onClick={copyPalette}
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy palette"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
