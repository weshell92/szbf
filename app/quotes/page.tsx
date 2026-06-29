import Link from 'next/link';
import { quotes } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
export default function QuotesPage() { return <div><SectionHeader eyebrow="金句系统" title="从名句进入微型学习单元" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{quotes.map((quote) => <Link key={quote.id} href={`/quotes/${quote.id}`} className="card block p-5 hover:border-bronze/60"><h3 className="font-serifcn text-xl leading-relaxed text-paper">{quote.text}</h3><p className="mt-3 text-sm text-paper/60">{quote.strategicMeaning}</p></Link>)}</div></div>; }
