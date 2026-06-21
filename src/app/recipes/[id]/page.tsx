import Link from "next/link";
import { recipes, categories, difficultyMap } from "@/data/recipes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  const category = categories.find((c) => c.id === recipe.category);
  const relatedRecipes = recipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/recipes"
          className="text-muted/50 hover:text-neon-cyan transition-colors text-xs font-mono mb-8 inline-flex items-center gap-1 tracking-wider"
        >
          ← BACK TO RECIPES / 返回配方库
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 font-mono">
            <span className="neon-text-cyan text-sm">{category?.icon}</span>
            <span className="text-muted/50 text-xs tracking-wider">{category?.nameEn} / {category?.name}</span>
            <span
              className="text-xs px-2 py-0.5 border rounded-none font-mono tracking-wider"
              style={{
                borderColor: difficultyMap[recipe.difficulty].color + "30",
                color: difficultyMap[recipe.difficulty].color,
              }}
            >
              {difficultyMap[recipe.difficulty].labelEn} / {difficultyMap[recipe.difficulty].label}
            </span>
            <span className="text-muted/30 text-xs">ABV {recipe.abv}</span>
          </div>
          <h1 className="text-4xl font-bold neon-text-cyan mb-1 font-mono">{recipe.nameEn}</h1>
          <p className="text-muted/50 text-sm font-mono">{recipe.name}</p>
        </div>

        {/* Description */}
        <div className="cyber-glass rounded-none p-6 mb-8 cyber-corners">
          <p className="text-muted/80 leading-relaxed text-lg mb-2">{recipe.descriptionEn}</p>
          <p className="text-muted/40 leading-relaxed text-sm">{recipe.description}</p>
        </div>

        {/* Story */}
        <div className="mb-10">
          <p className="neon-text-pink font-mono text-xs uppercase tracking-[0.3em] mb-4">
            TRADING INSPIRATION / 交易灵感
          </p>
          <div className="cyber-card rounded-none p-6">
            <p className="text-foreground/90 leading-relaxed mb-4">{recipe.storyEn}</p>
            <p className="text-muted/50 leading-relaxed text-sm">{recipe.story}</p>
          </div>
        </div>

        {/* Two Column: Ingredients + Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Ingredients */}
          <div>
            <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
              INGREDIENTS / 材料
            </p>
            <div className="cyber-card rounded-none p-5">
              <div className="flex flex-col gap-3">
                {recipe.ingredients.map((ing, idx) => (
                  <div key={ing.nameEn} className="flex items-center gap-3">
                    <div className="w-7 h-7 border border-neon-cyan/30 bg-neon-cyan/5 flex items-center justify-center text-neon-cyan/80 text-xs font-mono font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <span className="text-foreground text-sm font-mono">{ing.nameEn}</span>
                      <span className="text-muted/40 text-xs ml-1 font-mono">{ing.name}</span>
                      {ing.noteEn && (
                        <span className="text-muted/30 text-xs ml-2 font-mono">({ing.noteEn})</span>
                      )}
                    </div>
                    <span className="text-neon-cyan/50 text-sm font-mono">{ing.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-card-border/60 font-mono">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neon-cyan/50 text-xs">GLASS:</span>
                  <span className="text-muted/70 text-sm">{recipe.glassEn}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <span className="text-neon-cyan/50 text-xs">GARNISH:</span>
                  <span className="text-muted/70 text-sm">{recipe.garnishEn}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
              STEPS / 调制步骤
            </p>
            <div className="cyber-card rounded-none p-5">
              <div className="flex flex-col gap-4">
                {recipe.stepsEn.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-neon-cyan flex items-center justify-center text-background text-xs font-mono font-bold shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-foreground text-sm leading-relaxed font-mono">{step}</p>
                      <p className="text-muted/40 text-xs leading-relaxed">{recipe.steps[idx]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            TAGS / 标签
          </p>
          <div className="flex flex-wrap gap-2">
            {recipe.tagsEn.map((tag, idx) => (
              <span key={tag} className="cyber-tag">
                {tag} <span className="text-muted/30">/ {recipe.tags[idx]}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div>
            <p className="neon-text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
              RELATED / 相关配方
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRecipes.map((r) => (
                <Link key={r.id} href={`/recipes/${r.id}`} className="group">
                  <div className="cyber-card rounded-none p-4 hover-cyber-glow transition-all">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-neon-cyan transition-colors font-mono">
                      {r.nameEn}
                    </h3>
                    <p className="text-muted/40 text-xs font-mono mb-2">{r.name}</p>
                    <p className="text-muted/60 text-xs">{r.descriptionEn}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
