"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useCallback(() => setMenuOpen(v => !v), []);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="fixed top-[26px] left-0 right-0 z-40 border-b" style={{ background: "rgba(11,12,16,0.95)", borderColor: "rgba(6,182,212,0.12)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-5xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* 饮料杯图标 + 品牌名 */}
          <span className="text-base" style={{ filter: "drop-shadow(0 0 6px rgba(6,182,212,0.4))" }}>🧪</span>
          <span className="text-sm font-bold tracking-wider" style={{ color: "#06b6d4" }}>
            DRINK
          </span>
          <span className="text-sm font-bold tracking-wider" style={{ color: "#8b5cf6" }}>
            MASTER
          </span>
          <span className="ai-badge ml-1">AI</span>
          <span className="animate-status text-xs" style={{ color: "#10b981" }}>●</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          <a
            href="https://instagram.com/umi_jewelry_gemstone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "#8b5cf6" }}
          >
            💎 IG
          </a>
          <Link href="/recipes" className="hover:opacity-70 transition-opacity" style={{ color: "#06b6d4" }}>
            🧪 DRINKS
          </Link>
          <Link href="/journal" className="hover:opacity-70 transition-opacity" style={{ color: "#8b5cf6" }}>
            📓 JOURNAL
          </Link>
          <Link href="/partner" className="hover:opacity-70 transition-opacity" style={{ color: "#f59e0b" }}>
            ✦ PARTNER
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity" style={{ color: "#6b6b70" }}>
            ABOUT
          </Link>
          <a
            href="https://github.com/umimemebuddy/DRINK_MASTER"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GITHUB
          </a>
        </div>

        <button
          onClick={toggle}
          className="md:hidden hover:opacity-70 transition-opacity font-mono text-sm"
          style={{ color: "#06b6d4" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b" style={{ background: "rgba(11,12,16,0.98)", borderColor: "rgba(6,182,212,0.12)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-2 font-mono text-sm">
            <a href="https://instagram.com/umi_jewelry_gemstone" onClick={close} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "#8b5cf6" }}>💎 IG</a>
            <Link href="/recipes" onClick={close} className="hover:opacity-70 transition-opacity" style={{ color: "#06b6d4" }}>🧪 DRINKS</Link>
            <Link href="/journal" onClick={close} className="hover:opacity-70 transition-opacity" style={{ color: "#8b5cf6" }}>📓 JOURNAL</Link>
            <Link href="/partner" onClick={close} className="hover:opacity-70 transition-opacity" style={{ color: "#f59e0b" }}>✦ PARTNER</Link>
            <Link href="/about" onClick={close} className="hover:opacity-70 transition-opacity" style={{ color: "#6b6b70" }}>ABOUT</Link>
            <a href="https://github.com/umimemebuddy/DRINK_MASTER" onClick={close} target="_blank" rel="noopener noreferrer" className="github-link w-fit">GITHUB</a>
          </div>
        </div>
      )}
    </nav>
  );
}
