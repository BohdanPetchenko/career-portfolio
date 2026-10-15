export const site = {
  name: "Bohdan Petchenko",
  firstName: "Bohdan",
  lastName: "Petchenko",
  role: "Full Stack Engineer",
  stackLine: "React · TypeScript · NestJS",
  hook: {
    before: "I ship features end to end — NestJS API to React screen — on a platform with ",
    strong: "10,000 users a day",
    after: ".",
  },
  description:
    "Full Stack Engineer (React, TypeScript, NestJS). Ships features end to end on a SaaS recruiting platform with 10,000 signed-in users a day.",
  location: "Based in Bratislava (CEST)",
  since: 2021,
  email: "bohdan.petchenko@gmail.com",
  links: {
    telegram: "https://t.me/bohdan_petchenko",
    linkedin: "https://www.linkedin.com/in/bohdan-petchenko-29b7371b1",
    cv: "/cv.pdf",
  },
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Background", href: "#background" },
  { label: "About", href: "#about" },
] as const;

export const heroHighlights = [
  { value: "6", unit: "apps", text: "React frontends I lead: architecture, code review, releases" },
  { value: "<1", unit: "year", text: "to rebuild a 16-year-old PHP app in React and NestJS" },
  { value: "5+", unit: "years", text: "in production, from trainee to Full Stack Developer" },
] as const;

export const aboutFacts = [
  { term: "Based in", value: "Bratislava, Slovakia (CEST)" },
  { term: "Roles", value: "Full Stack · Frontend" },
  { term: "Focus", value: "React · TypeScript · NestJS" },
  { term: "Languages", value: "English B2 · Ukrainian" },
] as const;

export const numbers = [
  { value: "10k", unit: "", text: "signed-in users a day, out of 100,000+ registered" },
  { value: "3×", unit: "", text: "fewer user-reported problems in 12 months after Sentry" },
  { value: "2×", unit: "", text: "faster backend services after I optimized them" },
  { value: "83", unit: "%", text: "lighter most visited page — it now loads twice as fast" },
] as const;

export const principles = [
  {
    title: "Own the whole feature",
    text: "MySQL table, NestJS endpoint, React screen and tests — one change, one owner.",
  },
  {
    title: "Measure before optimizing",
    text: "I profiled the busiest page, then cut what it rendered: it loads twice as fast and looks the same.",
  },
  {
    title: "Build analytics to extend",
    text: "One typed event layer, so any app can send new events to Google Analytics, Segment and PostHog.",
  },
  {
    title: "Grow the team",
    text: "I review code, onboard new developers and mentor them.",
  },
  {
    title: "Set the standards",
    text: "Linter and editor rules, documented architecture decisions and a release checklist for each project.",
  },
] as const;

export const marquee = ["React", "TypeScript", "NestJS", "MySQL", "Redis", "Keycloak", "Sentry", "Claude Code"] as const;
