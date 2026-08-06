import { Card, CardContent } from "@/components/ui/card";
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <Card
            key={s.name}
            className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold">{s.name}</h3>
                <span className="text-xs text-muted-foreground">{s.group}</span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="gradient-brand h-full rounded-full transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
