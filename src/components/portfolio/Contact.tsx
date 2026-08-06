import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";
import { profile } from "./data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/your-username", href: profile.github },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Open to internships, graduate roles and collaboration on data projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </Section>
  );
}
