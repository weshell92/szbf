import { cases, chapters, concepts, quotes, trainingScenarios } from './data';
import type { SearchItem } from './types';

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const chapter of chapters) {
    items.push({ type: '概念', title: chapter.title, href: `/chapters/${chapter.slug}`, text: `${chapter.theme} ${chapter.summary} ${chapter.coreSummary}`, meta: '篇章' });
    for (const sentence of chapter.sentences) {
      items.push({ type: '原文', title: `${chapter.title} · 第 ${sentence.order} 句`, href: `/chapters/${chapter.slug}#${sentence.id}`, text: sentence.original, meta: chapter.theme });
      items.push({ type: '译文', title: `${chapter.title} · 白话`, href: `/chapters/${chapter.slug}#${sentence.id}`, text: sentence.translation, meta: chapter.theme });
      items.push({ type: '现代应用', title: `${chapter.title} · 现代应用`, href: `/chapters/${chapter.slug}#${sentence.id}`, text: sentence.modernApplication, meta: chapter.theme });
    }
  }
  for (const concept of concepts) items.push({ type: '概念', title: concept.name, href: `/concepts/${concept.slug}`, text: `${concept.oneLineExplanation} ${concept.modernMeaning} ${concept.commonMisunderstandings.join(' ')}` });
  for (const item of cases) items.push({ type: '案例', title: item.title, href: `/cases/${item.slug}`, text: `${item.summary} ${item.background} ${item.keyTurningPoint} ${item.modernTransfer}` });
  for (const training of trainingScenarios) items.push({ type: '训练', title: training.title, href: `/training/${training.id}`, text: `${training.background} ${training.conflict} ${training.wrongThinkingPatterns.join(' ')}` });
  for (const quote of quotes) items.push({ type: '金句', title: quote.text, href: `/quotes/${quote.id}`, text: `${quote.translation} ${quote.modernApplication}` });
  return items;
}

export function searchContent(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return buildSearchIndex()
    .map((item) => ({ item, score: `${item.title} ${item.text} ${item.meta ?? ''}`.toLowerCase().includes(q) ? 2 : item.text.toLowerCase().split(q).length - 1 }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map(({ item }) => item);
}
