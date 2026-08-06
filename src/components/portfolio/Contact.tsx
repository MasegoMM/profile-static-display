import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { profile } from "./data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/your-username", href: profile.github },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks for reaching out!", {
      description: "This demo form doesn't send yet — email me directly in the meantime.",
    });
    e.currentTarget.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Open to internships, graduate roles and collaboration on data projects."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="grid gap-4 self-start">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <Card className="rounded-3xl border-border/70 shadow-[var(--shadow-soft)]">
          <CardContent className="p-6 sm:p-7">
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project..." />
              </div>
              <Button type="submit" size="lg" className="rounded-full">
                <Send className="size-4" /> {sent ? "Send another message" : "Send message"}
              </Button>
              <p className="text-xs text-muted-foreground">
                This form is frontend-only — messages aren't stored or delivered.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
