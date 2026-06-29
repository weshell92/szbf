import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cases, categoryLabels } from '@/lib/data';

export const metadata = { title: '孙子兵法案例库' };

export default function CasesPage() {
  const groups = Object.entries(categoryLabels).map(([key, label]) => ({ key, label, items: cases.filter((item) => item.category === key) })).filter((group) => group.items.length);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="案例库" title="把兵法思想迁移到现实" description="历史战争、商业竞争、职场管理、技术项目四类案例，帮助用户从读懂走向会用。" />
      <div className="space-y-10">
        {groups.map((group) => <div key={group.key}><h2 className="mb-4 font-serif text-2xl text-bronze">{group.label}</h2><div className="card-grid">{group.items.map((item) => <Link key={item.id} href={`/cases/${item.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-bronze/50"><h3 className="font-serif text-xl text-paper">{item.title}</h3><p className="mt-3 text-sm leading-7 text-paper/65">{item.summary}</p></Link>)}</div></div>)}
      </div>
    </section>
  );
}
