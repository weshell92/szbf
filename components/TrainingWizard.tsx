'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { chapters } from '@/lib/data';
import type { DeepTrainingScenario } from '@/lib/types';
import ReflectionEditor from './ReflectionEditor';

const steps = ['判断局势', '识别资源', '分析对手', '选择策略', '评分反馈', '复盘'];
const normalize = (text: string) => text.replace(/[，。；：、“”‘’！？\s]/g, '');

export default function TrainingWizard({ training }: { training: DeepTrainingScenario }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string>('');
  const option = useMemo(() => training.options.find((item) => item.id === selected), [selected, training.options]);
  const relatedChapters = useMemo(() => {
    const evidence = training.relatedOriginalSentences.map(normalize).filter(Boolean);
    return chapters.filter((chapter) => {
      const original = normalize(chapter.fullOriginal);
      return evidence.some((item) => item.length > 3 && original.includes(item.slice(0, Math.min(12, item.length))));
    }).slice(0, 3);
  }, [training.relatedOriginalSentences]);
  return <div className="grid gap-6">
    <div className="flex flex-wrap gap-2">{steps.map((label, index) => <button key={label} className={`rounded-full px-3 py-1 text-sm ${index === step ? 'bg-bronze text-ink' : 'border border-bronze/25 text-paper/70'}`} onClick={() => setStep(index)}>{index + 1}. {label}</button>)}</div>
    {step === 0 && <Panel title="第一步：判断局势" questions={training.situationQuestions} onNext={() => setStep(1)} />}
    {step === 1 && <Panel title="第二步：识别自身资源" questions={training.selfResourceQuestions} onNext={() => setStep(2)} />}
    {step === 2 && <Panel title="第三步：判断对手强弱" questions={training.opponentQuestions} onNext={() => setStep(3)} />}
    {step === 3 && <div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">第四步：选择策略</h3><div className="mt-4 grid gap-3">{training.options.map((opt) => <button key={opt.id} className={`soft-card p-4 text-left ${selected === opt.id ? 'border-bronze bg-bronze/10' : ''}`} onClick={() => setSelected(opt.id)}><div className="font-semibold text-paper">{opt.id}. {opt.text}</div><div className="mt-1 text-sm text-paper/55">点击选择后进入评分反馈。</div></button>)}</div><button className="btn mt-4" disabled={!selected} onClick={() => setStep(4)}>查看评分与解析</button></div>}
    {step === 4 && <div className="grid gap-4"><div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">第五步：系统评分</h3>{option ? <div className="mt-4"><div className="text-4xl font-bold text-bronze">{option.score}/100</div><p className="mt-3 text-paper/75">{option.feedback}</p><div className="mt-4 grid gap-3 sm:grid-cols-2"><Info title="什么时候成立" text={option.whenItWorks} /><Info title="什么时候失败" text={option.whenItFails} /></div></div> : <p className="text-paper/60">请先选择策略。</p>}</div><div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">错误思维提醒</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-paper/70">{training.wrongThinkingPatterns.map((item) => <li key={item}>{item}</li>)}</ul><h4 className="mt-5 font-semibold text-paper">兵法依据</h4><ul className="mt-2 list-disc space-y-2 pl-5 text-paper/70">{training.relatedOriginalSentences.map((item) => <li key={item}>{item}</li>)}</ul><h4 className="mt-5 font-semibold text-paper">最优策略成立前提</h4><p className="mt-2 text-paper/70">{training.bestAnswerCondition}</p></div><button className="btn" onClick={() => setStep(5)}>进入复盘</button></div>}
    {step === 5 && <div className="grid gap-4">
      <div className="card p-5">
        <h3 className="font-serifcn text-xl font-bold text-paper">本题总结</h3>
        {option ? <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="soft-card p-4"><div className="text-sm text-bronze">本题得分</div><div className="mt-2 text-3xl font-bold text-paper">{option.score}/100</div><p className="mt-2 text-sm text-paper/60">{option.feedback}</p></div>
          <div className="soft-card p-4"><div className="text-sm text-bronze">兵法依据</div><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-paper/70">{training.relatedOriginalSentences.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="soft-card p-4"><div className="text-sm text-bronze">推荐复读篇章</div><div className="mt-2 grid gap-2">{relatedChapters.length > 0 ? relatedChapters.map((chapter) => <Link key={chapter.id} href={`/chapters/${chapter.slug}`} className="text-paper/75 hover:text-bronze">{chapter.title} · {chapter.theme}</Link>) : <span className="text-sm text-paper/60">回到相关原文与概念，复核本题判断前提。</span>}</div></div>
        </div> : <p className="mt-3 text-paper/60">请先选择策略并查看评分。</p>}
      </div>
      <ReflectionEditor targetType="training" targetId={training.id} title={training.title} questions={training.reflectionTemplate} />
    </div>}
  </div>;
}
function Panel({ title, questions, onNext }: { title: string; questions: DeepTrainingScenario['situationQuestions']; onNext: () => void }) { return <div className="card p-5"><h3 className="font-serifcn text-xl font-bold text-paper">{title}</h3><div className="mt-4 grid gap-4">{questions.map((question) => <div key={question.id} className="soft-card p-4"><div className="font-medium text-paper">{question.question}</div><div className="mt-3 flex flex-wrap gap-2">{question.options?.map((opt) => <button key={opt} className="rounded-full border border-bronze/25 px-3 py-1 text-sm text-paper/75 hover:bg-bronze/15">{opt}</button>)}</div><p className="mt-3 text-sm text-paper/55">{question.explanation}</p></div>)}</div><button className="btn mt-4" onClick={onNext}>下一步</button></div>; }
function Info({ title, text }: { title: string; text: string }) { return <div className="soft-card p-4"><div className="text-sm text-bronze">{title}</div><div className="mt-1 text-paper/70">{text}</div></div>; }
