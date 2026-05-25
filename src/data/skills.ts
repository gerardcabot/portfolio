/** Groups align with Gerard’s CV Technical Skills plus day-to-day work (PostgreSQL tuning, similarity modelling, ABAP tenure). */

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Inference & modelling",
    items: [
      "Python · NumPy / Pandas",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost · gradient boosting",
      "Regression · clustering",
      "Time series",
      "Statistical modelling · optimisation",
      "Embedding · similarity architectures",
    ],
  },
  {
    category: "Data engineering · platforms",
    items: [
      "SQL · PostgreSQL · MySQL",
      "ETL & batch / streaming ingestion",
      "Linux · Bash · Git · CI/CD",
      "Docker",
      "REST APIs · service boundaries",
      "Web scraping",
    ],
  },
  {
    category: "APIs · dashboards · frontend",
    items: ["FastAPI", "Flask", "Pydantic", "React", "JavaScript (ES6+)", "Streamlit", "Tableau", "Power BI"],
  },
  {
    category: "Football analytics stack",
    items: ["StatsBomb", "Opta", "Tracking & fused sequences", "xG · xT · VAEP", "PySport", "matplotlib · MPLSoccer"],
  },
  {
    category: "Scale & adjacent roles",
    items: [
      "PostgreSQL profiling & tuning (latency / scale)",
      "SAP ABAP (enterprise implementations)",
      "Scouting · recruitment workflows",
    ],
  },
];
