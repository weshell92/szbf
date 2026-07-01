import { notFound } from 'next/navigation';
import { getTraining } from '@/lib/data';
import TrainingWizard from '@/components/TrainingWizard';
export default function TrainingDetailPage({ params }: { params: { id: string } }) { const training = getTraining(params.id); if (!training) notFound(); return <div className="space-y-8"><div><div className="text-sm text-bronze">{training.category} · {training.difficulty}</div><h1 className="mt-2 font-serifcn text-4xl font-bold text-paper">{training.title}</h1><p className="mt-3 max-w-4xl leading-8 text-paper/70">{training.background}</p><div className="mt-4 card p-4 text-paper/70">关键冲突：{training.conflict}</div></div><TrainingWizard training={training} /></div>; }
