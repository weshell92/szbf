import type { SearchItem } from './types';

export function searchItems(items: SearchItem[], keyword: string) {
  const q = keyword.trim().toLowerCase();
  if (!q) return [];

  return items
    .map((item) => {
      const haystack = `${item.title} ${item.type} ${item.text}`.toLowerCase();
      const titleScore = item.title.toLowerCase().includes(q) ? 3 : 0;
      const typeScore = item.type.toLowerCase().includes(q) ? 2 : 0;
      const contentScore = haystack.includes(q) ? 1 : 0;
      const tokenScore = q.split(/\s+/).filter((token) => haystack.includes(token)).length;
      return { item, score: titleScore + typeScore + contentScore + tokenScore };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((row) => row.item);
}
