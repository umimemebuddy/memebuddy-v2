import { coinData } from "@/components/Home/TickerBar";
import Link from "next/link";

interface Meme {
  id: string;
  symbol: string;
  nameEn: string;
  name: string;
  memeType: string;
  heatScore: number;
  holders: number;
  change: number;
  sparkline: number[];
}

const MEME_TYPES = ["DOGE", "PEPE", "PONKE", "WIF", "BONK", "BOME", "MOG", "SPX", "GIGA", "NFIA", "TURBO", "MEME"];
const HEAT_BASE = [92, 78, 85, 71, 64, 97, 53, 88, 42, 99, 37, 69];

const SPARK_LINES = [
  [30, 45, 60, 80, 55, 70, 92],
  [50, 35, 65, 45, 80, 70, 78],
  [20, 40, 60, 75, 90, 65, 85],
  [70, 55, 40, 60, 50, 65, 71],
  [80, 60, 45, 55, 40, 50, 64],
  [15, 30, 50, 80, 90, 95, 97],
  [60, 50, 55, 53, 40, 45, 53],
  [40, 55, 70, 85, 90, 88, 88],
  [25, 35, 42, 38, 30, 35, 42],
  [10, 20, 50, 70, 85, 95, 99],
  [50, 45, 40, 35, 30, 37, 37],
  [55, 60, 65, 58, 50, 55, 69],
];

const memes: Meme[] = coinData.filter(c => c.category === "trading").slice(0, 12).map((c, i) => ({
  id: c.id,
  symbol: c.symbol,
  nameEn: c.nameEn,
  name: c.name,
  memeType: MEME_TYPES[i % MEME_TYPES.length],
  heatScore: HEAT_BASE[i % HEAT_BASE.length],
  holders: c.holders,
  change: c.change,
  sparkline: SPARK_LINES[i % SPARK_LINES.length],
}));

function heatColor(score: number): string {
  if (score <= 50) return "#10b981";
  if (score <= 75) return "#f59e0b";
  return "#e11d48";
}

function heatLabel(score: number): { en: string; cn: string } {
  if (score >= 90) return { en: "VIRAL", cn: "疯传" };
  if (score >= 70) return { en: "HOT", cn: "火热" };
  if (score >= 50) return { en: "WARM", cn: "升温" };
  return { en: "COLD", cn: "冷门" };
}

export function MemePanel() {
  return (
    <section className="py-4">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bar-header flex items-center gap-2 mb-4 font-mono">
          <span className="animate-status font-bold" style={{ color: "#f59e0b" }}>🧃 DRINK HEAT</span>
          <span style={{ color: "#06b6d4", fontWeight: 700, fontSize: "0.85rem" }}>/ AI FLAVOR TRENDING</span>
          <span className="cn-text text-xs">AI饮品热度</span>
          <span style={{ color: "#6b6b70" }} className="text-xs ml-auto">
            {memes.length} DRINKS · FLAVOR SCORE · SPARKLINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {memes.map((m) => {
            const hColor = heatColor(m.heatScore);
            const hLabel = heatLabel(m.heatScore);
            return (
              <Link key={m.id} href={`/recipes/${m.id}`} className="group block">
                <div className="bar-card p-3">
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span style={{ color: hColor, fontWeight: 700 }}>{m.memeType}</span>
                    <span style={{ color: hColor, fontSize: "0.6rem", fontWeight: 600 }}>
                      🔥{m.heatScore}
                    </span>
                    <span style={{ color: hColor, fontSize: "0.65rem", fontWeight: 700 }}>
                      {hLabel.en} {hLabel.cn}
                    </span>
                    <span style={{ color: m.change > 0 ? "#10b981" : "#e11d48", fontWeight: 700 }}>
                      {m.change > 0 ? "+" : ""}{m.change}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.75rem" }}>🍹 {m.nameEn}</span>
                    <span className="cn-text" style={{ fontSize: "0.65rem" }}>{m.name}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <svg width="48" height="16" viewBox="0 0 48 16" style={{ display: "block" }}>
                      <polyline
                        fill="none"
                        stroke={hColor}
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        points={m.sparkline.map((v, j) => `${(j / 6) * 48},${16 - (v / 100) * 16}`).join(" ")}
                      />
                    </svg>
                    <span style={{ color: "#6b6b70", fontSize: "0.6rem" }} className="font-mono">
                      🫧{m.holders.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
