"use client";

import Link from "next/link";
import { useState } from "react";
import { recipes, categories, difficultyMap } from "@/data/recipes";

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchCategory = activeCategory === "all" || recipe.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some((t) => t.includes(searchQuery)) ||
      recipe.tagsEn.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      recipe.ingredients.some((i) => i.name.includes(searchQuery) || i.nameEn.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-muted/40 font-mono text-xs uppercase tracking-[0.3em] mb-2">
            RECIPE LIBRARY / 配方库
          </p>
          <h1 className="text-4xl font-bold gradient-text-cyber mb-2">COCKTAIL RECIPES</h1>
          <p className="text-muted/60 font-mono text-sm">每杯鸡尾酒背后，都有一个关于市场的故事 / Every cocktail has a market story behind it</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="SEARCH / 搜索配方、材料、标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-bg border border-card-border rounded-none px-4 py-3 text-sm text-foreground placeholder:text-muted/40 focus:border-neon-cyan focus:outline-none font-mono"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-2 rounded-none text-xs font-mono tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-neon-cyan/20 border border-neon-cyan text-neon-cyan"
                  : "bg-card-bg border border-card-border text-muted/50 hover:text-neon-cyan hover:border-neon-cyan/40"
              }`}
            >
              ALL / 全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 rounded-none text-xs font-mono tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-neon-cyan/20 border border-neon-cyan text-neon-cyan"
                    : "bg-card-bg border border-card-border text-muted/50 hover:text-neon-cyan hover:border-neon-cyan/40"
                }`}
              >
                {cat.icon} {cat.nameEn} / {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-muted/30 text-xs font-mono mb-6 tracking-wider">
          {filteredRecipes.length} RESULTS FOUND
        </p>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
              <div className="cyber-card rounded-none p-5 hover-cyber-glow transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-neon-cyan transition-colors font-mono">
                      {recipe.nameEn}
                    </h3>
                    <p className="text-muted/40 text-xs font-mono">{recipe.name}</p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 font-mono tracking-wider border rounded-none"
                    style={{
                      borderColor: difficultyMap[recipe.difficulty].color + "30",
                      color: difficultyMap[recipe.difficulty].color,
                    }}
                  >
                    {difficultyMap[recipe.difficulty].labelEn}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3 font-mono">
                  <span className="text-neon-cyan/60 text-xs">{categories.find((c) => c.id === recipe.category)?.icon}</span>
                  <span className="text-muted/50 text-xs">{categories.find((c) => c.id === recipe.category)?.nameEn}</span>
                  <span className="text-muted/30 text-xs">| ABV {recipe.abv}</span>
                </div>

                <p className="text-muted/70 text-sm leading-relaxed mb-4 flex-1">
                  {recipe.descriptionEn}
                </p>
                <p className="text-muted/40 text-xs leading-relaxed mb-3">
                  {recipe.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {recipe.ingredients.slice(0, 3).map((ing) => (
                    <span key={ing.nameEn} className="cyber-tag">{ing.nameEn}</span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="text-xs text-muted/30 font-mono px-1">+{recipe.ingredients.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <p className="neon-text-pink font-mono text-lg mb-2">NO RESULTS / 未找到配方</p>
            <p className="text-muted/40 text-sm font-mono">TRY DIFFERENT KEYWORDS / 试试其他关键词</p>
          </div>
        )}
      </div>
    </div>
  );
}
