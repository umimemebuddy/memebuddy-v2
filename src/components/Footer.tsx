import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4 mt-auto" style={{ borderColor: "rgba(6,182,212,0.1)", background: "#0b0c10" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Data Scale Row */}
        <div className="mb-3 pb-3" style={{ borderBottom: "1px solid #1e1e28" }}>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-2">
            <span className="font-mono text-xs" style={{ color: "#f59e0b" }}>🗄️ 2.4M+ RECIPES</span>
            <span style={{ color: "#2a2a35" }}>│</span>
            <span className="font-mono text-xs" style={{ color: "#10b981" }}>✅ 180K+ VERIFIED</span>
            <span style={{ color: "#2a2a35" }}>│</span>
            <span className="font-mono text-xs" style={{ color: "#06b6d4" }}>🌐 47 COUNTRIES</span>
            <span style={{ color: "#2a2a35" }}>│</span>
            <span className="font-mono text-xs" style={{ color: "#8b5cf6" }}>🧬 1.2M+ TASTE PROFILES</span>
            <span style={{ color: "#2a2a35" }}>│</span>
            <span className="font-mono text-xs" style={{ color: "#e11d48" }}>🎯 99.7% PRECISION</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="cn-text text-xs" style={{ fontWeight: 400, color: "#6b6b70" }}>全球最大验证饮品数据集 · AI驱动风味科学 · 六大洲47国来源 · 64分子家族风味图谱</span>
          </div>
          <p className="font-mono text-xs text-center mt-1.5 leading-relaxed" style={{ color: "#4a4a54" }}>
            <span style={{ color: "#f59e0b" }}>▸</span> Sourced from IBA archives, national guilds, vintage manuscripts & 350+ live venues. 3-source cross-referenced. Daily retrained.
          </p>
          <p className="cn-text text-xs text-center mt-0.5" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.35 }}>
            数据源：IBA档案 · 各国调酒协会 · 古典手稿 · 350+实时场所 · 三源交叉验证 · 每日重训
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span style={{ color: "#06b6d4" }}>🧪 DRINK MASTER</span>
            <span className="ai-badge">AI</span>
            <span style={{ color: "#3d3d44" }}>│</span>
            <span style={{ color: "#6b6b70" }}>MEMEBUDDY.UK © 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "#8b5cf6" }}>💎 IG</a>
            <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: "#e11d48" }}>𝕏</a>
            <Link href="/recipes" className="hover:opacity-70 transition-opacity" style={{ color: "#06b6d4" }}>🧪 DRINKS</Link>
            <Link href="/journal" className="hover:opacity-70 transition-opacity" style={{ color: "#8b5cf6" }}>JOURNAL</Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity" style={{ color: "#e11d48" }}>ABOUT</Link>
            <Link href="/partner" className="hover:opacity-70 transition-opacity" style={{ color: "#f59e0b" }}>✦ PARTNER</Link>
            <a
              href="https://github.com/umimemebuddy/DRINK_MASTER"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              title="DRINK MASTER on GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              GITHUB
            </a>
          </div>
          <div className="flex items-center gap-2" style={{ color: "#6b6b70" }}>
            <span style={{ color: "#06b6d4" }}>◈</span>
            <span>AI BEVERAGE DESIGN LAB</span>
            <span style={{ color: "#8b5cf6" }}>◈</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
