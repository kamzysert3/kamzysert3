interface SectionHeadingProps {
  index: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ index, title, lead }: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-prose md:mb-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground tnum">
        {index} — {title}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">{lead}</p>}
      <div className="mt-6 h-px w-full bg-border" />
    </header>
  );
}