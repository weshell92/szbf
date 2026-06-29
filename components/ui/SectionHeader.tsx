interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-bronze">{eyebrow}</p> : null}
      <h1 className="font-serif text-3xl font-bold text-paper md:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-base leading-8 text-paper/70">{description}</p> : null}
    </div>
  );
}
