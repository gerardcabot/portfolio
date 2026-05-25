export type ProjectLink = {
  label: string;
  url: string;
  icon?: "github" | "demo" | "video" | "article" | "linkedin";
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Main click target (card + primary button) */
  primaryUrl: string;
  links: ProjectLink[];
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Stars of the Future",
    description:
      "Automated scouting stack from my UPF thesis (Excellent with Honours): StatsBomb KPIs, an XGBoost layer for projecting young LaLiga players, Flask + React tooling, deployed for live comparisons.",
    tags: ["React", "Flask", "XGBoost", "StatsBomb", "Vercel"],
    primaryUrl:
      "https://react-flask-psi.vercel.app/visualization",
    links: [
      {
        label: "Live demo",
        url: "https://react-flask-psi.vercel.app/visualization",
        icon: "demo",
      },
      {
        label: "GitHub",
        url: "https://github.com/gerardcabot/ai-football-scouting-platform",
        icon: "github",
      },
      {
        label: "LinkedIn post",
        url: "https://www.linkedin.com/posts/gerard-cabot_footballanalytics-sportsanalytics-datascience-ugcPost-7396274681382612992-p549/",
        icon: "linkedin",
      },
    ],
  },
  {
    title: "Aigües de Barcelona Data Challenge",
    description:
      "Anomaly detection in smart-meter telelectura consumption patterns among participants in Barcelona’s metropolitan water ecosystem.",
    tags: ["Python", "Machine Learning", "Time series", "Anomaly detection"],
    highlight: "Second prize · AB Data Challenge",
    primaryUrl: "https://youtu.be/YW85r934Krg",
    links: [
      {
        label: "Demo video",
        url: "https://youtu.be/YW85r934Krg",
        icon: "video",
      },
      {
        label: "Press article",
        url: "https://aiguesdebarcelona.cat/es/web/ab-corporativa/prensa/-/asset_publisher/YmSYgh5kicxB/content/tercera-edicio-data-challenge",
        icon: "article",
      },
    ],
  },
];
