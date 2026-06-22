import { coinData } from "@/components/Home/TickerBar";
import Link from "next/link";

/* ── 迷因热度：纯计算派生，零外部依赖 ── */
interface Meme {
  id: string;
  symbol: string;
  nameEn: string;
  name: string;
  memeType: string;   // DOGE / PEPE / PONKE / WIF / BONK etc.
  heatScore: number;  // 0-100
  holders: number;
  change: number;
  sparkline: number[]; // 7-day mini sparkline
}

const MEME_TYPES = ["DOGE", "PEPE", "PONKE", "WIF", "BONK", "BOME", "MOG", "SPX", "GIGA", "NFIA", "TURBO", "MEME"];
const HEAT_BASE = [92, 78, 85, 71, 64, 97, 53, 88, 42, 99, 37, 69];

/* 7-day mini sparkline (normalized 0-100) */
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

/* Heat color gradient: low=#39ff14 → mid=#ffb800 → high=#ff3b3b */
function heatColor(score: number): string {
  if (score <= 50) return "#39ff14";
  if (score <= 75) return "#ffb800";
  return "#ff3b3b";
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
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="bar-header flex items-center gap-2 mb-4 font-mono">
          <span className="bloomberg-pink font-bold animate-urgent">🐸 MEME</span>
          <span className="bloomberg-orange font-bold text-sm">/ MEME HEAT MAP</span>
          <span className="cn-text text-xs">迷因热度</span>
          <span style={{ color: "#555" }} className="text-xs ml-auto">
            {memes.length} MEMES · HEAT SCORE · SPARKLINE
          </span>
        </div>

        {/* Meme cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {memes.map((m) => {
            const hColor = heatColor(m.heatScore);
            const hLabel = heatLabel(m.heatScore);
            return (
              <Link key={m.id} href={`/recipes/${m.id}`} className="group block">
                <div className="bar-card p-3">
                  {/* Row 1: Meme type + Heat badge */}
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span style={{ color: hColor, fontWeight: 700 }}>{m.memeType}</span>
                    <span style={{ color: hColor, fontSize: "0.6rem", fontWeight: 600 }}>
                      🔥{m.heatScore}
                    </span>
                    <span style={{ color: hColor, fontSize: "0.65rem", fontWeight: 700 }}>
                      {hLabel.en} {hLabel.cn}
                    </span>
                    <span className={m.change > 0 ? "bloomberg-green" : "bloomberg-red"} style={{ fontWeight: 700 }}>
                      {m.change > 0 ? "+" : ""}{m.change}%
                    </span>
                  </div>
                  {/* Row 2: Name */}
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="bloomberg-amber font-bold" style={{ fontSize: "0.75rem" }}>{m.nameEn}</span>
                    <span className="cn-text" style={{ fontSize: "0.65rem" }}>{m.name}</span>
                  </div>
                  {/* Row 3: Sparkline + Holders */}
                  <div className="flex items-center gap-3 mt-1">
                    {/* Mini sparkline using inline SVG — zero JS, zero deps */}
                    <svg width="48" height="16" viewBox="0 0 48 16" style={{ display: "block" }}>
                      <polyline
                        fill="none"
                        stroke={hColor}
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        points={m.sparkline.map((v, j) => `${(j / 6) * 48},${16 - (v / 100) * 16}`).join(" ")}
                      />
                    </svg>
                    <span style={{ color: "#888", fontSize: "0.6rem" }} className="font-mono">
                      H:{m.holders.toLocaleString()}
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
