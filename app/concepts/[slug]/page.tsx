import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cases, getConceptBySlug, relatedChapters, trainingScenarios } from '@/lib/data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  return { title: concept ? `孙子兵法概念：${concept.name}` : '概念' };
}

export default async function ConceptDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  if (!concept) notFound();
  const chapterItems = relatedChapters(concept.sourceChapterIds);
  const caseItems = cases.filter((item) => concept.relatedCaseIds.includes(item.id));
  const trainingItems = trainingScenarios.filter((item) => item.relatedConceptIds.includes(concept.id)).slice(0, 5);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeader eyebrow="概念详情" title={concept.name} description={concept.explanation} />
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <h2 className="font-serif text-2xl text-bronze">出处原文</h2>
        {concept.originalQuotes.map((quote) => <p key={quote} className="mt-4 font-serif text-xl leading-10 text-paper/85">{quote}</p>)}
        <h2 className="mt-8 font-serif text-2xl text-bronze">现代应用</h2>
        <p className="mt-4 leading-8 text-paper/72">{concept.modernMeaning}</p>
        <h2 className="mt-8 font-serif text-2xl text-bronze">常见误解</h2>
        <p className="mt-4 leading-8 text-paper/72">{concept.commonMisunderstanding}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">来源篇章</h3>{chapterItems.map((chapter) => <Link key={chapter.id} href={`/chapters/${chapter.slug}`} className="mt-3 block text-bronze">{chapter.title}</Link>)}</div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">相关案例</h3>{caseItems.map((item) => <Link key={item.id} href={`/cases/${item.slug}`} className="mt-3 block text-bronze">{item.title}</Link>)}</div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">训练题</h3>{trainingItems.map((item) => <Link key={item.id} href={`/training/${item.id}`} className="mt-3 block text-bronze">{item.title}</Link>)}</div>
      </div>
    </section>
  );
}
