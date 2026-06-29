import { chapters } from '@/lib/data';
import ChapterCard from '@/components/ChapterCard';
import SectionHeader from '@/components/ui/SectionHeader';
export default function ChaptersPage() { return <div><SectionHeader eyebrow="十三篇阅读系统" title="完整原文与逐句译注" description="每篇按版本说明、结构图、原文句子、字词解释、白话翻译、现代应用组织。" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}</div></div>; }
