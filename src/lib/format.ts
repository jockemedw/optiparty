export function fmt(n: number, decimals = 1): string {
  return n.toLocaleString("sv-SE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function pct(n: number, decimals = 1): string {
  return `${fmt(n * 100, decimals)} %`;
}
