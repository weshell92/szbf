import Link from 'next/link';

const nav = [
  ['十三篇', '/chapters'], ['战略地图', '/strategy-map'], ['概念库', '/concepts'], ['案例库', '/cases'], ['训练', '/training'], ['复盘', '/review'], ['AI', '/ai']
];
export default function Header() {
  return <header className="sticky top-0 z-50 border-b border-bronze/20 bg-ink/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="font-serifcn text-xl font-bold text-paper">孙子兵法 · Pro</Link>
      <nav className="flex flex-wrap gap-2 text-sm text-paper/80">
        {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-full px-3 py-1 hover:bg-bronze/20 hover:text-paper">{label}</Link>)}
      </nav>
    </div>
  </header>;
}
