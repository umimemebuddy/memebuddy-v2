import Link from "next/link";
import { journalEntries } from "@/data/journal";

export default function JournalPage() {
  return (
    <div className="min-h-screen py-20" style={{ background: "#0b0c10" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10" style={{ borderBottom: "1px solid #2a2a35", paddingBottom: "12px" }}>
          <p style={{ color: "#6b6b70" }} className="font-mono text-xs tracking-wider mb-1">
            AI DRINK JOURNAL │ AI饮品日志
          </p>
          <h1 className="text-3xl font-bold mb-1 font-mono" style={{ color: "#f59e0b" }}>AI DRINK, TRADE WELL</h1>
          <p className="cn-text font-mono text-sm">AI调酒与交易的跨界思考</p>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-6">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="terminal-card p-5 md:p-6 hover-terminal">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs" style={{ borderBottom: "1px solid #1e1e28", paddingBottom: "8px" }}>
                <span style={{ color: "#e11d48", fontWeight: 700, border: "1px solid rgba(225,29,72,0.25)", padding: "2px 8px", borderRadius: "3px" }}>
                  {entry.categoryEn}
                </span>
                <span style={{ color: "#6b6b70" }}>{entry.date}</span>
              </div>

              <h2 className="text-xl font-bold font-mono mb-1" style={{ color: "#e0dcd0" }}>{entry.titleEn}</h2>
              <p className="cn-text text-sm mb-1">{entry.title}</p>
              <p style={{ color: "#6b6b70" }} className="text-xs italic font-mono mb-4">{entry.subtitleEn} │ {entry.subtitle}</p>

              {/* Content */}
              <div className="mb-4">
                {entry.contentEn.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} style={{ color: "#e0dcd0" }} className="leading-relaxed mb-2 text-sm">{paragraph}</p>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1e1e28", paddingTop: "12px" }} className="mb-3">
                {entry.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="cn-text leading-relaxed mb-2 text-xs" style={{ fontWeight: 400, color: "#f59e0b", opacity: 0.7 }}>{paragraph}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #1e1e28" }}>
                <div className="flex flex-wrap gap-1">
                  {entry.tagsEn.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 font-mono border" style={{ background: "#111218", color: "#f59e0b", borderColor: "rgba(245,158,11,0.2)", borderRadius: "3px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {entry.cocktail && (
                  <Link
                    href={`/recipes/${entry.cocktail}`}
                    className="hover:opacity-70 text-xs font-mono transition-opacity tracking-wider"
                    style={{ color: "#06b6d4" }}
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
