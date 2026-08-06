import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { certifications, education } from "./data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & certifications"
      title="Academic background and training"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4">
          {education.map((e) => (
            <Card key={e.qualification} className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)]">
              <CardContent className="flex gap-4 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                  <GraduationCap className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display font-semibold">{e.qualification}</h3>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{e.school}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <Card key={c.name} className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)]">
              <CardContent className="p-5">
                <Award className="size-5 text-brand" />
                <h3 className="mt-3 font-display text-sm font-semibold">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
