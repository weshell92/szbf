import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cases, chapters, concepts, getChapter, trainingScenarios } from '@/lib/data';
import VersionBadge from '@/components/VersionBadge';
import ChapterStructureMap from '@/components/ChapterStructureMap';
import SentenceStudyBlock from '@/components/SentenceStudyBlock';
import ReflectionEditor from '@/components/ReflectionEditor';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';

export function generateStaticParams() { return chapters.map((chapter) => ({ slug: chapter.slug })); }
export default async function ChapterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const relatedConcepts = concepts.filter((c) => chapter.relatedConceptIds.includes(c.id));
  const relatedCases = cases.filter((c) => chapter.relatedCaseIds.includes(c.id));
  const relatedTraining = trainingScenarios.filter((t) => chapter.sentences.some((s) => s.relatedTrainingIds.includes(t.id))).slice(0, 3);
  return <div className="space-y-8">
    <div><div className="text-sm text-bronze">第 {chapter.order} 篇 · {chapter.theme}</div><h1 className="mt-2 font-serifcn text-4xl font-bold text-paper">{chapter.title}</h1><p className="mt-3 max-w-3xl leading-8 text-paper/70">{chapter.modernMeaning}</p></div>
    <VersionBadge info={chapter.versionInfo} />
    <section><SectionHeader title="篇章结构图" /><ChapterStructureMap items={chapter.structure} /></section>
    <section className="card p-5"><h2 className="font-serifcn text-2xl font-bold text-paper">完整原文学习版</h2><p className="mt-4 font-serifcn text-lg leading-loose text-paper/80">{chapter.fullOriginal}</p></section>
    <section><SectionHeader title="逐句译注" description="四层结构：原文句子 → 字词解释 → 白话翻译 → 现代应用。" /><div className="grid gap-5">{chapter.sentences.map((sentence) => <SentenceStudyBlock key={sentence.id} sentence={sentence} />)}</div></section>
    <section className="grid gap-6 lg:grid-cols-3"><div className="card p-5 lg:col-span-2"><h2 className="font-serifcn text-2xl font-bold text-paper">核心思想总结</h2><p className="mt-4 leading-8 text-paper/70">{chapter.coreSummary}</p><div className="mt-4 flex flex-wrap gap-2">{chapter.keywords.map((kw) => <Tag key={kw}>{kw}</Tag>)}</div></div><div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">现代应用</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-paper/70">{chapter.modernApplications.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="grid gap-4 lg:grid-cols-3"><Related title="相关概念" items={relatedConcepts.map((c) => [c.name, `/concepts/${c.slug}`])} /><Related title="相关案例" items={relatedCases.map((c) => [c.title, `/cases/${c.slug}`])} /><Related title="相关训练" items={relatedTraining.map((t) => [t.title, `/training/${t.id}`])} /></section>
    <ReflectionEditor targetType="chapter" targetId={chapter.id} title={chapter.title} questions={chapter.reflectionTemplate} />
  </div>;
}
function Related({ title, items }: { title: string; items: string[][] }) { return <div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">{title}</h3><div className="mt-4 grid gap-2">{items.map(([label, href]) => <Link className="soft-card p-3 text-sm text-paper/75 hover:border-bronze/40" key={href} href={href}>{label}</Link>)}</div></div>; }
