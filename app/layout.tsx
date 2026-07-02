import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://weshell92.github.io/szbf'),
  title: {
    default: '孙子兵法 · 战略决策系统',
    template: '%s · 孙子兵法'
  },
  description: '完整原文、高质量白话译文、逐句关键词、现代应用、案例训练与本地检索式 AI 解读。',
  keywords: ['孙子兵法', '孙子兵法译文', '兵法原文', '战略决策', '管理案例', 'GitHub Pages'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: '孙子兵法 · 战略决策系统',
    description: '完整原文、高质量白话译文、逐句关键词、现代应用、案例训练与本地检索式 AI 解读。',
    url: 'https://weshell92.github.io/szbf',
    siteName: '孙子兵法 · 战略决策系统',
    locale: 'zh_CN',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
