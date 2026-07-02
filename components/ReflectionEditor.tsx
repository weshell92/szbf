'use client';
import { useEffect, useState } from 'react';
import { getReflection, saveReflection } from '@/lib/progress';

export default function ReflectionEditor({ targetType, targetId, title, questions }: { targetType: 'chapter' | 'sentence' | 'concept' | 'case' | 'training' | 'quote'; targetId: string; title: string; questions: string[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'saved' | 'failed'>('idle');
  const [createdAt, setCreatedAt] = useState<string | null>(null);

  useEffect(() => {
    const existing = getReflection(targetType, targetId);
    if (!existing) return;
    setCreatedAt(existing.createdAt);
    setAnswers(Object.fromEntries(existing.answers.map((item) => [item.question, item.answer])));
  }, [targetType, targetId]);

  function save() {
    const now = new Date().toISOString();
    const result = saveReflection({
      id: `${targetType}-${targetId}`,
      targetType,
      targetId,
      title,
      answers: questions.map((question) => ({ question, answer: answers[question] ?? '' })),
      createdAt: createdAt ?? now,
      updatedAt: now
    });
    if (result.ok) {
      setCreatedAt(createdAt ?? now);
      setStatus('saved');
    } else {
      setStatus('failed');
    }
  }

  return <div className="card p-5">
    <h3 className="font-serifcn text-xl font-bold text-paper">个人复盘</h3>
    <p className="mt-2 text-sm text-paper/55">内容仅保存在本设备，可在复盘中心回看。</p>
    <div className="mt-4 grid gap-4">
      {questions.map((question) => <label key={question} className="block">
        <div className="mb-2 text-sm text-paper/70">{question}</div>
        <textarea className="input min-h-24" value={answers[question] ?? ''} onChange={(e) => setAnswers({ ...answers, [question]: e.target.value })} />
      </label>)}
    </div>
    <button className="btn mt-4" onClick={save}>保存复盘</button>
    {status === 'saved' && <span className="ml-3 text-sm text-bronze">已保存到本地复盘中心。</span>}
    {status === 'failed' && <span className="ml-3 text-sm text-red-300">保存失败，请检查浏览器本地存储权限。</span>}
  </div>;
}
