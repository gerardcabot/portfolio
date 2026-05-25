/** Groupings mirror the CV Technical Skills blocks */
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Machine learning",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "Statistical modeling",
      "Clustering & regression",
      "Time series",
      "Optimization",
    ],
  },
  {
    category: "Data engineering",
    items: [
      "SQL · PostgreSQL, MySQL",
      "ETL pipelines",
      "Docker",
      "Git · CI/CD",
      "Linux & Bash",
      "Web scraping",
    ],
  },
  {
    category: "Product & viz",
    items: ["Streamlit", "Tableau", "Power BI", "FastAPI", "Flask", "React"],
  },
  {
    category: "Football analytics",
    items: ["StatsBomb", "Opta", "Tracking", "xG · xT · VAEP", "MPLSoccer"],
  },
];
