export default function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-bronze/25 px-2.5 py-1 text-xs text-bronze">{children}</span>;
}
