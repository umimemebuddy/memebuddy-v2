import { RecipeFilter } from "@/components/RecipeFilter";

export default function RecipesPage() {
  return (
    <div className="min-h-screen py-16" style={{ background: "#0b0c10" }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold tracking-widest" style={{ color: "#06b6d4", fontSize: "0.62rem", letterSpacing: "0.15em" }}>🧪 AI DRINK MENU</span>
            <span className="font-bold tracking-wider" style={{ fontSize: "0.62rem", opacity: 0.5 }}>AI酒单</span>
            <span className="ai-badge ml-1">AI</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold dm-brand tracking-tight mb-1">
            <span style={{ color: "#06b6d4", textShadow: "0 0 30px rgba(6,182,212,0.15)" }}>AI BEVERAGE DATABASE</span>
          </h1>
          <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
            ABV = leverage. Intoxication = risk. AI-optimized drink recipes — trained on 2.4M+ formulas across 47 countries, 99.7% precision.
            <span className="cn-text ml-1" style={{ fontSize: "0.72rem", opacity: 0.5 }}>酒精度=杠杆。醉意=风险。基于47国240万+配方训练的AI优化数据库，精度99.7%。</span>
          </p>
          {/* Data Scale Bar — 药丸风格 */}
          <div className="flex flex-wrap items-center gap-2.5 mt-3">
            <span className="data-badge" style={{ color: "#f59e0b", borderColor: "rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}>
              🗄️ 2.4M+ RECIPES
            </span>
            <span className="data-badge" style={{ color: "#10b981", borderColor: "rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.04)" }}>
              ✅ 180K+ VERIFIED
            </span>
            <span className="data-badge" style={{ color: "#06b6d4", borderColor: "rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.04)" }}>
              🌐 47 COUNTRIES
            </span>
            <span className="data-badge" style={{ color: "#e11d48", borderColor: "rgba(225,29,72,0.2)", background: "rgba(225,29,72,0.04)" }}>
              🎯 99.7% PRECISION
            </span>
            <span className="font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.4 }}>全球240万配方精选 · 18万人工验证 · 47国 · 99.7%精度</span>
          </div>
          {/* Data Credibility Footer */}
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <p className="text-xs leading-relaxed" style={{ color: "#4a4a52" }}>
                <span className="font-bold" style={{ color: "#f59e0b" }}>📊 DATASET:</span> Sourced from IBA competitions, national guilds, historical manuscripts (1830–present), and 350+ partner venues. Each recipe cross-referenced with ≥3 sources. 180K+ human-verified by 47 certified mixologists. Model retrained daily.
              </p>
              <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.35 }}>
                <span className="font-bold" style={{ color: "#f59e0b" }}>📊 数据集：</span>IBA赛事、各国协会、古典手稿（1830至今）及350+合作场所。≥3源交叉验证。47国认证调酒师审核18万+配方。每日重新训练。
              </p>
            </div>
          </div>
        </div>
        <div className="bar-divider mb-6" />

        {/* Filter + List */}
        <RecipeFilter />
      </div>
    </div>
  );
}
