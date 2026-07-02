'use client';
import { useState } from 'react';
import { buildLocalAnswer } from '@/lib/ai';

export default function AiAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  function ask() {
    if (!question.trim()) return;
    setAnswer(buildLocalAnswer(question));
  }
  return <div className="card p-5">
    <textarea className="input min-h-32" placeholder="输入原文、案例或现实问题，例如：大型系统重构是否应该全面推翻旧系统？" value={question} onChange={(e) => setQuestion(e.target.value)} />
    <button className="btn mt-4" onClick={ask}>基于站内内容分析</button>
    {answer && <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-bronze/25 bg-black/20 p-4 text-sm leading-7 text-paper/75">{answer}</pre>}
  </div>;
}
