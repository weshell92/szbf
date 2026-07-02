import { searchContent } from './search';

export function buildLocalAnswer(question: string) {
  const hits = searchContent(question).slice(0, 6);
  if (!hits.length) {
    return '当前为 GitHub Pages 本地检索式回答，不调用外部大模型。\n\n我没有在站内内容中找到直接匹配。建议换成具体原文、概念、案例或训练场景再问。';
  }
  const references = hits.map((hit, index) => `${index + 1}. 【${hit.type}】${hit.title}：${hit.text.slice(0, 140)}`).join('\n');
  const top = hits[0];
  return [
    '当前为 GitHub Pages 本地检索式回答，不调用外部大模型。',
    '',
    '简短回答',
    `你的问题可以先从“${top.title}”切入。站内最相关内容提示：${top.text.slice(0, 160)}`,
    '',
    '原文依据',
    references,
    '',
    '兵法解释',
    '先回到原文或概念本身，再区分目标、资源、成本、时机和对手约束。不要把一句兵法当成立即可套用的结论。',
    '',
    '现代应用',
    '把问题拆成五个检查项：当前局势是什么，资源是否匹配，成本是否可承受，对手强弱在哪里，是否存在可验证的薄弱点。',
    '',
    '风险提醒',
    '本站回答只基于已打包进静态页面的内容做检索和重组，不会联网，也不会调用外部 LLM；涉及法律、财务、人身安全或高风险决策时，应另外核验事实并寻求专业意见。',
    '',
    '推荐继续学习',
    '可以继续点开上面的篇章、概念或案例，查看逐句译文、现代应用和常见误解。'
  ].join('\n');
}
