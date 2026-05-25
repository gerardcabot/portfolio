import { projectSeeds } from "../data/projectSeeds";
import type { Messages } from "../i18n/locales";

export type HydratedProject = {
  title: string;
  description: string;
  highlight?: string;
  tags: string[];
  primaryUrl: string;
  links: { url: string; icon: (typeof projectSeeds)[0]["links"][0]["icon"]; label: string }[];
};

export function hydrateProjects(messages: Messages): HydratedProject[] {
  const cards = messages.projects.cards;
  return projectSeeds.map((seed, i) => {
    const c = cards[i];
    if (!c) throw new Error(`Missing projects.cards[${i}] for locale`);
    return {
      title: c.title,
      description: c.description,
      highlight: c.highlight || undefined,
      tags: seed.tags,
      primaryUrl: seed.primaryUrl,
      links: seed.links.map((l, j) => ({
        ...l,
        label: c.linkLabels[j] ?? `Link ${j}`,
      })),
    };
  });
}
