import type { TextVersionInfo } from '@/lib/types';
export default function VersionBadge({ info }: { info: TextVersionInfo }) {
  return <div className="grid gap-3 rounded-2xl border border-bronze/25 bg-bronze/10 p-4 text-sm text-paper/80 sm:grid-cols-4">
    <div><span className="text-paper/45">文本版本</span><div className="font-semibold text-paper">{info.edition}</div></div>
    <div><span className="text-paper/45">完整状态</span><div className="font-semibold text-paper">{info.completeness}</div></div>
    <div><span className="text-paper/45">校对状态</span><div className="font-semibold text-paper">{info.proofreadingStatus}</div></div>
    <div><span className="text-paper/45">说明</span><div>{info.note}</div></div>
  </div>;
}
