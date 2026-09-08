import { Section } from "./Section";
import { skills } from "./data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="Languages, analytics platforms and tooling I use across my studies and projects."
    >
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
