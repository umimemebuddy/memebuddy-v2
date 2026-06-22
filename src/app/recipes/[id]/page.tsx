import Link from "next/link";
import { recipes, categories, difficultyMap, recipeMap } from "@/data/recipes";
import { notFound } from "next/navigation";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipeMap.get(id);

  if (!recipe) {
    notFound();
  }

  const category = categories.find((c) => c.id === recipe.category);
  const relatedRecipes = recipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  const lever = abvToLever(recipe.abv);
  const leverInfo = leverLabel(lever);

  return (
    <div className="min-h-screen py-16 amber-glow-bg" style={{ background: "#08080a" }}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Back */}
        <Link
          href="/recipes"
          className="bloomberg-orange text-xs font-mono mb-4 inline-block tracking-wider hover:opacity-70 transition-opacity"
        >
          ← BACK 酒单
        </Link>

        {/* Header — bar card with leverage */}
        <div className="bar-card px-4 py-3 mb-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-sm" style={{ color: "#ffb800" }}>{category?.icon}</span>
            <span className="cn-text text-xs font-mono">{category?.name}</span>
            <span style={{ color: "#555" }} className="text-xs font-mono">{category?.nameEn}</span>
            <span
              className="menu-tag"
              style={{ background: difficultyMap[recipe.difficulty].color + "18", color: difficultyMap[recipe.difficulty].color }}
            >
              {difficultyMap[recipe.difficulty].labelEn} {difficultyMap[recipe.difficulty].label}
            </span>
            <span className="menu-price font-mono">ABV {recipe.abv}</span>
          </div>
          <h1 className="text-xl font-bold bloomberg-white font-mono">{recipe.nameEn}</h1>
          <p className="cn-text text-sm font-mono">{recipe.name}</p>
          {/* Leverage indicator */}
          <div className="flex items-center gap-3 mt-2">
            <span className={`${leverInfo.cls} font-bold font-mono text-sm`}>LEVER ×{lever} — {leverInfo.en} {leverInfo.cn}</span>
            <div className="lever-bar w-24">
              <div className={`lever-fill ${leverFillClass(lever)}`} style={{ width: `${lever * 20}%` }} />
            </div>
          </div>
        </div>

        {/* Description + Story — bar card */}
        <div className="bar-card px-4 py-3 mb-6">
          <p style={{ color: "#ccc" }} className="text-sm leading-relaxed">{recipe.descriptionEn}</p>
          <p className="cn-text text-sm leading-relaxed">{recipe.description}</p>
          <div className="mt-3 pt-2" style={{ borderTop: "1px solid #ff8c0020" }}>
            <p className="bloomberg-amber text-xs font-mono tracking-wider mb-1">🥃 TRADING INSPIRATION 交易灵感</p>
            <p style={{ color: "#ddd" }} className="text-sm leading-relaxed">{recipe.storyEn}</p>
            <p className="cn-text text-xs leading-relaxed">{recipe.story}</p>
          </div>
        </div>

        {/* Ingredients — compact bar list */}
        <div className="mb-6">
          <p className="bloomberg-orange font-mono text-xs tracking-wider mb-2 font-bold">
            🥃 INGREDIENTS 材料
          </p>
          <div className="bar-card px-4 py-2">
            {recipe.ingredients.map((ing, idx) => (
              <div key={ing.nameEn} className="flex items-baseline gap-2 py-1.5" style={{ borderBottom: idx < recipe.ingredients.length - 1 ? "1px solid #ff8c0010" : "none" }}>
                <span className="menu-price font-mono shrink-0">{ing.amount}</span>
                <span className="bloomberg-white text-sm font-mono">{ing.nameEn}</span>
                <span className="cn-text text-xs">{ing.name}</span>
                {ing.noteEn && <span style={{ color: "#666" }} className="text-xs font-mono">({ing.noteEn})</span>}
              </div>
            ))}
            <div className="flex gap-4 pt-2 mt-1" style={{ borderTop: "1px solid #ff8c0020" }}>
              <span className="text-xs font-mono"><span style={{ color: "#666" }}>GLASS</span> <span style={{ color: "#ffb800" }}>{recipe.glassEn}</span></span>
              <span className="text-xs font-mono"><span style={{ color: "#666" }}>GARNISH</span> <span style={{ color: "#ffb800" }}>{recipe.garnishEn}</span></span>
            </div>
          </div>
        </div>

        {/* Steps — numbered thin list */}
        <div className="mb-6">
          <p className="bloomberg-orange font-mono text-xs tracking-wider mb-2 font-bold">
            STEPS 调制步骤
          </p>
          <div className="bar-card px-4 py-2">
            {recipe.stepsEn.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1.5" style={{ borderBottom: idx < recipe.stepsEn.length - 1 ? "1px solid #ff8c0010" : "none" }}>
                <span
                  className="w-5 h-5 flex items-center justify-center text-xs font-mono font-bold shrink-0"
                  style={{ background: "#ff8c00", color: "#000" }}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <p className="bloomberg-white text-sm font-mono">{step}</p>
                  <p className="cn-text text-xs">{recipe.steps[idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <p className="bloomberg-orange font-mono text-xs tracking-wider mb-2 font-bold">
            TAGS 标签
          </p>
          <div className="flex flex-wrap gap-1">
            {recipe.tagsEn.map((tag, idx) => (
              <span key={tag} className="menu-tag font-mono" style={{ background: "#1a0a00", color: "#ff8c00" }}>
                {tag} <span style={{ color: "#666" }}>│{recipe.tags[idx]}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Related */}
        {relatedRecipes.length > 0 && (
          <div>
            <p className="bloomberg-orange font-mono text-xs tracking-wider mb-2 font-bold">
              🥃 MORE 更多推荐
            </p>
            <div className="flex flex-col gap-1">
              {relatedRecipes.map((r) => {
                const rLever = abvToLever(r.abv);
                const rInfo = leverLabel(rLever);
                return (
                  <Link key={r.id} href={`/recipes/${r.id}`} className="group">
                    <div className="bar-card px-4 py-2 flex items-center gap-2">
                      <span className="bloomberg-white text-sm font-bold font-mono group-hover:bloomberg-amber transition-colors">{r.nameEn}</span>
                      <span className="cn-text text-xs">{r.name}</span>
                      <span className="menu-price font-mono shrink-0">ABV {r.abv}</span>
                      <span className={`${rInfo.cls} text-xs font-bold`}>×{rLever}L</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
