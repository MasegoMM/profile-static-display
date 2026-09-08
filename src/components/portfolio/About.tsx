import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Final-year BSc Information Technology student at Richfield Graduate Institute of Technology, with a focus on databases, statistics and software development.",
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
              I’m a final-year Bachelor of Science in Information Technology (BSc IT) student at
              Richfield Graduate Institute of Technology, passionate about using technology, data,
              and cloud solutions to solve real-world problems and turn ideas into practical
              solutions.
            </p>
            <p className="mt-4">
              My journey in IT has given me exposure to a broad range of technologies, including
              data analytics, software development, databases, business intelligence, cloud
              computing, and data engineering. I enjoy understanding how different technologies work
              together — from using SQL to work with databases, Python to clean and explore data,
              and Power BI to communicate insights, to exploring AWS and cloud-based technologies.
            </p>
            <p className="mt-4">
              I believe the best way to learn technology is by building. Alongside my degree, I
              work on academic and personal projects that allow me to apply what I learn, experiment
              with new technologies, solve problems, and develop practical skills. I document my
              projects and learning journey on GitHub, creating a portfolio that reflects both my
              technical abilities and continuous growth.
            </p>
            <p className="mt-4">
              I’m particularly interested in opportunities where I can work with experienced
              professionals, contribute to meaningful projects, and continue developing across
              different areas of IT. I’m currently seeking an internship, graduate programme, or
              entry-level opportunity where I can bring my curiosity, problem-solving mindset, and
              technical skills to a team while building the foundation for a successful career in
              technology.
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
