import profileImg from "@/assets/profile-placeholder.jpg";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="surface-glow relative overflow-hidden px-5 pt-14 pb-20 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[auto_minmax(0,1fr)]">
        <div className="animate-rise mx-auto">
          <div className="gradient-brand rounded-[2rem] p-1.5 shadow-[var(--shadow-card)]">
            <img
              src={profileImg}
              width={800}
              height={800}
              alt={`Profile photo of ${profile.name}`}
              className="size-44 rounded-[1.6rem] object-cover sm:size-60"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Replace with your own photo
          </p>
        </div>

        <div className="animate-rise min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            <span className="size-2 rounded-full bg-brand" />
            Open to internships &amp; graduate roles
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-base font-semibold text-primary sm:text-lg">
            {profile.title}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)]">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">
                <Mail className="size-4" /> Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
