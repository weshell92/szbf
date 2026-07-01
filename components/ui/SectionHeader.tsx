export default function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="mb-6">
    {eyebrow && <div className="mb-2 text-sm font-semibold text-bronze">{eyebrow}</div>}
    <h2 className="font-serifcn text-2xl font-bold text-paper sm:text-3xl">{title}</h2>
    {description && <p className="mt-2 max-w-3xl text-paper/65">{description}</p>}
  </div>;
}
