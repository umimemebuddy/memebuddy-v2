import { recipes } from "@/data/recipes";
import { abvToLever } from "@/lib/lever";

const CHANGES = [156.3, -23.7, 42.8, -67.2, 89.1, 420.6, -99.9, 234.7, 66.6, 13.3, -42.7, 0.3, 12.5, 45.0, -31.4, 78.9, 5.2, 100.0, -15.8, 31.4];

const abvCache = new Map<string, string>();
function cachedAbv(id: string): string | undefined {
  if (!abvCache.has(id)) {
    const r = recipes.find(r => r.id === id);
    if (r) abvCache.set(id, r.abv);
  }
  return abvCache.get(id);
}

export const coinData = recipes.map((r, i) => ({
  id: r.id,
  symbol: r.nameEn.split(" ").map(w => w[0]).join("").toUpperCase(),
  nameEn: r.nameEn,
  name: r.name,
  category: r.category,
  change: CHANGES[i % 20],
  mcap: `${(parseFloat(r.abv.replace("~","").replace("%","")) * 3.7).toFixed(1)}M`,
  holders: Math.floor(r.ingredients.length * 1337),
  lever: abvToLever(r.abv),
}));

export function TickerBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "#08080a", borderColor: "#ff8c0020" }}>
      <div className="ticker-wrap py-1.5">
        <div className="ticker-content font-mono text-xs">
          {[...coinData.slice(0, 10), ...coinData.slice(0, 10)].map((coin, idx) => (
            <span key={`${coin.id}-${idx}`} className="inline-flex items-center gap-2 mx-4">
              <span className="bloomberg-orange font-bold">{coin.symbol}</span>
              <span className={coin.change > 0 ? "bloomberg-green" : "bloomberg-red"} style={{ fontWeight: 700 }}>
                {coin.change > 0 ? "+" : ""}{coin.change}%
              </span>
              <span style={{ color: "#ffb800", fontSize: "0.7rem" }}>🥃{cachedAbv(coin.id)}</span>
              <span style={{ color: "#555", fontSize: "0.65rem" }}>×{coin.lever}L</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
