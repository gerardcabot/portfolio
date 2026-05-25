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
      "Research on Similar Brain — a deep-learning framing that compares footballers via passing intent (choices on the pitch) rather than raw completion rates, feeding likeness-style search during recruitment cycles.",
      "Turning similarity outputs into artefacts scouts reuse: exploratory profiles for shortlists as well as post-match workflows that tighten tactical narratives around performance.",
    ],
  },
  {
    org: "Fever",
    location: "Barcelona",
    roles: "Software engineer",
    timeframe: "Sep 2025 — present",
    bullets: [
      "Own durable Python backends and ingestion pipelines powering event discovery experiences at product scale.",
      "Refactor brittle SQL-heavy paths in PostgreSQL; profile hot queries and reshape schema / batching patterns so near-real-time flows stay predictable under spikes.",
    ],
  },
  {
    org: "Viseo",
    location: "Barcelona",
    roles: "SAP ABAP consultant / developer",
    timeframe: "Nov 2024 — Jun 2025",
    bullets: [
      "Deliver bespoke ABAP objects and integrations inside large SAP footprints — custom business logic, extensions, and concise hand-off documentation for downstream teams.",
      "Partner with analysts and architects to unblock cross-module flows without inflating regression risk.",
    ],
  },
  {
    org: "Vedruna Gràcia",
    location: "Barcelona",
    roles: "Head basketball coach · FCB certified",
    timeframe: "Sep 2018 — Jun 2024",
    bullets: [
      "Led roster development, scouting, and in-game decisions for federated-age competition programmes.",
      "Built lightweight internal shot / possession trackers so substitutions and scouting notes could reference calibrated numbers mid-season — bridging coaching intuition with reproducible KPIs.",
    ],
  },
];
