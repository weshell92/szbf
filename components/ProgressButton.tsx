'use client';

import { useEffect, useState } from 'react';
import { hasLocalValue, STORAGE_KEYS, toggleLocalSet, addLocalValue } from '@/lib/progress';

export function ProgressButton({ chapterId }: { chapterId: string }) {
  const [read, setRead] = useState(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setRead(hasLocalValue(STORAGE_KEYS.readChapters, chapterId));
    setFav(hasLocalValue(STORAGE_KEYS.favoriteChapters, chapterId));
  }, [chapterId]);

  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={() => { addLocalValue(STORAGE_KEYS.readChapters, chapterId); setRead(true); }} className="rounded-full bg-bronze px-5 py-3 text-sm font-semibold text-ink hover:opacity-90">
        {read ? '已标记阅读' : '标记为已读'}
      </button>
      <button onClick={() => setFav(toggleLocalSet(STORAGE_KEYS.favoriteChapters, chapterId))} className="rounded-full border border-bronze/30 px-5 py-3 text-sm text-bronze hover:bg-bronze/10">
        {fav ? '已收藏篇章' : '收藏篇章'}
      </button>
    </div>
  );
}
