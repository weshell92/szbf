import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts, learningPaths, relatedChapters } from '@/lib/data';

export const metadata = { title: '孙子兵法学习路线' };

export default function LearningPathsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="学习路线系统" title="不同目标，不同路径" description="入门、管理者、创业者、职场、技术项目五条路线，帮助用户按目标学习。" />
      <div className="space-y-8">
        {learningPaths.map((path) => {
          const chapterItems = relatedChapters(path.chapterIds);
          const conceptItems = concepts.filter((concept) => path.conceptIds.includes(concept.id));
          return (
            <article key={path.id} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm tracking-[0.25em] text-bronze">{path.audience}</p>
                  <h2 className="mt-3 font-serif text-3xl text-paper">{path.title}</h2>
                  <ol className="mt-6 space-y-3 text-paper/70">
                    {path.steps.map((step, index) => <li key={step} className="flex gap-3"><span className="text-bronze">{index + 1}.</span>{step}</li>)}
                  </ol>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-ink/60 p-5"><h3 className="font-serif text-xl text-paper">推荐篇章</h3>{chapterItems.map((chapter) => <Link key={chapter.id} href={`/chapters/${chapter.slug}`} className="mt-3 block text-bronze">{chapter.title}</Link>)}</div>
                  <div className="rounded-3xl bg-ink/60 p-5"><h3 className="font-serif text-xl text-paper">重点概念</h3>{conceptItems.map((concept) => <Link key={concept.id} href={`/concepts/${concept.slug}`} className="mt-3 block text-bronze">{concept.name}</Link>)}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
