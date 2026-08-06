import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Studying BSc Information Technology, with a focus on databases, statistics and software development.",
  },
  {
    icon: Target,
    title: "Career goals",
    body: "To grow into a data analyst role where I own reporting, build dashboards and support decisions with evidence.",
  },
  {
    icon: Sparkles,
    title: "Interests",
    body: "Data storytelling, business intelligence, cloud analytics, open datasets and continuous learning.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Curious about data, obsessed with clarity"
      description="A professional summary of who I am, what I study and where I'm heading."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <Card className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)]">
          <CardContent className="p-7 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I'm an aspiring data analyst completing a BSc in Information Technology. I enjoy the
              full analytics path — pulling data with SQL, cleaning and exploring it in Python, then
              presenting it as a dashboard people can actually act on.
            </p>
            <p className="mt-4">
              Alongside my degree I build personal projects to sharpen practical skills, document
              them on GitHub, and study cloud fundamentals on AWS. I'm looking for an internship or
              graduate role where I can contribute to real reporting work and keep growing.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {cards.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)]">
              <CardContent className="flex gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
