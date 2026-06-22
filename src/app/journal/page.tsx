import Link from "next/link";
import { journalEntries } from "@/data/journal";

export default function JournalPage() {
  return (
    <div className="min-h-screen py-20" style={{ background: "#000" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10" style={{ borderBottom: "1px solid #222", paddingBottom: "12px" }}>
          <p style={{ color: "#555" }} className="font-mono text-xs tracking-wider mb-1">
            TRADING JOURNAL │ 交易日志
          </p>
          <h1 className="text-3xl font-bold bloomberg-orange mb-1 font-mono">THINK TRADE, DRINK WELL</h1>
          <p className="cn-text font-mono text-sm">调酒与交易的跨界思考</p>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-6">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="terminal-card p-5 md:p-6 hover-terminal">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs" style={{ borderBottom: "1px solid #1a1a1a", paddingBottom: "8px" }}>
                <span className="bloomberg-pink font-bold" style={{ border: "1px solid #ff2d9540", padding: "2px 8px" }}>
                  {entry.categoryEn}
                </span>
                <span style={{ color: "#555" }}>{entry.date}</span>
              </div>

              <h2 className="text-xl font-bold bloomberg-white font-mono mb-1">{entry.titleEn}</h2>
              <p className="cn-text text-sm mb-1">{entry.title}</p>
              <p style={{ color: "#555" }} className="text-xs italic font-mono mb-4">{entry.subtitleEn} │ {entry.subtitle}</p>

              {/* Content */}
              <div className="mb-4">
                {entry.contentEn.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} style={{ color: "#ccc" }} className="leading-relaxed mb-2 text-sm">{paragraph}</p>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "12px" }} className="mb-3">
                {entry.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="cn-text leading-relaxed mb-2 text-xs" style={{ fontWeight: 400, color: "#ff8c0080" }}>{paragraph}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #1a1a1a" }}>
                <div className="flex flex-wrap gap-1">
                  {entry.tagsEn.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 font-mono border" style={{ background: "#1a0a00", color: "#ff8c00", borderColor: "#ff8c0030" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {entry.cocktail && (
                  <Link
                    href={`/recipes/${entry.cocktail}`}
                    className="bloomberg-cyan hover:opacity-80 text-xs font-mono transition-opacity tracking-wider"
                  >
                    VIEW RECIPE │ 看配方
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
