import Link from "next/link";
import { recipes } from "@/data/recipes";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

const tradingTagColors: Record<string, string> = {
  "bull-market": "#10b981", "bear-market-comfort": "#e11d48", "liquidation-blast": "#e11d48",
  "short-squeeze": "#10b981", "arbitrage-illusion": "#06b6d4", "stop-loss-sour": "#f59e0b",
  "pump-and-dump": "#8b5cf6", "margin-call": "#e11d48", "diamond-hands": "#f59e0b",
  "rug-pull": "#8b5cf6", "whale-watcher": "#06b6d4", "fomo-fizz": "#fbbf24",
  "cold-rug-recovery": "#10b981", "leverage-tequila": "#e11d48", "flash-crash": "#e11d48",
  "hodl-highball": "#10b981", "blood-bath-bloody-mary": "#e11d48", "paper-hand-punch": "#6b6b70",
  "sniper-entry": "#06b6d4", "gwei-gin-tonic": "#8b5cf6",
};

interface CoinData {
  id: string;
  symbol: string;
  nameEn: string;
  name: string;
  category: string;
  change: number;
  mcap: string;
  holders: number;
  lever?: number;
}

const recipeMap = new Map(recipes.map(r => [r.id, r]));

export function CoinList({ coins, title, titleCn, icon, titleMuted }: {
  coins: CoinData[];
  title: string;
  titleCn?: string;
  icon: React.ReactNode;
  titleMuted: string;
}) {
  return (
    <section className="py-4">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bar-header flex items-center gap-3 font-mono text-sm mb-2">
          {icon}
          <span style={{ color: "#e0dcd0" }}>{title}</span>
          {titleCn && <span className="cn-text" style={{ fontSize: "0.8rem" }}>{titleCn}</span>}
          <span style={{ color: "#6b6b70", fontSize: "0.75rem" }}>{titleMuted}</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs py-1" style={{ color: "#6b6b70", borderBottom: "1px solid rgba(245,158,11,0.08)" }}>
          <span style={{ minWidth: "1.5rem" }}>#</span>
          <span style={{ minWidth: "2.5rem" }}>SYM</span>
          <span style={{ flex: 1 }}>DRINK</span>
          <span style={{ minWidth: "4.5rem", textAlign: "right" }}>CHG</span>
          <span style={{ minWidth: "2.5rem", textAlign: "right" }}>ABV</span>
          <span style={{ minWidth: "3rem", textAlign: "center" }}>LEVER</span>
        </div>

        {coins.map((coin, i) => {
          const recipe = recipeMap.get(coin.id);
          const isUp = coin.change > 0;
          const tagColor = tradingTagColors[coin.id] || (isUp ? "#10b981" : "#e11d48");
          const lever = recipe ? abvToLever(recipe.abv) : 2;
          const leverInfo = leverLabel(lever);
          return (
            <Link key={coin.id} href={`/recipes/${coin.id}`} className="group block">
              <div className="flex items-center gap-2 py-2 font-mono hover-bar" style={{ borderBottom: "1px solid rgba(245,158,11,0.05)" }}>
                <span className="text-xs tabular-nums" style={{ color: "#6b6b70", minWidth: "1.5rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold" style={{ color: tagColor, minWidth: "2.5rem" }}>
                  {coin.symbol}
                </span>
                <span className="text-sm truncate" style={{ color: "#e0dcd0", flex: 1 }}>
                  🍹 {coin.nameEn} <span className="cn-text" style={{ fontSize: "0.8rem" }}>/ {coin.name}</span>
                </span>
                <span className="text-sm font-bold tabular-nums" style={{
                  minWidth: "4.5rem", textAlign: "right",
                  color: isUp ? "#10b981" : "#e11d48"
                }}>
                  {isUp ? "+" : ""}{coin.change}%
                </span>
                <span className="text-xs tabular-nums" style={{ color: "#f59e0b", minWidth: "2.5rem", textAlign: "right" }}>
                  {recipe?.abv}
                </span>
                <div className="flex items-center gap-1" style={{ minWidth: "3rem" }}>
                  <span className={`${leverInfo.cls} text-xs font-bold`}>×{lever}</span>
                  <div className="lever-bar w-10">
                    <div className={`lever-fill ${leverFillClass(lever)}`} style={{ width: `${lever * 20}%` }} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
