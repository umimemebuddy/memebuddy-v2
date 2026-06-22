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
    <div className="min-h-screen flex flex-col amber-glow-bg" style={{ background: "#08080a" }}>
      {/* ===== TICKER BAR ===== */}
      <TickerBar />

      {/* ===== BAR SIGN — neon sign entrance feel ===== */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">

          {/* Neon bar sign */}
          <div className="mb-3">
            <h1 className="font-mono font-bold tracking-tighter leading-none">
              <span className="bar-neon bar-neon-orange text-5xl md:text-8xl">MEME</span>
              <span className="text-5xl md:text-8xl" style={{ color: "#2a1a00" }}>﹍</span>
              <span className="bar-neon bar-neon-red text-5xl md:text-8xl">BUDDY</span>
            </h1>
            <div className="font-mono text-sm mt-1 flex items-center gap-2">
              <span style={{ color: "#ffb800" }}>🥃 TRADING BAR</span>
              <span style={{ color: "#333" }}>│</span>
              <span className="cn-text">交易酒吧</span>
              <span style={{ color: "#333" }}>│</span>
              <span style={{ color: "#ffb800" }}>{todayStr}</span>
              <span style={{ color: "#333" }}>│</span>
              <span className="bar-neon bar-neon-green animate-urgent font-bold">OPEN</span>
            </div>
          </div>

          {/* ===== MARKET MOOD ===== */}
          <MarketMood market={market} todayStr={todayStr} />

          {/* Bar manifesto — trading × booze × leverage */}
          <div className="font-mono font-bold py-3 mb-4" style={{ borderBottom: "1px solid #ff8c0030" }}>
            <div className="flex items-center gap-2 text-base mb-1">
              <span className="bar-neon bar-neon-orange">BOOZE</span>
              <span style={{ color: "#333" }}>×</span>
              <span className="bar-neon bar-neon-red animate-urgent">PVP</span>
              <span style={{ color: "#333" }}>×</span>
              <span className="bar-neon bar-neon-amber">LEVERAGE</span>
            </div>
            <p className="cn-text text-sm">
              酒精是杠杆。醉意是风险。每杯酒都是一次交易。
            </p>
            <p style={{ color: "#888" }} className="text-xs font-mono mt-1">
              Alcohol is leverage. Intoxication is risk. Every drink is a trade.
            </p>
          </div>

          {/* ===== PARTNER BANNER — eye-catching recruitment entry ===== */}
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
                  <p style={{ color: "#888" }} className="text-xs">
                    World-class recipes · Japanese · Italian · Caribbean · Scotch and more →
                  </p>
                </div>
                <span className="partner-gold text-lg md:text-xl font-bold animate-urgent">✈️</span>
              </div>
            </div>
          </Link>

          {/* IG + X */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
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
              style={{ border: "1px solid #b026ff", background: "#0d0d0d" }}
            >
              <span style={{ color: "#ff2d95" }}>𝕏</span>
              <span className="bloomberg-purple">DommeByte</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTRACTS ===== */}
      <ContractsPanel />

      {/* ===== MEME HEAT MAP ===== */}
      <MemePanel />

      {/* ===== PREDICTION MARKET ===== */}
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
                <span className="bloomberg-lime animate-urgent font-bold">🆕 NEW</span>
                <span className={latestCoin.change > 0 ? "bloomberg-green" : "bloomberg-red"} style={{ fontWeight: 700 }}>
                  {latestCoin.change > 0 ? "↑" : "↓"}{Math.abs(latestCoin.change)}%
                </span>
                <span style={{ color: "#555" }}>{latest.date}</span>
                <span className={`${latestLabel.cls} font-bold text-xs`}>DRUNK:{latestLabel.en} {latestLabel.cn}</span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-lg font-bold bloomberg-orange">{latest.nameEn}</span>
                <span className="cn-text text-sm">/ {latest.name}</span>
                <span className="bloomberg-amber text-xs">ABV {latest.abv}</span>
                {/* Lever bar */}
                <div className="lever-bar w-16">
                  <div className={`lever-fill ${leverFillClass(latestLever)}`} style={{ width: `${latestLever * 20}%` }} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <section className="py-4 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bar-divider mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="bar-neon bar-neon-green font-bold">GMGN</span>
              <span style={{ color: "#555" }}>MEMEBUDDY.UK © 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone font-bold hover:opacity-80">💎 IG</a>
              <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="bloomberg-pink font-bold hover:opacity-80">𝕏</a>
              <Link href="/recipes" className="bloomberg-orange font-bold hover:opacity-80">DRINKS</Link>
              <Link href="/journal" className="bloomberg-cyan font-bold hover:opacity-80">JOURNAL</Link>
              <Link href="/partner" className="partner-gold font-bold hover:opacity-80 animate-urgent">✈️ PARTNER</Link>
              <Link href="/about" className="bloomberg-purple font-bold hover:opacity-80">ABOUT</Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="bar-neon bar-neon-orange font-bold">🥃 BOOZE</span>
              <span style={{ color: "#333" }}>×</span>
              <span className="bar-neon bar-neon-red font-bold animate-urgent">PVP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
