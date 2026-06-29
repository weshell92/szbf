import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-10 text-paper/65">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl text-paper">孙子兵法 · 战略决策系统</p>
          <p className="mt-3 max-w-2xl text-sm leading-7">
            从古代兵法到现代决策：原文阅读、思想结构、案例迁移、场景训练与 AI 辅助复盘。
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <Link className="block hover:text-bronze" href="/chapters">十三篇阅读</Link>
          <Link className="block hover:text-bronze" href="/strategy-map">战略地图</Link>
          <Link className="block hover:text-bronze" href="/training">决策训练</Link>
        </div>
        <div className="space-y-2 text-sm">
          <Link className="block hover:text-bronze" href="/cases">案例库</Link>
          <Link className="block hover:text-bronze" href="/quotes">金句卡片</Link>
          <Link className="block hover:text-bronze" href="/ai">AI 辅助解读</Link>
        </div>
      </div>
    </footer>
  );
}
