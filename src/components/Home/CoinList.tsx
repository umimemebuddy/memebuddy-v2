import Link from "next/link";
import { recipes } from "@/data/recipes";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

const tradingTagColors: Record<string, string> = {
  "bull-market": "#00ff88", "bear-market-comfort": "#ff3b3b", "liquidation-blast": "#ff3b3b",
  "short-squeeze": "#c8ff00", "arbitrage-illusion": "#00d4ff", "stop-loss-sour": "#ff8c00",
  "pump-and-dump": "#b026ff", "margin-call": "#ff3b3b", "diamond-hands": "#ffb800",
  "rug-pull": "#b026ff", "whale-watcher": "#00d4ff", "fomo-fizz": "#ffe500",
  "cold-rug-recovery": "#00ff88", "leverage-tequila": "#ff3b3b", "flash-crash": "#ff3b3b",
  "hodl-highball": "#00ff88", "blood-bath-bloody-mary": "#ff3b3b", "paper-hand-punch": "#555555",
  "sniper-entry": "#00d4ff", "gwei-gin-tonic": "#b026ff",
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
      <div className="max-w-4xl mx-auto px-6">
        <div className="bar-header flex items-center gap-3 font-mono text-sm mb-2">
          {icon}
          <span style={{ color: "#e0e0e0" }}>{title}</span>
          {titleCn && <span className="cn-text" style={{ fontSize: "0.8rem" }}>{titleCn}</span>}
          <span style={{ color: "#555", fontSize: "0.75rem" }}>{titleMuted}</span>
        </div>

        {/* Column headers — bar menu style */}
        <div className="flex items-center gap-2 font-mono text-xs py-1" style={{ color: "#555", borderBottom: "1px solid #ff8c0020" }}>
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
          const tagColor = tradingTagColors[coin.id] || (isUp ? "#00ff88" : "#ff3b3b");
          const lever = recipe ? abvToLever(recipe.abv) : 2;
          const leverInfo = leverLabel(lever);
          return (
            <Link key={coin.id} href={`/recipes/${coin.id}`} className="group block">
              <div
                className="flex items-center gap-2 py-2 font-mono hover-bar"
                style={{ borderBottom: "1px solid #ff8c0010" }}
              >
                <span className="text-xs tabular-nums" style={{ color: "#555", minWidth: "1.5rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold" style={{ color: tagColor, minWidth: "2.5rem" }}>
                  {coin.symbol}
                </span>
                <span className="text-sm truncate" style={{ color: "#e0e0e0", flex: 1 }}>
                  {coin.nameEn} <span className="cn-text" style={{ fontSize: "0.8rem" }}>/ {coin.name}</span>
                </span>
                <span className={`text-sm font-bold tabular-nums ${isUp ? "bloomberg-green" : "bloomberg-red"}`} style={{ minWidth: "4.5rem", textAlign: "right" }}>
                  {isUp ? "+" : ""}{coin.change}%
                </span>
                <span className="bloomberg-amber text-xs tabular-nums" style={{ minWidth: "2.5rem", textAlign: "right" }}>
                  {recipe?.abv}
                </span>
                {/* Lever indicator */}
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
