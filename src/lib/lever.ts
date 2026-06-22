/** Shared leverage utility — eliminates 5 duplicate implementations */

export function abvToLever(abv: string): number {
  const val = parseFloat(abv.replace("~", "").replace("%", ""));
  if (val <= 15) return 1;
  if (val <= 25) return 2;
  if (val <= 35) return 3;
  if (val <= 45) return 4;
  return 5;
}

interface LeverLabel {
  en: string;
  cn: string;
  cls: string;
}

const LEVER_MAP: LeverLabel[] = [
  { en: "TIPSY", cn: "微醺", cls: "drunk-1" },
  { en: "BUZZED", cn: "上头", cls: "drunk-2" },
  { en: "DRUNK", cn: "醉了", cls: "drunk-3" },
  { en: "WASTED", cn: "断片", cls: "drunk-4" },
  { en: "REKT", cn: "爆仓", cls: "drunk-5" },
];

export function leverLabel(l: number): LeverLabel {
  return LEVER_MAP[l - 1];
}

export function leverFillClass(lever: number): string {
  return lever <= 2 ? "lever-low" : lever <= 3 ? "lever-mid" : "lever-high";
}
