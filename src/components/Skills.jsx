import { useState } from "react";

const devSkills = [
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Ubuntu", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const designSkills = [
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
  { name: "Premiere Pro", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg" },
  { name: "Character Animator", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/character-animator.svg" },
  { name: "After Effects", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects-40.svg" },
  { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

export default function Skills() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> [SYS.SKILLS]
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use <span className="gradient-text">every day</span>
          </h2>
        </div>

        <div
          className="glass-card mt-10 w-full space-y-4 overflow-hidden rounded-[2rem] p-5 sm:p-7 lg:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <SkillRow title="Development" skills={devSkills} paused={paused} direction="left" />
          <SkillRow title="Design" skills={designSkills} paused={paused} direction="right" />
        </div>
      </div>
    </section>
  );
}

function SkillRow({ title, skills, paused, direction }) {
  const tripled = [...skills, ...skills, ...skills];
  return (
    <div>
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{title}</div>
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/25">
        <div
          className={`skill-row-track flex w-max gap-3 p-3 ${direction === "right" ? "skill-row-right" : "skill-row-left"}`}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {tripled.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group flex h-24 w-28 shrink-0 flex-col items-center justify-center rounded-xl border border-border/60 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:h-28 sm:w-32"
            >
              <img src={skill.logo} alt={skill.name} loading="lazy" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12" />
              <span className="mt-2 text-xs font-semibold text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
