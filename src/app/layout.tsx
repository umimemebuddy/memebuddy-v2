import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemeBuddy — GMGN · PVP · Booze / 山寨币 · 酒精 · 没有退路",
  description: "No bullshit. Just booze and PVP. Cocktail recipes meets crypto trading. / 没有废话。只有酒精和PVP。",
  keywords: ["cocktail", "GMGN", "PVP", "山寨币", "meme coin", "trading", "MemeBuddy", "调酒", "鸡尾酒", "迷因币"],
  openGraph: {
    title: "MemeBuddy — GMGN · PVP · Booze",
    description: "No bullshit. Just booze and PVP.",
    url: "https://memebuddy.uk",
    siteName: "MemeBuddy",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col relative" style={{ background: "#030306", color: "#e8e8e8" }}>
        <Navbar />
        <main className="flex-1 pt-12 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
