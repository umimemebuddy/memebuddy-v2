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
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DRINK_MASTER — Professional Beverage Design Lab / 专业饮料配方设计",
  description: "DRINK_MASTER provides professional cocktail recipe design. World-class mixology meets algorithmic precision. / 提供专业鸡尾酒配方设计。世界级调酒艺术与算法精度的结合。",
  keywords: ["DRINK_MASTER", "cocktail", "mixology", "beverage design", "drink recipe", "调酒", "鸡尾酒", "配方设计", "MemeBuddy", "memebuddy.uk"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "DRINK_MASTER — Professional Beverage Design Lab",
    description: "World-class cocktail recipes. Algorithmic precision meets mixology art.",
    url: "https://memebuddy.uk",
    siteName: "DRINK_MASTER",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DRINK_MASTER — Professional Beverage Design Lab",
    description: "World-class cocktail recipes. Algorithmic precision meets mixology art.",
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
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-1 pt-24 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
