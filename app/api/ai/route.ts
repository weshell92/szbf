import { NextResponse } from 'next/server';
import { buildLocalAnswer, retrieveContext } from '@/lib/ai';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const question = String(body.question || '').trim();
  if (!question) {
    return NextResponse.json({ answer: '请先输入你的问题。' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'local-rag' });
  }

  const context = retrieveContext(question).map((item) => `${item.label}\n${item.text.slice(0, 900)}`).join('\n\n');
  const prompt = `你是《孙子兵法》战略学习网站的 AI 助手。回答必须：\n1. 先引用相关原文或站内概念；\n2. 再解释含义；\n3. 再给出现代应用；\n4. 最后提醒风险边界；\n5. 不鼓励违法、伤害性、攻击性行为。\n\n站内检索内容：\n${context}\n\n用户问题：${question}`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        messages: [
          { role: 'system', content: '你是严谨、克制的中文经典解读助手。' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4
      })
    });

    if (!res.ok) {
      return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'fallback-local' });
    }

    const data = await res.json();
    return NextResponse.json({ answer: data.choices?.[0]?.message?.content || buildLocalAnswer(question), mode: 'openai' });
  } catch {
    return NextResponse.json({ answer: buildLocalAnswer(question), mode: 'fallback-local' });
  }
}
