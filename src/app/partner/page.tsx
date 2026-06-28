export default function PartnerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0f" }}>
      {/* ===== HERO ===== */}
      <section className="py-16 flex-1 flex flex-col items-center justify-center partner-hero">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Neon headline */}
          <div className="mb-6">
            <div className="font-mono text-xs mb-4 animate-status" style={{ color: "#d4a017" }}>
              ▸ PARTNERSHIP INVITATION ▸ 招商邀请 ▸
            </div>
            <h1 className="font-mono font-bold tracking-tighter leading-none mb-3">
              <span className="bar-neon-orange text-5xl md:text-7xl">NINI</span>
            </h1>
            <h2 className="font-mono text-xl md:text-3xl font-bold mb-2">
              <span className="partner-gold">MASTER MIXOLOGIST</span>
            </h2>
            <p className="cn-text text-lg md:text-xl font-bold">
              世界级调酒师 · 为您的酒吧注入灵魂
            </p>
            <p className="font-mono text-sm mt-1" style={{ color: "#d4d4d4" }}>
              World-Class Mixologist · Infuse Your Bar With Spirit
            </p>
          </div>

          {/* Sparkline divider */}
          <div className="partner-divider my-8" />

          {/* Nini profile card */}
          <div className="partner-card p-6 md:p-8 mb-8" style={{ boxShadow: "0 4px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,158,11,0.05)" }}>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="partner-gold text-2xl font-bold">🍸</span>
                <span className="partner-gold text-lg md:text-xl font-bold tracking-wider">NINI&apos;S CRAFT</span>
                <span className="font-bold tracking-wider" style={{ fontSize: "0.75rem", opacity: 0.5 }}>调酒之道</span>
              </div>
              <div className="thin-divider" />
            </div>

            {/* Data Badge — stat-card style */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { en: "2.4M+", cn: "配方数据库", sub: "47 Countries", sub2: "47国来源", color: "#f59e0b" },
                { en: "180K+", cn: "人工验证", sub: "Human-Verified", sub2: "专家审核", color: "#10b981" },
                { en: "1.2M+", cn: "独特风味配对", sub: "64 Molecular Families", sub2: "64分子家族", color: "#06b6d4" },
              ].map((s) => (
                <div key={s.en} className="stat-card text-center p-3" style={{ ["--stat-accent" as string]: s.color }}>
                  <div className="metric-number text-lg font-bold" style={{ color: s.color, textShadow: `0 0 16px ${s.color}15` }}>{s.en}</div>
                  <div className="font-bold mt-1" style={{ color: "#e0dcd0", fontSize: "0.68rem" }}>{s.cn}</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: "#5a5a62" }}>{s.sub}</div>
                  <div className="cn-text text-xs mt-1" style={{ fontWeight: 400, opacity: 0.3 }}>{s.sub2}</div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="space-y-4 text-left">
              <div className="partner-highlight p-5" style={{ borderRadius: "8px" }}>
                <p className="cn-text leading-relaxed mb-2" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e0dcd0" }}>
                  Nini — 国际著名调酒师，足迹遍布全球47国、六大洲调酒文化重镇。基于 <span style={{ color: "#f59e0b" }}>240万+全球配方数据</span>，经过18万+人工验证配方的严谨研究，融合IBA国际标准与本地化创新。
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#9a9688" }}>
                  Nini is an internationally renowned mixologist whose expertise spans 47 countries across 6 continents. Drawing from a proprietary corpus of <span className="font-bold" style={{ color: "#f59e0b" }}>2.4M+ AI-curated recipes</span> — the world&apos;s largest verified cocktail dataset — with 180K+ formulas validated by certified mixologists. Nini bridges IBA international standards with hyper-local innovation, delivering precision-crafted recipes that have driven proven results in 350+ venues worldwide.
                </p>
              </div>
              {/* Flavor Craftsmanship */}
              <div className="pro-card p-5">
                <p className="font-bold tracking-wider mb-3" style={{ color: "#d4a017", fontSize: "0.72rem", letterSpacing: "0.08em" }}>🧬 NINI&apos;S FLAVOR CRAFT</p>
                <p className="cn-text text-xs font-bold mb-3" style={{ opacity: 0.5 }}>Nini的风味工艺</p>
                <ul className="space-y-2 text-xs" style={{ color: "#5a5a62" }}>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#d4a017" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Molecular Flavor Pairing:</span> 12,000+ compounds across 64 families matched to your local ingredients & palate profile</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#d4a017" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Cross-Cultural Fusion Science:</span> AI discovers surprising harmonies — Japanese shiso × Italian amaro, Thai galangal × Caribbean rum</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#d4a017" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Seasonal Aroma Forecasting:</span> AI predicts ingredient peak-flavor windows 6 months ahead using global harvest & climate data</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#d4a017" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Precision Sensory Calibration:</span> Every recipe tuned to 0.1% ABV tolerance; flavor balance verified by 47 master mixologists</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#d4a017" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Unexpected Pairing Discovery:</span> 1.2M+ novel flavor combinations validated — yuzu-kosho × mezcal, lapsang souchong × amaro, pandan × gin</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                  <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>
                    分子风味配对 · 跨文化融合科学 · 季节性香气预测 · 精密感官校准 · 120万+新奇风味组合验证
                  </p>
                </div>
              </div>

              {/* Regional expertise grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { region: "JAPAN", cn: "日式", emoji: "🌸", style: "Precision · Umami · Ice Art", styleCn: "精密 · 鲜味 · 冰雕艺术" },
                  { region: "ITALY", cn: "意式", emoji: "🇮🇹", style: "Aperitivo · Negroni · Ritual", styleCn: "开胃 · 尼格罗尼 · 仪式感" },
                  { region: "CARIBBEAN", cn: "加勒比", emoji: "🌴", style: "Rum · Tropical · Freedom", styleCn: "朗姆 · 热带 · 自由" },
                  { region: "SCOTCH", cn: "苏格兰", emoji: "🥃", style: "Whisky · Peat · Heritage", styleCn: "威士忌 · 泥煤 · 传承" },
                ].map((r) => (
                  <div key={r.region} className="partner-region-card p-3 text-center">
                    <div className="text-lg mb-1">{r.emoji}</div>
                    <div className="partner-gold font-bold text-xs">{r.region}</div>
                    <div className="cn-text text-xs">{r.cn}</div>
                    <div style={{ color: "#606060" }} className="text-xs mt-1 hidden md:block">{r.style}</div>
                    <div className="cn-text text-xs hidden md:block" style={{ fontWeight: 400, color: "#d4a017", opacity: 0.7 }}>{r.styleCn}</div>
                  </div>
                ))}
              </div>

              {/* More regions */}
              <div className="flex flex-wrap justify-center gap-2 font-mono">
                {[
                  { region: "AMERICAN", cn: "美式", emoji: "🗽" },
                  { region: "FRENCH", cn: "法式", emoji: "🇫🇷" },
                  { region: "MEXICAN", cn: "墨式", emoji: "🇲🇽" },
                  { region: "KOREAN", cn: "韩式", emoji: "🇰🇷" },
                  { region: "THAI", cn: "泰式", emoji: "🇹🇭" },
                  { region: "BRAZILIAN", cn: "巴西", emoji: "🇧🇷" },
                  { region: "UK", cn: "英式", emoji: "🇬🇧" },
                  { region: "SPANISH", cn: "西式", emoji: "🇪🇸" },
                ].map((r) => (
                  <span key={r.region} className="partner-badge">
                    {r.emoji} <span className="partner-gold">{r.region}</span> <span className="cn-text">{r.cn}</span>
                  </span>
                ))}
              </div>

              {/* Core promise */}
              <div className="partner-promise p-5 text-center">
                <p className="cn-text text-base md:text-lg font-bold mb-2">
                  Nini 可以为您的酒吧提供高质量调酒配方
                </p>
                <p style={{ color: "#d4d4d4" }} className="text-sm md:text-base">
                  Nini provides high-quality cocktail recipes tailored for your bar.
                </p>
                <p className="cn-text text-sm mt-2" style={{ fontWeight: 400, color: "#d4a017", opacity: 0.7 }}>
                  从经典到先锋 · 从东方到西方 · 每一款都是精心雕琢
                </p>
                <p style={{ color: "#606060" }} className="text-xs mt-1">
                  From classic to avant-garde · From East to West · Every recipe is meticulously crafted
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 md:p-8 text-center">
            <div className="font-mono mb-3">
              <span className="animate-status font-bold text-xs" style={{ color: "#8fbc3a" }}>⚡ EXCLUSIVE PARTNERSHIP</span>
            </div>
            <h3 className="font-mono text-2xl md:text-3xl font-bold mb-2">
              <span className="partner-gold">LET&apos;S MIX</span>
              <span style={{ color: "#2a2a32" }}>﹍</span>
              <span className="cn-text">共酿佳酿</span>
            </h3>
            <p style={{ color: "#d4d4d4" }} className="text-sm mb-4">
              Ready to elevate your bar with Nini&apos;s world-class recipes?
            </p>
            <p className="cn-text text-sm mb-6">
              准备好让 Nini 的世界级风味科学为您的酒吧注入独特灵魂了吗？
            </p>

            {/* Telegram button */}
            <a
              href="https://t.me/Yyuzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-tg-btn inline-flex items-center gap-3 px-8 py-4 font-mono font-bold text-lg"
            >
              <span className="text-2xl">✈️</span>
              <span className="partner-gold">TELEGRAM</span>
              <span style={{ color: "#d4d4d4" }}>@Yyuzuz</span>
            </a>

            <p style={{ color: "#606060" }} className="text-xs font-mono mt-4">
              Contact Nini directly on Telegram for partnership inquiries.
            </p>
            <p className="cn-text text-xs font-mono" style={{ fontWeight: 400, color: "#d4a017", opacity: 0.5 }}>
              在 Telegram 上直接联系 Nini 咨询合作事宜。
            </p>
          </div>
        </div>
      </section>

      {/* Footer echo */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bar-divider mb-3" />
          <div className="flex justify-center items-center gap-4 font-mono text-xs">
            <a href="https://t.me/Yyuzuz" target="_blank" rel="noopener noreferrer" className="partner-gold font-bold hover:opacity-70">✈️ TG: @Yyuzuz</a>
            <span style={{ color: "#2a2a32" }}>│</span>
            <span className="font-bold" style={{ color: "#39ff14" }}>MEME BUDDY</span>
            <span style={{ color: "#2a2a32" }}>│</span>
            <a href="/" className="font-bold hover:opacity-70" style={{ color: "#d4a017" }}>← HOME</a>
          </div>
        </div>
      </section>
    </div>
  );
}
