'use client';
import { useState } from 'react';
import { saveReflection } from '@/lib/progress';

export default function ReflectionEditor({ targetType, targetId, title, questions }: { targetType: 'chapter' | 'sentence' | 'concept' | 'case' | 'training' | 'quote'; targetId: string; title: string; questions: string[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  return <div className="card p-5">
    <h3 className="font-serifcn text-xl font-bold text-paper">个人复盘</h3>
    <div className="mt-4 grid gap-4">
      {questions.map((question) => <label key={question} className="block">
        <div className="mb-2 text-sm text-paper/70">{question}</div>
        <textarea className="input min-h-24" value={answers[question] ?? ''} onChange={(e) => setAnswers({ ...answers, [question]: e.target.value })} />
      </label>)}
    </div>
    <button className="btn mt-4" onClick={() => { const now = new Date().toISOString(); saveReflection({ id: `${targetType}-${targetId}-${Date.now()}`, targetType, targetId, title, answers: questions.map((question) => ({ question, answer: answers[question] ?? '' })), createdAt: now, updatedAt: now }); setSaved(true); }}>保存复盘</button>
    {saved && <span className="ml-3 text-sm text-bronze">已保存到本地复盘中心。</span>}
  </div>;
}
