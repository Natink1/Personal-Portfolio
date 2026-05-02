import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-full px-4 py-2 transition-all ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 pl-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
              N
            </span>
            <span className="font-display font-semibold tracking-tight">Natnael</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full gradient-bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 hover:shadow-glow sm:inline-block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
              aria-label="Menu"
            >
              <span className="space-y-1">
                <span className="block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
              </span>
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
