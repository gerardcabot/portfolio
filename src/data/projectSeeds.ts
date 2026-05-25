/** Non-translatable identifiers: URLs & tags stay stable across locales */
export type ProjectLinkIcon = "github" | "demo" | "video" | "article" | "linkedin";

export type ProjectSeed = {
  tags: string[];
  primaryUrl: string;
  links: { url: string; icon: ProjectLinkIcon }[];
};

export const projectSeeds: ProjectSeed[] = [
  {
    tags: ["React", "Flask", "XGBoost", "StatsBomb", "Vercel"],
    primaryUrl: "https://react-flask-psi.vercel.app/visualization",
    links: [
      { url: "https://react-flask-psi.vercel.app/visualization", icon: "demo" },
      { url: "https://github.com/gerardcabot/ai-football-scouting-platform", icon: "github" },
      {
        url: "https://www.linkedin.com/posts/gerard-cabot_footballanalytics-sportsanalytics-datascience-ugcPost-7396274681382612992-p549/",
        icon: "linkedin",
      },
    ],
  },
  {
    tags: ["Python", "Machine learning", "Time series", "Anomaly detection"],
    primaryUrl: "https://youtu.be/YW85r934Krg",
    links: [
      { url: "https://youtu.be/YW85r934Krg", icon: "video" },
      {
        url: "https://aiguesdebarcelona.cat/es/web/ab-corporativa/prensa/-/asset_publisher/YmSYgh5kicxB/content/tercera-edicio-data-challenge",
        icon: "article",
      },
    ],
  },
];
