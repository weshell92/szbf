import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cases, getConcept, trainingScenarios } from '@/lib/data';
import ReflectionEditor from '@/components/ReflectionEditor';
import SectionHeader from '@/components/ui/SectionHeader';
export default function ConceptDetailPage({ params }: { params: { slug: string } }) {
  const concept = getConcept(params.slug); if (!concept) notFound();
  const relatedCases = cases.filter((c) => concept.relatedCaseIds.includes(c.id));
  const relatedTraining = trainingScenarios.filter((t) => concept.relatedTrainingIds.includes(t.id));
  return <div className="space-y-8"><div><div className="text-sm text-bronze">概念手册</div><h1 className="mt-2 font-serifcn text-4xl font-bold text-paper">{concept.name}</h1><p className="mt-3 text-lg text-paper/70">{concept.oneLineExplanation}</p></div>
    <Grid sections={[['古代语境', concept.ancientContext], ['现代解释', concept.modernMeaning]]} />
    <section><SectionHeader title="维度拆解" /><div className="grid gap-4 md:grid-cols-2">{concept.dimensions.map((d) => <div key={d.name} className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">{d.name}</h3><p className="mt-2 text-paper/65">古代：{d.ancientMeaning}</p><p className="mt-2 text-paper/65">现代：{d.modernMapping}</p><p className="mt-2 text-sm text-bronze">例：{d.example}</p></div>)}</div></section>
    <GridList title="适用 / 不适用 / 误解 / 正确用法" groups={[["适用场景", concept.applicableScenes],["不适用场景", concept.unsuitableScenes],["常见误解", concept.commonMisunderstandings],["正确使用方法", concept.correctUsage]]} />
    <section className="grid gap-4 md:grid-cols-2"><Related title="相关案例" items={relatedCases.map((c) => [c.title, `/cases/${c.slug}`])} /><Related title="相关训练" items={relatedTraining.map((t) => [t.title, `/training/${t.id}`])} /></section>
    <ReflectionEditor targetType="concept" targetId={concept.id} title={concept.name} questions={concept.selfTestQuestions} />
  </div>;
}
function Grid({ sections }: { sections: string[][] }) { return <div className="grid gap-4 md:grid-cols-2">{sections.map(([title, text]) => <section key={title} className="card p-5"><h2 className="font-serifcn text-2xl font-bold text-paper">{title}</h2><p className="mt-3 leading-8 text-paper/70">{text}</p></section>)}</div>; }
function GridList({ title, groups }: { title: string; groups: [string, string[]][] }) { return <section><SectionHeader title={title} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{groups.map(([gtitle, list]) => <div className="card p-5" key={gtitle}><h3 className="font-semibold text-paper">{gtitle}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-paper/65">{list.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>; }
function Related({ title, items }: { title: string; items: string[][] }) { return <div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">{title}</h3><div className="mt-3 grid gap-2">{items.map(([label, href]) => <Link className="soft-card p-3 text-sm text-paper/75" key={href} href={href}>{label}</Link>)}</div></div>; }
