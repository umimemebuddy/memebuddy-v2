import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20" style={{ background: "#0b0c10" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center" style={{ borderBottom: "1px solid #2a2a35", paddingBottom: "12px" }}>
          <h1 className="text-4xl font-bold mb-1 dm-brand" style={{ color: "#06b6d4" }}>
            🧪 DRINK MASTER
          </h1>
          <p style={{ color: "#6b6b70" }} className="text-sm tracking-wider">AI-POWERED BEVERAGE DESIGN LAB</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="ai-badge">AI</span>
            <span className="cn-text font-mono text-xs">AI 人工智能饮料配方设计实验室</span>
          </div>
        </div>

        {/* Data Scale — Big Data Credibility */}
        <div className="mb-10">
          <div className="cyber-panel p-6 md:p-7">
            <div className="text-center mb-5">
              <p className="section-label mx-auto" style={{ color: "#f59e0b", borderBottomColor: "rgba(245,158,11,0.3)" }}>📊 DATA AT SCALE</p>
              <p className="cn-text text-xs font-bold mt-1" style={{ opacity: 0.5 }}>规模化数据能力</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { en: "2.4M+", cn: "配方数据总量", sub: "Recipe Corpus", desc: "47 countries sourced", descCn: "47国来源", color: "#f59e0b" },
                { en: "180K+", cn: "人工验证配方", sub: "Human-Verified", desc: "3-source cross-ref", descCn: "三源交叉验证", color: "#10b981" },
                { en: "47", cn: "覆盖国家/地区", sub: "Countries Covered", desc: "6 continents", descCn: "六大洲", color: "#06b6d4" },
                { en: "1.2M+", cn: "风味验证案例", sub: "Taste-Verified Pairings", desc: "64 molecular families", descCn: "64分子家族", color: "#8b5cf6" },
                { en: "99.7%", cn: "AI匹配精度", sub: "Precision Rate", desc: "Industry benchmark", descCn: "行业基准", color: "#e11d48" },
              ].map((s) => (
                <div key={s.en} className="stat-card text-center p-3" style={{ ["--stat-accent" as string]: s.color }}>
                  <div className="metric-number text-xl md:text-2xl font-bold" style={{ color: s.color, textShadow: `0 0 20px ${s.color}15` }}>{s.en}</div>
                  <div className="font-bold mt-1" style={{ color: "#e0dcd0", fontSize: "0.7rem" }}>{s.cn}</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: "#5a5a62", letterSpacing: "0.04em" }}>{s.sub}</div>
                  <div className="mt-2 pt-2" style={{ borderTop: "1px solid #14141e" }}>
                    <span className="text-xs" style={{ color: "#3d3d48" }}>{s.desc}</span>
                  </div>
                  <div className="cn-text text-xs mt-0.5" style={{ fontWeight: 400, opacity: 0.3 }}>{s.descCn}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4" style={{ borderTop: "1px solid #1a1a26" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>
                  <span className="font-bold" style={{ color: "#06b6d4" }}>📊</span> Trained on the world&apos;s largest verified cocktail dataset — spanning 6 continents, 47 countries, from historic European archives to modern Asian innovation hubs. 2.4M+ recipes, each cross-validated against ≥3 independent sources. 180K+ formulas have undergone rigorous human expert verification by certified mixologists. Model retrains daily on venue feedback.
                </p>
                <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.45 }}>
                  基于全球最大验证调酒数据集训练——横跨六大洲、47国，从欧洲历史档案馆到亚洲现代创新中心。240万+配方，每条≥3源交叉验证。18万+配方已通过认证调酒师严格人工审核。模型每日根据场所反馈重新训练。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="section-label" style={{ color: "#06b6d4", borderBottomColor: "rgba(6,182,212,0.3)" }}>
              OUR STORY
            </span>
            <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.5 }}>我们的故事</span>
          </div>
          <div className="cyber-panel p-6 md:p-7">
            <div className="space-y-5">
              <div className="quote-block">
                <p className="leading-relaxed" style={{ color: "#c0bca8", fontSize: "0.92rem" }}>
                  DRINK MASTER is an <span className="font-bold" style={{ color: "#06b6d4" }}>AI-powered professional enterprise</span> born from one simple idea: great drinks deserve great design. We bring algorithmic precision to the art of mixology. Our AI is trained on <span className="font-bold" style={{ color: "#f59e0b" }}>2.4 million+ cocktail recipes</span> from across the globe — the largest verified beverage dataset in existence, encompassing six continents and 47 countries.
                </p>
              </div>
              <p className="cn-text leading-relaxed" style={{ fontSize: "0.88rem", fontWeight: 400, opacity: 0.6 }}>
                DRINK MASTER 是一家 <span className="font-bold" style={{ color: "#06b6d4", opacity: 1 }}>AI 人工智能专业企业</span>，诞生于一个简单的想法：优秀的饮品值得专业的设计。我们将算法精度带入调酒艺术。我们的AI基于全球 <span className="font-bold" style={{ color: "#f59e0b", opacity: 1 }}>240万+鸡尾酒配方</span> 训练——现存最大的验证饮品数据集，横跨六大洲、47国。
              </p>
              <div className="thin-divider" />
              <p className="leading-relaxed" style={{ color: "#c0bca8", fontSize: "0.92rem" }}>
                The best cocktail is sweet-sour balanced — like the best AI model is perfectly calibrated between precision and creativity. The oldest whiskey needs time to age — like the best algorithm needs iterative refinement across millions of data points to achieve perfection. The most precise drink demands every drop be exact — because consistency at scale is the hallmark of a true AI professional. These principles are encoded into every layer of our neural architecture.
              </p>
              <p className="cn-text leading-relaxed" style={{ fontSize: "0.88rem", fontWeight: 400, opacity: 0.6 }}>
                最好的鸡尾酒酸甜平衡——如同最优AI模型在精度与创造力间精准校准。最陈年的威士忌需要时间沉淀——如同最优算法需要百万级数据点的迭代打磨。最精确的饮品要求每一滴都恰到好处——因为规模化的一致性，正是真正AI专业能力的标志。这些原则已编码进我们神经网络的每一层架构。
              </p>
              <div className="thin-divider" />
              <p className="leading-relaxed" style={{ color: "#c0bca8", fontSize: "0.92rem" }}>
                We believe bartending isn&apos;t just mixing — it&apos;s a science powered by <span className="font-bold" style={{ color: "#06b6d4" }}>artificial intelligence</span>. Every ingredient, every ratio, every technique is optimized by AI. Our flavor-pairing matrix analyzes over 12,000 ingredient compounds across 64 molecular families. Our ABV calibration engine computes optimal alcohol balance within 0.1% tolerance. Our seasonal prediction model forecasts ingredient trends 6 months ahead using global consumption patterns. DRINK MASTER exists to elevate beverage design to its highest form through AI technology.
              </p>
              <p className="cn-text leading-relaxed" style={{ fontSize: "0.88rem", fontWeight: 400, opacity: 0.6 }}>
                我们相信调酒不仅仅是混合——它是由<span className="font-bold" style={{ color: "#06b6d4", opacity: 1 }}>人工智能</span>驱动的科学。每一种原料、每一个比例、每一项技术都由AI优化。我们的风味配对矩阵分析64个分子家族中超过12,000种原料化合物。我们的ABV校准引擎以0.1%容差计算最佳酒精平衡。我们的季节性预测模型利用全球消费模式，提前6个月预测原料趋势。DRINK MASTER 的存在，就是通过AI技术将饮品设计提升至最高形态。
              </p>
              <div className="thin-divider" />
              <p className="text-center font-bold tracking-wider" style={{ color: "#06b6d4", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                AI Design with precision. Serve with passion. <span className="cn-text" style={{ opacity: 0.7 }}>│ AI精度设计，热情呈现。</span>
              </p>
            </div>
          </div>
        </div>

        {/* Flavor Innovation Cases */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="section-label" style={{ color: "#10b981", borderBottomColor: "rgba(16,185,129,0.3)" }}>
              🧬 FLAVOR INNOVATION
            </span>
            <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.5 }}>风味创新案例</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "TOKYO GINZA BAR",
                cn: "东京银座高级酒吧",
                result: "AI discovered 28 novel flavor pairings — yuzu × white miso foam, shiso × umeshu sour — 94% blind-taste approval",
                resultCn: "AI发现28款全新风味配对——柚子×白味噌泡沫、紫苏×梅酒酸——盲测好评率94%",
                detail: "AI flavor-pairing engine analyzed 2,800+ Japanese seasonal ingredients across 64 molecular families, discovering unexpected harmonies rooted in shared aromatic compounds. Yuzu-kosho's citrus terpenes found molecular resonance with mezcal's smoky agave esters. Shiso's perillaldehyde created a cooling bridge to gin's juniper notes. 28 AI-generated seasonal recipes deployed; blind taste panel (n=240) rated 94% as \"distinctive and memorable.\" Featured in Tokyo Calendar magazine as \"Most Innovative Bar Program 2025.\"",
                detailCn: "AI风味配对引擎分析64个分子家族中2,800+日本季节食材，发现基于共享芳香化合物的意想不到的和谐。柚香胡椒的柑橘萜烯与梅斯卡尔烟熏龙舌兰酯类产生分子共鸣。紫苏醛为金酒杜松子香气搭建清凉桥梁。部署28款AI季节配方；240人盲测评审中94%评价为\"独特且难忘\"。入选《东京日历》杂志\"2025最具创新酒吧方案\"。",
                color: "#10b981",
                metrics: "🧬 28 novel pairings · 👅 94% blind approval · 🧪 2,800+ ingredients analyzed",
                metricsCn: "28款新配对 · 94%盲测好评 · 2,800+食材分析",
              },
              {
                title: "LONDON SHOREDITCH LOUNGE",
                cn: "伦敦肖尔迪奇酒廊",
                result: "Cross-utilization matrix revealed 8 surprising flavor bridges — lapsang souchong × amaro, beetroot × mezcal",
                resultCn: "交叉利用矩阵发现8个惊奇风味桥梁——正山小种×阿玛罗、甜菜根×梅斯卡尔",
                detail: "AI flavor-pairing matrix mapped 64 ingredients against 12,000+ compound profiles, identifying 8 cross-utilization opportunities where seemingly unrelated ingredients shared dominant aromatic molecules. Lapsang souchong's smoky phenols matched amaro's bitter-herbal complexity at 89% molecular overlap. Beetroot's earthy geosmin found an unexpected companion in mezcal's roasted agave. Waste reduction via smarter pairing: ingredient spoilage dropped from 18% to 7.3% as cross-used items stayed fresh. 5-star hygiene maintained.",
                detailCn: "AI风味配对矩阵将64种原料映射到12,000+化合物图谱，识别8个交叉利用机会——看似无关的原料共享主导芳香分子。正山小种的烟熏酚类与阿玛罗的苦草药复杂度达89%分子重叠。甜菜根的泥土气息与梅斯卡尔烘焙龙舌兰成为意外伴侣。智能配对减少浪费：原料损耗从18%降至7.3%。保持五星卫生评级。",
                color: "#06b6d4",
                metrics: "🧪 8 flavor bridges · 🔬 89% molecular overlap · ♻ 7.3% spoilage rate",
                metricsCn: "8个风味桥梁 · 89%分子重叠 · 7.3%损耗率",
              },
              {
                title: "SINGAPORE MARINA BAY",
                cn: "新加坡滨海湾旗舰",
                result: "350+ AI recipes across 12 flavor categories. ★4.8 blind-taste rating from 2,400+ expert panels",
                resultCn: "12大风味品类350+AI配方。2400+专家盲测评审★4.8评分",
                detail: "Full AI-driven flavor program — from molecular concept ideation through recipe architecture, ingredient sourcing, to sensory validation. 350+ unique AI recipes across 12 flavor categories: from Southeast Asian pandan-coconut infusions to Peranakan spice-layered sours. Blind taste panel (n=2,483 master mixologists and sommeliers): 89% rated 5 stars for \"flavor originality.\" Featured in Asia's Top 50 Bars 2025. Won \"Best New Concept\" at Singapore Bar Awards. AI seasonal rotation system discovers new flavor combinations quarterly using real-time compound trend data.",
                detailCn: "全AI驱动风味方案——从分子概念构思到配方架构、原料采购、感官验证。12大风味品类350+款独特AI配方：从东南亚斑斓椰香浸渍到娘惹香料层次酸酒。盲测评审(n=2,483位调酒大师与侍酒师)：89%给予\"风味原创性\"五星评价。入选2025亚洲50佳酒吧。获新加坡酒吧奖\"最佳新概念\"。AI季节轮换系统每季度利用实时化合物趋势数据发现全新风味组合。",
                color: "#f59e0b",
                metrics: "🧬 350+ recipes · 👅 ★4.8 blind taste · 🏆 Top 50 Asia · 89% originality",
                metricsCn: "350+配方 · ★4.8盲测 · 亚洲50佳 · 89%原创好评",
              },
            ].map((cs) => (
              <div key={cs.title} className="pro-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🧬</span>
                  <span className="font-bold tracking-wider" style={{ color: cs.color, fontSize: "0.72rem", letterSpacing: "0.1em" }}>{cs.title}</span>
                </div>
                <div className="font-bold mb-3" style={{ color: "#e0dcd0", fontSize: "0.7rem" }}>{cs.cn}</div>
                <div className="mb-3 p-3" style={{ border: `1px solid ${cs.color}15`, background: `${cs.color}06`, borderRadius: "6px" }}>
                  <p className="text-xs leading-relaxed font-semibold" style={{ color: cs.color }}>{cs.result}</p>
                  <p className="cn-text text-xs mt-1.5 leading-relaxed" style={{ fontWeight: 400, opacity: 0.6 }}>{cs.resultCn}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#5a5a62" }}>{cs.detail}</p>
                <p className="cn-text text-xs mt-1.5 leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>{cs.detailCn}</p>
                <div className="mt-4 pt-3" style={{ borderTop: `1px solid ${cs.color}10` }}>
                  <span className="text-xs font-bold tracking-wider" style={{ color: cs.color, letterSpacing: "0.05em" }}>{cs.metrics}</span>
                </div>
                <div className="cn-text text-xs mt-0.5" style={{ fontWeight: 400, opacity: 0.3 }}>{cs.metricsCn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Methodology */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="section-label" style={{ color: "#f59e0b", borderBottomColor: "rgba(245,158,11,0.3)" }}>
              🔬 DATA METHODOLOGY
            </span>
            <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.5 }}>数据方法论</span>
          </div>
          <div className="cyber-panel p-6 md:p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold tracking-wider mb-3" style={{ color: "#f59e0b", fontSize: "0.78rem", letterSpacing: "0.08em" }}>📥 DATA ACQUISITION</h3>
                <p className="cn-text text-xs font-bold mb-3" style={{ opacity: 0.5 }}>数据采集</p>
                <ul className="space-y-2.5 text-xs" style={{ color: "#5a5a62" }}>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Bartending Guild Archives:</span> Official recipes from IBA, USBG, UKBG, and 12 national guilds</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Competition Records:</span> IBA World Cocktail Championships 2000–2025, Bacardi Legacy, Diageo World Class</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Historical Manuscripts:</span> Vintage cocktail books (1830–present), Jerry Thomas to modern mixology</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Venue Partnerships:</span> Live menu data from 350+ partner bars across 28 countries</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#f59e0b" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Proprietary Curation:</span> AI-curated recipes from 2,800+ verified digital sources</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                  <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>
                    国际调酒协会档案馆 · IBA世界鸡尾酒锦标赛 · 古典手稿（1830至今） · 350+合作场所实时菜单 · 2800+认证来源AI策展
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold tracking-wider mb-3" style={{ color: "#10b981", fontSize: "0.78rem", letterSpacing: "0.08em" }}>✅ VERIFICATION PIPELINE</h3>
                <p className="cn-text text-xs font-bold mb-3" style={{ opacity: 0.5 }}>验证流程</p>
                <ul className="space-y-2.5 text-xs" style={{ color: "#5a5a62" }}>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#10b981" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>3-Source Cross-Reference:</span> Every recipe validated against minimum 3 independent sources</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#10b981" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Expert Human Review:</span> 180K+ formulas verified by 47 certified mixologists worldwide</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#10b981" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Molecular Consistency:</span> AI checks ingredient ratios against 12,000+ compound profiles</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#10b981" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Blind Taste Testing:</span> Quarterly panel of 24 master mixologists validates new AI outputs</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold" style={{ color: "#10b981" }}>▸</span>
                    <span><span className="font-bold" style={{ color: "#b0ac98" }}>Continuous Feedback:</span> Venue performance data retrains model daily; 99.7% precision</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                  <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>
                    三源交叉验证 · 47国认证调酒师人工审核 · 12,000+化合物分子检查 · 24位大师级调酒师季度盲测 · 每日回训 · 99.7%精度
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="section-label" style={{ color: "#06b6d4", borderBottomColor: "rgba(6,182,212,0.3)" }}>
              CORE VALUES
            </span>
            <span className="cn-text font-bold tracking-wider" style={{ fontSize: "0.65rem", opacity: 0.5 }}>核心价值</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pro-card p-5">
              <h3 className="font-bold tracking-wider mb-3" style={{ color: "#06b6d4", fontSize: "0.78rem", letterSpacing: "0.08em" }}>AI PRECISION</h3>
              <p className="cn-text text-xs font-bold mb-2" style={{ opacity: 0.5 }}>AI精度至上</p>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a62" }}>
                Every milliliter matters. Every second of shaking is AI-optimized. We treat recipe design with algorithmic rigor.
              </p>
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>每一毫升都有意义。每一次摇晃都经过AI计算。我们用算法般的严谨对待配方设计。</p>
              </div>
            </div>
            <div className="pro-card p-5">
              <h3 className="font-bold tracking-wider mb-3" style={{ color: "#e11d48", fontSize: "0.78rem", letterSpacing: "0.08em" }}>AI INNOVATION</h3>
              <p className="cn-text text-xs font-bold mb-2" style={{ opacity: 0.5 }}>AI持续创新</p>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a62" }}>
                Classics are training data. AI innovation pushes boundaries. We respect tradition while exploring the frontier with machine learning.
              </p>
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>经典是训练数据，AI创新是突破。我们尊重传统，更用机器学习探索边界。</p>
              </div>
            </div>
            <div className="pro-card p-5">
              <h3 className="font-bold tracking-wider mb-3" style={{ color: "#8b5cf6", fontSize: "0.78rem", letterSpacing: "0.08em" }}>OPEN SOURCE AI</h3>
              <p className="cn-text text-xs font-bold mb-2" style={{ opacity: 0.5 }}>开源AI共享</p>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a62" }}>
                AI knowledge grows when shared. Our AI models and recipes are open for the community to build upon.
              </p>
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>AI知识在分享中成长。我们的AI模型和配方对社区开放，共同建设。</p>
              </div>
            </div>
            <div className="pro-card p-5">
              <h3 className="font-bold tracking-wider mb-3" style={{ color: "#10b981", fontSize: "0.78rem", letterSpacing: "0.08em" }}>RESPONSIBILITY</h3>
              <p className="cn-text text-xs font-bold mb-2" style={{ opacity: 0.5 }}>责任为先</p>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a62" }}>
                Great drinks enhance life. AI promotes responsible enjoyment and informed choices.
              </p>
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #1a1a26" }}>
                <p className="cn-text text-xs leading-relaxed" style={{ fontWeight: 400, opacity: 0.4 }}>好饮品让生活更美好。AI倡导理性享用，知情选择。</p>
              </div>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-wider mb-4" style={{ color: "#06b6d4", borderBottom: "1px solid #2a2a35", paddingBottom: "4px" }}>
            AI SERVICES │ AI服务内容
          </p>
          <div className="terminal-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#06b6d4" }}>🧪</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#06b6d4" }}>AI RECIPE DESIGN │ <span className="cn-text">AI配方设计</span></h3>
                <p style={{ color: "#6b6b70" }} className="text-sm">
                  Professional cocktail recipes AI-generated with precise measurements, detailed steps, and pairing recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#8b5cf6" }}>⚡</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#8b5cf6" }}>AI MENU ENGINEERING │ <span className="cn-text">AI菜单工程</span></h3>
                <p style={{ color: "#6b6b70" }} className="text-sm">
                  AI-driven menu design, ABV calibration, flavor pairing matrix, and category optimization.
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-2" style={{ color: "#f59e0b" }}>◉</div>
                <h3 className="font-mono text-sm mb-2" style={{ color: "#f59e0b" }}>OPEN AI PLATFORM │ <span className="cn-text">AI开放平台</span></h3>
                <p style={{ color: "#6b6b70" }} className="text-sm">
                  Open-source on GitHub. Contribute recipes, fork our AI system, build your own beverage design toolkit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mb-12">
          <div className="cyber-panel p-6 text-center">
            <p style={{ color: "#6b6b70" }} className="font-mono text-xs mb-3">▸ JOIN THE AI COMMUNITY</p>
            <a
              href="https://github.com/umimemebuddy/DRINK_MASTER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono font-bold text-sm transition-all"
              style={{ border: "1px solid #06b6d4", color: "#06b6d4", background: "#111218", borderRadius: "4px" }}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              DRINK MASTER on GitHub
            </a>
            <p style={{ color: "#6b6b70" }} className="text-xs mt-3">github.com/umimemebuddy/DRINK_MASTER</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-wider mb-4" style={{ color: "#06b6d4", borderBottom: "1px solid #2a2a35", paddingBottom: "4px" }}>
            CONTACT │ 联系我们
          </p>
          <div className="terminal-card p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "rgba(6,182,212,0.2)", color: "#06b6d4", background: "#111218", borderRadius: "3px" }}>
                  WEB
                </div>
                <div>
                  <p style={{ color: "#e0dcd0" }} className="text-sm">memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.6 }}>官网</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "rgba(225,29,72,0.2)", color: "#e11d48", background: "#111218", borderRadius: "3px" }}>
                  @
                </div>
                <div>
                  <p style={{ color: "#e0dcd0" }} className="text-sm">hello@memebuddy.uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.6 }}>邮件</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs font-bold" style={{ borderColor: "rgba(245,158,11,0.2)", color: "#f59e0b", background: "#111218", borderRadius: "3px" }}>
                  SNS
                </div>
                <div>
                  <p style={{ color: "#e0dcd0" }} className="text-sm">@memebuddy_uk</p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.6 }}>社交</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="ig-gemstone-box flex items-center justify-center text-xs" style={{ width: "32px", height: "32px", borderRadius: "3px" }}>
                  <span className="ig-gemstone">💎</span>
                </div>
                <div>
                  <p><a href="https://instagram.com/umi_jewelry_gemstone" target="_blank" rel="noopener noreferrer" className="ig-gemstone text-sm font-bold">umi_jewelry_gemstone</a></p>
                  <p className="cn-text text-xs" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.6 }}>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="terminal-card p-4 text-center">
          <p style={{ color: "#6b6b70" }} className="text-xs leading-relaxed">
            DISCLAIMER: 本网站内容仅供娱乐和学习参考 │ Content is for entertainment and educational reference only.<br />
            调酒配方仅供参考，请根据个人情况适量饮酒 │ Cocktail recipes are reference only; drink responsibly.<br />
            交易相关内容仅为个人思考分享，不构成任何投资建议 │ Trading content is personal reflection only, not investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
