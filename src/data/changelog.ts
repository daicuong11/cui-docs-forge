export type ChangeType =
  | "Added"
  | "Changed"
  | "Fixed"
  | "Deprecated"
  | "Removed"
  | "Security";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  current?: boolean;
  changes: { type: ChangeType; items: string[] }[];
};

/** Sample project data for the documentation platform itself. */
export const changelog: ChangelogEntry[] = [
  {
    version: "0.1.0",
    date: "August 2026",
    title: "Initial documentation platform",
    current: true,
    changes: [
      {
        type: "Added",
        items: [
          "Documentation platform with data-driven pages",
          "Component catalog with search, category and status filters",
          "Interactive playground with live code generation",
          "Design token reference and theme builder",
          "Global search with ⌘K / Ctrl+K",
        ],
      },
      {
        type: "Changed",
        items: [
          "Initial CUI design system: ink neutrals, single technical accent",
          "Sidebar navigation restructured around Foundations and Components",
        ],
      },
      { type: "Fixed", items: ["Table overflow on narrow viewports"] },
    ],
  },
  {
    version: "0.0.5",
    date: "July 2026",
    title: "Component registry",
    changes: [
      {
        type: "Added",
        items: [
          "Central component metadata registry",
          "Props, events and methods tables generated from metadata",
          "Component status badges (experimental, beta, stable, deprecated)",
        ],
      },
      { type: "Changed", items: ["Component pages now render from a single template"] },
    ],
  },
  {
    version: "0.0.4",
    date: "June 2026",
    title: "Theme system",
    changes: [
      {
        type: "Added",
        items: [
          "Light, dark and system themes with local persistence",
          "CSS custom property token layer",
          "Dark code block theme",
        ],
      },
      { type: "Fixed", items: ["Theme flash on first paint"] },
    ],
  },
  {
    version: "0.0.3",
    date: "May 2026",
    title: "Playground",
    changes: [
      {
        type: "Added",
        items: ["Reusable playground shell", "Control schema for select, switch and text inputs"],
      },
      { type: "Deprecated", items: ["Static screenshot previews"] },
    ],
  },
  {
    version: "0.0.2",
    date: "April 2026",
    title: "Documentation navigation",
    changes: [
      {
        type: "Added",
        items: ["Collapsible sidebar", "Right-hand table of contents", "Breadcrumbs"],
      },
      { type: "Security", items: ["Pinned all build dependencies"] },
    ],
  },
  {
    version: "0.0.1",
    date: "March 2026",
    title: "Project initialization",
    changes: [
      { type: "Added", items: ["Repository, build pipeline and routing skeleton"] },
      { type: "Removed", items: ["Prototype scaffolding"] },
    ],
  },
];

export const changeTypes: ChangeType[] = [
  "Added",
  "Changed",
  "Fixed",
  "Deprecated",
  "Removed",
  "Security",
];
