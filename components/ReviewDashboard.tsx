'use client';
import { useEffect, useState } from 'react';
import { getReflections } from '@/lib/progress';
import type { UserReflection } from '@/lib/types';
export default function ReviewDashboard() {
  const [items, setItems] = useState<UserReflection[]>([]);
  useEffect(() => setItems(getReflections()), []);
  if (!items.length) return <div className="card p-6 text-paper/65">还没有复盘记录。完成训练或在篇章、案例页保存复盘后，会显示在这里。</div>;
  return <div className="grid gap-4">{items.map((item) => <article key={item.id} className="card p-5"><div className="text-sm text-bronze">{item.targetType} · {new Date(item.createdAt).toLocaleString()}</div><h3 className="mt-1 font-serifcn text-xl font-bold text-paper">{item.title}</h3><div className="mt-3 grid gap-2">{item.answers.map((answer) => <div key={answer.question} className="soft-card p-3"><div className="text-sm text-paper/55">{answer.question}</div><p className="mt-1 text-paper/75">{answer.answer || '未填写'}</p></div>)}</div></article>)}</div>;
}
