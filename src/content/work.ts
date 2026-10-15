export type CaseVisual = "boards" | "migration" | "errors" | "live" | "perf" | "widgets" | "funnel" | "ai";

export type WorkCase = {
  id: string;
  title: string;
  tag: string;
  period: string;
  summary: string;
  result: string;
  chips: readonly string[];
  visual: CaseVisual;
};

export const cases: readonly WorkCase[] = [
  {
    id: "php",
    title: "Club app: PHP → React + NestJS",
    tag: "Full Stack",
    period: "2025–2026",
    summary:
      "The club app was a 16-year-old PHP app with frontend and backend in one. With a product manager and no QA, I rebuilt it as a NestJS REST API on the original database and a React app whose architecture I set. I documented the architecture decisions and wrote a release checklist.",
    result: "A working product on the new stack in under a year — 12 controllers, 15 services, ~40 tables — and the base for new features like bulk subscriptions and recruiting widgets.",
    chips: ["NestJS", "React", "Keycloak", "Migrations"],
    visual: "migration",
  },
  {
    id: "perf",
    title: "The busiest page, twice as fast",
    tag: "Performance",
    period: "2026",
    summary:
      "I inherited the athlete profile, the most visited page, with stuttering animations. Unasked, I profiled it: three responsive layouts mounted at once and every edit form rendered up front. I rendered only the current layout, mounted forms on open and memoized the heavy calculations.",
    result: "The page loads 2× faster and looks and works exactly the same: DOM nodes 6,612 → 1,123, form fields on load 187 → 2.",
    chips: ["React", "Profiling", "Memoization"],
    visual: "perf",
  },
  {
    id: "analytics",
    title: "Analytics for the paid flow",
    tag: "Product",
    period: "2026",
    summary:
      "Product needed to see where athletes come from, how they register and what happens before they pay. I turned the goals into a step-by-step plan and one typed event module that feeds Segment, GA4 and PostHog, with source tracking and checkout events.",
    result: "Product now decides on real user behavior in registration and the paid flow, not on assumptions.",
    chips: ["Segment", "PostHog", "GA4"],
    visual: "funnel",
  },
  {
    id: "boards",
    title: "Recruiting boards for coaches",
    tag: "Frontend",
    period: "2023–2024",
    summary:
      "Coaches tracked hundreds of athletes in spreadsheets, so I built drag-and-drop boards with dividers filtered by tags, positions and verified values. When coaches asked to place athletes freely, I weighed patching the rules, moving the logic to the server and rebuilding the state. I chose the rebuild: rules in one tested place, optimistic moves with rollback.",
    result: "Coaches got the freedom they asked for, the board stayed fast, and it became the core tool of the coach app.",
    chips: ["React", "Drag and drop", "Optimistic UI"],
    visual: "boards",
  },
  {
    id: "widgets",
    title: "Recruiting widgets for club websites",
    tag: "Public web",
    period: "2026",
    summary:
      "Clubs wanted to show their athletes and college commitments on their own websites, without a developer. I built the widget builder end to end: three widget types, brand colors, live and mobile preview, a copy-paste embed snippet. Saved drafts are checked against current data on load, with tests.",
    result: "Just launched: a club publishes a branded recruiting widget on its site in a few minutes.",
    chips: ["React", "Embeds", "Unit tests"],
    visual: "widgets",
  },
  {
    id: "sentry",
    title: "From “the page is white” to a replay",
    tag: "Observability",
    period: "2024–2026",
    summary:
      "Frontend errors reached us as a coach writing “the page is white”. I set up Sentry in the coach, athlete and club apps: source maps, user and backend context, session replay, an error boundary with a feedback form. Then I filtered out the noise.",
    result: "User-reported problems fell 3× in 12 months; errors now arrive grouped, with affected-user counts and a replay.",
    chips: ["Sentry", "Replay", "Error Boundary"],
    visual: "errors",
  },
  {
    id: "live",
    title: "Live volleyball: video, score, payments",
    tag: "Real-time",
    period: "2022–2023",
    summary:
      "Volleyball matches were streamed from a phone and watched on the web. I built the web side: an HLS player with iPhone inline playback, a WebSocket score overlay and Stripe ticket payments. Phones lose signal mid-match, so the player reconnects near the live edge.",
    result: "A short network drop no longer leaves the viewer on a dead player, and the live score stays on screen.",
    chips: ["WebSocket", "HLS", "Stripe"],
    visual: "live",
  },
  {
    id: "ai",
    title: "AI-DLC: AI with a review gate",
    tag: "Process",
    period: "Since 2025",
    summary:
      "The club app had no QA, so I built an AI Development Life Cycle (AI-DLC). AI analyzes the codebase and drafts a plan; I review it; specialized agents implement, debug and review; a final step checks the result against the requirements.",
    result: "Every change still passes TypeScript, lint, tests and a manual check. Architecture, database, auth and transactions stay in human hands.",
    chips: ["Claude Code", "Cursor", "Agents & skills"],
    visual: "ai",
  },
];

export const disciplines = [
  {
    n: "01",
    title: "Frontend",
    text: "A monorepo that renders several products, each with its own feature set: architecture, code review and releases are mine.",
    cta: "Frontend work",
    image: "/images/discipline-frontend.jpg",
    alt: "Laptop showing a kanban web app with a card mid-drag",
  },
  {
    n: "02",
    title: "Backend",
    text: "NestJS APIs on MySQL and Redis, made 2× faster: service-level roles and scopes, rate limits, batched queries.",
    cta: "Backend work",
    image: "/images/discipline-backend.jpg",
    alt: "Server rack with tidy cables and a laptop showing logs and a database schema",
  },
  {
    n: "03",
    title: "AI-DLC",
    text: "An AI-assisted development lifecycle I brought to the team: agents draft, people review and decide.",
    cta: "How I work",
    image: "/images/discipline-ai-dlc.jpg",
    alt: "Code editor with an AI assistant panel and a ticked plan, implement, review, test checklist",
  },
] as const;
