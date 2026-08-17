/**
 * Central configuration for the CUI documentation platform.
 * Repository URLs, CDN hosts and version metadata are placeholders until the
 * real CUI library is published.
 */

export const siteConfig = {
  name: "CUI",
  fullName: "Universal Vanilla UI",
  tagline: "Build once. Use anywhere.",
  description:
    "A framework-independent UI library built with native HTML, CSS and JavaScript.",
  // Placeholder — replace with the real repository once CUI is published.
  repoUrl: "https://example.com/cui/repository",
  issuesUrl: "https://example.com/cui/repository/issues",
  discussionsUrl: "https://example.com/cui/repository/discussions",
  cdnBase: "https://cdn.example.com/cui",
  license: "MIT",
  currentVersion: "0.1.0",
  stats: {
    stars: "2.4k",
    forks: "186",
    issues: "34",
    contributors: "12",
  },
} as const;

export type LibraryVersion = {
  value: string;
  label: string;
  status: "latest" | "stable" | "preview" | "archived";
};

export const versions: LibraryVersion[] = [
  { value: "0.1.0", label: "v0.1.0", status: "latest" },
  { value: "0.0.5", label: "v0.0.5", status: "archived" },
  { value: "0.0.4", label: "v0.0.4", status: "archived" },
  { value: "1.0.0", label: "v1.0.0", status: "preview" },
];

export const cdnUrls = (version: string) => ({
  css: `${siteConfig.cdnBase}/${version}/cui.min.css`,
  js: `${siteConfig.cdnBase}/${version}/cui.min.js`,
  cssDev: `${siteConfig.cdnBase}/${version}/cui.css`,
  jsDev: `${siteConfig.cdnBase}/${version}/cui.js`,
});
