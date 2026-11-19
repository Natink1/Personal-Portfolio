import { useEffect, useRef } from "react";

export default function ScrollReveal() {
  const glowRef = useRef(null);
  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--cursor-x", `${event.clientX}px`);
      glowRef.current.style.setProperty("--cursor-y", `${event.clientY}px`);
      glowRef.current.dataset.active = "true";
    };
    const handlePointerLeave = () => {
      if (glowRef.current) glowRef.current.dataset.active = "false";
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    document.documentElement.classList.add("reveal-ready");
    const sections = document.querySelectorAll("main > section:not(#home)");
    sections.forEach((section) => {
      if (section.id === "experience") return;
      section.classList.add("reveal-section");
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
      { rootMargin: "0px 0px -12%", threshold: [0.08, 0.18, 0.35] },
    );

    sections.forEach((section) => {
      if (section.id !== "experience" && !section.classList.contains("is-visible")) observer.observe(section);
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
