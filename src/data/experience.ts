export type ExperienceItem = {
  org: string;
  location: string;
  roles: string;
  timeframe: string;
  bullets?: string[];
};

export const roles: ExperienceItem[] = [
  {
    org: "Levante UD",
    location: "Valencia · remote",
    roles: "Football data scientist · research collaborator",
    timeframe: "Sep 2025 — present",
    bullets: [
      "Building Similar Brain — a deep learning framing for player likeness from passing intent, not completion quality.",
      "Embedding similarity workflows into scouting and performance review to surface undervalued players.",
    ],
  },
  {
    org: "Fever",
    location: "Barcelona",
    roles: "Software engineer",
    timeframe: "Sep 2025 — present",
    bullets: [
      "Shipping Python backends and sizable data pipelines for high-traffic event discovery.",
      "Tuning heavyweight PostgreSQL paths and ingestion jobs to keep near-real-time queries honest.",
    ],
  },
  {
    org: "Viseo",
    location: "Barcelona",
    roles: "SAP ABAP consultant / developer",
    timeframe: "Nov 2024 — Jun 2025",
    bullets: [
      "Custom SAP ABAP workflows and optimisation in large-scale enterprise deployments.",
    ],
  },
  {
    org: "Vedruna Gràcia",
    location: "Barcelona",
    roles: "Head basketball coach · FCB certified",
    timeframe: "Sep 2018 — Jun 2024",
    bullets: [
      "Rigged handheld stats tooling so rotations and scouting calls had numbers behind them.",
    ],
  },
];
