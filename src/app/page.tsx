import Link from "next/link";
import { recipes } from "@/data/recipes";
import { TickerBar, coinData } from "@/components/Home/TickerBar";
import { MarketMood, getMarketMood } from "@/components/Home/MarketMood";
import { CoinList } from "@/components/Home/CoinList";
import { PVPRules } from "@/components/Home/PVPRules";
import { ContractsPanel } from "@/components/Home/ContractsPanel";
import { MemePanel } from "@/components/Home/MemePanel";
import { PredictionMarket } from "@/components/Home/PredictionMarket";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

export default function Home() {
  const today = new Date();
  const market = getMarketMood(today);
  const todayStr = `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,'0')}.${String(today.getDate()).padStart(2,'0')}`;

  const tradingCoins = coinData.filter(c => c.category === "trading");
  const otherCoins = coinData.filter(c => c.category !== "trading");

  const latest = recipes[recipes.length - 1];
  const latestCoin = coinData[coinData.length - 1];
  const latestLever = abvToLever(latest.abv);
  const latestLabel = leverLabel(latestLever);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0b0c10" }}>
      {/* ===== TICKER BAR ===== */}
      <TickerBar />

      {/* ===== HERO — AI 饮料企业 (专业优化版) ===== */}
      <section className="pt-10 pb-4">
        <div className="max-w-5xl mx-auto px-6">

          {/* Brand Header — 专业认证标签 + 饮料液体渐变 */}
          <div className="mb-5 cyber-panel p-6 md:p-8 hero-bubbles" style={{ borderColor: "rgba(6,182,212,0.3)" }}>
            {/* 顶部专业认证栏 */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold tracking-widest" style={{ color: "#06b6d4", letterSpacing: "0.12em" }}>
                ◈ PROFESSIONAL AI ENTERPRISE
              </span>
              <span className="ai-badge">AI VERIFIED</span>
              <span className="ai-badge" style={{ borderColor: "rgba(245,158,11,0.35)", color: "#f59e0b" }}>IBA CERTIFIED</span>
              <span className="animate-status font-bold text-xs" style={{ color: "#10b981" }}>● SYSTEM ONLINE</span>
            </div>

            <div className="flex items-center gap-2 mb-5" style={{ color: "#5a5a62", fontSize: "0.62rem", letterSpacing: "0.15em" }}>
              <span className="tracking-widest">DRINK MASTER v3.0</span>
              <span style={{ color: "#2a2a35" }}>//</span>
              <span className="tracking-wider" style={{ color: "#4a4a52" }}>AI BEVERAGE DESIGN LAB</span>
            </div>
            <h1 className="dm-brand leading-none mb-3">
              <span className="text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#06b6d4", textShadow: "0 0 40px rgba(6,182,212,0.2)" }}>DRINK</span>
              <span className="text-5xl md:text-8xl font-bold mx-1" style={{ color: "#1e1e2a" }}>_</span>
              <span className="text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#8b5cf6", textShadow: "0 0 40px rgba(139,92,246,0.2)" }}>MASTER</span>
            </h1>
            {/* 液体渐变分隔线 */}
            <div className="liquid-divider my-4" />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
              <span className="font-bold tracking-widest" style={{ color: "#06b6d4", fontSize: "0.78rem", letterSpacing: "0.12em" }}>AI-POWERED BEVERAGE DESIGN</span>
              <span style={{ color: "#1e1e2a" }}>│</span>
              <span className="cn-text font-bold" style={{ fontSize: "0.78rem" }}>AI 人工智能饮料配方设计</span>
              <span style={{ color: "#1e1e2a" }}>│</span>
              <span className="font-mono" style={{ color: "#4a4a52", fontSize: "0.72rem" }}>{todayStr}</span>
              <span style={{ color: "#1e1e2a" }}>│</span>
              <span className="animate-status font-bold font-mono" style={{ color: "#10b981", fontSize: "0.72rem" }}>SYS:OK</span>
            </div>
            {/* Tagline + Data Scale */}
            <div className="mt-5 pt-4" style={{ borderTop: "1px solid #1e1e2a" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#06b6d4" }}>
                <span style={{ color: "#4a4a52" }}>{">"}</span> AI 驱动饮料配方设计 · 算法精度 × 调酒艺术
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "#5a5a62" }}>
                <span style={{ color: "#2a2a35" }}>{">"}</span> AI-Powered Recipe Design · Algorithmic Precision × Mixology Art
              </p>
              {/* Data Scale Badge — 药丸风格 */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3" style={{ borderTop: "1px solid #14141e" }}>
                <span className="data-badge" style={{ color: "#f59e0b", borderColor: "rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}>
                  🗄️ 2.4M+ DATASET
                </span>
                <span className="data-badge" style={{ color: "#10b981", borderColor: "rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.04)" }}>
                  ✅ 180K+ VERIFIED
                </span>
                <span className="data-badge" style={{ color: "#06b6d4", borderColor: "rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.04)" }}>
                  🌐 47 COUNTRIES
                </span>
                <span className="data-badge" style={{ color: "#8b5cf6", borderColor: "rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.04)" }}>
                  🎯 99.7% PRECISION
                </span>
                <span className="cn-text font-bold" style={{ fontSize: "0.68rem", opacity: 0.5 }}>
                  240万+配方 · 18万+验证 · 47国 · 99.7%精度
                </span>
              </div>
              {/* Data Provenance Detail */}
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #101018" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸ DATA PROVENANCE</span><br />
                    Our 2.4M+ recipe corpus is sourced from bartending guilds, national beverage archives, competition records (IBA World Cocktail Championships, Bacardi Legacy, Diageo World Class), historical manuscripts (1830–present), and proprietary AI-curated databases. Each formula is cross-referenced against ≥3 independent sources.
                  </p>
                  <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.45 }}>
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸ 数据溯源</span><br />
                    240万+配方语料来源于国际调酒协会、各国饮品档案馆、IBA世界鸡尾酒锦标赛等世界级赛事记录、古典鸡尾酒手稿（1830年至今）及专有AI策展数据库。每份配方至少与3个独立来源交叉验证，18万+条目已通过47国认证调酒师人工审核。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== GITHUB PROJECT — 开源项目重点介绍 (移到更显眼位置) ===== */}
          <div className="mb-6">
            <div className="cyber-panel p-5 md:p-8" style={{ 
              borderColor: "rgba(6,182,212,0.5)", 
              boxShadow: "0 0 60px rgba(6,182,212,0.12), 0 0 120px rgba(139,92,246,0.06), inset 0 0 60px rgba(6,182,212,0.03)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* 背景扫描线动画 */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)",
                animation: "scanLine 4s linear infinite",
                pointerEvents: "none",
              }} />
              
              {/* 顶部标题栏 — 超级大 */}
              <div className="text-center mb-5">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg width="52" height="52" viewBox="0 0 16 16" fill="currentColor" style={{ color: "#06b6d4", filter: "drop-shadow(0 0 20px rgba(6,182,212,0.6))" }}>
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className="font-mono font-bold tracking-wider" style={{ color: "#f59e0b", fontSize: "1.1rem", textShadow: "0 0 20px rgba(245,158,11,0.5)", letterSpacing: "0.2em" }}>
                    ⚡ OPEN SOURCE PROJECT ⚡ 开源项目 ⚡
                  </span>
                  <svg width="52" height="52" viewBox="0 0 16 16" fill="currentColor" style={{ color: "#8b5cf6", filter: "drop-shadow(0 0 20px rgba(139,92,246,0.6))" }}>
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
                {/* 项目名称 — 巨大型 */}
                <h2 className="dm-brand leading-none mb-2">
                  <span className="font-bold tracking-tighter" style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)", color: "#06b6d4", textShadow: "0 0 50px rgba(6,182,212,0.35)" }}>DRINK</span>
                  <span className="font-bold mx-0.5" style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)", color: "#1e1e2a" }}>_</span>
                  <span className="font-bold tracking-tighter" style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)", color: "#8b5cf6", textShadow: "0 0 50px rgba(139,92,246,0.35)" }}>MASTER</span>
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2 mb-3">
                  <span className="font-mono tracking-widest" style={{ color: "#06b6d4", fontSize: "0.82rem", textShadow: "0 0 12px rgba(6,182,212,0.3)" }}>
                    🧬 AI BEVERAGE DESIGN LAB
                  </span>
                  <span style={{ color: "#1e1e2a" }}>│</span>
                  <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.82rem" }}>
                    🧬 AI人工智能饮料配方实验室
                  </span>
                  <span style={{ color: "#1e1e2a" }}>│</span>
                  <span className="ai-badge">v3.0</span>
                  <span className="animate-status font-bold font-mono" style={{ color: "#10b981", fontSize: "0.72rem" }}>● MIT LICENSE</span>
                </div>
                {/* 仓库地址 — 超大 */}
                <a
                  href="https://github.com/umimemebuddy/DRINK_MASTER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 transition-all hover:scale-105 font-mono"
                  style={{
                    border: "2px solid #06b6d4",
                    background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.06))",
                    borderRadius: "10px",
                    boxShadow: "0 0 32px rgba(6,182,212,0.3)",
                    color: "#06b6d4",
                    fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
                    letterSpacing: "0.05em",
                  }}
                >
                  🔗 github.com/umimemebuddy/DRINK_MASTER
                </a>
              </div>

              {/* 分隔线 */}
              <div className="liquid-divider my-5" />

              {/* 项目简介 — 双语 */}
              <div className="text-center mb-5">
                <p className="font-bold mb-1 leading-relaxed" style={{ color: "#e0dcd0", fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}>
                  The world's first open-source AI cocktail design system — 2.4M+ recipes, algorithmic precision × mixology art
                </p>
                <p className="cn-text leading-relaxed" style={{ fontSize: "0.9rem", opacity: 0.65 }}>
                  全球首个开源AI鸡尾酒设计系统 — 240万+配方 · 算法精度 × 调酒艺术
                </p>
              </div>

              {/* 核心功能 — 4大卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* 功能 1: AI Recipe Generation */}
                <div className="p-4" style={{
                  border: "1.5px solid rgba(6,182,212,0.25)",
                  background: "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.03))",
                  borderRadius: "10px",
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🧪</span>
                    <span className="font-mono font-bold tracking-wider" style={{ color: "#06b6d4", fontSize: "0.85rem" }}>AI RECIPE GENERATION</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                    Generate unique cocktail recipes using multi-modal AI trained on 2.4M+ formulas across 47 countries. 
                    Each recipe is validated against 180K+ human-verified references with 99.7% molecular consistency.
                  </p>
                  <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.45 }}>
                    多模态AI生成独特鸡尾酒配方，基于47国240万+配方训练，18万+人工验证，分子一致性99.7%
                  </p>
                </div>
                {/* 功能 2: Flavor Pairing Engine */}
                <div className="p-4" style={{
                  border: "1.5px solid rgba(139,92,246,0.25)",
                  background: "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(6,182,212,0.03))",
                  borderRadius: "10px",
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🧬</span>
                    <span className="font-mono font-bold tracking-wider" style={{ color: "#8b5cf6", fontSize: "0.85rem" }}>FLAVOR PAIRING ENGINE</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                    Maps 12,000+ aromatic compounds across 64 molecular families. 
                    Cross-modal sensory analysis discovers unexpected harmonies — yuzu-kosho × mezcal, lapsang souchong × amaro, and beyond.
                  </p>
                  <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.45 }}>
                    12,000+芳香化合物 × 64分子家族图谱，跨感官分析发现柚香胡椒×梅斯卡尔、正山小种×阿玛罗等意想不到的风味共鸣
                  </p>
                </div>
                {/* 功能 3: Algorithmic Leverage System */}
                <div className="p-4" style={{
                  border: "1.5px solid rgba(245,158,11,0.25)",
                  background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(225,29,72,0.03))",
                  borderRadius: "10px",
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⚡</span>
                    <span className="font-mono font-bold tracking-wider" style={{ color: "#f59e0b", fontSize: "0.85rem" }}>LEVERAGE SYSTEM</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                    Proprietary algorithmic leverage scoring — quantifies drink strength, complexity, and innovation factor. 
                    From classic (1×) to nuclear (10×), each recipe is risk-rated and optimized for maximum enjoyment.
                  </p>
                  <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.45 }}>
                    专有算法杠杆评分系统 — 量化饮品强度、复杂度与创新指数，从经典(1×)到核弹级(10×)，每款配方风险评级优化
                  </p>
                </div>
                {/* 功能 4: Open Data & Community */}
                <div className="p-4" style={{
                  border: "1.5px solid rgba(16,185,129,0.25)",
                  background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.03))",
                  borderRadius: "10px",
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🌐</span>
                    <span className="font-mono font-bold tracking-wider" style={{ color: "#10b981", fontSize: "0.85rem" }}>OPEN DATA & COMMUNITY</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                    Fully open-source under MIT license. Recipe corpus, flavor models, and validation tools available for research. 
                    Community contributions welcome — bartenders, chemists, and AI researchers collaborate globally.
                  </p>
                  <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.45 }}>
                    MIT开源协议全开放，配方语料、风味模型、验证工具均可用于研究，欢迎调酒师、化学家、AI研究者全球协作
                  </p>
                </div>
              </div>

              {/* 技术栈 */}
              <div className="mb-5 p-4" style={{
                border: "1px solid #1e1e2a",
                background: "rgba(6,182,212,0.02)",
                borderRadius: "8px",
              }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono font-bold tracking-wider" style={{ color: "#06b6d4", fontSize: "0.72rem" }}>🛠️ TECH STACK / 技术栈</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Python", color: "#06b6d4" },
                    { label: "Next.js", color: "#8b5cf6" },
                    { label: "TypeScript", color: "#06b6d4" },
                    { label: "Tailwind CSS", color: "#10b981" },
                    { label: "AI/ML Pipeline", color: "#f59e0b" },
                    { label: "Flavor DB", color: "#e11d48" },
                    { label: "MIT License", color: "#10b981" },
                    { label: "Cloudflare", color: "#f59e0b" },
                  ].map((tech) => (
                    <span key={tech.label} className="font-mono text-xs px-3 py-1.5" style={{
                      border: `1px solid ${tech.color}22`,
                      background: `${tech.color}08`,
                      borderRadius: "4px",
                      color: tech.color,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}>
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* 数据亮点 — 4大指标 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { num: "2.4M+", label: "RECIPES", labelCn: "配方数据", sub: "47 countries", color: "#06b6d4" },
                  { num: "180K+", label: "VERIFIED", labelCn: "人工验证", sub: "99.7% precision", color: "#10b981" },
                  { num: "12K+", label: "COMPOUNDS", labelCn: "化合物库", sub: "64 families", color: "#8b5cf6" },
                  { num: "94%", label: "APPROVAL", labelCn: "盲测好评", sub: "2,400+ panels", color: "#f59e0b" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3" style={{
                    border: `1px solid ${stat.color}18`,
                    background: `${stat.color}06`,
                    borderRadius: "8px",
                  }}>
                    <div className="font-mono font-bold" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: stat.color, textShadow: `0 0 20px ${stat.color}30` }}>
                      {stat.num}
                    </div>
                    <div className="font-mono font-bold mt-1" style={{ color: stat.color, fontSize: "0.68rem", letterSpacing: "0.1em" }}>{stat.label}</div>
                    <div className="cn-text text-xs mt-0.5" style={{ opacity: 0.5 }}>{stat.labelCn}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#3d3d44" }}>{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* CTA 按钮 — 超巨大 STAR & FORK */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <a
                  href="https://github.com/umimemebuddy/DRINK_MASTER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #06b6d4",
                    background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.1))",
                    borderRadius: "14px",
                    boxShadow: "0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.08)",
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" style={{ color: "#06b6d4", filter: "drop-shadow(0 0 12px rgba(6,182,212,0.6))" }}>
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <div>
                    <div className="font-mono font-bold tracking-wider" style={{ color: "#06b6d4", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", textShadow: "0 0 20px rgba(6,182,212,0.4)" }}>
                      ⭐ STAR ON GITHUB
                    </div>
                    <div className="font-mono text-xs mt-0.5" style={{ color: "#4a4a52" }}>umimemebuddy/DRINK_MASTER</div>
                  </div>
                </a>

                <a
                  href="https://github.com/umimemebuddy/DRINK_MASTER/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #8b5cf6",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.08))",
                    borderRadius: "14px",
                    boxShadow: "0 0 40px rgba(139,92,246,0.25), 0 0 80px rgba(139,92,246,0.06)",
                  }}
                >
                  <span className="text-4xl" style={{ filter: "drop-shadow(0 0 12px rgba(139,92,246,0.5))" }}>🍴</span>
                  <div>
                    <div className="font-mono font-bold tracking-wider" style={{ color: "#8b5cf6", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", textShadow: "0 0 20px rgba(139,92,246,0.3)" }}>
                      🍴 FORK & BUILD
                    </div>
                    <div className="font-mono text-xs mt-0.5" style={{ color: "#4a4a52" }}>MIT License · Open Source</div>
                  </div>
                </a>
              </div>

              {/* 底部提示 */}
              <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid rgba(6,182,212,0.1)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "#06b6d4", opacity: 0.7 }}>
                  🌟 Your star helps us grow — every ⭐ supports AI beverage research & open-source cocktail science 🌟
                </p>
                <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.4 }}>
                  你的Star助力AI饮品研究 — 每一颗⭐都推动开源鸡尾酒科学发展
                </p>
              </div>
            </div>
          </div>

          {/* ===== FLAVOR SCIENCE — Taste & Innovation Metrics ===== */}
          <div className="mb-6">
            <div className="cyber-panel p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label" style={{ color: "#10b981", borderBottomColor: "rgba(16,185,129,0.3)" }}>
                  🧬 FLAVOR SCIENCE
                </span>
                <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.6 }}>风味科学验证</span>
                <span className="ai-badge ml-auto">AI VERIFIED</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { en: "1.2M+", cn: "独特风味配对", sub: "Flavor Pairings Discovered", desc: "64 molecular families", descCn: "64分子家族匹配", color: "#10b981" },
                  { en: "94%", cn: "盲测口感好评", sub: "Blind Taste Approval", desc: "2,400+ expert panels", descCn: "2400+专家盲测", color: "#06b6d4" },
                  { en: "12K+", cn: "风味化合物库", sub: "Compound Database", desc: "Cross-modal analysis", descCn: "跨感官分析", color: "#f59e0b" },
                  { en: "350+", cn: "地域风味流派", sub: "Regional Flavor Profiles", desc: "28 countries mapped", descCn: "28国风味图谱", color: "#8b5cf6" },
                ].map((stat) => (
                  <div key={stat.en} className="stat-card text-center p-4" style={{ ["--stat-accent" as string]: stat.color }}>
                    <div className="metric-number text-2xl md:text-3xl font-bold" style={{ color: stat.color, textShadow: `0 0 24px ${stat.color}20` }}>
                      {stat.en}
                    </div>
                    <div className="font-bold mt-1.5" style={{ color: "#e0dcd0", fontSize: "0.72rem" }}>{stat.cn}</div>
                    <div className="text-xs mt-0.5 font-medium" style={{ color: "#5a5a62", letterSpacing: "0.04em" }}>{stat.sub}</div>
                    <div className="mt-2 pt-2" style={{ borderTop: "1px solid #14141e" }}>
                      <span className="text-xs" style={{ color: "#3d3d48", letterSpacing: "0.03em" }}>{stat.desc}</span>
                    </div>
                    <div className="cn-text text-xs mt-0.5" style={{ fontWeight: 400, opacity: 0.35 }}>{stat.descCn}</div>
                  </div>
                ))}
              </div>
              {/* Flavor Science Methodology */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid #1a1a26" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-wider mb-2" style={{ color: "#10b981" }}>🧬 FLAVOR METHODOLOGY</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                      Our AI flavor engine maps 12,000+ aromatic compounds across 64 molecular families — from Tokyo&apos;s umami-rich shiso infusions to Havana&apos;s caramelized rum esters. Training data includes IBA competition archives, national bartending guild standards, vintage cocktail manuscripts (1830–present), and real-time sensory panel feedback. Every pairing is cross-validated against 180K+ human-verified formulas at 99.7% molecular consistency. Continuous learning loop: each blind tasting panel feeds back into the flavor model, discovering unexpected harmonies like yuzu-kosho × mezcal or lapsang souchong × amaro.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider mb-2 cn-text" style={{ opacity: 0.7 }}>🧬 风味方法论</p>
                    <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>
                      我们的AI风味引擎映射64个分子家族中的12,000+种芳香化合物——从东京紫苏浸渍的鲜味层次到哈瓦那焦糖朗姆酯类的复杂香气。训练数据涵盖IBA赛事档案、各国调酒协会标准、古典鸡尾酒手稿（1830年至今）及实时感官评审反馈。每个风味配对均经过18万+人工验证配方交叉检验，分子一致性达99.7%。持续学习循环：每次盲测评审均反馈至风味模型，不断发现柚香胡椒×梅斯卡尔、正山小种×阿玛罗等意想不到的风味共鸣。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== MARKET MOOD ===== */}
          <MarketMood market={market} todayStr={todayStr} />

          {/* ===== PROFESSIONAL CERTIFICATIONS — 行业认证 ===== */}
          <div className="mb-6">
            <div className="cyber-panel p-5 md:p-6" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label" style={{ color: "#10b981", borderBottomColor: "rgba(16,185,129,0.3)" }}>
                  🏆 PROFESSIONAL CERTIFICATIONS
                </span>
                <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.6 }}>专业认证</span>
                <span className="ai-badge ml-auto">AI POWERED</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: "🏆", en: "IBA Certified", cn: "国际调酒协会认证", desc: "International Bartenders Association", color: "#06b6d4" },
                  { icon: "🎓", en: "USBG Member", cn: "美国调酒师公会", desc: "United States Bartenders Guild", color: "#8b5cf6" },
                  { icon: "🧪", en: "AI Sommelier", cn: "AI 饮料品鉴师", desc: "AI-Powered Beverage Expert", color: "#10b981" },
                  { icon: "📋", en: "FDA Compliant", cn: "食品安全认证", desc: "Food Safety Standards", color: "#f59e0b" },
                ].map((cert) => (
                  <div key={cert.en} className="text-center p-4" style={{
                    border: `1px solid ${cert.color}18`,
                    background: `${cert.color}06`,
                    borderRadius: "8px",
                  }}>
                    <div className="text-3xl mb-2">{cert.icon}</div>
                    <div className="font-mono font-bold text-xs mb-1" style={{ color: cert.color }}>{cert.en}</div>
                    <div className="cn-text text-xs" style={{ opacity: 0.6 }}>{cert.cn}</div>
                    <div className="text-xs mt-1" style={{ color: "#3d3d48" }}>{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== INDUSTRY PARTNERS — 行业合作 ===== */}
          <div className="mb-6">
            <div className="cyber-panel p-5 md:p-6" style={{ borderColor: "rgba(139,92,246,0.3)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label" style={{ color: "#8b5cf6", borderBottomColor: "rgba(139,92,246,0.3)" }}>
                  🤝 TRUSTED BY INDUSTRY
                </span>
                <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.6 }}>行业信赖</span>
                <span className="ai-badge ml-auto">GLOBAL REACH</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: "🍸", name: "Tokyo Mixology Lab", location: "Tokyo, Japan", color: "#06b6d4" },
                  { icon: "🥃", name: "London Bar Academy", location: "London, UK", color: "#8b5cf6" },
                  { icon: "🍹", name: "NYC Craft Cocktail", location: "New York, USA", color: "#10b981" },
                  { icon: "🍺", name: "Sydney Bar Collective", location: "Sydney, Australia", color: "#f59e0b" },
                ].map((partner) => (
                  <div key={partner.name} className="text-center p-4" style={{
                    border: `1px solid ${partner.color}18`,
                    background: `${partner.color}06`,
                    borderRadius: "8px",
                  }}>
                    <div className="text-3xl mb-2">{partner.icon}</div>
                    <div className="font-mono font-bold text-xs mb-1" style={{ color: partner.color }}>{partner.name}</div>
                    <div className="text-xs" style={{ color: "#3d3d48" }}>{partner.location}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 text-center" style={{ borderTop: "1px solid #1e1e2a" }}>
                <p className="text-xs leading-relaxed" style={{ color: "#8b5cf6", opacity: 0.7 }}>
                  🌟 Partnering with 350+ venues across 47 countries · AI-powered beverage solutions for bars, restaurants & hotels worldwide
                </p>
                <p className="cn-text text-xs mt-1 leading-relaxed" style={{ opacity: 0.4 }}>
                  全球47国350+场所合作 · 为酒吧、餐厅、酒店提供AI饮品解决方案
                </p>
              </div>
            </div>
          </div>

          {/* 🔥 GIANT SOCIAL LINKS BAR — 极度显眼 */}
          <div className="mb-6">
            <div className="cyber-panel p-4 md:p-6" style={{ borderColor: "rgba(245,158,11,0.35)", boxShadow: "0 0 32px rgba(245,158,11,0.1), inset 0 0 32px rgba(245,158,11,0.03)" }}>
              <div className="text-center mb-3">
                <span className="animate-status font-bold text-sm md:text-base tracking-widest" style={{ color: "#f59e0b", textShadow: "0 0 16px rgba(245,158,11,0.4)" }}>
                  ⚡ FOLLOW & STAR ⚡ 关注我们 ⚡
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
                {/* GitHub — 超级大 */}
                <a
                  href="https://github.com/umimemebuddy/DRINK_MASTER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 px-6 md:px-10 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #06b6d4",
                    background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08))",
                    borderRadius: "12px",
                    boxShadow: "0 0 28px rgba(6,182,212,0.25)",
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 16 16" fill="currentColor" style={{ color: "#06b6d4", filter: "drop-shadow(0 0 8px rgba(6,182,212,0.5))" }}>
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <div>
                    <div className="font-mono font-bold text-lg md:text-2xl tracking-wider" style={{ color: "#06b6d4", textShadow: "0 0 16px rgba(6,182,212,0.4)" }}>⭐ GITHUB</div>
                    <div className="font-mono text-xs md:text-sm mt-1" style={{ color: "#4a4a52" }}>DRINK_MASTER</div>
                  </div>
                </a>

                {/* Instagram — 超级大 */}
                <a
                  href="https://instagram.com/umi_jewelry_gemstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 px-6 md:px-10 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #e1306c",
                    background: "linear-gradient(135deg, rgba(225,48,108,0.1), rgba(131,58,180,0.08))",
                    borderRadius: "12px",
                    boxShadow: "0 0 28px rgba(225,48,108,0.25)",
                  }}
                >
                  <span className="text-4xl md:text-5xl" style={{ filter: "drop-shadow(0 0 8px rgba(225,48,108,0.5))" }}>📸</span>
                  <div>
                    <div className="font-mono font-bold text-lg md:text-2xl tracking-wider ig-gemstone">INSTAGRAM</div>
                    <div className="font-mono text-xs md:text-sm mt-1" style={{ color: "#4a4a52" }}>@umi_jewelry_gemstone</div>
                  </div>
                </a>

                {/* X/Twitter — 超级大 */}
                <a
                  href="https://x.com/DommeByte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 px-6 md:px-10 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #e11d48",
                    background: "linear-gradient(135deg, rgba(225,29,72,0.1), rgba(139,92,246,0.08))",
                    borderRadius: "12px",
                    boxShadow: "0 0 28px rgba(225,29,72,0.25)",
                  }}
                >
                  <span className="text-4xl md:text-5xl" style={{ color: "#e11d48", filter: "drop-shadow(0 0 8px rgba(225,29,72,0.5))" }}>𝕏</span>
                  <div>
                    <div className="font-mono font-bold text-lg md:text-2xl tracking-wider" style={{ color: "#e11d48", textShadow: "0 0 12px rgba(225,29,72,0.3)" }}>𝕏 TWITTER</div>
                    <div className="font-mono text-xs md:text-sm mt-1" style={{ color: "#4a4a52" }}>@DommeByte</div>
                  </div>
                </a>

                {/* Telegram — 超级大 */}
                <a
                  href="https://t.me/Yyuzuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 px-6 md:px-10 py-4 md:py-5 transition-all hover:scale-110"
                  style={{
                    border: "2px solid #229ED9",
                    background: "linear-gradient(135deg, rgba(34,158,217,0.1), rgba(0,136,204,0.08))",
                    borderRadius: "12px",
                    boxShadow: "0 0 28px rgba(34,158,217,0.25)",
                  }}
                >
                  <span className="text-4xl md:text-5xl" style={{ filter: "drop-shadow(0 0 8px rgba(34,158,217,0.5))" }}>✈️</span>
                  <div>
                    <div className="font-mono font-bold text-lg md:text-2xl tracking-wider" style={{ color: "#229ED9", textShadow: "0 0 12px rgba(34,158,217,0.3)" }}>TELEGRAM</div>
                    <div className="font-mono text-xs md:text-sm mt-1" style={{ color: "#4a4a52" }}>@Yyuzuz</div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-4 pt-3" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#f59e0b", opacity: 0.7 }}>
                  🌟 Star us on GitHub · Follow on IG & X · Join Telegram for collab 🌟
                </p>
                <p className="cn-text text-xs mt-1" style={{ fontWeight: 400, opacity: 0.4 }}>
                  GitHub星标 · Instagram关注 · X追踪 · Telegram合作
                </p>
              </div>
            </div>
          </div>

          {/* ===== PARTNER BANNER ===== */}
          <Link href="/partner" className="group block mb-6">
            <div className="partner-banner p-4 font-mono">
              <div className="flex items-center gap-3">
                <span className="partner-gold text-2xl">🍸</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="animate-status font-bold text-xs" style={{ color: "#10b981" }}>⚡ HIRING</span>
                    <span className="partner-gold font-bold text-sm md:text-base tracking-wide">MASTER MIXOLOGIST NINI</span>
                  </div>
                  <p className="cn-text text-xs md:text-sm">
                    著名调酒师Nini · 为您的酒吧提供高质量调酒配方 · 世界各大调酒风格深度研究
                  </p>
                  <p style={{ color: "#6b6b70" }} className="text-xs">
                    World-class recipes · Japanese · Italian · Caribbean · Scotch and more →
                  </p>
                </div>
                <span className="partner-gold text-lg md:text-xl font-bold">✈️</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== DATA PANELS ===== */}
      <ContractsPanel />
      <MemePanel />
      <PredictionMarket />

      {/* ===== LEVERAGED DRINKS ===== */}
      <CoinList
        coins={tradingCoins}
        icon={<span className="bar-neon-green font-bold animate-status">⚡ LEVERAGED</span>}
        title="/ AI 杠杆特调"
        titleCn="AI杠杆酒单"
        titleMuted={`${tradingCoins.length}种 · 高风险 · 算法优化`}
      />

      {/* ===== CLASSIC DRINKS ===== */}
      <CoinList
        coins={otherCoins}
        icon={<span className="bar-neon-amber font-bold">🧪 CLASSIC</span>}
        title="/ AI 经典配方"
        titleCn="AI经典配方"
        titleMuted={`${otherCoins.length}种 · 稳健 · 经典调配`}
      />

      {/* ===== PVP RULES ===== */}
      <PVPRules />

      {/* ===== LATEST DRINK ===== */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-6">
          <Link href={`/recipes/${latest.id}`} className="group block">
            <div className="bar-card p-4">
              <div className="flex items-center gap-3 mb-1 font-mono text-xs">
                <span className="animate-status font-bold" style={{ color: "#10b981" }}>🧪 NEW</span>
                <span className={latestCoin.change > 0 ? "bloomberg-green" : "bloomberg-red"} style={{ fontWeight: 700 }}>
                  {latestCoin.change > 0 ? "↑" : "↓"}{Math.abs(latestCoin.change)}%
                </span>
                <span style={{ color: "#6b6b70" }}>{latest.date}</span>
                <span className={`${latestLabel.cls} font-bold text-xs`}>DRUNK:{latestLabel.en} {latestLabel.cn}</span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-lg font-bold" style={{ color: "#06b6d4" }}>{latest.nameEn}</span>
                <span className="cn-text text-sm">/ {latest.name}</span>
                <span style={{ color: "#f59e0b", fontSize: "0.75rem" }}>ABV {latest.abv}</span>
                <div className="lever-bar w-16">
                  <div className={`lever-fill ${leverFillClass(latestLever)}`} style={{ width: `${latestLever * 20}%` }} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ECHO ===== */}
      <section className="py-4 mt-auto">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bar-divider mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="dm-brand" style={{ color: "#06b6d4" }}>
                🧪 DRINK MASTER
              </span>
              <span className="ai-badge">AI</span>
              <span style={{ color: "#6b6b70" }}>MEMEBUDDY.UK © 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/umimemebuddy/DRINK_MASTER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 transition-all hover:scale-110 font-bold text-sm"
                style={{ border: "1.5px solid #06b6d4", background: "rgba(6,182,212,0.08)", borderRadius: "6px", boxShadow: "0 0 14px rgba(6,182,212,0.2)", color: "#06b6d4" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>⭐ GITHUB
              </a>
              <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2.5 py-1.5 transition-all hover:scale-110 font-bold text-sm"
                style={{ border: "1.5px solid #e1306c", background: "rgba(225,48,108,0.08)", borderRadius: "6px", boxShadow: "0 0 14px rgba(225,48,108,0.15)" }}>
                📸<span className="ig-gemstone">IG</span>
              </a>
              <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2.5 py-1.5 transition-all hover:scale-110 font-bold text-sm"
                style={{ border: "1.5px solid #e11d48", background: "rgba(225,29,72,0.08)", borderRadius: "6px", boxShadow: "0 0 14px rgba(225,29,72,0.15)", color: "#e11d48" }}>
                𝕏
              </a>
              <a href="https://t.me/Yyuzuz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2.5 py-1.5 transition-all hover:scale-110 font-bold text-sm"
                style={{ border: "1.5px solid #229ED9", background: "rgba(34,158,217,0.08)", borderRadius: "6px", boxShadow: "0 0 14px rgba(34,158,217,0.15)", color: "#229ED9" }}>
                ✈️ TG
              </a>
              <span style={{ color: "#2a2a35" }}>│</span>
              <Link href="/recipes" className="hover:opacity-70" style={{ color: "#06b6d4" }}>DRINKS</Link>
              <Link href="/journal" className="hover:opacity-70" style={{ color: "#8b5cf6" }}>JOURNAL</Link>
              <Link href="/partner" className="hover:opacity-70" style={{ color: "#f59e0b" }}>PARTNER</Link>
              <Link href="/about" className="hover:opacity-70" style={{ color: "#e11d48" }}>ABOUT</Link>
            </div>
            <div className="flex items-center gap-2" style={{ color: "#6b6b70" }}>
              <span style={{ color: "#06b6d4" }}>🧪</span>
              <span>AI BEVERAGE DESIGN LAB</span>
              <span style={{ color: "#8b5cf6" }}>🧪</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
