export const C = {
  bg: "#0b0c10",
  bgCard: "#111218",
  fg: "#e0dcd0",
  muted: "#6b6b70",
  mutedDim: "#3d3d44",
  mutedFaint: "#242430",
  green: "#10b981",
  red: "#e11d48",
  orange: "#f59e0b",
  lime: "#10b981",
  yellow: "#fbbf24",
  cyan: "#06b6d4",
  pink: "#e11d48",
  purple: "#8b5cf6",
  amber: "#f59e0b",
  border: "#2a2a35",
  borderBright: "rgba(245,158,11,0.35)",
} as const;

const RGB_MAP: Record<string, string> = {
  green: "16,185,129",
  red: "225,29,72",
  orange: "245,158,11",
  pink: "225,29,72",
  lime: "16,185,129",
  yellow: "251,191,36",
  cyan: "6,182,212",
  amber: "245,158,11",
  purple: "139,92,246",
  muted: "107,107,112",
};

export function rgb(colorKey: string, alpha: number): string {
  const values = RGB_MAP[colorKey];
  if (!values) {
    console.warn(`Unknown color key "${colorKey}", falling back to amber`);
    return `rgba(245,158,11,${alpha})`;
  }
  return `rgba(${values},${alpha})`;
}
