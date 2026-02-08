import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "魔力奇 Molycure - AI智能体全球出海解决方案",
  description: "基于AI智能体，助力企业高效出海。依托大模型与智能体技术，提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同一站式解决方案。",
  keywords: ["AI智能体", "全球出海", "市场洞察", "智能拓客", "多语种沟通", "合规风控", "新加坡", "B2B SaaS", "跨境电商"],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--color-bg-dark)]`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
