import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4" style={{ borderColor: "#ff8c0020", background: "#08080a" }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="bar-neon bar-neon-green font-bold">GMGN</span>
          <span style={{ color: "#555" }}>MEMEBUDDY.UK © 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80 transition-opacity">💎 IG</a>
          <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="bloomberg-pink font-bold hover:opacity-80 transition-opacity">𝕏</a>
          <Link href="/recipes" className="bloomberg-orange font-bold hover:opacity-80 transition-opacity">🥃 DRINKS</Link>
          <Link href="/journal" className="bloomberg-cyan font-bold hover:opacity-80 transition-opacity">JOURNAL</Link>
          <Link href="/about" className="bloomberg-purple font-bold hover:opacity-80 transition-opacity">ABOUT</Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="bar-neon bar-neon-orange font-bold">🥃 BOOZE</span>
          <span style={{ color: "#333" }}>×</span>
          <span className="bar-neon bar-neon-red animate-urgent font-bold">PVP</span>
        </div>
      </div>
    </footer>
  );
}
