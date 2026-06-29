import { NextResponse } from 'next/server';
import { buildLocalAnswer, systemPrompt } from '@/lib/ai';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const question = String(body.question ?? '').trim();
  if (!question) return NextResponse.json({ answer: '请先输入问题。' });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'local-rag' });
  try {
    const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
    const localContext = buildLocalAnswer(question);
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model, messages: [{ role: 'system', content: systemPrompt() }, { role: 'user', content: `问题：${question}\n\n站内检索上下文：\n${localContext}` }], temperature: 0.2 })
    });
    if (!res.ok) return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'fallback-local' });
    const data = await res.json();
    return NextResponse.json({ answer: data.choices?.[0]?.message?.content ?? buildLocalAnswer(question), mode: 'openai' });
  } catch {
    return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'fallback-local' });
  }
}
