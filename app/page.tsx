import Link from 'next/link';
import { ArrowRight, Brain, Compass, ScrollText, ShieldCheck, Swords } from 'lucide-react';
import { ChapterCard } from '@/components/ChapterCard';
import { QuoteCard } from '@/components/QuoteCard';
import { SearchBox } from '@/components/SearchBox';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { chapters, learningPaths, quotes, searchIndex } from '@/lib/data';

const features = [
  { icon: ScrollText, title: '十三篇阅读', text: '原文、译文、注释、战略解读和关联内容一体化。' },
  { icon: Compass, title: '战略地图', text: '把十三篇从文章列表变成完整思想系统。' },
  { icon: Swords, title: '案例迁移', text: '历史、商业、职场、技术案例对照理解。' },
  { icon: ShieldCheck, title: '决策训练', text: '场景推演、策略选择、评分反馈和复盘。' },
  { icon: Brain, title: 'AI 辅助', text: '结合站内内容做原文解释与现实问题分析。' }
];

export default function HomePage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-bronze">战略 · 决策 · 训练</p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-paper md:text-7xl">孙子兵法 · 战略决策系统</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-paper/72">从古代兵法到现代决策，学习如何判断胜算、控制成本、寻找时机、避免硬拼。它不是鼓励战争，而是训练你以更低代价达成目标。</p>
            <blockquote className="mt-8 border-l-2 border-bronze pl-5 font-serif text-2xl leading-10 text-paper/90">兵者，国之大事，死生之地，存亡之道，不可不察也。</blockquote>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/chapters" className="rounded-full bg-bronze px-6 py-3 font-semibold text-ink">开始阅读十三篇</Link>
              <Link href="/strategy-map" className="rounded-full border border-bronze/40 px-6 py-3 text-bronze">查看战略地图</Link>
              <Link href="/training" className="rounded-full border border-white/15 px-6 py-3 text-paper/75">进入决策训练</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-bronze/20 bg-ink/70 p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-paper">核心闭环</h2>
            <div className="mt-6 space-y-4">
              {['原文阅读', '逐句理解', '思想结构', '案例迁移', '决策训练', '个人复盘'].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/15 text-bronze">{index + 1}</span>
                  <span className="text-paper/80">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 md:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"><Icon className="text-bronze" /><h3 className="mt-4 font-serif text-xl text-paper">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-paper/60">{feature.text}</p></div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="十三篇" title="从篇章进入战略系统" description="每一篇都不是孤立文章，而是一个具体决策能力。" />
        <div className="card-grid">
          {chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="学习路线" title="按你的目标开始学习" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {learningPaths.map((path) => <Link key={path.id} href="/learning-paths" className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-bronze/50"><h3 className="font-serif text-xl text-paper">{path.title}</h3><p className="mt-3 text-sm leading-7 text-paper/60">{path.audience}</p><ArrowRight className="mt-5 text-bronze" /></Link>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="今日一句" title="先记住一句，再理解一套系统" />
        <QuoteCard quote={quotes[11]} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-16">
        <SearchBox items={searchIndex()} />
      </section>
    </div>
  );
}
