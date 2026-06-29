# 孙子兵法 · 战略决策系统

这是一个将《孙子兵法》从“古文阅读”升级为“战略思维训练系统”的 Next.js 项目。

## 已实现内容

对应 plan.md 的第一至七阶段：

1. 基础内容框架：首页、导航、页脚、十三篇列表、篇章详情。
2. 内容增强：十三篇数据结构、原文片段、白话译文、注释、战略解读、金句与阅读进度。
3. 战略地图与概念库：战略链路、概念列表、概念详情、关联跳转。
4. 案例库：20 个案例，支持按分类展示和详情分析。
5. 决策训练：30 个训练题，支持策略选择、评分反馈、本地完成记录。
6. 搜索、收藏与体验优化：全站本地搜索、金句收藏、篇章收藏、阅读进度、响应式布局、SEO metadata。
7. AI 辅助功能：`/ai` 页面与 `/api/ai` 接口；配置 `OPENAI_API_KEY` 后调用模型，否则使用本地 RAG 检索式回答。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand 预留
- Framer Motion 预留
- 本地静态数据 + 可扩展 RAG API

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

创建 `.env.local`：

```bash
OPENAI_API_KEY=你的API密钥
OPENAI_MODEL=gpt-4.1-mini
```

没有密钥时，AI 页面会使用站内内容检索生成本地回答。

## 目录结构

```text
app/                  页面与 API Routes
components/           UI 与交互组件
lib/                  类型、数据、搜索、进度、AI 检索
```

## 后续可扩展

- 将 `lib/data.ts` 拆成 MDX / CMS / 数据库。
- 加入用户登录和云端同步。
- 将本地搜索升级为 Meilisearch / Typesense。
- 接入更完整的 RAG 向量检索。
- 为金句生成真实图片卡片。
