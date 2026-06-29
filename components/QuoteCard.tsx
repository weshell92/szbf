'use client';

import { useEffect, useState } from 'react';
import type { Quote } from '@/lib/types';
import { hasLocalValue, STORAGE_KEYS, toggleLocalSet } from '@/lib/progress';
import { Bookmark, Copy } from 'lucide-react';

export function QuoteCard({ quote }: { quote: Quote }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(hasLocalValue(STORAGE_KEYS.favoriteQuotes, quote.id));
  }, [quote.id]);

  return (
    <article id={quote.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p className="font-serif text-2xl leading-10 text-paper">“{quote.text}”</p>
      <p className="mt-4 text-sm leading-7 text-paper/70">{quote.translation}</p>
      <p className="mt-2 text-sm leading-7 text-paper/55">{quote.explanation}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {quote.tags.map((tag) => <span key={tag} className="rounded-full bg-bronze/10 px-3 py-1 text-xs text-bronze">{tag}</span>)}
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={() => setFav(toggleLocalSet(STORAGE_KEYS.favoriteQuotes, quote.id))} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-paper/70 hover:border-bronze hover:text-bronze">
          <Bookmark size={16} /> {fav ? '已收藏' : '收藏'}
        </button>
        <button onClick={() => navigator.clipboard.writeText(quote.text)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-paper/70 hover:border-bronze hover:text-bronze">
          <Copy size={16} /> 复制
        </button>
      </div>
    </article>
  );
}
