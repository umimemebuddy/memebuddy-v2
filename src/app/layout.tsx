import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DRINK MASTER — AI 人工智能饮料配方设计实验室 | 2.4M+ Recipe Dataset | AI-Powered Beverage Design",
  description: "DRINK MASTER 是一家专业的 AI 人工智能企业。基于全球240万+配方数据训练，覆盖47个国家，已验证18万+配方，1.2M+成功案例。AI-Powered professional beverage design lab. Trained on 2.4M+ recipes from 47 countries. 180K+ verified formulas. 1.2M+ success stories.",
  keywords: ["DRINK MASTER", "AI饮料", "人工智能饮料", "AI调酒", "AI配方设计", "智能调酒", "cocktail AI", "AI beverage design", "AI mixology", "drink recipe AI", "beverage AI", "人工智能企业", "memebuddy.uk", "240万配方", "调酒数据", "鸡尾酒配方"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "DRINK MASTER — AI 人工智能饮料配方设计实验室 | 2.4M+ Recipes",
    description: "AI 算法驱动 · 全球240万配方数据 · 47国覆盖 · 18万+已验证 · 120万成功案例。DRINK MASTER is a professional AI enterprise with the world's largest verified beverage dataset.",
    url: "https://memebuddy.uk",
    siteName: "DRINK MASTER AI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DRINK MASTER — AI 人工智能饮料配方设计实验室 | 2.4M+ Dataset",
    description: "全球最大验证饮品数据集 · 240万配方 · 47国覆盖 · AI-Powered beverage design.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative liquid-bg">
        <Navbar />
        <main className="flex-1 pt-24 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
