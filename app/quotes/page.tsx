import { QuoteCard } from '@/components/QuoteCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { quotes } from '@/lib/data';

export const metadata = { title: '孙子兵法金句卡片' };

export default function QuotesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader eyebrow="金句卡片" title="适合收藏、复习和分享的兵法句子" description="每张卡片包含原文、译文、现代启发、标签、复制和本地收藏。" />
      <div className="grid gap-5 md:grid-cols-2">
        {quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} />)}
      </div>
    </section>
  );
}
