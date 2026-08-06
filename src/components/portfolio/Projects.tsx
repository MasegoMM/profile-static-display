import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected analytics work"
      description="Hands-on projects covering dashboards, data pipelines and predictive modelling."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="group overflow-hidden rounded-3xl border-border/70 p-0 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]"
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full font-medium">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline" className="rounded-full">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
                {p.demo && (
                  <Button asChild size="sm" className="rounded-full">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
