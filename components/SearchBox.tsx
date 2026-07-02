'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { searchContent } from '@/lib/search';
import type { SearchItem } from '@/lib/types';

const groupOrder = ['篇章原文', '概念', '案例', '训练金句'] as const;
const suggestions = ['势', '胜', '避实击虚', '知己知彼', '兵贵胜', '用间'];

function groupFor(item: SearchItem): (typeof groupOrder)[number] {
  if (['篇章', '原文', '字词', '译文', '现代应用'].includes(item.type)) return '篇章原文';
  if (item.type === '概念') return '概念';
  if (item.type === '案例') return '案例';
  return '训练金句';
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchContent(query), [query]);
  const grouped = useMemo(() => {
    return groupOrder.map((group) => ({
      group,
      items: results.filter((item) => groupFor(item) === group)
    })).filter((group) => group.items.length > 0);
  }, [results]);
  return <div className="grid gap-4">
    <input className="input" placeholder="搜索原文、译文、概念、案例、训练题，例如：避实击虚 / 重构 / 官渡" value={query} onChange={(e) => setQuery(e.target.value)} />
    {query && <div className="grid gap-5">
      {results.length === 0 && <div className="rounded-lg border border-bronze/20 p-4 text-paper/65">
        <p>未找到相关内容。</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {suggestions.map((item) => <button key={item} className="rounded-full border border-bronze/25 px-3 py-1 text-paper/70 hover:bg-bronze/15" onClick={() => setQuery(item)}>{item}</button>)}
        </div>
      </div>}
      {grouped.map(({ group, items }) => <section key={group}>
        <h3 className="mb-2 text-sm font-semibold text-bronze">{group}</h3>
        <div className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => <Link key={`${item.type}-${item.href}-${item.title}`} href={item.href} className="block p-3 hover:bg-white/[0.04]">
            <div className="text-xs text-bronze">{item.type} {item.meta ? `· ${item.meta}` : ''}</div>
            <div className="font-medium text-paper">{item.title}</div>
            <p className="mt-1 line-clamp-2 text-sm text-paper/60">{item.text}</p>
          </Link>)}
        </div>
      </section>)}
    </div>}
  </div>;
}
