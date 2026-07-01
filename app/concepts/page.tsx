import Link from 'next/link';
import { concepts } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
export default function ConceptsPage() { return <div><SectionHeader eyebrow="核心概念库" title="战略概念手册" description="每个概念包含古代语境、现代迁移、适用边界、常见误解和自测问题。" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{concepts.map((concept) => <Link key={concept.id} href={`/concepts/${concept.slug}`} className="card block p-5 hover:border-bronze/60"><h3 className="font-serifcn text-xl font-bold text-paper">{concept.name}</h3><p className="mt-2 text-sm leading-6 text-paper/65">{concept.oneLineExplanation}</p><div className="mt-4 text-xs text-bronze">{concept.commonMisunderstandings.length} 个常见误解 · {concept.selfTestQuestions.length} 个自测</div></Link>)}</div></div>; }
