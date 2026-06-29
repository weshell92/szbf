# 孙子兵法 · 战略决策系统 Pro

按照改进版 `plan.md` 实现第一至第七阶段的 Next.js 项目。

## 已实现阶段

1. **内容模型重构**：新增逐句译注、版本信息、深度概念、深度案例、多步骤训练、用户复盘数据模型。
2. **十三篇完整原文与逐句译注页面结构**：每篇包含版本说明、结构图、原文学习版、原文/字词/白话/现代应用四层学习块。
3. **概念库深度化**：概念详情页包含古代语境、现代解释、维度拆解、适用/不适用、常见误解、正确用法、自测。
4. **案例库真实化**：20 个案例，包含人物/组织、资源对比、约束、时间线、决策节点、兵法依据、现实迁移。
5. **决策训练流程化**：30 道训练题，包含局势判断、资源识别、对手分析、策略选择、评分反馈、错误思维、兵法依据、复盘。
6. **复盘与学习记录**：新增 `/review`，使用 localStorage 保存复盘。
7. **AI 辅助升级**：新增 `/ai` 与 `/api/ai`，未配置 Key 时使用站内检索回答，配置 `OPENAI_API_KEY` 后调用 OpenAI。

> 注意：古籍全文与异文校注已以“学习版/初校/待复校”方式标记，正式上线前建议人工复校通行本文字。

## 技术栈

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Zustand 预留
- Framer Motion 预留
- Next.js Route Handler
- localStorage 本地复盘
- 可选 OpenAI API

## 本地运行

```bash
npm install
npm run dev
```

访问：

```text
http://localhost:3000
```

## AI 配置

```bash
OPENAI_API_KEY=你的密钥
OPENAI_MODEL=gpt-4.1-mini
```
