import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts, getCaseBySlug, relatedChapters } from '@/lib/data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  return { title: item ? `案例：${item.title}` : '案例' };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();
  const chapterItems = relatedChapters(item.relatedChapterIds);
  const conceptItems = concepts.filter((concept) => item.relatedConceptIds.includes(concept.id));
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeader eyebrow="案例详情" title={item.title} description={item.summary} />
      <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 prose-szbf">
        <h2>1. 背景</h2><p>{item.background}</p>
        <h2>2. 关键矛盾</h2><p>{item.conflict}</p>
        <h2>3. 资源对比</h2><p>{item.resourceComparison}</p>
        <h2>4. 战略选择</h2><p>{item.strategyChoice}</p>
        <h2>5. 结果</h2><p>{item.result}</p>
        <h2>6. 现实启发</h2><p>{item.lesson}</p>
        <h2>7. 反思问题</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-paper/70">{item.reflectionQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
      </article>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">对应篇章</h3>{chapterItems.map((chapter) => <Link key={chapter.id} href={`/chapters/${chapter.slug}`} className="mt-3 block text-bronze">{chapter.title}</Link>)}</div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">对应概念</h3>{conceptItems.map((concept) => <Link key={concept.id} href={`/concepts/${concept.slug}`} className="mt-3 block text-bronze">{concept.name}</Link>)}</div>
      </div>
    </section>
  );
}
