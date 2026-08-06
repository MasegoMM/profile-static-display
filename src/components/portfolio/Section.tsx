import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-bold tracking-[0.2em] text-brand uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
