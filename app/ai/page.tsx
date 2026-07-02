import AiAssistant from '@/components/AiAssistant';
import SectionHeader from '@/components/ui/SectionHeader';
export default function AiPage() { return <div><SectionHeader eyebrow="AI 辅助解读" title="基于站内内容的原文解释、案例分析与复盘点评" description="此页面适配 GitHub Pages 静态部署，只在浏览器内检索已打包的站内内容，不使用后端，也不调用外部大模型。" /><AiAssistant /></div>; }
