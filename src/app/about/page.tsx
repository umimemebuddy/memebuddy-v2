export default function AboutPage() {
  return (
    <div className="min-h-screen py-20" style={{ background: "#000" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center" style={{ borderBottom: "1px solid #222", paddingBottom: "12px" }}>
          <h1 className="text-4xl font-bold bloomberg-orange mb-1 font-mono">MEMEBUDDY</h1>
          <p className="bloomberg-amber font-mono text-sm tracking-wider">TRADING × COCKTAILS × PHILOSOPHY</p>
          <p className="cn-text font-mono text-xs mt-1">交易 × 调酒 × 生活哲学</p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #222", paddingBottom: "4px" }}>
            OUR STORY │ 我们的故事
          </p>
          <div className="terminal-card p-6">
            <div className="space-y-4">
              <p style={{ color: "#e0e0e0" }} className="leading-relaxed">
                MemeBuddy was born from one simple idea: trading and bartending are both arts of balance.
              </p>
              <p className="cn-text text-sm">MemeBuddy 诞生于一个简单的想法：交易和调酒，本质上都是关于平衡的艺术。</p>
              <p style={{ color: "#e0e0e0" }} className="leading-relaxed">
                The best cocktail is sweet-sour balanced — like the best trade is risk-reward dynamically balanced.
                The oldest whiskey needs time to age — like the best investment needs patience to wait.
                The most precise recipe demands every drop be exact — like position sizing demands every decision be pinpoint.
              </p>
              <p style={{ color: "#e0e0e0" }} className="leading-relaxed">
                We believe trading isn&apos;t just a numbers game — it&apos;s a mindset. Bartending isn&apos;t just alcohol mixing — it&apos;s a philosophy of life.
                When the two meet, you get MemeBuddy.
              </p>
              <p className="bloomberg-amber font-mono text-sm">
                Think trading over a drink. Live soberly. │ 在微醺中思考交易，在清醒中品味生活。
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #222", paddingBottom: "4px" }}>
            CORE VALUES │ 我们的理念
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="terminal-card p-5">
              <h3 className="bloomberg-cyan font-mono text-sm mb-2">MINIMALISM │ <span className="cn-text">简约不简单</span></h3>
              <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                Old Fashioned has only five ingredients, yet it&apos;s called &quot;the king of cocktails.&quot; The best strategies are often the simplest.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#ff8c0080" }}>古典鸡尾酒只有五种材料，却被称为"鸡尾酒之王"。最好的策略往往是最简洁的。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="bloomberg-pink font-mono text-sm mb-2">CONTINUOUS LEARNING │ <span className="cn-text">持续学习</span></h3>
              <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                Bartenders always learn new recipes; traders always study new markets. Growth has no endpoint.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#ff8c0080" }}>调酒师永远在学习新配方，交易者永远在研究新市场。成长没有终点。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="bloomberg-amber font-mono text-sm mb-2">DISCIPLINE & FREEDOM │ <span className="cn-text">纪律与自由</span></h3>
              <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                Recipes are discipline, creativity is freedom. Trading systems are discipline, stylistic moves are freedom. Both are essential.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#ff8c0080" }}>配方是纪律，创意是自由。交易系统是纪律，风格化操作是自由。两者缺一不可。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="bloomberg-green font-mono text-sm mb-2">RATIONALITY │ <span className="cn-text">理性饮酒，理性交易</span></h3>
              <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                Drink responsibly. Trade wisely. Tipsy ≠ drunk. Calm ≠ cold.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#ff8c0080" }}>微醺不是醉，冷静不是冷漠。</p>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #222", paddingBottom: "4px" }}>
            WHAT WE OFFER │ 你能在这里找到什么
          </p>
          <div className="terminal-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl mb-2 font-mono bloomberg-cyan">◈</div>
                <h3 className="bloomberg-cyan font-mono text-sm mb-2">COCKTAIL RECIPES │ <span className="cn-text">调酒配方</span></h3>
                <p style={{ color: "#888" }} className="text-sm">
                  From classic to creative, from beginner to master — every recipe comes with detailed steps and trading inspiration.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2 font-mono bloomberg-pink">⚡</div>
                <h3 className="bloomberg-pink font-mono text-sm mb-2">TRADING THOUGHTS │ <span className="cn-text">交易思考</span></h3>
                <p style={{ color: "#888" }} className="text-sm">
                  Cocktail language decoded into trading philosophy — risk management, asset allocation, emotional control.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2 font-mono bloomberg-amber">◉</div>
                <h3 className="bloomberg-amber font-mono text-sm mb-2">REGULAR UPDATES │ <span className="cn-text">定期更新</span></h3>
                <p style={{ color: "#888" }} className="text-sm">
                  New recipes and trading notes every week. Subscribe to never miss an update.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #222", paddingBottom: "4px" }}>
            CONTACT │ 联系我们
          </p>
          <div className="terminal-card p-5 font-mono">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs" style={{ borderColor: "#00d4ff30", color: "#00d4ff", background: "#0a1a1a" }}>
                  WEB
                </div>
                <div>
                  <p className="bloomberg-white text-sm">memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#ff8c0080" }}>域名</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs" style={{ borderColor: "#ff2d9530", color: "#ff2d95", background: "#1a000a" }}>
                  @
                </div>
                <div>
                  <p className="bloomberg-white text-sm">hello@memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#ff8c0080" }}>邮件</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs" style={{ borderColor: "#ffb80030", color: "#ffb800", background: "#1a0a00" }}>
                  SNS
                </div>
                <div>
                  <p className="bloomberg-white text-sm">@memebuddy_uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#ff8c0080" }}>社交</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="ig-gemstone-box flex items-center justify-center text-xs" style={{ width: "32px", height: "32px" }}>
                  <span className="ig-gemstone">💎</span>
                </div>
                <div>
                  <p><a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone text-sm font-bold">umi_jewelry_gemstone</a></p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#ff8c0080" }}>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="terminal-card p-4 text-center">
          <p style={{ color: "#555" }} className="text-xs leading-relaxed font-mono">
            DISCLAIMER: 本网站内容仅供娱乐和学习参考 │ Content is for entertainment and educational reference only.<br />
            调酒配方仅供参考，请根据个人情况适量饮酒 │ Cocktail recipes are reference only; drink responsibly.<br />
            交易相关内容仅为个人思考分享，不构成任何投资建议 │ Trading content is personal reflection only, not investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
