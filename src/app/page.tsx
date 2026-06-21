import Link from "next/link";
import { recipes } from "@/data/recipes";

const C = {
  bg: "#030306",
  bgCard: "#06060e",
  fg: "#e8e8e8",
  muted: "#444455",
  mutedDim: "#2a2a38",
  mutedFaint: "#1a1a28",
  green: "#39ff14",
  red: "#ff3b3b",
  orange: "#ff6b00",
  lime: "#c8ff00",
  yellow: "#ffe500",
  cyan: "#00f0ff",
  pink: "#ff2d95",
  purple: "#b026ff",
  amber: "#ffb800",
  border: "#0e0e1a",
  borderBright: "rgba(255,107,0,0.35)",
};

// 基于日期动态生成市场情绪
function getMarketMood(date: Date) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const tradingRecipes = recipes.filter(r => r.category === "trading");
  const moods = [
    { mood: "BULL", moodCn: "牛市狂暴", color: C.green, recipeId: "bull-market", change: "+156.3%", vol: "HIGH", volCn: "高波动", emoji: "🚀🔥📈" },
    { mood: "BEAR", moodCn: "熊市血洗", color: C.red, recipeId: "bear-market-comfort", change: "-42.7%", vol: "MEDIUM", volCn: "中波动", emoji: "🩸💀📉" },
    { mood: "VOLATILE", moodCn: "震荡求生", color: C.orange, recipeId: "whiskey-sour", change: "±23.8%", vol: "EXTREME", volCn: "极端波动", emoji: "⚡🌪️💥" },
    { mood: "DEAD", moodCn: "死市磨洋工", color: C.muted, recipeId: "mojito", change: "+0.3%", vol: "LOW", volCn: "低波动", emoji: "🪦💤🦥" },
    { mood: "PVP", moodCn: "PVP肉搏战", color: C.pink, recipeId: "espresso-martini", change: "+89.1%", vol: "INSANE", volCn: "疯波动", emoji: "⚔️🔥🩸" },
    { mood: "REKT", moodCn: "全面清算", color: C.red, recipeId: "liquidation-blast", change: "-67.2%", vol: "HIGH", volCn: "高波动", emoji: "💀🪦🩸" },
    { mood: "SHORT", moodCn: "做空挤压", color: C.lime, recipeId: "short-squeeze", change: "+234.7%", vol: "INSANE", volCn: "疯波动", emoji: "🦈⚡📈" },
    { mood: "RUG", moodCn: "被Rug了", color: C.purple, recipeId: "rug-pull", change: "-99.9%", vol: "HIGH", volCn: "高波动", emoji: "🪳💀🩸" },
    { mood: "FOMO", moodCn: "FOMO入场", color: C.yellow, recipeId: "fomo-fizz", change: "+420.6%", vol: "EXTREME", volCn: "极端波动", emoji: "😱🔥🤑" },
    { mood: "SNIPE", moodCn: "狙击入场", color: C.cyan, recipeId: "sniper-entry", change: "+66.6%", vol: "MEDIUM", volCn: "中波动", emoji: "🎯💎🔪" },
    { mood: "LIQ", moodCn: "爆仓警告", color: C.red, recipeId: "margin-call", change: "-100%", vol: "INSANE", volCn: "疯波动", emoji: "💥🩸💀" },
    { mood: "HODL", moodCn: "钻石手持有", color: C.amber, recipeId: "diamond-hands", change: "+0.1%", vol: "LOW", volCn: "低波动", emoji: "💎🙌🔥" },
  ];
  const idx = seed % moods.length;
  const moodData = moods[idx];
  const recipe = recipes.find(r => r.id === moodData.recipeId) || tradingRecipes[0];
  return { ...moodData, recipe };
}

// 配方映射为山寨币
const coinData = recipes.map((r, i) => ({
  id: r.id,
  symbol: r.nameEn.split(" ").map(w => w[0]).join("").toUpperCase(),
  nameEn: r.nameEn,
  name: r.name,
  category: r.category,
  change: [
    156.3, -23.7, 42.8, -67.2, 89.1, 420.6, -99.9, 234.7, 66.6, 13.3,
    -42.7, 0.3, 12.5, 45.0, -31.4, 78.9, 5.2, 100.0, -15.8, 31.4,
  ][i % 20],
  mcap: `${(parseFloat(r.abv.replace("~","").replace("%","")) * 3.7).toFixed(1)}M`,
  holders: Math.floor(r.ingredients.length * 1337),
}));

// 混乱的散落文字
const chaosFragments = [
  "REKT", "GM", "NGMI", "WAGMI", "BAG", "DUMP", "PUMP", "LIQ", "RUG", "APE",
  "FOMO", "YOLO", "DEGEN", "COPY", "SNIPER", "SCAM", "HODL", "LAZY", "MOON",
  "BURN", "SLAY", "FLEE", "NOPE", "CASH", "DIRT", "FUD", "MEAT",
  "GWEI", "MARGIN", "LEVERAGE", "WHALE", "SHORT", "PAPER", "DIAMOND", "PVP",
];

// 交易配方专属标签颜色
const tradingTagColors: Record<string, string> = {
  "bull-market": C.green,
  "bear-market-comfort": C.red,
  "liquidation-blast": C.red,
  "short-squeeze": C.lime,
  "arbitrage-illusion": C.cyan,
  "stop-loss-sour": C.orange,
  "pump-and-dump": C.purple,
  "margin-call": C.red,
  "diamond-hands": C.amber,
  "rug-pull": C.purple,
  "whale-watcher": C.cyan,
  "fomo-fizz": C.yellow,
  "cold-rug-recovery": C.green,
  "leverage-tequila": C.red,
  "flash-crash": C.red,
  "hodl-highball": C.green,
  "blood-bath-bloody-mary": C.red,
  "paper-hand-punch": C.muted,
  "sniper-entry": C.cyan,
  "gwei-gin-tonic": C.purple,
};

export default function Home() {
  const today = new Date();
  const market = getMarketMood(today);
  const todayStr = `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,'0')}.${String(today.getDate()).padStart(2,'0')}`;

  // 分离交易配方和其他配方
  const tradingCoins = coinData.filter(c => c.category === "trading");
  const otherCoins = coinData.filter(c => c.category !== "trading");

  return (
    <div className="min-h-screen flex flex-col relative" style={{ background: C.bg }}>
      {/* ===== CHAOS FRAGMENTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {chaosFragments.map((word, i) => {
          const x = ((i * 37 + 13) % 95);
          const y = ((i * 23 + 7) % 90);
          const size = ((i * 7 + 3) % 3) + 0.6;
          const colorsArr = [C.red, C.green, C.orange, C.pink, C.purple, C.cyan, C.lime, C.yellow];
          const color = colorsArr[i % colorsArr.length];
          const opacity = 0.04 + (i % 5) * 0.02;
          return (
            <span
              key={i}
              className="font-mono absolute animate-neon-pulse"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                fontSize: `${size}rem`,
                color,
                opacity,
                transform: `rotate(${((i * 17) % 40) - 20}deg)`,
                animationDelay: `${(i * 0.3) % 4}s`,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* ===== TICKER BAR ===== */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(3,3,6,0.95)", borderColor: C.borderBright, boxShadow: "0 0 15px rgba(255,107,0,0.2)" }}>
        <div className="ticker-wrap py-2">
          <div className="ticker-content font-mono text-sm">
            {[...coinData.slice(0, 10), ...coinData.slice(0, 10)].map((coin, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 mx-5">
                <span className="neon-text-orange font-bold">{coin.symbol}</span>
                <span className={coin.change > 0 ? "animate-price-up" : "animate-price-down"} style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  {coin.change > 0 ? "+" : ""}{coin.change}%
                </span>
                <span style={{ color: C.mutedDim, fontSize: "0.7rem" }}>MC:{coin.mcap}</span>
                <span className="neon-text-yellow" style={{ opacity: 0.6 }}>⚡</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TODAY'S MARKET MOOD ===== */}
      <section className="relative overflow-hidden" style={{ background: C.bg, paddingTop: "48px" }}>
        {/* Background chaos glows */}
        <div className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full blur-[120px] animate-bg-pulse" style={{ background: `rgba(${market.color === C.green ? '57,255,20' : market.color === C.red ? '255,59,59' : market.color === C.orange ? '255,107,0' : market.color === C.pink ? '255,45,149' : market.color === C.lime ? '200,255,0' : market.color === C.yellow ? '255,229,0' : market.color === C.cyan ? '0,240,255' : market.color === C.amber ? '255,184,0' : market.color === C.purple ? '176,38,255' : '68,68,85'},0.22)` }} />
        <div className="absolute top-10 left-0 w-[800px] h-[600px] rounded-full blur-[100px] animate-bg-pulse" style={{ background: "rgba(255,59,59,0.18)", animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[80px] animate-bg-pulse" style={{ background: "rgba(176,38,255,0.15)", animationDelay: "2s" }} />
        <div className="absolute top-40 right-10 w-[400px] h-[350px] rounded-full blur-[60px] animate-bg-pulse" style={{ background: "rgba(0,240,255,0.12)", animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-10 w-[350px] h-[200px] rounded-full blur-[50px] animate-bg-pulse" style={{ background: "rgba(255,229,0,0.10)", animationDelay: "3s" }} />
        <div className="absolute top-20 left-1/3 w-[500px] h-[300px] rounded-full blur-[70px] animate-bg-pulse" style={{ background: "rgba(255,45,149,0.14)", animationDelay: "1.5s" }} />

        <div className="scan-line" />

        <div className="relative max-w-4xl mx-auto px-6 py-6" style={{ zIndex: 5 }}>
          {/* Glitch brand */}
          <div className="mb-4 animate-fade-in-up">
            <h1
              className="text-5xl md:text-[8rem] font-bold font-mono tracking-tighter glitch-text leading-none chromatic-text"
              data-text="MEMEBUDDY"
            >
              <span className="neon-text-orange">MEME</span>
              <span style={{ color: C.mutedFaint }}>_</span>
              <span className="neon-text-red">BUDDY</span>
            </h1>
          </div>

          {/* ===== TODAY'S MARKET MOOD ===== */}
          <div className="animate-fade-in-up mb-4">
            <div className="cyber-glass p-5 md:p-6 hover-gmgn-glow" style={{ boxShadow: `0 0 40px rgba(${market.color === C.green ? '57,255,20' : market.color === C.red ? '255,59,59' : market.color === C.lime ? '200,255,0' : market.color === C.yellow ? '255,229,0' : market.color === C.cyan ? '0,240,255' : market.color === C.amber ? '255,184,0' : market.color === C.purple ? '176,38,255' : market.color === C.pink ? '255,45,149' : '255,107,0'},0.3)` }}>
              {/* Mood header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="animate-urgent font-mono text-sm font-bold" style={{ color: market.color, boxShadow: `0 0 12px ${market.color}` }}>
                    {market.emoji}
                  </span>
                  <span className="font-mono text-xl md:text-2xl font-bold animate-neon-flicker" style={{ color: market.color, textShadow: `0 0 10px ${market.color}, 0 0 20px ${market.color}, 0 0 40px ${market.color}` }}>
                    {market.mood}
                  </span>
                  <span className="font-mono text-base" style={{ color: C.muted }}>/ {market.moodCn}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="animate-urgent neon-text-red font-bold">●</span>
                  <span className="neon-text-cyan font-bold">{todayStr}</span>
                  <span style={{ color: C.muted }}>DAY</span>
                </div>
              </div>

              {/* Market data row */}
              <div className="flex items-center gap-4 font-mono text-sm mb-3">
                <span className={market.change.startsWith("-") ? "animate-price-down" : market.change.startsWith("±") ? "animate-neon-pulse" : "animate-price-up"} style={{ fontWeight: 700, fontSize: "1.4rem" }}>
                  {market.change}
                </span>
                <span className="neon-text-amber font-bold">VOL:{market.vol}</span>
                <span style={{ color: C.muted }}>{market.volCn}</span>
                <span className="neon-text-purple">FEAR:EXTREME</span>
              </div>

              {/* Recommended recipe */}
              <div className="flex items-center gap-3">
                <span className="cyber-tag-lime animate-urgent text-xs font-bold px-3 py-1">DRINK THIS</span>
                <Link href={`/recipes/${market.recipe.id}`} className="font-mono text-lg font-bold neon-text-orange hover:opacity-80 transition-opacity">
                  → {market.recipe.nameEn}
                </Link>
                <span style={{ color: C.muted }} className="font-mono text-sm">/ {market.recipe.name}</span>
                <span className="neon-text-amber font-mono text-sm">{market.recipe.abv}</span>
                <span className="font-mono text-xs" style={{ color: C.muted }}>{market.recipe.glassEn}</span>
              </div>

              {/* One-line reason */}
              <p className="font-mono text-sm mt-2" style={{ color: C.fg, opacity: 0.7 }}>
                {market.recipe.storyEn.split(".")[0]}.
              </p>
            </div>
          </div>

          {/* Manifesto */}
          <div className="animate-fade-in-up mb-2 font-mono text-base md:text-lg font-bold">
            <span className="neon-text-orange">NO</span> bullshit.
            <span className="neon-text-green">JUST</span> booze &amp;
            <span className="neon-text-red animate-neon-flicker">PVP</span>.
            <span className="neon-text-purple" style={{ opacity: 0.5 }}> 没有废话。只有酒精和PVP。</span>
          </div>

          {/* X/Twitter Link — 醒目绚丽 */}
          <div className="animate-fade-in-up mb-3">
            <a
              href="https://x.com/DommeByte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(176,38,255,0.25), rgba(255,45,149,0.25), rgba(0,240,255,0.25))",
                border: "1px solid rgba(176,38,255,0.5)",
                borderRadius: "6px",
                boxShadow: "0 0 20px rgba(176,38,255,0.4), 0 0 40px rgba(255,45,149,0.3), 0 0 60px rgba(0,240,255,0.2)",
                textShadow: "0 0 8px #b026ff, 0 0 16px #ff2d95",
              }}
            >
              <span className="animate-neon-flicker" style={{ color: C.pink, fontSize: "1.1rem", textShadow: `0 0 8px ${C.pink}, 0 0 16px ${C.pink}` }}>𝕏</span>
              <span style={{ color: C.purple, textShadow: `0 0 6px ${C.purple}` }}>DommeByte</span>
              <span className="animate-urgent neon-text-cyan" style={{ fontSize: "0.7rem" }}>⚡</span>
            </a>
          </div>

          {/* Divider */}
          <div className="cyber-divider mt-4" />
        </div>
      </section>

      {/* ===== TRADING TOKENS — the degen list ===== */}
      <section className="py-4" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-6" style={{ zIndex: 5 }}>
          <div className="flex items-center gap-3 mb-3 font-mono text-sm">
            <span className="animate-price-up neon-text-green ticker-glow font-bold">GMGN</span>
            <span style={{ color: C.muted }}>/ DEGEN TOKENS</span>
            <span className="animate-price-down neon-text-red ticker-glow font-bold">PVP</span>
            <span style={{ color: C.mutedFaint }}>/// {tradingCoins.length}种波动 · {tradingCoins.length}种酒精 · 交易特调</span>
          </div>

          {tradingCoins.map((coin, i) => {
            const recipe = recipes.find(r => r.id === coin.id)!;
            const isUp = coin.change > 0;
            const tagColor = tradingTagColors[coin.id] || (isUp ? C.green : C.red);
            return (
              <Link key={coin.id} href={`/recipes/${coin.id}`} className="group block">
                <div
                  className={`flex items-center gap-3 py-3 border-b transition-all duration-150 ${isUp ? "hover-green-glow" : "hover-red-glow"}`}
                  style={{ borderColor: C.border, backgroundColor: i % 2 === 0 ? C.bgCard : C.bg }}
                >
                  {/* # */}
                  <span className="font-mono text-xs tabular-nums" style={{ color: tagColor, minWidth: "2rem", textShadow: `0 0 4px ${tagColor}` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Symbol badge with tag color */}
                  <span className="font-mono text-sm font-bold" style={{ color: tagColor, minWidth: "3rem", textShadow: `0 0 6px ${tagColor}` }}>
                    {coin.symbol}
                  </span>

                  {/* Name */}
                  <span className="font-mono text-sm font-semibold truncate" style={{ color: C.fg, flex: 1 }}>
                    {coin.nameEn} <span style={{ color: C.mutedDim }}>/ {coin.name}</span>
                  </span>

                  {/* Change */}
                  <span className={`font-mono text-sm font-bold tabular-nums ${isUp ? "animate-price-up" : "animate-price-down"}`} style={{ minWidth: "5rem", textAlign: "right" }}>
                    {isUp ? "+" : ""}{coin.change}%
                  </span>

                  {/* ABV */}
                  <span className="neon-text-amber font-mono text-xs tabular-nums" style={{ opacity: 0.7, minWidth: "3rem", textAlign: "right" }}>
                    {recipe.abv}
                  </span>

                  {/* Arrow */}
                  <span className="font-mono text-xs" style={{ color: tagColor, opacity: 0.5 }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== CLASSIC + OTHER TOKENS ===== */}
      <section className="py-4" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-6" style={{ zIndex: 5 }}>
          <div className="flex items-center gap-3 mb-3 font-mono text-sm">
            <span className="neon-text-purple font-bold">◈</span>
            <span style={{ color: C.muted }}>/ CLASSIC & CREATIVE</span>
            <span style={{ color: C.mutedFaint }}>/// {otherCoins.length}种经典 · 不止交易</span>
          </div>

          {otherCoins.map((coin, i) => {
            const recipe = recipes.find(r => r.id === coin.id)!;
            const isUp = coin.change > 0;
            return (
              <Link key={coin.id} href={`/recipes/${coin.id}`} className="group block">
                <div
                  className={`flex items-center gap-3 py-3 border-b transition-all duration-150 ${isUp ? "hover-green-glow" : "hover-red-glow"}`}
                  style={{ borderColor: C.border, backgroundColor: i % 2 === 0 ? C.bgCard : C.bg }}
                >
                  <span className="font-mono text-xs tabular-nums" style={{ color: C.mutedFaint, minWidth: "2rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm font-bold" style={{ color: isUp ? C.green : C.red, minWidth: "3rem" }}>
                    {coin.symbol}
                  </span>
                  <span className="font-mono text-sm font-semibold truncate" style={{ color: C.fg, flex: 1 }}>
                    {coin.nameEn} <span style={{ color: C.mutedDim }}>/ {coin.name}</span>
                  </span>
                  <span className={`font-mono text-sm font-bold tabular-nums ${isUp ? "animate-price-up" : "animate-price-down"}`} style={{ minWidth: "5rem", textAlign: "right" }}>
                    {isUp ? "+" : ""}{coin.change}%
                  </span>
                  <span className="neon-text-amber font-mono text-xs tabular-nums" style={{ opacity: 0.7, minWidth: "3rem", textAlign: "right" }}>
                    {recipe.abv}
                  </span>
                  <span className="font-mono text-xs" style={{ color: isUp ? C.green : C.red, opacity: 0.5 }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== PVP RULES ===== */}
      <section className="py-8" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-6" style={{ zIndex: 5 }}>
          <div className="cyber-divider mb-8" />

          <div className="mb-5 flex items-center gap-3">
            <span className="animate-urgent neon-text-red font-mono font-bold">⚠</span>
            <span className="gradient-text-pvp font-mono text-lg font-bold tracking-wider">PVP SURVIVAL RULES</span>
            <span className="neon-text-purple font-mono text-sm" style={{ opacity: 0.5 }}>// PVP 生存法则</span>
          </div>

          <div className="space-y-3 font-mono">
            {[
              { n: "01", en: "Never marry your bags", cn: "山寨币不结婚", color: C.red, animate: "animate-price-down" },
              { n: "02", en: "DCA is denial, not strategy", cn: "定投是否认不是策略", color: C.red, animate: "animate-price-down" },
              { n: "03", en: "If it pumps, someone is dumping", cn: "涨了就是别人在砸盘", color: C.orange, animate: "animate-neon-pulse" },
              { n: "04", en: "Liquidity exits before you", cn: "流动性比你先走", color: C.purple, animate: "animate-neon-pulse" },
              { n: "05", en: "Drink first, trade later", cn: "先喝再交易", color: C.green, animate: "animate-price-up" },
              { n: "06", en: "Snipe entries, not narratives", cn: "狙击入场点不是叙事", color: C.lime, animate: "animate-price-up" },
              { n: "07", en: "Best trade = the one you skipped", cn: "最好的交易是没做的那个", color: C.cyan, animate: "animate-price-up" },
              { n: "08", en: "Panic? Pour another round", cn: "慌了再来一杯", color: C.amber, animate: "animate-price-up" },
              { n: "09", en: "Your stop-loss is your lifeline", cn: "止损是生命线", color: C.yellow, animate: "animate-urgent" },
              { n: "10", en: "Diamond hands = diamond losses", cn: "钻石手=钻石亏损", color: C.pink, animate: "animate-neon-flicker" },
            ].map((rule, i) => (
              <div key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className={`${rule.animate} font-mono text-sm font-bold`} style={{ color: rule.color, minWidth: "2rem" }}>
                  {rule.n}
                </span>
                <span className="font-mono text-sm" style={{ color: C.fg }}>
                  {rule.en}
                </span>
                <span style={{ color: C.mutedDim }} className="font-mono text-xs">—</span>
                <span className="font-mono text-sm font-bold" style={{ color: rule.color, textShadow: `0 0 6px ${rule.color}` }}>
                  {rule.cn}
                </span>
                <span className="font-mono text-xs" style={{ color: C.mutedFaint }}>
                  {i < 4 ? "🔴" : "🟢"}
                </span>
              </div>
            ))}
          </div>

          {/* GMGN signature */}
          <div className="mt-6 flex items-center justify-center gap-3 font-mono text-sm">
            <span className="animate-price-up neon-text-green ticker-glow font-bold">GMGN</span>
            <span style={{ color: C.muted }}>·</span>
            <span className="neon-text-orange font-bold">booze over bs</span>
            <span style={{ color: C.muted }}>·</span>
            <span className="animate-price-down neon-text-red ticker-glow font-bold">PVP</span>
            <span style={{ color: C.muted }}>·</span>
            <span className="neon-text-purple font-bold">酒精不退路</span>
          </div>
        </div>
      </section>

      {/* ===== LATEST ===== */}
      <section className="py-4" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-6" style={{ zIndex: 5 }}>
          {(() => {
            const latest = recipes[recipes.length - 1];
            const latestCoin = coinData[coinData.length - 1];
            return (
              <Link href={`/recipes/${latest.id}`} className="group block">
                <div className="cyber-card p-5 hover-rainbow-glow transition-all cyber-corners">
                  <div className="flex items-center gap-3 mb-2 font-mono">
                    <span className="cyber-tag-lime animate-urgent text-xs font-bold px-3 py-1">🚀 NEW</span>
                    <span className="animate-price-up text-sm font-mono font-bold">↑{latestCoin.change}%</span>
                    <span className="neon-text-cyan text-xs" style={{ opacity: 0.6 }}>{latest.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg font-bold neon-text-orange">{latest.nameEn}</span>
                    <span style={{ color: C.muted }} className="font-mono text-sm">/ {latest.name}</span>
                    <span className="neon-text-amber font-mono text-xs">{latest.abv}</span>
                  </div>
                </div>
              </Link>
            );
          })()}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <section className="py-6 mt-auto" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-6" style={{ zIndex: 5 }}>
          <div className="cyber-divider mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="animate-price-up neon-text-green ticker-glow font-bold">GMGN</span>
              <span style={{ color: C.muted }}>MEMEBUDDY.UK © 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://x.com/DommeByte" target="_blank" rel="noopener noreferrer" className="animate-neon-flicker hover:opacity-80 transition-opacity font-bold" style={{ color: C.pink, textShadow: `0 0 6px ${C.pink}` }}>𝕏</a>
              <Link href="/recipes" className="neon-text-orange hover:opacity-80 transition-opacity font-bold">RECIPES</Link>
              <Link href="/journal" className="neon-text-cyan hover:opacity-80 transition-opacity font-bold">JOURNAL</Link>
              <Link href="/about" className="neon-text-purple hover:opacity-80 transition-opacity font-bold">ABOUT</Link>
            </div>
            <span className="animate-neon-flicker neon-text-red font-bold">NO BS · BOOZE & PVP</span>
          </div>
        </div>
      </section>
    </div>
  );
}
