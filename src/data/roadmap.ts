export type RoadmapStatus = "completed" | "in-progress" | "planned";

export type RoadmapItem = {
  title: string;
  description: string;
  status: RoadmapStatus;
  targetVersion: string;
  targetDate: string;
  priority: "high" | "medium" | "low";
};

export const roadmap: RoadmapItem[] = [
  {
    title: "Architecture",
    description:
      "Package layout, build pipeline and the metadata contract shared between the library and the documentation platform.",
    status: "completed",
    targetVersion: "0.0.1",
    targetDate: "Q1 2026",
    priority: "high",
  },
  {
    title: "Design System",
    description:
      "Token layer for colour, typography, spacing, radius, elevation and motion, expressed entirely as CSS custom properties.",
    status: "completed",
    targetVersion: "0.0.4",
    targetDate: "Q2 2026",
    priority: "high",
  },
  {
    title: "Documentation Platform",
    description:
      "Data-driven docs engine, component catalog, playground, search and theme builder.",
    status: "completed",
    targetVersion: "0.1.0",
    targetDate: "Q3 2026",
    priority: "high",
  },
  {
    title: "Component Registry",
    description:
      "Machine-readable metadata for every component, consumed by the docs and by editor tooling.",
    status: "completed",
    targetVersion: "0.0.5",
    targetDate: "Q3 2026",
    priority: "high",
  },
  {
    title: "Core Runtime",
    description:
      "Base custom element class, reactive attributes, shadow DOM styling strategy and the theming bridge.",
    status: "in-progress",
    targetVersion: "0.2.0",
    targetDate: "Q4 2026",
    priority: "high",
  },
  {
    title: "Foundation Components",
    description: "Button, Icon, Typography, Divider, Card, Badge, Alert and Spinner.",
    status: "in-progress",
    targetVersion: "0.2.0",
    targetDate: "Q4 2026",
    priority: "high",
  },
  {
    title: "Interactive Components",
    description: "Modal, Drawer, Dropdown, Tooltip, Tabs and Toast with the shared overlay layer.",
    status: "planned",
    targetVersion: "0.3.0",
    targetDate: "Q1 2027",
    priority: "high",
  },
  {
    title: "Form System",
    description:
      "Form-associated custom elements, validation, error summaries and a form layout primitive.",
    status: "planned",
    targetVersion: "0.4.0",
    targetDate: "Q1 2027",
    priority: "high",
  },
  {
    title: "Data Components",
    description: "Table, Pagination, List, Timeline and Tree.",
    status: "planned",
    targetVersion: "0.5.0",
    targetDate: "Q2 2027",
    priority: "medium",
  },
  {
    title: "Enterprise Components",
    description: "DataTable, DatePicker, Upload and Transfer.",
    status: "planned",
    targetVersion: "0.6.0",
    targetDate: "Q3 2027",
    priority: "medium",
  },
  {
    title: "CDN Distribution",
    description: "Versioned, immutable CDN builds with SRI hashes and per-component entry points.",
    status: "planned",
    targetVersion: "1.0.0",
    targetDate: "Q3 2027",
    priority: "medium",
  },
  {
    title: "CLI",
    description: "Project scaffolding, component generation and metadata validation.",
    status: "planned",
    targetVersion: "1.0.0",
    targetDate: "Q4 2027",
    priority: "low",
  },
];
