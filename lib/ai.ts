import { cases, chapters, concepts, quotes, trainingScenarios } from './data';

export function retrieveContext(question: string) {
  const q = question.toLowerCase();
  const pool = [
    ...chapters.map((item) => ({ label: `篇章：${item.title}`, text: `${item.title} ${item.theme} ${item.summary} ${item.modernMeaning} ${item.sections.map((s) => s.original + s.translation + s.strategyInterpretation).join(' ')}` })),
    ...concepts.map((item) => ({ label: `概念：${item.name}`, text: `${item.name} ${item.explanation} ${item.modernMeaning}` })),
    ...cases.map((item) => ({ label: `案例：${item.title}`, text: `${item.title} ${item.summary} ${item.lesson}` })),
    ...quotes.map((item) => ({ label: `金句：${item.text}`, text: `${item.text} ${item.translation} ${item.explanation}` })),
    ...trainingScenarios.map((item) => ({ label: `训练：${item.title}`, text: `${item.title} ${item.background} ${item.explanation}` }))
  ];

  const tokens = q.split(/\s+|，|。|、|；|：/).filter(Boolean);
  return pool
    .map((item) => ({
      ...item,
      score: tokens.reduce((sum, token) => sum + (item.text.toLowerCase().includes(token) ? 1 : 0), 0) + (item.text.includes(question) ? 5 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export function buildLocalAnswer(question: string) {
  const ctx = retrieveContext(question);
  const best = ctx[0];
  const contextLines = ctx.map((item) => `- ${item.label}`).join('\n');
  return `你问的是：${question}\n\n可先从《孙子兵法》的“先判断条件，再选择战场”来分析。${best ? `最相关内容是「${best.label}」。` : ''}\n\n回答结构：\n1. 先引用相关原文或概念，不脱离文本。\n2. 再判断胜算、成本、风险、时机、信息和执行。\n3. 最后给出现实动作，但避免把兵法误用成攻击性策略。\n\n站内相关内容：\n${contextLines}\n\n建议：把你的问题拆成四个问题：我有什么资源？对方强弱点在哪里？最小成本试探是什么？失败后损失是否可承受？`;
}
