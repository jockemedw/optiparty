/** Mörkar för ljusa partifärger så de förblir läsbara mot papperbakgrunden.
 *  Ren presentation — datasetets färger ändras inte. */
export function displayColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance < 0.62) return hex;
  const k = 0.55 / luminance;
  const to = (v: number) => Math.round(v * k).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}
