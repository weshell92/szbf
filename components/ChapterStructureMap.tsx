export default function ChapterStructureMap({ items }: { items: string[] }) {
  return <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, index) => <li key={item} className="soft-card p-4">
      <div className="mb-2 text-xs text-bronze">步骤 {index + 1}</div>
      <div className="font-medium text-paper">{item}</div>
    </li>)}
  </ol>;
}
