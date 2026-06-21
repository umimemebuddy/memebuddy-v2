import Link from "next/link";

const journalEntries = [
  {
    id: "1",
    title: "古典鸡尾酒与价值投资",
    titleEn: "Old Fashioned & Value Investing",
    subtitle: "最简单的策略往往最有效",
    subtitleEn: "The simplest strategies are often the most effective",
    date: "2026-01-15",
    category: "交易哲学",
    categoryEn: "TRADING PHILOSOPHY",
    content: `Old Fashioned——这个名字本身就是一种宣言。回归最古老的调酒方式，不加花哨的装饰，不追时髦的做法。

在交易的世界里，这杯酒教会我们一个道理：最简单的策略往往最有效。

就像价值投资，不追热点，不赶时髦，坚持本质。一块方糖，几滴苦精，60ml威士忌——简洁到极致的配方，却能创造最丰富的味觉层次。

你的交易策略是否也需要回归本质？`,
    contentEn: `Old Fashioned — the name is a manifesto. Return to the oldest way of mixing. No flashy garnishes, no trendy techniques.

In trading, it teaches us one truth: the simplest strategies are often the most effective.

Like value investing — no hype, no trends, just fundamentals. One sugar cube, a few drops of bitters, 60ml of whiskey — a recipe reduced to its essence, yet creating the richest flavor complexity.

Does your trading strategy need to return to basics?`,
    cocktail: "old-fashioned",
    tags: ["价值投资", "极简策略", "威士忌"],
    tagsEn: ["Value Investing", "Minimalist Strategy", "Whiskey"],
  },
  {
    id: "2",
    title: "尼格罗尼：资产配置的艺术",
    titleEn: "Negroni: The Art of Asset Allocation",
    subtitle: "1:1:1的等分配方，均衡配置的智慧",
    subtitleEn: "1:1:1 equal parts — the wisdom of balanced allocation",
    date: "2026-02-01",
    category: "资产配置",
    categoryEn: "ASSET ALLOCATION",
    content: `尼格罗尼是1:1:1的等分配方——金酒、金巴利、味美思，各占三分之一，不偏不倚。

这就是资产配置的智慧。

金酒是成长股——草本风味，复杂多变，充满可能性。
金巴利是防御资产——苦味是你的安全垫，不讨喜但不可或缺。
味美思是稳定收益——芬芳柔和，平衡整个组合。

三者平衡，才是长期收益的关键。偏重任何一个，都会让整杯酒失去平衡。

你的资产配置，是否也做到了1:1:1？`,
    contentEn: `Negroni's 1:1:1 ratio — gin, Campari, vermouth — each one-third, no bias.

This is the wisdom of asset allocation.

Gin = growth stocks — botanical complexity, ever-changing, full of possibility.
Campari = defensive assets — bitterness is your safety cushion, unpopular but indispensable.
Vermouth = stable yields — fragrant, gentle, balancing the whole portfolio.

Balance across all three is the key to long-term returns. Overweighting any one throws the whole drink off-balance.

Is your asset allocation truly 1:1:1?`,
    cocktail: "negroni",
    tags: ["资产配置", "均衡", "金酒"],
    tagsEn: ["Asset Allocation", "Balance", "Gin"],
  },
  {
    id: "3",
    title: "威士忌酸与风险对冲",
    titleEn: "Whiskey Sour & Risk Hedging",
    subtitle: "学会拥抱波动，但永远给自己留一份保险",
    subtitleEn: "Embrace volatility, but always keep insurance",
    date: "2026-03-10",
    category: "风险管理",
    categoryEn: "RISK MANAGEMENT",
    content: `威士忌酸是风险与收益的对话。

酸代表波动——柠檬汁的酸度就像市场的波动，锐利、刺人，但正是它赋予了酒的生命力。
甜代表回报——糖浆的甜美是上涨时的喜悦，是盈利的满足感。
蛋白是风险对冲——那层绵密的泡沫，柔和了所有的尖锐，让酸和甜不再对抗，而是和解。

没有对冲的酸太过尖锐，无法入口。
没有波动的甜毫无意义，平淡无奇。

学会拥抱波动，但永远给自己留一份保险。这就是威士忌酸教会我们的交易智慧。`,
    contentEn: `Whiskey Sour is a dialogue between risk and reward.

Sour = volatility — lemon juice's acidity mirrors market swings, sharp and piercing, but it's what gives the drink life.
Sweet = returns — syrup's sweetness is the joy of gains, the satisfaction of profit.
Egg white = hedging — that silky foam softens every sharp edge, turning sour and sweet from adversaries into allies.

Unhedged sourness is too sharp to swallow.
Volatility-free sweetness is meaningless, flat.

Embrace volatility, but always keep insurance. That's the trading wisdom Whiskey Sour teaches us.`,
    cocktail: "whiskey-sour",
    tags: ["风险对冲", "波动", "蛋白技巧"],
    tagsEn: ["Risk Hedging", "Volatility", "Egg White Technique"],
  },
  {
    id: "4",
    title: "牛市冲刺：热情不醉的智慧",
    titleEn: "Bull Market Rush: Passion Without intoxication",
    subtitle: "牛市不醉，方为赢家",
    subtitleEn: "Stay sober in a bull market — that's how you win",
    date: "2026-04-01",
    category: "市场情绪",
    categoryEn: "MARKET SENTIMENT",
    content: `当市场一片红火，你需要一杯能点燃热情但不失理智的酒。

牛市冲刺——MemeBuddy的独创特调，是为牛市而生的。

姜汁的辛辣是市场的刺激——每一个涨停板都让你心跳加速。
蜂蜜的温柔是止盈的智慧——知道什么时候退出，比什么时候进入更重要。
威士忌是底仓的定力——无论市场如何波动，核心仓位不动如山。

牛市最大的风险不是错过机会，而是被贪婪冲昏头脑。

保持热情，保持清醒。牛市不醉，方为赢家。`,
    contentEn: `When the market is red-hot, you need a drink that ignites passion but preserves reason.

Bull Market Rush — MemeBuddy's original, born for bull markets.

Ginger's spice = market stimulus — every limit-up board quickens your pulse.
Honey's warmth = profit-taking wisdom — knowing when to exit matters more than when to enter.
Whiskey = core position conviction — no matter the volatility, the core stays rock-solid.

The biggest risk in a bull market isn't missing opportunities — it's being blinded by greed.

Stay passionate. Stay clear-headed. Stay sober in a bull market — that's how you win.`,
    cocktail: "bull-market",
    tags: ["牛市", "止盈", "贪婪"],
    tagsEn: ["Bull Market", "Profit-Taking", "Greed"],
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-muted/40 font-mono text-xs uppercase tracking-[0.3em] mb-2">
            TRADING JOURNAL / 交易日志
          </p>
          <h1 className="text-4xl font-bold gradient-text-cyber mb-2">THINK TRADE, DRINK WELL</h1>
          <p className="text-muted/60 font-mono text-sm">调酒与交易的跨界思考 / Where cocktail philosophy meets market wisdom</p>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-8">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="cyber-card rounded-none p-6 md:p-8 hover-cyber-glow transition-all">
              <div className="flex items-center gap-3 mb-4 font-mono">
                <span className="cyber-tag-pink text-xs px-3 py-1 border rounded-none tracking-wider">
                  {entry.categoryEn}
                </span>
                <span className="text-muted/30 text-xs">{entry.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-foreground font-mono mb-1">{entry.titleEn}</h2>
              <p className="text-muted/50 text-sm mb-1">{entry.title}</p>
              <p className="text-muted/30 text-xs italic font-mono mb-6">{entry.subtitleEn} / {entry.subtitle}</p>

              {/* Content */}
              <div className="mb-6">
                {entry.contentEn.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/80 leading-relaxed mb-3 text-sm">{paragraph}</p>
                ))}
              </div>
              <div className="border-t border-card-border/40 pt-4 mb-4">
                {entry.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-muted/40 leading-relaxed mb-3 text-xs font-mono">{paragraph}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-card-border/40">
                <div className="flex flex-wrap gap-1">
                  {entry.tagsEn.map((tag) => (
                    <span key={tag} className="cyber-tag text-xs">{tag}</span>
                  ))}
                </div>
                {entry.cocktail && (
                  <Link
                    href={`/recipes/${entry.cocktail}`}
                    className="neon-text-cyan hover:opacity-80 text-xs font-mono transition-opacity tracking-wider"
                  >
                    VIEW RECIPE → 看配方
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
