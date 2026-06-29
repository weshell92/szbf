'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { SearchItem } from '@/lib/types';
import { searchItems } from '@/lib/search';

export function SearchBox({ items }: { items: SearchItem[] }) {
  const [keyword, setKeyword] = useState('');
  const results = useMemo(() => searchItems(items, keyword), [items, keyword]);

  return (
    <section id="site-search" className="rounded-[2rem] border border-bronze/20 bg-bronze/5 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-2xl text-paper">全站搜索</h2>
          <p className="mt-2 text-sm text-paper/60">可搜索原文、译文、概念、案例、训练题与金句。</p>
        </div>
        <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="输入：知己知彼 / 重构 / 避实击虚" className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/30 placeholder:text-paper/30 focus:ring-4 md:max-w-md" />
      </div>
      {keyword ? (
        <div className="mt-6 grid gap-3">
          {results.length ? results.map((item) => (
            <Link key={`${item.type}-${item.href}-${item.title}`} href={item.href} className="rounded-2xl border border-white/10 bg-ink/60 p-4 transition hover:border-bronze/50">
              <span className="text-xs text-bronze">{item.type}</span>
              <p className="mt-1 text-paper">{item.title}</p>
            </Link>
          )) : <p className="text-paper/60">没有找到匹配内容。</p>}
        </div>
      ) : null}
    </section>
  );
}
