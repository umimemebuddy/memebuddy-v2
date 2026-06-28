import { coinData } from "@/components/Home/TickerBar";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";
import Link from "next/link";

interface Contract {
  id: string;
  symbol: string;
  nameEn: string;
  name: string;
  type: string;
  multiplier: string;
  fundingRate: string;
  oi: string;
  expiry: string;
  lever: number;
  change: number;
}

const CONTRACT_TYPES = ["PERP", "PERP", "PERP", "FUTURE", "PERP", "FUTURE", "PERP", "PERP", "FUTURE", "PERP", "PERP", "PERP"];
const MULTIPLIERS  = ["×10", "×5", "×20", "×3", "×50", "×2", "×100", "×25", "×8", "×15", "×75", "×1"];
const FUNDING      = ["+0.01%", "-0.03%", "+0.05%", "+0.02%", "-0.08%", "+0.01%", "+0.12%", "-0.04%", "+0.03%", "-0.06%", "+0.15%", "+0.00%"];
const OI           = ["2.4M", "890K", "1.1M", "420K", "5.6M", "180K", "12M", "3.2M", "780K", "6.7M", "9.8M", "55K"];
const EXPIRIES     = ["∞", "∞", "∞", "2026.Q3", "∞", "2026.Q4", "∞", "∞", "2026.Q2", "∞", "∞", "2026.Q1"];

const contracts: Contract[] = coinData.filter(c => c.category === "trading").slice(0, 12).map((c, i) => ({
  id: c.id,
  symbol: c.symbol,
  nameEn: c.nameEn,
  name: c.name,
  type: CONTRACT_TYPES[i % CONTRACT_TYPES.length],
  multiplier: MULTIPLIERS[i % MULTIPLIERS.length],
  fundingRate: FUNDING[i % FUNDING.length],
  oi: OI[i % OI.length],
  expiry: EXPIRIES[i % EXPIRIES.length],
  lever: c.lever,
  change: c.change,
}));

export function ContractsPanel() {
  return (
    <section className="py-4">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="bar-header flex items-center gap-2 mb-4 font-mono">
          <span className="animate-status font-bold" style={{ color: "#06b6d4" }}>📜 PERP</span>
          <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.85rem" }}>/ AI SMART CONTRACTS</span>
          <span className="cn-text text-xs">AI永续合约</span>
          <span style={{ color: "#6b6b70" }} className="text-xs ml-auto">
            {contracts.length} CONTRACTS · LIVE OI · FUNDING RATE
          </span>
        </div>

        {/* Contract cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {contracts.map((ct) => {
            const lbl = leverLabel(ct.lever);
            const fundingColor = ct.fundingRate.startsWith("+") ? "#10b981" : ct.fundingRate.startsWith("-") ? "#e11d48" : "#6b6b70";
            return (
              <Link key={ct.id} href={`/recipes/${ct.id}`} className="group block">
                <div className="bar-card p-3">
                  <div className="flex items-center gap-2 font-mono text-xs mb-1">
                    <span style={{ color: "#f59e0b", fontWeight: 700 }}>{ct.symbol}</span>
                    <span style={{ color: "#06b6d4", fontWeight: 700, fontSize: "0.65rem" }}>
                      {ct.type === "PERP" ? "∞ PERP" : ct.expiry}
                    </span>
                    <span className={`${lbl.cls} font-bold`} style={{ fontSize: "0.65rem" }}>
                      {ct.multiplier}
                    </span>
                    <span style={{ color: ct.change > 0 ? "#10b981" : "#e11d48", fontWeight: 700 }}>
                      {ct.change > 0 ? "+" : ""}{ct.change}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span style={{ color: "#06b6d4", fontWeight: 700, fontSize: "0.75rem" }}>{ct.nameEn}</span>
                    <span className="cn-text" style={{ fontSize: "0.65rem" }}>{ct.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono mt-1" style={{ fontSize: "0.6rem" }}>
                    <span style={{ color: fundingColor, fontWeight: 600 }}>F:{ct.fundingRate}</span>
                    <span style={{ color: "#f59e0b" }}>OI:{ct.oi}</span>
                    <div className="lever-bar w-12">
                      <div className={`lever-fill ${leverFillClass(ct.lever)}`} style={{ width: `${ct.lever * 20}%` }} />
                    </div>
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
