# CUI — Universal Vanilla UI Documentation Platform

Build the official documentation, showcase, playground and developer portal for CUI. Data-driven docs engine, not a marketing site. Mock demo components stay isolated so the real CUI library can replace them later.

## Visual identity

Serious developer-tool aesthetic: dense information, precise typography, hairline borders, restrained shadows, no gradients/blobs/glassmorphism. Original palette (deep ink neutrals + a single technical accent), monospace accents for code and version chips. Full light/dark/system theming persisted in localStorage.

## Layout shell

- Sticky header: logo + "CUI / Universal Vanilla UI", nav (Docs, Components, Foundations, Resources, Changelog, Roadmap), search trigger with Cmd/Ctrl+K, GitHub link from a config constant, theme switcher, version selector (mock versions).
- Left sidebar: collapsible grouped nav (Introduction, Getting Started, Foundations, Components by category, Resources, Project), active-route highlight, mobile drawer.
- Right table of contents on doc pages, auto-built from page sections with scroll spy.
- Footer with documentation / community / resources / license columns.

## Documentation engine

Reusable primitives, used by every page — no per-page bespoke layouts:
`DocPage`, `DocSection`, `LivePreview`, `CodeBlock` (HTML/CSS/JS tabs, highlight, copy, expand), `Playground`, `APIReference`, `PropsTable`, `EventsTable`, `MethodsTable`, `ExampleCard`, `Callout`, `VersionBadge`, `StatusBadge`, `CopyButton`, `TableOfContents`, `Breadcrumb`.

Content comes from typed registries in `src/data/`: components, docs pages, changelog, releases, roadmap, tokens.

## Routes

```text
/                         landing
/docs/*                   overview, why-cui, features, architecture, browser-support
/installation/*           cdn, local, esm, quick-start, project-setup
/foundations/*            design-tokens, colors, typography, spacing, icons,
                          motion, accessibility, themes
/components               catalog (search, category/status filter, sort)
/components/$slug         data-driven component doc page
/examples                 realistic enterprise example gallery
/resources/*              templates, design-resources, migration, browser-support
/changelog /releases /releases/$version /roadmap /download
404 + empty states
```

## Key pages

- **Landing**: compact hero with an interactive mock app showcase (button/input/select/modal/table), Why CUI grid, three install methods, component showcase, environment compatibility strip (clearly labelled targets, not shipped integrations), design tokens, dark-mode preview, latest release, changelog preview, roadmap, final CTA.
- **/components/button**: the complete reference template — import, basic, variants, sizes, disabled, loading, with icon, block, interactive playground, props/events/methods tables, accessibility, related components.
- **Other 17 components** (Input, Select, Checkbox, Radio, Switch, Modal, Drawer, Dropdown, Tooltip, Toast, Tabs, Table, Pagination, Card, Badge, Alert, Spinner) ship real metadata, examples, API tables and accessibility notes through the same engine.
- **Design tokens**: colors, typography scale, spacing, radius, shadows, z-index, motion.
- **Theme builder**: live control of primary/success/warning/danger/background/text/border/radius, previews the showcase, reset / export CSS / copy tokens.
- **Changelog** timeline with type filters; **Releases** index + per-version notes; **Roadmap** with status, target version, priority; **Download** with CDN options and mock per-component bundle builder.

## Playground

One reusable playground: control schema (select / toggle / text) defined per example in the registry, state drives both the mock preview and the generated HTML snippet, with Reset and Copy. Mock components live only in `src/components/playground/mock-cui/` behind a renderer map so real CUI custom elements can be swapped in.

## Search

Client-side index built from the registries (pages, components, props, events, methods, changelog, examples). Overlay with Cmd/Ctrl+K, grouped results, arrow/enter/escape keyboard navigation, empty state.

## Technical notes

- TanStack Start file routes under `src/routes/`, automatic code splitting, per-route `head()` with unique title/description/OG/Twitter and self-referencing canonical.
- Tailwind v4 tokens in `src/styles.css`; semantic tokens only, no hardcoded colors.
- Syntax highlighting done with a light custom tokenizer — no heavy highlighting dependency.
- Responsive: scrollable tables, wrapped code blocks, stacked playgrounds, mobile drawer nav.
- Accessibility: semantic landmarks, focus rings, dialog focus trap, aria labels, `prefers-reduced-motion` respected.

## Build order

1. Design system, layout shell, theme system
2. Docs engine primitives + registries
3. Component catalog + Button reference page, then remaining components
4. Landing page
5. Foundations, theme builder, changelog/releases/roadmap/download/installation
6. Search, examples, error states, responsive and dark-mode polish
