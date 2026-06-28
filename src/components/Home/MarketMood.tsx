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
  green: "#10b981", red: "#e11d48", orange: "#f59e0b", muted: "#6b6b70",
  pink: "#e11d48", lime: "#10b981", purple: "#8b5cf6", yellow: "#fbbf24",
  cyan: "#06b6d4", amber: "#f59e0b",
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
  const color = moodColorMap[market.colorKey] || "#f59e0b";
  const recipe = market.recipe;
  const lever = abvToLever(recipe.abv);
  const leverInfo = leverLabel(lever);

  return (
    <div className="mb-6">
      <div className="bar-card px-4 py-3 mb-2">
        {/* Mood header */}
        <div className="flex items-center justify-between mb-3" style={{ borderBottom: "1px solid rgba(6,182,212,0.1)", paddingBottom: "8px" }}>
          <div className="flex items-center gap-3">
            <span style={{ color: "#06b6d4" }}>🧪 AI MOOD</span>
            <span className="font-mono text-xl font-bold" style={{ color }}>
              {market.mood}
            </span>
            <span className="cn-text font-mono" style={{ fontSize: "0.9rem" }}>{market.moodCn}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="animate-status" style={{ color: "#e11d48" }}>●</span>
            <span style={{ color: "#f59e0b" }}>{todayStr}</span>
            <span style={{ color: "#6b6b70" }}>TRADING DAY</span>
          </div>
        </div>

        {/* Market data */}
        <div className="flex items-center gap-4 font-mono text-sm mb-3">
          <span style={{
            fontWeight: 700,
            fontSize: "1.3rem",
            color: market.change.startsWith("-") ? "#e11d48" : market.change.startsWith("±") ? "#fbbf24" : "#10b981"
          }}>
            {market.change}
          </span>
          <span style={{ color: "#2a2a35" }}>│</span>
          <span style={{ color: "#f59e0b", fontWeight: 700 }}>VOL:{market.vol}</span>
          <span className="cn-text" style={{ fontSize: "0.8rem" }}>{market.volCn}</span>
          <span style={{ color: "#2a2a35" }}>│</span>
          <span className={`${leverInfo.cls} font-bold`}>LEVER ×{lever}</span>
          <span className="cn-text" style={{ fontSize: "0.8rem" }}>{leverInfo.cn}</span>
        </div>

        {/* Lever bar */}
        <div className="lever-bar mb-3">
          <div className={`lever-fill ${leverFillClass(lever)}`} style={{ width: `${lever * 20}%` }} />
        </div>

        {/* Recommended drink */}
        <div className="flex items-center gap-3 font-mono">
          <span className="animate-status text-xs font-bold px-2 py-0.5" style={{ border: "1px solid #10b981", color: "#10b981", borderRadius: "4px" }}>🧪 AI RECOMMENDS</span>
          <Link href={`/recipes/${recipe.id}`} className="text-base font-bold hover:opacity-70 transition-opacity" style={{ color: "#06b6d4" }}>
            → {recipe.nameEn}
          </Link>
          <span className="cn-text" style={{ fontSize: "0.85rem" }}>/ {recipe.name}</span>
          <span style={{ color: "#f59e0b", fontSize: "0.75rem" }}>ABV {recipe.abv}</span>
          <span style={{ color: "#6b6b70", fontSize: "0.75rem" }}>{recipe.glassEn}</span>
        </div>
      </div>
    </div>
  );
}
