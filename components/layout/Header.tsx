import Link from 'next/link';
import { Search } from 'lucide-react';

const nav = [
  { href: '/chapters', label: '十三篇' },
  { href: '/strategy-map', label: '战略地图' },
  { href: '/concepts', label: '概念库' },
  { href: '/cases', label: '案例库' },
  { href: '/training', label: '决策训练' },
  { href: '/quotes', label: '金句' },
  { href: '/learning-paths', label: '学习路线' },
  { href: '/ai', label: 'AI解读' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-serif text-lg font-bold tracking-[0.25em] text-paper">
          孙子兵法
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-paper/75 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-bronze">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#site-search" className="inline-flex items-center gap-2 rounded-full border border-bronze/30 px-3 py-2 text-sm text-paper/80 hover:border-bronze hover:text-bronze">
          <Search size={16} /> 搜索
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto border-t border-white/5 px-4 py-3 text-sm text-paper/70 lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 hover:text-bronze">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
