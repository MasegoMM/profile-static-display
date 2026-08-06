import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <p className="min-w-0 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.title.split(" | ")[0]}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground transition-opacity hover:opacity-80"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground transition-opacity hover:opacity-80"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground transition-opacity hover:opacity-80"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
