import type { ChapterSentence } from '@/lib/types';
import Tag from './ui/Tag';

export default function SentenceStudyBlock({ sentence }: { sentence: ChapterSentence }) {
  return <article id={sentence.id} className="card scroll-mt-24 p-5">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <span className="text-sm text-bronze">第 {sentence.order} 句 · {sentence.quoteLevel}</span>
      <div className="flex flex-wrap gap-2">{sentence.relatedConceptIds.map((id) => <Tag key={id}>{id}</Tag>)}</div>
    </div>
    <div className="font-serifcn text-xl leading-loose text-paper">{sentence.original}</div>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <section className="soft-card p-4"><h4 className="mb-2 font-semibold text-paper">字词解释</h4><ul className="space-y-2 text-sm text-paper/70">{sentence.words.map((word) => <li key={word.word}><strong className="text-bronze">{word.word}</strong>：{word.explanation}{word.modernMapping ? ` / ${word.modernMapping}` : ''}</li>)}</ul></section>
      <section className="soft-card p-4"><h4 className="mb-2 font-semibold text-paper">白话翻译</h4><p className="leading-7 text-paper/75">{sentence.translation}</p></section>
      <section className="soft-card p-4"><h4 className="mb-2 font-semibold text-paper">现代应用</h4><p className="leading-7 text-paper/75">{sentence.modernApplication}</p></section>
    </div>
  </article>;
}
