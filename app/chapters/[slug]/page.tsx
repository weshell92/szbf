import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProgressButton } from '@/components/ProgressButton';
import { QuoteCard } from '@/components/QuoteCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cases, concepts, getChapterBySlug, quotes, trainingScenarios } from '@/lib/data';

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  return { title: chapter ? `孙子兵法《${chapter.title}》原文、翻译与现代战略解读` : '篇章' };
}

export default async function ChapterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();
  const relatedConcepts = concepts.filter((item) => chapter.relatedConceptIds.includes(item.id));
  const relatedCases = cases.filter((item) => chapter.relatedCaseIds.includes(item.id));
  const relatedQuotes = quotes.filter((item) => chapter.relatedQuoteIds.includes(item.id));
  const relatedTraining = trainingScenarios.filter((item) => item.relatedChapterIds.includes(chapter.id)).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow={`第 ${chapter.order} 篇 · ${chapter.theme}`} title={chapter.title} description={chapter.modernMeaning} />
      <ProgressButton chapterId={chapter.id} />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_.8fr]">
        <article className="space-y-8">
          {chapter.sections.map((section) => (
            <div key={section.id} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-serif text-2xl text-bronze">原文</h2>
              <p className="mt-4 font-serif text-xl leading-10 text-paper/90">{section.original}</p>
              <h2 className="mt-8 font-serif text-2xl text-bronze">白话译文</h2>
              <p className="mt-4 leading-8 text-paper/72">{section.translation}</p>
              <h2 className="mt-8 font-serif text-2xl text-bronze">关键词注释</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {section.annotations.map((annotation) => <div key={annotation.word} className="rounded-2xl bg-ink/70 p-4"><p className="font-semibold text-paper">{annotation.word}</p><p className="mt-2 text-sm leading-7 text-paper/60">{annotation.explanation}</p><p className="mt-2 text-xs text-bronze">{annotation.modernMapping}</p></div>)}
              </div>
              <h2 className="mt-8 font-serif text-2xl text-bronze">战略解读</h2>
              <p className="mt-4 leading-8 text-paper/72">{section.strategyInterpretation}</p>
            </div>
          ))}
        </article>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">适用场景</h3><div className="mt-4 flex flex-wrap gap-2">{chapter.applicableScenes.map((scene) => <span key={scene} className="rounded-full bg-bronze/10 px-3 py-1 text-xs text-bronze">{scene}</span>)}</div></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">相关概念</h3><div className="mt-4 space-y-2">{relatedConcepts.map((item) => <Link key={item.id} className="block rounded-2xl bg-ink/60 p-3 text-paper/70 hover:text-bronze" href={`/concepts/${item.slug}`}>{item.name}</Link>)}</div></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">相关案例</h3><div className="mt-4 space-y-2">{relatedCases.map((item) => <Link key={item.id} className="block rounded-2xl bg-ink/60 p-3 text-paper/70 hover:text-bronze" href={`/cases/${item.slug}`}>{item.title}</Link>)}</div></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-serif text-xl text-paper">训练题</h3><div className="mt-4 space-y-2">{relatedTraining.map((item) => <Link key={item.id} className="block rounded-2xl bg-ink/60 p-3 text-paper/70 hover:text-bronze" href={`/training/${item.id}`}>{item.title}</Link>)}</div></div>
        </aside>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {relatedQuotes.slice(0, 4).map((quote) => <QuoteCard key={quote.id} quote={quote} />)}
      </div>
    </section>
  );
}
