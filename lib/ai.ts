import { searchContent } from './search';

export function buildLocalAnswer(question: string) {
  const hits = searchContent(question).slice(0, 6);
  if (!hits.length) {
    return '我没有在站内内容中找到直接匹配。建议换成具体原文、概念、案例或训练场景再问。';
  }
  const references = hits.map((hit, index) => `${index + 1}. 【${hit.type}】${hit.title}：${hit.text.slice(0, 120)}`).join('\n');
  return `基于站内内容，我先给出检索式回答：\n\n${references}\n\n回答原则：先回到原文或概念，再区分白话翻译、现代应用和误用风险。你的问题可以从“当前局势是什么、资源是否匹配、成本是否可承受、对手强弱在哪里、是否存在可验证的薄弱点”这五步开始分析。`;
}

export function systemPrompt() {
  return `你是《孙子兵法》战略决策系统的学习导师。回答必须遵守：1. 先引用站内相关原文或概念；2. 区分字词解释、白话翻译、现代应用；3. 给出适用前提；4. 提醒误用风险；5. 不鼓励伤害、欺骗、违法或权谋化建议。`;
}
