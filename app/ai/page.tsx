import { AiAssistant } from '@/components/AiAssistant';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata = { title: '孙子兵法 AI 辅助解读' };

export default function AiPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeader eyebrow="AI 辅助解读" title="围绕原文和站内内容做分析" description="AI 不替代原文，而是先引用相关篇章、再解释含义、再迁移到现实问题。没有配置 OPENAI_API_KEY 时，会使用本地站内检索式回答。" />
      <AiAssistant />
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-paper/65">
        <p>安全边界：本站强调减少误判、降低代价、提升决策质量，不鼓励违法、伤害性、攻击性行为。</p>
      </div>
    </section>
  );
}
