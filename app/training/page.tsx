import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { categoryLabels, trainingScenarios } from '@/lib/data';

export const metadata = { title: '孙子兵法决策训练' };

export default function TrainingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="决策训练系统" title="用场景推演训练战略判断力" description="选择场景、判断局势、选择策略、获得评分与兵法解析。" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainingScenarios.map((item) => <Link key={item.id} href={`/training/${item.id}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-bronze/50"><div className="flex items-center justify-between text-xs text-paper/50"><span>{categoryLabels[item.category] || item.category}</span><span>{item.difficulty}</span></div><h2 className="mt-4 font-serif text-xl text-paper">{item.title}</h2><p className="mt-3 text-sm leading-7 text-paper/65">{item.background}</p></Link>)}
      </div>
    </section>
  );
}
