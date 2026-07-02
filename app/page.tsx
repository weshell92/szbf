import Link from 'next/link';
import { chapters, stats } from '@/lib/data';
import ChapterCard from '@/components/ChapterCard';
import SearchBox from '@/components/SearchBox';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HomePage() {
  return <div className="space-y-12">
    <section className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
      <div>
        <div className="mb-4 text-sm font-semibold text-bronze">完整原文 · 逐句译注 · 深度案例 · 多步骤训练 · 个人复盘</div>
        <h1 className="font-serifcn text-4xl font-bold leading-tight text-paper sm:text-6xl">孙子兵法 · 战略决策系统</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/70">从“名句收藏”升级为“战略判断训练”：读原文、懂字词、看案例、做推演、写复盘。</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/chapters" className="btn">开始逐句学习</Link><Link href="/training" className="btn">进入决策训练</Link><Link href="/review" className="btn">查看复盘中心</Link></div>
      </div>
      <div className="card p-6">
        <h2 className="font-serifcn text-2xl font-bold text-paper">学习闭环</h2>
        <ol className="mt-5 space-y-3 text-paper/75">{['完整原文','逐句译注','概念理解','真实案例','多步训练','个人复盘'].map((item, index) => <li key={item} className="flex gap-3"><span className="text-bronze">{index+1}</span><span>{item}</span></li>)}</ol>
      </div>
    </section>
    <section className="grid gap-4 sm:grid-cols-5"><Stat label="篇章" value={stats.chapters} /><Stat label="逐句块" value={stats.sentenceBlocks} /><Stat label="深度概念" value={stats.concepts} /><Stat label="案例" value={stats.cases} /><Stat label="训练题" value={stats.trainings} /></section>
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border border-bronze/20 p-4"><div className="text-sm text-paper/45">原文版本</div><div className="mt-1 font-semibold text-paper">通行本</div></div>
      <div className="rounded-lg border border-bronze/20 p-4"><div className="text-sm text-paper/45">十三篇完整度</div><div className="mt-1 font-semibold text-paper">100%</div></div>
      <div className="rounded-lg border border-bronze/20 p-4"><div className="text-sm text-paper/45">译注状态</div><div className="mt-1 font-semibold text-paper">初校，持续复校中</div></div>
    </section>
    <section className="card p-5">
      <SectionHeader eyebrow="示例" title="兵贵胜，不贵久" description="用兵重在迅速取得有效胜利，不应陷入长期拖耗；项目延期、价格战、团队内耗都要及时检查投入产出比。" />
      <Link href="/chapters/zuo-zhan" className="btn">查看《作战篇》</Link>
    </section>
    <section><SectionHeader eyebrow="搜索" title="全站检索" description="可检索原文、译文、概念、案例、训练题和金句。" /><SearchBox /></section>
    <section><SectionHeader eyebrow="十三篇" title="从篇章进入逐句学习" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}</div></section>
  </div>;
}
function Stat({ label, value }: { label: string; value: number }) { return <div className="card p-5 text-center"><div className="text-3xl font-bold text-bronze">{value}</div><div className="mt-1 text-sm text-paper/55">{label}</div></div>; }
