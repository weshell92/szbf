import AiAssistant from '@/components/AiAssistant';
import SectionHeader from '@/components/ui/SectionHeader';
export default function AiPage() { return <div><SectionHeader eyebrow="AI 辅助解读" title="基于站内内容的原文解释、案例分析与复盘点评" description="AI 会优先检索站内原文、逐句译注、概念、案例和训练题；未配置 OPENAI_API_KEY 时自动使用本地检索式回答。" /><AiAssistant /></div>; }
