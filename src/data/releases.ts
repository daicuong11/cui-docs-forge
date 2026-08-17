export type Release = {
  version: string;
  date: string;
  title: string;
  status: "current" | "previous" | "preview";
  summary: string;
  highlights: string[];
  breaking: string[];
  migration: string[];
  contributors: string[];
  downloads: { label: string; size: string; file: string }[];
};

/** Sample release data for the CUI project. */
export const releases: Release[] = [
  {
    version: "0.1.0",
    date: "2026-08-04",
    title: "Documentation platform",
    status: "current",
    summary:
      "First public milestone of the CUI project: the documentation platform, component registry and design token system.",
    highlights: [
      "Data-driven documentation engine",
      "Component catalog with 18 documented components",
      "Interactive playground and code generation",
      "Theme builder with CSS export",
    ],
    breaking: [],
    migration: ["No migration required — this is the first public milestone."],
    contributors: ["@cui-core", "@docs-team", "@design-systems"],
    downloads: [
      { label: "cui-0.1.0.zip", size: "182 KB", file: "cui-0.1.0.zip" },
      { label: "cui-0.1.0-docs.zip", size: "1.2 MB", file: "cui-0.1.0-docs.zip" },
    ],
  },
  {
    version: "0.0.5",
    date: "2026-07-12",
    title: "Component registry",
    status: "previous",
    summary:
      "Introduced the metadata registry that every documentation page renders from.",
    highlights: ["Component metadata schema", "Generated API tables", "Status badges"],
    breaking: ["Component pages moved from /docs/components/* to /components/*."],
    migration: [
      "Update bookmarks from /docs/components/button to /components/button.",
      "Component metadata now lives in the registry rather than in page files.",
    ],
    contributors: ["@cui-core", "@docs-team"],
    downloads: [{ label: "cui-0.0.5.zip", size: "164 KB", file: "cui-0.0.5.zip" }],
  },
  {
    version: "0.0.4",
    date: "2026-06-20",
    title: "Theme system",
    status: "previous",
    summary: "Added the token layer, dark mode and persisted theme preference.",
    highlights: ["Design token layer", "Light, dark and system modes", "Dark code theme"],
    breaking: ["Legacy --ui-* variables were renamed to --cui-*."],
    migration: [
      "Search and replace --ui- with --cui- in custom stylesheets.",
      "Remove any manual dark mode class toggling; CUI handles it.",
    ],
    contributors: ["@design-systems"],
    downloads: [{ label: "cui-0.0.4.zip", size: "151 KB", file: "cui-0.0.4.zip" }],
  },
];

export const releaseByVersion = (version: string) =>
  releases.find((release) => release.version === version);
