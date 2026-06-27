import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20" style={{ background: "#050510" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center" style={{ borderBottom: "1px solid #1e2a45", paddingBottom: "12px" }}>
          <h1 className="text-4xl font-bold mb-1 dm-brand" style={{ color: "#00e5ff", textShadow: "0 0 12px rgba(0,229,255,0.2)" }}>
            ▸ DRINK_MASTER
          </h1>
          <p style={{ color: "#5a6d8a" }} className="text-sm tracking-wider">PROFESSIONAL BEVERAGE DESIGN LAB</p>
          <p className="cn-text font-mono text-xs mt-1">专业饮料配方设计</p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #1e2a45", paddingBottom: "4px" }}>
            OUR STORY │ 我们的故事
          </p>
          <div className="terminal-card p-6">
            <div className="space-y-4">
              <p style={{ color: "#c8d6e5" }} className="leading-relaxed">
                DRINK_MASTER was born from one simple idea: great drinks deserve great design. We bring algorithmic precision to the art of mixology.
              </p>
              <p className="cn-text text-sm">
                DRINK_MASTER 诞生于一个简单的想法：优秀的饮品值得专业的设计。我们将算法精度带入调酒艺术。
              </p>
              <p style={{ color: "#c8d6e5" }} className="leading-relaxed">
                The best cocktail is sweet-sour balanced — like the best system is perfectly calibrated.
                The oldest whiskey needs time to age — like the best recipe needs iteration to perfect.
                The most precise drink demands every drop be exact — because consistency is the mark of a true professional.
              </p>
              <p style={{ color: "#c8d6e5" }} className="leading-relaxed">
                We believe bartending isn&apos;t just mixing — it&apos;s a science. Every ingredient, every ratio, every technique matters.
                DRINK_MASTER exists to elevate beverage design to its highest form.
              </p>
              <p className="font-mono text-sm" style={{ color: "#00e5ff" }}>
                Design with precision. Serve with passion. │ 用精度设计，用热情呈现。
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #1e2a45", paddingBottom: "4px" }}>
            CORE VALUES │ 核心价值
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="terminal-card p-5">
              <h3 className="font-mono text-sm mb-2" style={{ color: "#00e5ff" }}>PRECISION │ <span className="cn-text">精度至上</span></h3>
              <p style={{ color: "#5a6d8a" }} className="text-sm leading-relaxed">
                Every milliliter matters. Every second of shaking matters. We treat recipe design with algorithmic rigor.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#f0c04080" }}>每一毫升都有意义。每一次摇晃都经过计算。我们用算法般的严谨对待配方设计。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="font-mono text-sm mb-2" style={{ color: "#f72585" }}>INNOVATION │ <span className="cn-text">持续创新</span></h3>
              <p style={{ color: "#5a6d8a" }} className="text-sm leading-relaxed">
                Classics are foundations. Innovation pushes boundaries. We respect tradition while exploring the frontier.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#f0c04080" }}>经典是基础，创新是突破。我们尊重传统，更勇于探索边界。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="font-mono text-sm mb-2" style={{ color: "#7c3aed" }}>OPEN SOURCE │ <span className="cn-text">开源共享</span></h3>
              <p style={{ color: "#5a6d8a" }} className="text-sm leading-relaxed">
                Knowledge grows when shared. Our recipes and systems are open for the community to build upon.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#f0c04080" }}>知识在分享中成长。我们的配方和系统对社区开放，共同建设。</p>
            </div>
            <div className="terminal-card p-5">
              <h3 className="font-mono text-sm mb-2" style={{ color: "#00f5d4" }}>RESPONSIBILITY │ <span className="cn-text">责任为先</span></h3>
              <p style={{ color: "#5a6d8a" }} className="text-sm leading-relaxed">
                Great drinks enhance life. We promote responsible enjoyment and informed choices.
              </p>
              <p className="cn-text text-xs mt-2" style={{ fontWeight: 400, color: "#f0c04080" }}>好饮品让生活更美好。我们倡导理性享用，知情选择。</p>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #1e2a45", paddingBottom: "4px" }}>
            WHAT WE OFFER │ 服务内容
          </p>
          <div className="terminal-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#00e5ff" }}>◈</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#00e5ff" }}>RECIPE DESIGN │ <span className="cn-text">配方设计</span></h3>
                <p style={{ color: "#5a6d8a" }} className="text-sm">
                  Professional cocktail recipes with precise measurements, detailed steps, and pairing recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#7c3aed" }}>⚡</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#7c3aed" }}>MENU ENGINEERING │ <span className="cn-text">菜单工程</span></h3>
                <p style={{ color: "#5a6d8a" }} className="text-sm">
                  Data-driven menu design, ABV calibration, flavor pairing matrix, and category optimization.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#f0c040" }}>◉</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#f0c040" }}>OPEN PLATFORM │ <span className="cn-text">开放平台</span></h3>
                <p style={{ color: "#5a6d8a" }} className="text-sm">
                  Open-source on GitHub. Contribute recipes, fork our system, build your own beverage design toolkit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mb-12">
          <div className="cyber-panel p-6 text-center">
            <p style={{ color: "#5a6d8a" }} className="font-mono text-xs mb-3">▸ JOIN THE COMMUNITY</p>
            <a
              href="https://github.com/umimemebuddy/DRINK_MASTER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono font-bold text-sm transition-all"
              style={{ border: "1px solid #00e5ff", color: "#00e5ff", background: "#0a0a1a" }}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              DRINK_MASTER on GitHub
            </a>
            <p style={{ color: "#4a5568" }} className="text-xs mt-3">github.com/umimemebuddy/DRINK_MASTER</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <p className="bloomberg-cyan font-mono text-xs tracking-wider mb-4" style={{ borderBottom: "1px solid #1e2a45", paddingBottom: "4px" }}>
            CONTACT │ 联系我们
          </p>
          <div className="terminal-card p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "#00e5ff30", color: "#00e5ff", background: "#0a0a1a" }}>
                  WEB
                </div>
                <div>
                  <p style={{ color: "#c8d6e5" }} className="text-sm">memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f0c04080" }}>官网</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "#f7258530", color: "#f72585", background: "#0a0a1a" }}>
                  @
                </div>
                <div>
                  <p style={{ color: "#c8d6e5" }} className="text-sm">hello@memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f0c04080" }}>邮件</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "#f0c04030", color: "#f0c040", background: "#0a0a1a" }}>
                  SNS
                </div>
                <div>
                  <p style={{ color: "#c8d6e5" }} className="text-sm">@memebuddy_uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f0c04080" }}>社交</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="ig-gemstone-box flex items-center justify-center text-xs" style={{ width: "32px", height: "32px" }}>
                  <span className="ig-gemstone">💎</span>
                </div>
                <div>
                  <p><a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone text-sm font-bold">umi_jewelry_gemstone</a></p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f0c04080" }}>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="terminal-card p-4 text-center">
          <p style={{ color: "#4a5568" }} className="text-xs leading-relaxed">
            DISCLAIMER: 本网站内容仅供娱乐和学习参考 │ Content is for entertainment and educational reference only.<br />
            调酒配方仅供参考，请根据个人情况适量饮酒 │ Cocktail recipes are reference only; drink responsibly.<br />
            交易相关内容仅为个人思考分享，不构成任何投资建议 │ Trading content is personal reflection only, not investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
