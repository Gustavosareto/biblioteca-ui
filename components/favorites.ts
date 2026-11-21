const KEY = "ui-motion:favorites";

// localStorage pode lançar (modo privado / bloqueado): favoritos viram no-op nesse caso
export function readFavorites(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(v) ? v.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(slug: string): string[] {
  const current = readFavorites();
  const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {}
  return next;
}
