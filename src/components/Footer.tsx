export default function Footer() {
  return (
    <footer className="border-t py-5" style={{ borderColor: "rgba(255,107,0,0.2)", background: "#030306" }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="animate-price-up neon-text-green ticker-glow font-bold">GMGN</span>
          <span style={{ color: "#444455" }}>MEMEBUDDY.UK © 2026</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="/recipes" className="neon-text-orange hover:opacity-80 transition-opacity font-bold">RECIPES</a>
          <a href="/journal" className="neon-text-cyan hover:opacity-80 transition-opacity font-bold">JOURNAL</a>
          <a href="/about" className="neon-text-purple hover:opacity-80 transition-opacity font-bold">ABOUT</a>
        </div>
        <span className="animate-neon-flicker neon-text-red font-bold">NO BS · BOOZE & PVP</span>
      </div>
    </footer>
  );
}
