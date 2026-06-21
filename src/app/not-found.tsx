import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-6xl mb-4 neon-text-pink font-mono animate-neon-pulse">404</div>
        <h1 className="text-3xl font-bold gradient-text-cyber mb-2 font-mono">RECIPE NOT FOUND</h1>
        <p className="text-muted/50 font-mono text-sm mb-2">
          This cocktail hasn't been invented yet... or you may have taken a wrong turn.
        </p>
        <p className="text-muted/30 font-mono text-xs mb-8">
          这杯酒还没有被发明出来……或者你可能走错了路。
        </p>
        <Link
          href="/recipes"
          className="border border-neon-cyan bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan rounded-none px-8 py-3 font-mono transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] tracking-wider"
        >
          ← BACK TO RECIPES / 返回配方库
        </Link>
      </div>
    </div>
  );
}
