'use client';

import { useState } from 'react';

export function AiAssistant() {
  const [question, setQuestion] = useState('我现在要做一个大型系统重构，应该如何用孙子兵法判断是否值得开始？');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function ask() {
    setLoading(true);
    setAnswer('');
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAnswer(data.answer || '未获取到回答。');
    } catch (error) {
      setAnswer('AI 接口暂时不可用，请稍后重试。');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-bronze/20 bg-bronze/5 p-6">
      <textarea value={question} onChange={(event) => setQuestion(event.target.value)} className="min-h-36 w-full rounded-3xl border border-white/10 bg-ink p-5 leading-7 text-paper outline-none ring-bronze/30 focus:ring-4" />
      <button onClick={ask} disabled={loading || !question.trim()} className="mt-4 rounded-full bg-bronze px-6 py-3 font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? '分析中...' : '用兵法分析'}
      </button>
      {answer ? <pre className="mt-6 whitespace-pre-wrap rounded-3xl bg-ink/70 p-5 leading-8 text-paper/80">{answer}</pre> : null}
    </div>
  );
}
