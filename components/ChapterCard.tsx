import Link from 'next/link';
import type { Chapter } from '@/lib/types';
import Tag from './ui/Tag';
export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  return <Link href={`/chapters/${chapter.slug}`} className="card block p-5 hover:border-bronze/60">
    <div className="mb-2 text-sm text-bronze">第 {chapter.order} 篇 · {chapter.theme}</div>
    <h3 className="font-serifcn text-xl font-bold text-paper">{chapter.title}</h3>
    <p className="mt-2 text-sm leading-6 text-paper/65">{chapter.summary}</p>
    <div className="mt-4 flex flex-wrap gap-2">{chapter.keywords.slice(0, 4).map((kw) => <Tag key={kw}>{kw}</Tag>)}</div>
    <div className="mt-4 text-xs text-paper/45">{chapter.versionInfo.completeness} · {chapter.sentences.length} 个逐句学习块</div>
  </Link>;
}
