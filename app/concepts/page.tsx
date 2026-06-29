import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts } from '@/lib/data';

export const metadata = { title: '孙子兵法核心概念库' };

export default function ConceptsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="核心概念库" title="把兵法思想拆成可复用卡片" description="每个概念包含出处、解释、现代应用、常见误解、相关案例和训练题。" />
      <div className="card-grid">
        {concepts.map((concept) => <Link key={concept.id} href={`/concepts/${concept.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-bronze/50"><h2 className="font-serif text-2xl text-paper">{concept.name}</h2><p className="mt-3 text-sm leading-7 text-paper/65">{concept.explanation}</p><p className="mt-4 text-xs text-bronze">常见误解：{concept.commonMisunderstanding}</p></Link>)}
      </div>
    </section>
  );
}
