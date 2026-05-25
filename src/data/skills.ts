export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Astro", "HTML / CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Flask", "REST APIs", "Pydantic", "GitHub Actions"],
  },
  {
    category: "Data & ML",
    items: [
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Time-series analysis",
      "Visualization",
    ],
  },
];
