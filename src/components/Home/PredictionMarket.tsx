import { coinData } from "@/components/Home/TickerBar";
import Link from "next/link";

/* ── 预测市场：纯计算派生，零外部依赖 ── */
interface Prediction {
  id: string;
  symbol: string;
  nameEn: string;
  name: string;
  question: string;
  questionCn: string;
  yesPrice: number;   // 0-100 cents
  noPrice: number;
  volume: string;
  deadline: string;
  lever: number;
}

/* Fun prediction questions — meme + booze crossover */
const QUESTIONS = [
  { en: "Will $BULL reach ×100 by Friday?", cn: "$BULL周五能×100吗？" },
  { en: "Is $BEAR going to zero tonight?", cn: "$BEAR今晚归零吗？" },
  { en: "Will LIQUIDATION rate exceed 80%?", cn: "清算率会超过80%吗？" },
  { en: "SHORT SQUEEZE before midnight?", cn: "午夜前会逼空吗？" },
  { en: "ARBITRAGE profit > 5% this week?", cn: "本周套利利润>5%？" },
  { en: "PUMP then DUMP within 24h?", cn: "24小时内先拉后砸？" },
  { en: "DIAMOND HANDS survive the dip?", cn: "钻石手能撑住回调吗？" },
  { en: "RUG PULL alert triggered today?", cn: "今日触发抽地毯警报？" },
  { en: "WHALE buys > $10M this session?", cn: "巨鲸本轮买入>$10M？" },
  { en: "FOMO index hits all-time high?", cn: "FOMO指数创新高？" },
  { en: "FLASH CRASH > 50% this hour?", cn: "本小时闪崩>50%？" },
  { en: "HODL ratio exceeds 90%?", cn: "持币比例超过90%？" },
];

const YES_PRICES  = [72, 35, 88, 65, 42, 91, 57, 83, 48, 79, 93, 31];
const VOLUMES     = ["4.2M", "1.8M", "8.5M", "2.3M", "960K", "6.7M", "3.1M", "5.4M", "1.1M", "7.8M", "12M", "780K"];
const DEADLINES   = ["FRI", "TONIGHT", "24H", "MIDNIGHT", "7D", "24H", "3D", "TODAY", "SESSION", "NOW", "1H", "30D"];

const predictions: Prediction[] = coinData.filter(c => c.category === "trading").slice(0, 12).map((c, i) => ({
  id: c.id,
  symbol: c.symbol,
  nameEn: c.nameEn,
  name: c.name,
  question: QUESTIONS[i % QUESTIONS.length].en,
  questionCn: QUESTIONS[i % QUESTIONS.length].cn,
  yesPrice: YES_PRICES[i % YES_PRICES.length],
  noPrice: 100 - YES_PRICES[i % YES_PRICES.length],
  volume: VOLUMES[i % VOLUMES.length],
  deadline: DEADLINES[i % DEADLINES.length],
  lever: c.lever,
}));

/* Yes/No price bar — visual probability meter */
function YesBar({ yes }: { yes: number }) {
  const yesColor = yes >= 70 ? "#00ff88" : yes >= 50 ? "#ffb800" : "#ff3b3b";
  const noColor  = yes >= 70 ? "#ff3b3b" : yes >= 50 ? "#555" : "#00ff88";
  return (
    <div className="flex items-center gap-1 font-mono" style={{ fontSize: "0.6rem" }}>
      <div className="lever-bar w-24">
        <div className="lever-fill" style={{ width: `${yes}%`, background: yesColor }} />
      </div>
      <span style={{ color: yesColor, fontWeight: 700 }}>YES {yes}¢</span>
      <span style={{ color: noColor }}>NO {100 - yes}¢</span>
    </div>
  );
}

export function PredictionMarket() {
  return (
    <section className="py-4">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="bar-header flex items-center gap-2 mb-4 font-mono">
          <span className="bloomberg-purple font-bold animate-urgent">🎯 PREDICT</span>
          <span className="bloomberg-orange font-bold text-sm">/ PREDICTION MARKET</span>
          <span className="cn-text text-xs">预测市场</span>
          <span style={{ color: "#555" }} className="text-xs ml-auto">
            {predictions.length} EVENTS · YES/NO · DEADLINE
          </span>
        </div>

        {/* Prediction cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {predictions.map((p) => (
            <Link key={p.id} href={`/recipes/${p.id}`} className="group block">
              <div className="bar-card p-3">
                {/* Row 1: Question */}
                <div className="font-mono text-xs mb-1">
                  <span className="bloomberg-orange font-bold">{p.symbol}</span>
                  <span style={{ color: "#e0e0e0", fontSize: "0.7rem" }}> {p.question}</span>
                </div>
                <div className="cn-text font-mono" style={{ fontSize: "0.65rem" }}>
                  {p.questionCn}
                </div>
                {/* Row 2: Yes/No bar */}
                <div className="mt-1.5">
                  <YesBar yes={p.yesPrice} />
                </div>
                {/* Row 3: Volume + Deadline */}
                <div className="flex items-center gap-3 font-mono mt-1" style={{ fontSize: "0.6rem" }}>
                  <span style={{ color: "#ffb800" }}>VOL:{p.volume}</span>
                  <span className="bloomberg-cyan font-bold">⏰{p.deadline}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
