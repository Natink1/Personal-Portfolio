import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-xl px-3 py-2 transition-all ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 pl-2">
            <span className="grid h-8 w-8 place-items-center rounded-md gradient-bg-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
              N
            </span>
            <span className="font-display font-semibold tracking-tight">Natnael</span>
          </a>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "location" : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-xs transition-colors ${
                    active === l.href
                      ? "bg-primary/12 text-primary"
                      : "text-muted-foreground hover:bg-primary/8 hover:text-foreground"
                  }`}
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
              className="hidden rounded-md gradient-bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-glow sm:inline-block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="glass grid h-10 w-10 place-items-center rounded-md xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-xl p-3 xl:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      active === l.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
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
