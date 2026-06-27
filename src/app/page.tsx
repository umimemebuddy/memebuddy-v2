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
    <div className="min-h-screen flex flex-col" style={{ background: "#050510" }}>
      {/* ===== TICKER BAR ===== */}
      <TickerBar />

      {/* ===== HERO — Cyber Terminal Header ===== */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">

          {/* Cyber Brand Header */}
          <div className="mb-4 cyber-panel p-6">
            <div className="flex items-center gap-2 mb-4" style={{ color: "#4a5568", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
              <span style={{ color: "#00e5ff" }}>◈</span>
              <span>DRINK_MASTER v2.4 // PROFESSIONAL BEVERAGE DESIGN LAB</span>
              <span className="animate-urgent" style={{ color: "#00f5d4" }}>● ONLINE</span>
            </div>
            <h1 className="dm-brand leading-none mb-2">
              <span className="text-5xl md:text-8xl font-bold" style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.25)" }}>DRINK</span>
              <span className="text-5xl md:text-8xl font-bold" style={{ color: "#1e2a45" }}>_</span>
              <span className="text-5xl md:text-8xl font-bold" style={{ color: "#7c3aed", textShadow: "0 0 20px rgba(124,58,237,0.25)" }}>MASTER</span>
            </h1>
            <div className="font-mono text-sm mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="dm-tagline">PROFESSIONAL DRINK DESIGN</span>
              <span style={{ color: "#1e2a45" }}>│</span>
              <span style={{ color: "#5a6d8a" }}>专业饮料配方设计</span>
              <span style={{ color: "#1e2a45" }}>│</span>
              <span style={{ color: "#5a6d8a" }}>{todayStr}</span>
              <span style={{ color: "#1e2a45" }}>│</span>
              <span className="animate-urgent font-bold" style={{ color: "#00f5d4" }}>SYS:OK</span>
            </div>
            {/* Tagline */}
            <div className="mt-4 pt-3" style={{ borderTop: "1px solid #1e2a45" }}>
              <p className="font-mono text-sm" style={{ color: "#00e5ff" }}>
                <span style={{ color: "#4a5568" }}>{">"}</span> 酒精是杠杆。醉意是风险。每杯酒都是一次交易。
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: "#5a6d8a" }}>
                <span style={{ color: "#4a5568" }}>{">"}</span> Alcohol is leverage. Intoxication is risk. Every drink is a trade.
              </p>
            </div>
          </div>

          {/* ===== MARKET MOOD ===== */}
          <MarketMood market={market} todayStr={todayStr} />

          {/* Quick Links Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Social Links */}
            <a
              href="https://instagram.com/umi_jewelry_gemstone"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-gemstone-box inline-flex items-center gap-2 px-4 py-2 font-mono font-bold text-sm transition-opacity hover:opacity-80"
            >
              <span className="ig-gemstone text-base">💎</span>
              <span className="ig-gemstone font-bold">umi_jewelry_gemstone</span>
            </a>
            <a
              href="https://x.com/DommeByte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono font-bold text-sm transition-opacity hover:opacity-80"
              style={{ border: "1px solid #7c3aed", background: "#0a0a1a" }}
            >
              <span style={{ color: "#f72585" }}>𝕏</span>
              <span style={{ color: "#7c3aed" }}>DommeByte</span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/umimemebuddy/DRINK_MASTER"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link py-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              DRINK_MASTER
            </a>
          </div>

          {/* ===== PARTNER BANNER ===== */}
          <Link href="/partner" className="group block mb-6">
            <div className="partner-banner p-4 font-mono">
              <div className="flex items-center gap-3">
                <span className="partner-gold text-2xl">🍸</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="animate-urgent bloomberg-lime font-bold text-xs">⚡ HIRING</span>
                    <span className="partner-gold font-bold text-sm md:text-base tracking-wide">MASTER MIXOLOGIST NINI</span>
                  </div>
                  <p className="cn-text text-xs md:text-sm">
                    著名调酒师Nini · 为您的酒吧提供高质量调酒配方 · 世界各大调酒风格深度研究
                  </p>
                  <p style={{ color: "#5a6d8a" }} className="text-xs">
                    World-class recipes · Japanese · Italian · Caribbean · Scotch and more →
                  </p>
                </div>
                <span className="partner-gold text-lg md:text-xl font-bold animate-urgent">✈️</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== DATA PANELS ===== */}
      <ContractsPanel />
      <MemePanel />
      <PredictionMarket />

      {/* ===== DEGEN DRINKS ===== */}
      <CoinList
        coins={tradingCoins}
        icon={<span className="bar-neon bar-neon-green font-bold animate-urgent">⚡ DEGEN</span>}
        title="/ LEVERAGED DRINKS"
        titleCn="杠杆酒单"
        titleMuted={`${tradingCoins.length}种高波动 · ${tradingCoins.length}种高风险 · 交易特调`}
      />

      {/* ===== CLASSIC DRINKS ===== */}
      <CoinList
        coins={otherCoins}
        icon={<span className="bar-neon bar-neon-amber font-bold">🥃 CLASSIC</span>}
        title="/ LOW-LEVER CLASSICS"
        titleCn="低杠杆经典"
        titleMuted={`${otherCoins.length}种稳健 · 低风险 · 经典调配`}
      />

      {/* ===== PVP RULES ===== */}
      <PVPRules />

      {/* ===== LATEST DRINK ===== */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link href={`/recipes/${latest.id}`} className="group block">
            <div className="bar-card p-4">
              <div className="flex items-center gap-3 mb-1 font-mono text-xs">
                <span className="animate-urgent font-bold" style={{ color: "#00f5d4" }}>🆕 NEW</span>
                <span className={latestCoin.change > 0 ? "bloomberg-green" : "bloomberg-red"} style={{ fontWeight: 700 }}>
                  {latestCoin.change > 0 ? "↑" : "↓"}{Math.abs(latestCoin.change)}%
                </span>
                <span style={{ color: "#4a5568" }}>{latest.date}</span>
                <span className={`${latestLabel.cls} font-bold text-xs`}>DRUNK:{latestLabel.en} {latestLabel.cn}</span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-lg font-bold bloomberg-cyan">{latest.nameEn}</span>
                <span className="cn-text text-sm">/ {latest.name}</span>
                <span className="bloomberg-amber text-xs">ABV {latest.abv}</span>
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="bar-divider mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="dm-brand" style={{ color: "#00e5ff", textShadow: "0 0 6px rgba(0,229,255,0.2)" }}>
                ▸ DRINK_MASTER
              </span>
              <span style={{ color: "#4a5568" }}>MEMEBUDDY.UK © 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80">💎 IG</a>
              <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="bloomberg-pink font-bold hover:opacity-80">𝕏</a>
              <Link href="/recipes" className="bloomberg-cyan font-bold hover:opacity-80">DRINKS</Link>
              <Link href="/journal" className="bloomberg-purple font-bold hover:opacity-80">JOURNAL</Link>
              <Link href="/partner" className="partner-gold font-bold hover:opacity-80 animate-urgent">✈️ PARTNER</Link>
              <Link href="/about" className="bloomberg-pink font-bold hover:opacity-80">ABOUT</Link>
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
            <div className="flex items-center gap-2" style={{ color: "#4a5568" }}>
              <span style={{ color: "#00e5ff" }}>◈</span>
              <span>PROFESSIONAL DRINK DESIGN</span>
              <span style={{ color: "#7c3aed" }}>◈</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
