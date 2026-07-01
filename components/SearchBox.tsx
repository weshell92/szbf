'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { searchContent } from '@/lib/search';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchContent(query), [query]);
  return <div className="card p-5">
    <input className="input" placeholder="搜索原文、译文、概念、案例、训练题，例如：避实击虚 / 重构 / 官渡" value={query} onChange={(e) => setQuery(e.target.value)} />
    {query && <div className="mt-4 grid gap-3">
      {results.length === 0 && <p className="text-paper/55">没有找到匹配内容。</p>}
      {results.map((item) => <Link key={`${item.type}-${item.href}-${item.title}`} href={item.href} className="soft-card block p-3 hover:border-bronze/40">
        <div className="text-xs text-bronze">{item.type} {item.meta ? `· ${item.meta}` : ''}</div>
        <div className="font-medium text-paper">{item.title}</div>
        <p className="mt-1 line-clamp-2 text-sm text-paper/60">{item.text}</p>
      </Link>)}
    </div>}
  </div>;
}
