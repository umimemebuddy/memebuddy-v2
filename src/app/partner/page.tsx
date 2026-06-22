export default function PartnerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#08080a" }}>
      {/* ===== HERO — Full-screen neon invitation ===== */}
      <section className="py-16 flex-1 flex flex-col items-center justify-center partner-hero">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Neon headline */}
          <div className="mb-6">
            <div className="font-mono text-xs mb-4 animate-urgent" style={{ color: "#ffb800" }}>
              ▸ PARTNERSHIP INVITATION ▸ 招商邀请 ▸
            </div>
            <h1 className="font-mono font-bold tracking-tighter leading-none mb-3">
              <span className="bar-neon bar-neon-orange text-5xl md:text-7xl">NINI</span>
            </h1>
            <h2 className="font-mono text-xl md:text-3xl font-bold mb-2">
              <span className="partner-gold">MASTER MIXOLOGIST</span>
            </h2>
            <p className="cn-text text-lg md:text-xl font-bold">
              世界级调酒师 · 为您的酒吧注入灵魂
            </p>
            <p className="font-mono text-sm mt-1" style={{ color: "#e0e0e0" }}>
              World-Class Mixologist · Infuse Your Bar With Spirit
            </p>
          </div>

          {/* Sparkline divider */}
          <div className="partner-divider my-8" />

          {/* Nini profile card */}
          <div className="partner-card p-6 md:p-8 mb-8">
            <div className="font-mono mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="partner-gold text-2xl font-bold">🍸</span>
                <span className="partner-gold text-lg md:text-xl font-bold tracking-wide">NINI&apos;S CRAFT</span>
                <span className="cn-text text-sm">调酒之道</span>
              </div>
            </div>

            {/* Philosophy — bilingual */}
            <div className="space-y-4 text-left font-mono">
              <div className="partner-highlight p-4">
                <p className="cn-text text-sm md:text-base mb-1">
                  Nini — 著名调酒师，足迹遍布世界各大调酒文化重镇。
                </p>
                <p style={{ color: "#e0e0e0" }} className="text-xs md:text-sm">
                  Nini is a renowned mixologist who has traveled the world studying diverse bartending traditions.
                </p>
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
                    <div style={{ color: "#888" }} className="text-xs mt-1 hidden md:block">{r.style}</div>
                    <div className="cn-text text-xs hidden md:block" style={{ fontWeight: 400, color: "#ff8c0080" }}>{r.styleCn}</div>
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
                <p style={{ color: "#e0e0e0" }} className="text-sm md:text-base">
                  Nini provides high-quality cocktail recipes tailored for your bar.
                </p>
                <p className="cn-text text-sm mt-2" style={{ fontWeight: 400, color: "#ff8c0099" }}>
                  从经典到先锋 · 从东方到西方 · 每一款都是精心雕琢
                </p>
                <p style={{ color: "#888" }} className="text-xs mt-1">
                  From classic to avant-garde · From East to West · Every recipe is meticulously crafted
                </p>
              </div>
            </div>
          </div>

          {/* CTA — Telegram contact */}
          <div className="partner-cta p-6 md:p-8 text-center">
            <div className="font-mono mb-3">
              <span className="animate-urgent bloomberg-lime font-bold text-xs">⚡ EXCLUSIVE PARTNERSHIP</span>
            </div>
            <h3 className="font-mono text-2xl md:text-3xl font-bold mb-2">
              <span className="partner-gold">LET&apos;S MIX</span>
              <span style={{ color: "#333" }}>﹍</span>
              <span className="cn-text">共酿佳酿</span>
            </h3>
            <p style={{ color: "#e0e0e0" }} className="text-sm mb-4">
              Ready to elevate your bar with Nini&apos;s world-class recipes?
            </p>
            <p className="cn-text text-sm mb-6">
              准备好让 Nini 的世界级配方为您的酒吧赋能了吗？
            </p>

            {/* Telegram button */}
            <a
              href="https://t.me/Yyuzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-tg-btn inline-flex items-center gap-3 px-8 py-4 font-mono font-bold text-lg transition-transform hover:scale-105"
            >
              <span className="text-2xl">✈️</span>
              <span className="partner-gold">TELEGRAM</span>
              <span style={{ color: "#e0e0e0" }}>@Yyuzuz</span>
            </a>

            <p style={{ color: "#555" }} className="text-xs font-mono mt-4">
              Contact Nini directly on Telegram for partnership inquiries.
            </p>
            <p className="cn-text text-xs font-mono" style={{ fontWeight: 400, color: "#ff8c0060" }}>
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
            <a href="https://t.me/Yyuzuz" target="_blank" rel="noopener noreferrer" className="partner-gold font-bold hover:opacity-80">✈️ TG: @Yyuzuz</a>
            <span style={{ color: "#333" }}>│</span>
            <span className="bar-neon bar-neon-green font-bold">MEME BUDDY</span>
            <span style={{ color: "#333" }}>│</span>
            <a href="/" className="bloomberg-orange font-bold hover:opacity-80">← HOME</a>
          </div>
        </div>
      </section>
    </div>
  );
}
