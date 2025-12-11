import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

// 配置 Inter 字体 - 优化加载
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "山月集文创工作室 | 自然美学与传统文化融合",
  description: "山月集文创工作室，成立于2023年9月，坐标四川成都。以自然美学和传统文化为灵感，为年轻群体打造可使用、可收藏、可分享的文创产品——古风笔记本、毛笔套装、节气主题便利店、城市记忆冰箱贴、旅行手帐等。",
  keywords: ["山月集文创工作室", "自然美学", "传统文化", "文创产品", "成都文创", "古风笔记本", "毛笔套装", "节气主题", "冰箱贴", "旅行手帐"],
  authors: [{ name: "山月集文创工作室" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "山月集文创工作室 | 自然美学与传统文化融合",
    description: "为年轻人打造可使用、可收藏、可分享的文创产品。总部成都，创始人林一一，12人团队。",
    url: "https://demo-ai-site.vercel.app",
    siteName: "山月集文创工作室",
    locale: "zh-CN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 移动端视口优化 - 防止缩放和布局问题 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#8B2F2F" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.zhixiang-data.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
