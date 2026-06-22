export const C = {
  bg: "var(--color-background)",
  bgCard: "var(--color-card-bg)",
  fg: "var(--color-foreground)",
  muted: "var(--color-muted)",
  mutedDim: "var(--color-muted-dim)",
  mutedFaint: "var(--color-muted-faint)",
  green: "var(--color-neon-green)",
  red: "var(--color-neon-red)",
  orange: "var(--color-gmgn-orange)",
  lime: "var(--color-gmgn-lime)",
  yellow: "var(--color-gmgn-yellow)",
  cyan: "var(--color-neon-cyan)",
  pink: "var(--color-neon-pink)",
  purple: "var(--color-neon-purple)",
  amber: "var(--color-neon-amber)",
  border: "var(--color-card-border)",
  borderBright: "rgba(255,107,0,0.35)",
} as const;

// CSS custom properties don't work in inline `color` styles directly for opacity/rgba.
// For those cases, use the RGB decomposition values.
const RGB_MAP: Record<string, string> = {
  green: "57,255,20",
  red: "255,59,59",
  orange: "255,107,0",
  pink: "255,45,149",
  lime: "200,255,0",
  yellow: "255,229,0",
  cyan: "0,240,255",
  amber: "255,184,0",
  purple: "176,38,255",
  muted: "68,68,85",
};

export function rgb(colorKey: string, alpha: number): string {
  const values = RGB_MAP[colorKey];
  if (!values) {
    // Fallback: try to parse from CSS variable (not ideal but safe)
    console.warn(`Unknown color key "${colorKey}", falling back to orange`);
    return `rgba(255,107,0,${alpha})`;
  }
  return `rgba(${values},${alpha})`;
}
