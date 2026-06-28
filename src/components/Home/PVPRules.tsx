const rules = [
  { n: "01", en: "Never marry your bags", cn: "山寨币不结婚", colorKey: "red" },
  { n: "02", en: "DCA is denial, not strategy", cn: "定投是否认不是策略", colorKey: "red" },
  { n: "03", en: "If it pumps, someone is dumping", cn: "涨了就是别人在砸盘", colorKey: "orange" },
  { n: "04", en: "Liquidity exits before you", cn: "流动性比你先走", colorKey: "purple" },
  { n: "05", en: "Drink first, trade later", cn: "先喝再交易", colorKey: "green" },
  { n: "06", en: "Snipe entries, not narratives", cn: "狙击入场点不是叙事", colorKey: "lime" },
  { n: "07", en: "Best trade = the one you skipped", cn: "最好的交易是没做的那个", colorKey: "cyan" },
  { n: "08", en: "Panic? Pour another round", cn: "慌了再来一杯", colorKey: "amber" },
  { n: "09", en: "Your stop-loss is your lifeline", cn: "止损是生命线", colorKey: "yellow" },
  { n: "10", en: "Diamond hands = diamond losses", cn: "钻石手=钻石亏损", colorKey: "pink" },
] as const;

const ruleColorMap: Record<string, string> = {
  red: "#e11d48",
  orange: "#f59e0b",
  purple: "#8b5cf6",
  green: "#10b981",
  lime: "#10b981",
  cyan: "#06b6d4",
  amber: "#f59e0b",
  yellow: "#fbbf24",
  pink: "#e11d48",
};

export function PVPRules() {
  return (
    <section className="py-4">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bar-divider mb-4" />

        <div className="bar-header mb-3 flex items-center gap-3">
          <span className="font-mono font-bold text-lg animate-status" style={{ color: "#e11d48" }}>⚠</span>
          <span className="gradient-text-pvp font-mono text-lg font-bold tracking-wider">DRINK BAR RULES</span>
          <span className="cn-text font-mono" style={{ fontSize: "0.8rem" }}>// AI调酒法则</span>
          <span style={{ color: "#f59e0b", fontSize: "0.7rem" }}>🥃 AI BOOZE & LEVERAGE</span>
        </div>

        <div className="space-y-0 font-mono">
          {rules.map((rule, i) => {
            const color = ruleColorMap[rule.colorKey] || "#f59e0b";
            return (
              <div key={rule.n} className="flex items-center gap-3 py-1.5 hover-bar" style={{ borderBottom: "1px solid rgba(245,158,11,0.05)" }}>
                <span className="text-sm font-bold tabular-nums" style={{ color, minWidth: "2rem" }}>
                  {rule.n}
                </span>
                <span className="text-sm" style={{ color: "#e0dcd0", flex: 1 }}>
                  {rule.en}
                </span>
                <span style={{ color: "#3d3d44" }}>│</span>
                <span className="cn-text text-sm" style={{ color }}>
                  {rule.cn}
                </span>
                <span className="text-xs" style={{ color: i < 4 ? "#e11d48" : "#10b981", opacity: 0.6 }}>
                  {i < 4 ? "🔴" : "🟢"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 font-mono text-xs" style={{ color: "#6b6b70" }}>
          <span className="font-bold" style={{ color: "#10b981" }}>DRINK MASTER</span>
          <span>│</span>
          <span className="font-bold" style={{ color: "#f59e0b" }}>AI booze over bs</span>
          <span>│</span>
          <span className="animate-status font-bold" style={{ color: "#e11d48" }}>PVP</span>
          <span>│</span>
          <span className="cn-text" style={{ fontSize: "0.75rem" }}>AI算法不退路</span>
        </div>
      </div>
    </section>
  );
}
