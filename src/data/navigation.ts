import { components } from "./components";

export type NavLink = { label: string; to: string; badge?: string };
export type NavGroup = {
  label: string;
  items: NavLink[];
  groups?: { label: string; items: NavLink[] }[];
};

const componentLinks = (category: string): NavLink[] =>
  components
    .filter((component) => component.category === category)
    .map((component) => ({
      label: component.name,
      to: `/components/${component.slug}`,
      badge: component.status === "stable" ? undefined : component.status,
    }));

export const sidebarNav: NavGroup[] = [
  {
    label: "Introduction",
    items: [
      { label: "Overview", to: "/docs/overview" },
      { label: "Why CUI?", to: "/docs/why-cui" },
      { label: "Features", to: "/docs/features" },
      { label: "Architecture", to: "/docs/architecture" },
      { label: "Browser Support", to: "/docs/browser-support" },
    ],
  },
  {
    label: "Getting Started",
    items: [
      { label: "Installation", to: "/installation" },
      { label: "CDN", to: "/installation/cdn" },
      { label: "Local Installation", to: "/installation/local" },
      { label: "ES Modules", to: "/installation/esm" },
      { label: "Quick Start", to: "/installation/quick-start" },
      { label: "Project Setup", to: "/installation/project-setup" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { label: "Design Tokens", to: "/foundations/design-tokens" },
      { label: "Colors", to: "/foundations/colors" },
      { label: "Typography", to: "/foundations/typography" },
      { label: "Spacing", to: "/foundations/spacing" },
      { label: "Icons", to: "/foundations/icons" },
      { label: "Motion", to: "/foundations/motion" },
      { label: "Accessibility", to: "/foundations/accessibility" },
      { label: "Themes", to: "/foundations/themes" },
    ],
  },
  {
    label: "Components",
    items: [{ label: "All components", to: "/components" }],
    groups: [
      { label: "General", items: componentLinks("General") },
      { label: "Form", items: componentLinks("Form") },
      { label: "Data Display", items: componentLinks("Data Display") },
      { label: "Feedback", items: componentLinks("Feedback") },
      { label: "Navigation", items: componentLinks("Navigation") },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Examples", to: "/examples" },
      { label: "Templates", to: "/resources/templates" },
      { label: "Design Resources", to: "/resources/design-resources" },
      { label: "Migration Guide", to: "/resources/migration" },
      { label: "Browser Compatibility", to: "/resources/browser-support" },
      { label: "Download", to: "/download" },
    ],
  },
  {
    label: "Project",
    items: [
      { label: "Changelog", to: "/changelog" },
      { label: "Releases", to: "/releases" },
      { label: "Roadmap", to: "/roadmap" },
      { label: "Contributing", to: "/project/contributing" },
      { label: "License", to: "/project/license" },
    ],
  },
];

export const headerNav: NavLink[] = [
  { label: "Docs", to: "/docs/overview" },
  { label: "Components", to: "/components" },
  { label: "Foundations", to: "/foundations/design-tokens" },
  { label: "Resources", to: "/examples" },
  { label: "Changelog", to: "/changelog" },
  { label: "Roadmap", to: "/roadmap" },
];
