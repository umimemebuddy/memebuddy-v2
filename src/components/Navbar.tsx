"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useCallback(() => setMenuOpen(v => !v), []);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="fixed top-[26px] left-0 right-0 z-40 border-b" style={{ background: "#08080a", borderColor: "#ff8c0020" }}>
      <div className="max-w-4xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group font-mono">
          <span className="text-sm font-bold bar-neon bar-neon-orange group-hover:opacity-80 transition-opacity tracking-tight">
            MEME
          </span>
          <span className="font-mono text-xs" style={{ color: "#2a1a00" }}>﹍</span>
          <span className="text-sm font-bold bar-neon bar-neon-red group-hover:opacity-80 transition-opacity tracking-tight">
            BUDDY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 font-mono text-xs">
          <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80 transition-opacity">💎 IG</a>
          <Link href="/recipes" className="bloomberg-orange font-bold hover:opacity-80 transition-opacity">🥃 DRINKS</Link>
          <Link href="/journal" className="bloomberg-cyan font-bold hover:opacity-80 transition-opacity">JOURNAL</Link>
          <Link href="/about" className="bloomberg-purple font-bold hover:opacity-80 transition-opacity">ABOUT</Link>
          <span className="bar-neon bar-neon-red animate-urgent font-bold">⚠ PVP</span>
        </div>

        <button
          onClick={toggle}
          className="md:hidden bloomberg-orange hover:opacity-80 transition-opacity font-mono text-sm"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b" style={{ background: "#08080a", borderColor: "#ff8c0020" }}>
          <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col gap-2 font-mono text-sm">
            <a href="https://instagram.com/umi_jewelry_gemstone" onClick={close} target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80 transition-opacity">💎 IG │ 宝石</a>
            <Link href="/recipes" onClick={close} className="bloomberg-orange font-bold hover:opacity-80 transition-opacity">🥃 DRINKS │ 酒单</Link>
            <Link href="/journal" onClick={close} className="bloomberg-cyan font-bold hover:opacity-80 transition-opacity">JOURNAL │ 日志</Link>
            <Link href="/about" onClick={close} className="bloomberg-purple font-bold hover:opacity-80 transition-opacity">ABOUT │ 关于</Link>
            <span className="bar-neon bar-neon-red animate-urgent font-bold">⚠ PVP</span>
          </div>
        </div>
      )}
    </nav>
  );
}
