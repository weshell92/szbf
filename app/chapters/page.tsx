import { ChapterCard } from '@/components/ChapterCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { chapters } from '@/lib/data';

export const metadata = { title: '孙子兵法十三篇原文、翻译与现代解读' };

export default function ChaptersPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="十三篇阅读系统" title="孙子兵法十三篇" description="每篇包含原文、白话译文、关键词注释、战略解读、相关案例和训练题。" />
      <div className="card-grid">
        {chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}
      </div>
    </section>
  );
}
