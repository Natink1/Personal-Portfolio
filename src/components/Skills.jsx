import { useState } from "react";

const devSkills = [
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Ubuntu", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" },
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
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

const cardPositions = [
  [-46, -40, 12],
  [0, -42, -18],
  [46, -38, 24],
  [-44, -12, -26],
  [4, -10, 34],
  [48, -8, -8],
  [-46, 20, 20],
  [-2, 22, -22],
  [46, 24, 8],
  [-42, 48, 4],
  [8, 46, -32],
  [48, 48, 18],
];

export default function Skills() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> [SYS.SKILLS]
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">My skills</span>
          </h2>
        </div>

        <div
          className="skills-groups mt-10 grid gap-5 lg:grid-cols-2"
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
  return (
    <div className={`skill-group glass-card min-h-[30rem] rounded-[2rem] p-6 sm:min-h-[34rem] sm:p-9 ${direction === "right" ? "skill-group-reverse" : ""}`}>
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{title}</div>
      <div className="skill-row-stage">
        <div className="skill-card-cloud" style={{ animationPlayState: paused ? "paused" : "running" }}>
          {skills.map((skill, index) => {
            const [x, y, z] = cardPositions[index % cardPositions.length];
            return (
              <div
                key={skill.name}
                className="skill-card-3d group transition-opacity duration-300"
                style={{
                  "--card-index": index,
                  "--card-x": `${x}%`,
                  "--card-y": `${y}%`,
                  "--card-z": `${z}px`,
                  "--card-rotation": `${((index * 37 + (direction === "right" ? 11 : 0)) % 15) - 7}deg`,
                  "--card-tilt": `${((index * 19 + 3) % 9) - 4}deg`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              >
                <div className={`skill-card-face ${paused ? "skill-card-face-paused" : ""}`}>
                  <img src={skill.logo} alt={skill.name} loading="lazy" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12" />
                  <span className="mt-2 text-xs font-semibold text-foreground">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
