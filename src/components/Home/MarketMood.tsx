import Link from "next/link";
import { recipes } from "@/data/recipes";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

interface MarketMoodData {
  mood: string;
  moodCn: string;
  colorKey: string;
  recipeId: string;
  change: string;
  vol: string;
  volCn: string;
  emoji: string;
}

const moods: MarketMoodData[] = [
  { mood: "BULL", moodCn: "牛市狂饮", colorKey: "green", recipeId: "bull-market", change: "+156.3%", vol: "HIGH", volCn: "高波动", emoji: "🚀" },
  { mood: "BEAR", moodCn: "熊市断片", colorKey: "red", recipeId: "bear-market-comfort", change: "-42.7%", vol: "MEDIUM", volCn: "中波动", emoji: "🩸" },
  { mood: "VOLATILE", moodCn: "震荡上头", colorKey: "orange", recipeId: "whiskey-sour", change: "±23.8%", vol: "EXTREME", volCn: "极端波动", emoji: "⚡" },
  { mood: "DEAD", moodCn: "死市无聊", colorKey: "muted", recipeId: "mojito", change: "+0.3%", vol: "LOW", volCn: "低波动", emoji: "🪦" },
  { mood: "PVP", moodCn: "PVP肉搏", colorKey: "pink", recipeId: "espresso-martini", change: "+89.1%", vol: "INSANE", volCn: "疯波动", emoji: "⚔️" },
  { mood: "REKT", moodCn: "爆仓清算", colorKey: "red", recipeId: "liquidation-blast", change: "-67.2%", vol: "HIGH", volCn: "高波动", emoji: "💀" },
  { mood: "SHORT", moodCn: "做空挤压", colorKey: "lime", recipeId: "short-squeeze", change: "+234.7%", vol: "INSANE", volCn: "疯波动", emoji: "🦈" },
  { mood: "RUG", moodCn: "被Rug了", colorKey: "purple", recipeId: "rug-pull", change: "-99.9%", vol: "HIGH", volCn: "高波动", emoji: "🪳" },
  { mood: "FOMO", moodCn: "FOMO入场", colorKey: "yellow", recipeId: "fomo-fizz", change: "+420.6%", vol: "EXTREME", volCn: "极端波动", emoji: "😱" },
  { mood: "SNIPE", moodCn: "狙击入场", colorKey: "cyan", recipeId: "sniper-entry", change: "+66.6%", vol: "MEDIUM", volCn: "中波动", emoji: "🎯" },
  { mood: "LIQ", moodCn: "爆仓警告", colorKey: "red", recipeId: "margin-call", change: "-100%", vol: "INSANE", volCn: "疯波动", emoji: "💥" },
  { mood: "HODL", moodCn: "钻石手持有", colorKey: "amber", recipeId: "diamond-hands", change: "+0.1%", vol: "LOW", volCn: "低波动", emoji: "💎" },
];

const moodColorMap: Record<string, string> = {
  green: "#00ff88", red: "#ff3b3b", orange: "#ff8c00", muted: "#555555",
  pink: "#ff2d95", lime: "#c8ff00", purple: "#b026ff", yellow: "#ffe500",
  cyan: "#00d4ff", amber: "#ffb800",
};

const recipeCache = new Map<string, typeof recipes[0]>();
function cachedRecipe(id: string): typeof recipes[0] | undefined {
  let r = recipeCache.get(id);
  if (!r) {
    const found = recipes.find(r => r.id === id);
    if (found) { recipeCache.set(id, found); r = found; }
  }
  return r;
}

const tradingFallback = recipes.find(r => r.category === "trading")!;

export function getMarketMood(date: Date) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const idx = seed % moods.length;
  const moodData = moods[idx];
  const recipe = cachedRecipe(moodData.recipeId) || tradingFallback;
  return { ...moodData, recipe };
}

export function MarketMood({ market, todayStr }: { market: ReturnType<typeof getMarketMood>; todayStr: string }) {
  const color = moodColorMap[market.colorKey] || "#ff8c00";
  const recipe = market.recipe;
  const lever = abvToLever(recipe.abv);
  const leverInfo = leverLabel(lever);

  return (
    <div className="mb-6">
      <div className="bar-card px-4 py-3 mb-2">
        {/* Mood header — bar sign style */}
        <div className="flex items-center justify-between mb-3" style={{ borderBottom: "1px solid #ff8c0020", paddingBottom: "8px" }}>
          <div className="flex items-center gap-3">
            <span style={{ color: "#ffb800" }}>🥃 BAR MOOD</span>
            <span className="font-mono text-xl font-bold bar-neon" style={{ color }}>
              {market.mood}
            </span>
            <span className="cn-text font-mono" style={{ fontSize: "0.9rem" }}>{market.moodCn}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="bloomberg-red animate-urgent">●</span>
            <span style={{ color: "#ffb800" }}>{todayStr}</span>
            <span style={{ color: "#555" }}>TRADING DAY</span>
          </div>
        </div>

        {/* Market data — leverage + volatility */}
        <div className="flex items-center gap-4 font-mono text-sm mb-3">
          <span className={market.change.startsWith("-") ? "bloomberg-red" : market.change.startsWith("±") ? "bloomberg-yellow" : "bloomberg-green"} style={{ fontWeight: 700, fontSize: "1.3rem" }}>
            {market.change}
          </span>
          <span style={{ color: "#333" }}>│</span>
          <span className="bloomberg-amber font-bold">VOL:{market.vol}</span>
          <span className="cn-text" style={{ fontSize: "0.8rem" }}>{market.volCn}</span>
          <span style={{ color: "#333" }}>│</span>
          <span className={`${leverInfo.cls} font-bold`}>LEVER ×{lever}</span>
          <span className="cn-text" style={{ fontSize: "0.8rem" }}>{leverInfo.cn}</span>
        </div>

        {/* Lever bar visual */}
        <div className="lever-bar mb-3">
          <div className={`lever-fill ${leverFillClass(lever)}`} style={{ width: `${lever * 20}%` }} />
        </div>

        {/* Recommended drink */}
        <div className="flex items-center gap-3 font-mono">
          <span className="bloomberg-lime animate-urgent text-xs font-bold px-2 py-0.5" style={{ border: "1px solid #c8ff00" }}>🥃 DRINK NOW</span>
          <Link href={`/recipes/${recipe.id}`} className="bloomberg-orange text-base font-bold hover:opacity-80 transition-opacity">
            → {recipe.nameEn}
          </Link>
          <span className="cn-text" style={{ fontSize: "0.85rem" }}>/ {recipe.name}</span>
          <span className="bloomberg-amber text-xs">ABV {recipe.abv}</span>
          <span style={{ color: "#555", fontSize: "0.75rem" }}>{recipe.glassEn}</span>
        </div>
      </div>
    </div>
  );
}
