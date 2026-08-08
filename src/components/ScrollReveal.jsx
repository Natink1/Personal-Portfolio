import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const sections = document.querySelectorAll("main > section:not(#home)");
    sections.forEach((section) => {
      section.classList.add("reveal-section");
      if (window.location.hash === `#${section.id}`) section.classList.add("is-visible");
      const children = section.querySelector(":scope > div:last-child")?.children;
      Array.from(children ?? []).forEach((child, index) => {
        child.classList.add("reveal-item");
        child.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    sections.forEach((section) => {
      if (!section.classList.contains("is-visible")) observer.observe(section);
    });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
