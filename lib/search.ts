import { cases, chapters, concepts, quotes, trainingScenarios } from './data';
import type { SearchItem } from './types';

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const chapter of chapters) {
    items.push({ type: '篇章', title: chapter.title, href: `/chapters/${chapter.slug}`, text: `${chapter.theme} ${chapter.summary} ${chapter.coreSummary} ${chapter.fullOriginal}`, meta: chapter.theme });
    for (const sentence of chapter.sentences) {
      const words = sentence.words.map((word) => `${word.word} ${word.explanation} ${word.modernMapping ?? ''}`).join(' ');
      items.push({ type: '原文', title: `${chapter.title} · 第 ${sentence.order} 句`, href: `/chapters/${chapter.slug}#${sentence.id}`, text: `${sentence.original} ${words}`, meta: chapter.theme });
      if (words) items.push({ type: '字词', title: `${chapter.title} · 字词`, href: `/chapters/${chapter.slug}#${sentence.id}`, text: words, meta: chapter.theme });
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
  const priority: Record<SearchItem['type'], number> = {
    原文: 9,
    篇章: 8,
    金句: 7,
    字词: 6,
    概念: 5,
    案例: 4,
    训练: 3,
    译文: 2,
    现代应用: 1
  };
  return buildSearchIndex()
    .map((item) => {
      const haystack = `${item.title} ${item.text} ${item.meta ?? ''}`.toLowerCase();
      const exactTitle = item.title.toLowerCase().includes(q) ? 20 : 0;
      const exactText = haystack.includes(q) ? 10 : 0;
      const repeat = item.text.toLowerCase().split(q).length - 1;
      return { item, score: exactTitle + exactText + repeat + priority[item.type] };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map(({ item }) => item);
}
