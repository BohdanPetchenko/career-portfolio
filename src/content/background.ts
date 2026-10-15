export const roles = [
  {
    period: "05/2024 — now",
    role: "Full Stack JS Developer",
    current: true,
    points: [
      "Rebuilt the 16-year-old PHP club app in React and NestJS, with documented architecture decisions",
      "One NestJS backend for several products and databases, with scope-based access; services made 2× faster",
      "Sole frontend developer on six React and TypeScript apps: architecture, code review, releases",
      "Sentry and product analytics: user-reported problems down 3× in 12 months",
      "Onboarded and mentored developers; unit and integration tests in CI; introduced AI-DLC",
    ],
  },
  {
    period: "06/2021 — 05/2024",
    role: "Frontend Developer",
    current: false,
    points: [
      "Recruiting boards, admin panels and dashboards",
      "Live streaming web apps: HLS player, WebSocket score, Stripe",
      "Migrated legacy Angular apps to React and TypeScript",
    ],
  },
  {
    period: "03/2021 — 06/2021",
    role: "Trainee Full Stack JS Developer",
    current: false,
    points: ["Joined the recruiting platform I still build today; moved to a full role in three months"],
  },
] as const;

export const education = [
  {
    period: "2021 — 2022",
    degree: "Master's, Computer Engineering",
    school: "Kharkiv National University of Radioelectronics",
  },
  {
    period: "2018 — 2021",
    degree: "Bachelor's, Electrical Power Supply",
    school: "Ukrainian State University of Railway Transport",
  },
] as const;

export const languages = ["English · B2", "Ukrainian · native"] as const;
