import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: '孙子兵法 · 战略决策系统',
    template: '%s | 孙子兵法 · 战略决策系统'
  },
  description: '从古代兵法到现代决策，学习如何判断胜算、控制成本、寻找时机、避免硬拼。',
  keywords: ['孙子兵法', '孙子兵法原文', '孙子兵法翻译', '战略思维', '知己知彼', '不战而屈人之兵']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
