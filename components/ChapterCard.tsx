import Link from 'next/link';
import type { Chapter } from '@/lib/types';
import { Tag } from './ui/Tag';

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-bronze/60 hover:bg-bronze/5">
      <div className="flex items-center justify-between text-sm text-paper/50">
        <span>第 {chapter.order} 篇</span>
        <span>{chapter.theme}</span>
      </div>
      <h2 className="mt-4 font-serif text-2xl font-bold text-paper group-hover:text-bronze">{chapter.title}</h2>
      <p className="mt-3 leading-7 text-paper/70">{chapter.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {chapter.keywords.slice(0, 4).map((keyword) => <Tag key={keyword}>{keyword}</Tag>)}
      </div>
    </Link>
  );
}
