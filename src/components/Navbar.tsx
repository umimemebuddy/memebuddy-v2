"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[38px] left-0 right-0 z-40 border-b" style={{ background: "rgba(3,3,6,0.95)", borderColor: "rgba(255,107,0,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 0 15px rgba(255,107,0,0.15)" }}>
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group font-mono">
          <span className="text-base font-bold neon-text-orange group-hover:opacity-80 transition-opacity tracking-tight">
            MEME
          </span>
          <span className="font-mono text-xs" style={{ color: "#1a1a28" }}>_</span>
          <span className="text-base font-bold neon-text-red group-hover:opacity-80 transition-opacity tracking-tight">
            BUDDY
          </span>
          <span className="neon-text-yellow animate-neon-pulse font-mono text-sm ml-1">⚡</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          <Link href="/recipes" className="neon-text-orange hover:opacity-80 transition-opacity tracking-wider font-bold">RECIPES</Link>
          <Link href="/journal" className="neon-text-cyan hover:opacity-80 transition-opacity tracking-wider font-bold">JOURNAL</Link>
          <Link href="/about" className="neon-text-purple hover:opacity-80 transition-opacity tracking-wider font-bold">ABOUT</Link>
          <span className="animate-price-up neon-text-green text-sm font-bold ticker-glow">PVP</span>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden neon-text-orange hover:opacity-80 transition-opacity font-mono text-sm"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-b" style={{ background: "rgba(3,3,6,0.95)", borderColor: "rgba(255,107,0,0.35)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-3 font-mono text-sm">
            <Link href="/recipes" onClick={() => setMenuOpen(false)} className="neon-text-orange hover:opacity-80 transition-opacity font-bold">RECIPES → 配方</Link>
            <Link href="/journal" onClick={() => setMenuOpen(false)} className="neon-text-cyan hover:opacity-80 transition-opacity font-bold">JOURNAL → 日志</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="neon-text-purple hover:opacity-80 transition-opacity font-bold">ABOUT → 关于</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
