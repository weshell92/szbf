import ReviewDashboard from '@/components/ReviewDashboard';
import SectionHeader from '@/components/ui/SectionHeader';
export default function ReviewPage() { return <div><SectionHeader eyebrow="复盘中心" title="我的训练记录与错题回顾" description="本阶段使用浏览器本地存储保存复盘。后续可接入 Supabase/PostgreSQL 做云端同步。" /><ReviewDashboard /></div>; }
