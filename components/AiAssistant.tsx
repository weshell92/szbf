'use client';
import { useState } from 'react';

export default function AiAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!question.trim()) return;
    setLoading(true);
    const res = await fetch('/api/ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
    const data = await res.json();
    setAnswer(data.answer ?? '没有返回结果。');
    setLoading(false);
  }
  return <div className="card p-5">
    <textarea className="input min-h-32" placeholder="输入原文、案例或现实问题，例如：大型系统重构是否应该全面推翻旧系统？" value={question} onChange={(e) => setQuestion(e.target.value)} />
    <button className="btn mt-4" onClick={ask} disabled={loading}>{loading ? '分析中...' : '让 AI 基于站内内容分析'}</button>
    {answer && <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-bronze/25 bg-black/20 p-4 text-sm leading-7 text-paper/75">{answer}</pre>}
  </div>;
}
