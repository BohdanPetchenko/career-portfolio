import {
  siClaude,
  siCursor,
  siDocker,
  siGitlab,
  siGrafana,
  siJest,
  siKeycloak,
  siMui,
  siMysql,
  siNestjs,
  siNodedotjs,
  siOpentelemetry,
  siPostgresql,
  siReact,
  siReacthookform,
  siReactquery,
  siRedis,
  siRedux,
  siSentry,
  siSwagger,
  siTailwindcss,
  siTypeorm,
  siTypescript,
  siVitest,
  siZod,
  type SimpleIcon,
} from "simple-icons";

export type StackLayer = {
  name: string;
  text: string;
  tools: readonly { name: string; daily: boolean }[];
};

export const stackLayers: readonly StackLayer[] = [
  {
    name: "Interface",
    text: "Six production apps: drag-and-drop boards, dashboards, admin panels.",
    tools: [
      { name: "React", daily: true },
      { name: "TypeScript", daily: true },
      { name: "Material UI", daily: true },
      { name: "Tailwind CSS", daily: false },
      { name: "Ant Design", daily: false },
      { name: "shadcn/ui", daily: false },
      { name: "ApexCharts", daily: false },
    ],
  },
  {
    name: "State & forms",
    text: "Server state, complex forms, optimistic updates.",
    tools: [
      { name: "Zustand", daily: true },
      { name: "TanStack Query", daily: true },
      { name: "React Hook Form", daily: true },
      { name: "Zod", daily: true },
      { name: "Redux", daily: false },
    ],
  },
  {
    name: "API",
    text: "One backend for several products and databases; scopes decide who can call each endpoint.",
    tools: [
      { name: "Node.js", daily: true },
      { name: "NestJS", daily: true },
      { name: "REST", daily: true },
      { name: "Swagger", daily: false },
      { name: "Keycloak", daily: false },
      { name: "Monorepo", daily: true },
    ],
  },
  {
    name: "Data",
    text: "Schema and data migrations, caching, queues, file storage.",
    tools: [
      { name: "MySQL", daily: true },
      { name: "Redis", daily: true },
      { name: "TypeORM", daily: true },
      { name: "PostgreSQL", daily: false },
      { name: "Knex", daily: false },
      { name: "AWS S3", daily: false },
    ],
  },
  {
    name: "Quality & delivery",
    text: "Unit and integration tests in CI, error monitoring, product analytics.",
    tools: [
      { name: "Jest", daily: true },
      { name: "GitLab CI", daily: true },
      { name: "Sentry", daily: true },
      { name: "Vitest", daily: false },
      { name: "Docker", daily: false },
      { name: "OpenTelemetry", daily: false },
      { name: "Grafana", daily: false },
      { name: "Segment", daily: false },
      { name: "PostHog", daily: false },
      { name: "GA4", daily: false },
    ],
  },
  {
    name: "AI workflow",
    text: "Planned, reviewed and checked — then merged.",
    tools: [
      { name: "Claude Code", daily: true },
      { name: "Cursor", daily: true },
      { name: "AI-DLC", daily: true },
      { name: "Custom agents & hooks", daily: false },
    ],
  },
];

export type OrbitRing = { name: string; radius: number; icons: readonly SimpleIcon[] };

export const orbitRings: readonly OrbitRing[] = [
  { name: "Frontend", radius: 150, icons: [siReact, siTypescript, siRedux, siReactquery, siReacthookform, siZod, siTailwindcss, siMui] },
  { name: "Backend & data", radius: 220, icons: [siNodedotjs, siNestjs, siMysql, siPostgresql, siRedis, siTypeorm, siKeycloak, siSwagger] },
  { name: "Quality, delivery & AI", radius: 290, icons: [siJest, siVitest, siDocker, siGitlab, siSentry, siOpentelemetry, siGrafana, siClaude, siCursor] },
];
