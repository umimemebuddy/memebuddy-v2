import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4" style={{ borderColor: "#00e5ff20", background: "#050510" }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="dm-brand" style={{ color: "#00e5ff", textShadow: "0 0 6px rgba(0,229,255,0.2)" }}>
            ▸ DRINK_MASTER
          </span>
          <span style={{ color: "#4a5568" }}>MEMEBUDDY.UK © 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80 transition-opacity">💎 IG</a>
          <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="bloomberg-pink font-bold hover:opacity-80 transition-opacity">𝕏</a>
          <Link href="/recipes" className="bloomberg-cyan font-bold hover:opacity-80 transition-opacity">🥃 DRINKS</Link>
          <Link href="/journal" className="bloomberg-purple font-bold hover:opacity-80 transition-opacity">JOURNAL</Link>
          <Link href="/about" className="bloomberg-pink font-bold hover:opacity-80 transition-opacity">ABOUT</Link>
          <Link href="/partner" className="bloomberg-amber font-bold hover:opacity-80 transition-opacity">✈️ PARTNER</Link>
          <a
            href="https://github.com/umimemebuddy/DRINK_MASTER"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            title="DRINK_MASTER on GitHub"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GITHUB
          </a>
        </div>
        <div className="flex items-center gap-2" style={{ color: "#4a5568" }}>
          <span style={{ color: "#00e5ff" }}>◈</span>
          <span>PROFESSIONAL DRINK DESIGN</span>
          <span style={{ color: "#7c3aed" }}>◈</span>
        </div>
      </div>
    </footer>
  );
}
