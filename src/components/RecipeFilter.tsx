"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { recipes, categories, difficultyMap } from "@/data/recipes";
import { abvToLever, leverLabel, leverFillClass } from "@/lib/lever";

const categoryMap = new Map(categories.map(c => [c.id, { icon: c.icon, nameEn: c.nameEn, name: c.name }]));

export function RecipeFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return recipes.filter((recipe) => {
      const matchCategory = activeCategory === "all" || recipe.category === activeCategory;
      const matchSearch = !q ||
        recipe.name.toLowerCase().includes(q) ||
        recipe.nameEn.toLowerCase().includes(q) ||
        recipe.tags.some(t => t.includes(q)) ||
        recipe.tagsEn.some(t => t.toLowerCase().includes(q)) ||
        recipe.ingredients.some(i => i.name.includes(q) || i.nameEn.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="🥃 SEARCH / 搜索配方..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-b px-3 py-2 text-sm font-mono focus:outline-none focus:border-bloomberg-amber"
          style={{ background: "transparent", borderColor: "#ff8c0030", color: "#e0e0e0" }}
        />
      </div>

      {/* Category tabs — bar style */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveCategory("all")}
          className={`menu-category-btn font-mono ${activeCategory === "all" ? "active" : ""}`}
        >
          ALL 全部
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`menu-category-btn font-mono ${activeCategory === cat.id ? "active" : ""}`}
          >
            {cat.icon} {cat.nameEn} {cat.name}
          </button>
        ))}
      </div>

      {/* Count */}
      <p style={{ color: "#ffb800" }} className="text-xs font-mono mb-3">
        {filteredRecipes.length} drinks on the menu
      </p>

      {/* Menu list — thin bar rows with leverage */}
      <div className="flex flex-col gap-1">
        {filteredRecipes.map((recipe) => {
          const catInfo = categoryMap.get(recipe.category);
          const diff = difficultyMap[recipe.difficulty];
          const lever = abvToLever(recipe.abv);
          const leverInfo = leverLabel(lever);
          return (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
              <div className="bar-card px-4 py-3 flex items-center gap-3">
                {/* Category icon */}
                <span className="text-sm shrink-0" style={{ color: "#ffb800" }}>
                  {catInfo?.icon}
                </span>

                {/* Name column */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="bloomberg-white text-sm font-bold font-mono tracking-wide truncate">
                      {recipe.nameEn}
                    </span>
                    <span className="cn-text text-xs truncate">
                      {recipe.name}
                    </span>
                  </div>
                  <p style={{ color: "#888" }} className="text-xs truncate font-mono mt-0.5">
                    {recipe.descriptionEn}
                  </p>
                </div>

                {/* Difficulty */}
                <span
                  className="menu-tag shrink-0"
                  style={{ background: diff.color + "18", color: diff.color }}
                >
                  {diff.labelEn}
                </span>

                {/* ABV + Lever */}
                <div className="shrink-0 flex items-center gap-2">
                  <span className="menu-price font-mono">ABV {recipe.abv}</span>
                  <span className={`${leverInfo.cls} font-bold text-xs`}>×{lever}L</span>
                </div>

                {/* Lever bar */}
                <div className="lever-bar w-12 shrink-0">
                  <div className={`lever-fill ${leverFillClass(lever)}`} style={{ width: `${lever * 20}%` }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty */}
      {filteredRecipes.length === 0 && (
        <div className="text-center py-16">
          <p className="bar-neon bar-neon-orange font-mono text-sm mb-1">未找到配方 NO RESULTS</p>
          <p style={{ color: "#555" }} className="text-xs font-mono">试试其他关键词</p>
        </div>
      )}
    </>
  );
}
