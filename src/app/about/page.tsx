export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="w-24 h-24 border-2 border-neon-cyan/30 bg-neon-cyan/5 flex items-center justify-center mx-auto mb-6 animate-float animate-border-glow cyber-corners">
            <span className="text-4xl font-bold neon-text-cyan font-mono">M</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text-cyber mb-2">MEMEBUDDY</h1>
          <p className="neon-text-amber font-mono text-sm tracking-wider">TRADING × COCKTAILS × PHILOSOPHY</p>
          <p className="text-muted/60 font-mono text-xs mt-1">交易 × 调酒 × 生活哲学</p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            OUR STORY / 我们的故事
          </p>
          <div className="cyber-glass rounded-none p-8 cyber-corners">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                MemeBuddy was born from one simple idea: trading and bartending are both arts of balance.
              </p>
              <p className="text-muted/60 leading-relaxed text-sm font-mono">
                MemeBuddy 诞生于一个简单的想法：交易和调酒，本质上都是关于平衡的艺术。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The best cocktail is sweet-sour balanced — like the best trade is risk-reward dynamically balanced.
                The oldest whiskey needs time to age — like the best investment needs patience to wait.
                The most precise recipe demands every drop be exact — like position sizing demands every decision be pinpoint.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We believe trading isn't just a numbers game — it's a mindset. Bartending isn't just alcohol mixing — it's a philosophy of life.
                When the two meet, you get MemeBuddy.
              </p>
              <p className="neon-text-amber font-mono text-sm">
                Think trading over a drink. Live soberly. / 在微醺中思考交易，在清醒中品味生活。
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            CORE VALUES / 我们的理念
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="cyber-card rounded-none p-5 cyber-corners">
              <h3 className="neon-text-cyan font-mono text-sm mb-3">MINIMALISM / 简约不简单</h3>
              <p className="text-muted/70 text-sm leading-relaxed">
                Old Fashioned has only five ingredients, yet it's called "the king of cocktails." The best strategies are often the simplest.
              </p>
              <p className="text-muted/40 text-xs font-mono mt-2">古典鸡尾酒只有五种材料，却被称为"鸡尾酒之王"。最好的策略往往是最简洁的。</p>
            </div>
            <div className="cyber-card rounded-none p-5 cyber-corners">
              <h3 className="neon-text-pink font-mono text-sm mb-3">CONTINUOUS LEARNING / 持续学习</h3>
              <p className="text-muted/70 text-sm leading-relaxed">
                Bartenders always learn new recipes; traders always study new markets. Growth has no endpoint.
              </p>
              <p className="text-muted/40 text-xs font-mono mt-2">调酒师永远在学习新配方，交易者永远在研究新市场。成长没有终点。</p>
            </div>
            <div className="cyber-card rounded-none p-5 cyber-corners">
              <h3 className="neon-text-amber font-mono text-sm mb-3">DISCIPLINE & FREEDOM / 纪律与自由</h3>
              <p className="text-muted/70 text-sm leading-relaxed">
                Recipes are discipline, creativity is freedom. Trading systems are discipline, stylistic moves are freedom. Both are essential.
              </p>
              <p className="text-muted/40 text-xs font-mono mt-2">配方是纪律，创意是自由。交易系统是纪律，风格化操作是自由。两者缺一不可。</p>
            </div>
            <div className="cyber-card rounded-none p-5 cyber-corners">
              <h3 className="neon-text-green font-mono text-sm mb-3">RATIONALITY / 理性饮酒，理性交易</h3>
              <p className="text-muted/70 text-sm leading-relaxed">
                Drink responsibly. Trade wisely. Tipsy ≠ drunk. Calm ≠ cold.
              </p>
              <p className="text-muted/40 text-xs font-mono mt-2">微醺不是醉，冷静不是冷漠。</p>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="mb-16">
          <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            WHAT WE OFFER / 你能在这里找到什么
          </p>
          <div className="cyber-glass rounded-none p-8 cyber-corners">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-3 font-mono neon-text-cyan">◈</div>
                <h3 className="neon-text-cyan font-mono text-sm mb-2">COCKTAIL RECIPES / 调酒配方</h3>
                <p className="text-muted/70 text-sm">
                  From classic to creative, from beginner to master — every recipe comes with detailed steps and trading inspiration.
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3 font-mono neon-text-pink">⚡</div>
                <h3 className="neon-text-pink font-mono text-sm mb-2">TRADING THOUGHTS / 交易思考</h3>
                <p className="text-muted/70 text-sm">
                  Cocktail language decoded into trading philosophy — risk management, asset allocation, emotional control. One drink, one lesson.
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3 font-mono neon-text-amber">◉</div>
                <h3 className="neon-text-amber font-mono text-sm mb-2">REGULAR UPDATES / 定期更新</h3>
                <p className="text-muted/70 text-sm">
                  New recipes and trading notes every week. Subscribe to never miss an update.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-16">
          <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            CONTACT / 联系我们
          </p>
          <div className="cyber-card rounded-none p-6 font-mono">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-neon-cyan/30 bg-neon-cyan/5 flex items-center justify-center text-neon-cyan font-mono">
                  WEB
                </div>
                <div>
                  <p className="text-foreground font-mono text-sm">memebuddy.uk</p>
                  <p className="text-muted/30 text-xs">域名 / Domain</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-neon-pink/30 bg-neon-pink/5 flex items-center justify-center text-neon-pink font-mono text-xs">
                  @
                </div>
                <div>
                  <p className="text-foreground font-mono text-sm">hello@memebuddy.uk</p>
                  <p className="text-muted/30 text-xs">邮件 / Email</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-neon-amber/30 bg-neon-amber/5 flex items-center justify-center text-neon-amber font-mono text-xs">
                  SNS
                </div>
                <div>
                  <p className="text-foreground font-mono text-sm">@memebuddy_uk</p>
                  <p className="text-muted/30 text-xs">社交 / Social</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="cyber-glass rounded-none p-5 text-center cyber-corners">
          <p className="text-muted/30 text-xs leading-relaxed font-mono">
            DISCLAIMER: 本网站内容仅供娱乐和学习参考 / Content is for entertainment and educational reference only.<br />
            调酒配方仅供参考，请根据个人情况适量饮酒 / Cocktail recipes are reference only; drink responsibly.<br />
            交易相关内容仅为个人思考分享，不构成任何投资建议 / Trading content is personal reflection only, not investment advice.<br />
            DRINK RESPONSibly. TRADE WISELY. 🥂
          </p>
        </div>
      </div>
    </div>
  );
}
