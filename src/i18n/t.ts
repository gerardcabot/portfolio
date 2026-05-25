/**
 * Astro-friendly dot-path lookup — use as `t(messages, 'nav.about')`.
 * Mirrors a simple `translate` helper; no Vue-style pipe runtime.
 */
export function t(root: Record<string, unknown>, path: string): string {
  let cur: unknown = root;
  for (const key of path.split(".")) {
    if (!cur || typeof cur !== "object" || !(key in (cur as object))) return path;
    cur = (cur as Record<string, unknown>)[key];
  }
  return typeof cur === "string" ? cur : path;
}
