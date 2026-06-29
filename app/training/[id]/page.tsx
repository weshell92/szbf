import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TrainingClient } from '@/components/TrainingClient';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts, getTrainingById, relatedChapters } from '@/lib/data';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getTrainingById(id);
  return { title: item ? `决策训练：${item.title}` : '决策训练' };
}

export default async function TrainingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getTrainingById(id);
  if (!item) notFound();
  const chapterItems = relatedChapters(item.relatedChapterIds);
  const conceptItems = concepts.filter((concept) => item.relatedConceptIds.includes(concept.id));
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow={`难度：${item.difficulty}`} title={item.title} description={item.background} />
      <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-lg leading-8 text-paper/82">{item.question}</p>
      </div>
      <TrainingClient scenario={item} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">关联篇章</h3>{chapterItems.map((chapter) => <Link key={chapter.id} href={`/chapters/${chapter.slug}`} className="mt-3 block text-bronze">{chapter.title}</Link>)}</div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">关联概念</h3>{conceptItems.map((concept) => <Link key={concept.id} href={`/concepts/${concept.slug}`} className="mt-3 block text-bronze">{concept.name}</Link>)}</div>
      </div>
    </section>
  );
}
