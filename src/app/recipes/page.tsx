import { RecipeFilter } from "@/components/RecipeFilter";

export default function RecipesPage() {
  return (
    <div className="min-h-screen py-16 amber-glow-bg" style={{ background: "#08080a" }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header — bar menu neon sign */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="bar-neon bar-neon-orange font-mono text-xs tracking-widest font-bold">🥃 DRINK MENU</span>
            <span className="cn-text font-mono text-xs">酒单</span>
          </div>
          <h1 className="text-2xl font-bold font-mono tracking-wide">
            <span className="bar-neon bar-neon-amber">LEVERAGED COCKTAILS</span>
          </h1>
          <p style={{ color: "#888" }} className="text-xs font-mono mt-0.5">
            ABV = leverage. Intoxication = risk. Every drink is a trade.
            <span className="cn-text" style={{ fontSize: "0.75rem" }}> 酒精度=杠杆。醉意=风险。每杯酒都是一次交易。</span>
          </p>
        </div>
        <div className="bar-divider mb-6" />

        {/* Filter + List */}
        <RecipeFilter />
      </div>
    </div>
  );
}
