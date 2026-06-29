import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { chapters } from '@/lib/data';

export const metadata = { title: '孙子兵法战略地图' };

const lanes = [
  { title: '战前判断', items: ['shi-ji', 'zuo-zhan', 'mou-gong'] },
  { title: '胜势建立', items: ['jun-xing', 'bing-shi', 'xu-shi'] },
  { title: '行动变化', items: ['jun-zheng', 'jiu-bian', 'xing-jun', 'di-xing', 'jiu-di'] },
  { title: '特殊手段与信息', items: ['huo-gong', 'yong-jian'] }
];

export default function StrategyMapPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="战略地图" title="从十三篇看到一套系统" description="从算胜、算成本、选策略，到立于不败、借势、击虚，再到应变、地形、信息优势。" />
      <div className="space-y-8">
        {lanes.map((lane, index) => (
          <div key={lane.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/15 text-bronze">{index + 1}</span>
              <h2 className="font-serif text-2xl text-paper">{lane.title}</h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {lane.items.map((id) => {
                const chapter = chapters.find((item) => item.id === id)!;
                return <Link key={id} href={`/chapters/${chapter.slug}`} className="rounded-3xl border border-bronze/20 bg-ink/60 p-5 transition hover:-translate-y-1 hover:border-bronze"><p className="text-sm text-bronze">{chapter.theme}</p><h3 className="mt-2 font-serif text-2xl text-paper">{chapter.title}</h3><p className="mt-3 text-sm leading-7 text-paper/60">{chapter.summary}</p></Link>;
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-[2rem] border border-bronze/20 bg-bronze/5 p-8">
        <h2 className="font-serif text-3xl text-paper">核心链路</h2>
        <p className="mt-5 leading-9 text-paper/72">判断要不要打 → 判断打得起吗 → 判断怎么低成本赢 → 先让自己不败 → 创造胜势 → 攻击薄弱点 → 争夺主动权 → 随局势变化 → 识别环境风险 → 根据地形行动 → 管理不同处境 → 使用特殊手段 → 获取信息优势。</p>
      </div>
    </section>
  );
}
