import type { DocPageData } from "./types";
import { siteConfig } from "@/lib/site-config";

const V = siteConfig.currentVersion;
const CDN = siteConfig.cdnBase;

const cdnSnippet = `<link rel="stylesheet" href="${CDN}/${V}/cui.min.css">
<script src="${CDN}/${V}/cui.min.js" defer></script>`;

/**
 * Every non-component documentation page is described as data and rendered by
 * a single <DocPage /> template. Adding a page means adding an entry here plus
 * a four-line route file.
 */
export const docPages: Record<string, DocPageData> = {
  "docs/overview": {
    slug: "docs/overview",
    title: "Overview",
    description:
      "CUI is a universal UI library for the web, built with native HTML, CSS and JavaScript. It runs anywhere a browser does — no framework required.",
    breadcrumb: [{ label: "Docs" }, { label: "Overview" }],
    group: "Introduction",
    version: V,
    keywords: ["overview", "introduction", "getting started", "about"],
    sections: [
      {
        id: "what-is-cui",
        title: "What is CUI?",
        blocks: [
          {
            type: "text",
            value:
              "CUI (Universal Vanilla UI) is a component library implemented as standard custom elements. Each component is a self-contained web component styled through CSS custom properties, so it renders identically whether it is dropped into a static HTML page, a server-rendered ASP.NET view, a PHP template or a modern single-page application.",
          },
          {
            type: "callout",
            variant: "info",
            title: "The library is under development",
            value:
              "This site is the documentation and product platform for CUI. The runtime is being built in the open — see the roadmap for what has shipped and what is next. Code samples show the intended API.",
          },
          {
            type: "code",
            language: "html",
            title: "A complete CUI page",
            code: `<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="${CDN}/${V}/cui.min.css">
    <script src="${CDN}/${V}/cui.min.js" defer></script>
  </head>
  <body>
    <cui-button variant="primary">Save changes</cui-button>
  </body>
</html>`,
          },
        ],
      },
      {
        id: "principles",
        title: "Principles",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Standards first",
                value:
                  "Custom Elements, Shadow DOM, CSS Custom Properties and ES Modules. No compiler, no virtual DOM, no proprietary runtime.",
              },
              {
                title: "Zero runtime dependencies",
                value:
                  "One stylesheet and one script. Nothing else is downloaded, and nothing conflicts with the framework you already use.",
              },
              {
                title: "Themeable by contract",
                value:
                  "Every visual decision is a CSS custom property. Theming is done in plain CSS, not through a build step.",
              },
              {
                title: "Accessible by default",
                value:
                  "Keyboard support, focus management and ARIA semantics are part of each component, not an add-on.",
              },
            ],
          },
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        blocks: [
          {
            type: "list",
            items: [
              "Install CUI from the CDN or a local download.",
              "Browse the component catalog and open the Button reference page.",
              "Read the design token documentation before customising anything.",
              "Check browser support for the web platform features CUI relies on.",
            ],
          },
        ],
      },
    ],
  },

  "docs/why-cui": {
    slug: "docs/why-cui",
    title: "Why CUI?",
    description:
      "Why a framework-independent component library matters, and where CUI fits compared with framework-bound UI kits.",
    breadcrumb: [{ label: "Docs" }, { label: "Why CUI?" }],
    group: "Introduction",
    keywords: ["why", "comparison", "framework independent", "rationale"],
    sections: [
      {
        id: "the-problem",
        title: "The problem",
        blocks: [
          {
            type: "text",
            value:
              "Most UI libraries are bound to a framework. When the framework changes, the design system has to be rebuilt. Organisations that run a mix of legacy server-rendered applications and modern SPAs end up maintaining two or three implementations of the same button.",
          },
          {
            type: "table",
            headers: ["Situation", "Framework-bound kit", "CUI"],
            rows: [
              ["Legacy JSP or ASP.NET screens", "Not usable", "Drop in a script tag"],
              ["React application", "Works", "Works as custom elements"],
              ["Migration between frameworks", "Full rewrite of UI layer", "Markup is unchanged"],
              ["Design token changes", "Rebuild required", "CSS variable update"],
            ],
          },
        ],
      },
      {
        id: "trade-offs",
        title: "Honest trade-offs",
        blocks: [
          {
            type: "list",
            items: [
              "Custom elements need a small amount of glue in frameworks that do not set properties automatically.",
              "Shadow DOM isolates styles, which means global overrides must go through the documented custom properties.",
              "Server-side rendering of shadow DOM relies on declarative shadow DOM, which is supported in current browsers but not in very old ones.",
            ],
          },
          {
            type: "callout",
            variant: "warning",
            title: "Not a silver bullet",
            value:
              "If your entire product is one framework and will stay that way, a native library for that framework may serve you better. CUI is aimed at portfolios of applications built on different stacks.",
          },
        ],
      },
    ],
  },

  "docs/features": {
    slug: "docs/features",
    title: "Features",
    description:
      "What CUI provides: components, tokens, theming, accessibility, distribution and tooling.",
    breadcrumb: [{ label: "Docs" }, { label: "Features" }],
    group: "Introduction",
    keywords: ["features", "capabilities"],
    sections: [
      {
        id: "feature-set",
        title: "Feature set",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Zero runtime dependencies", value: "No React, Vue, Angular, jQuery, Bootstrap or Tailwind at runtime." },
              { title: "Framework independent", value: "Works in any environment that can render HTML." },
              { title: "Native web standards", value: "Custom Elements v1, Shadow DOM v1, CSS Custom Properties, ES Modules." },
              { title: "CDN ready", value: "Versioned, immutable builds with SRI hashes." },
              { title: "Local download", value: "A single ZIP with minified and unminified builds." },
              { title: "Web components", value: "Each component is a real element with properties, attributes and events." },
              { title: "Accessible", value: "Keyboard support and ARIA semantics built into every component." },
              { title: "Themeable", value: "Every visual value is a documented custom property." },
              { title: "Enterprise ready", value: "Dense data components, form validation and predictable versioning." },
            ],
          },
        ],
      },
    ],
  },

  "docs/architecture": {
    slug: "docs/architecture",
    title: "Architecture",
    description:
      "How CUI is structured: the core runtime, component packages, the token layer and the metadata pipeline that feeds this documentation.",
    breadcrumb: [{ label: "Docs" }, { label: "Architecture" }],
    group: "Introduction",
    keywords: ["architecture", "structure", "runtime", "metadata"],
    sections: [
      {
        id: "layers",
        title: "Layers",
        blocks: [
          {
            type: "code",
            language: "text",
            title: "Runtime layers",
            code: `Token layer      CSS custom properties, themes
Core runtime     base element, reactive attributes, focus + overlay services
Components       cui-button, cui-input, cui-modal, ...
Distribution     CDN bundle, local ZIP, ES module entry points`,
          },
          {
            type: "text",
            value:
              "The core runtime is intentionally small: a base class that reflects attributes to properties, an overlay service that owns the top layer, and a focus service that handles trapping and restoration. Components never reach into each other's internals.",
          },
        ],
      },
      {
        id: "package-layout",
        title: "Package layout",
        blocks: [
          {
            type: "code",
            language: "text",
            code: `components/
  button/
    component.js      custom element definition
    button.css        component styles
    metadata.json     props, events, methods, examples
    README.md         narrative documentation
    examples/`,
          },
          {
            type: "text",
            value:
              "metadata.json is the contract between the library and this website. The documentation platform already renders every component page from the same shape, so publishing generated metadata replaces the sample registry without touching the rendering layer.",
          },
        ],
      },
      {
        id: "docs-pipeline",
        title: "Documentation pipeline",
        blocks: [
          {
            type: "code",
            language: "text",
            code: `CUI component source
        ↓
component metadata (metadata.json)
        ↓
documentation generator
        ↓
CUI website (catalog, API tables, playground, search)`,
          },
        ],
      },
    ],
  },

  "docs/browser-support": {
    slug: "docs/browser-support",
    title: "Browser Support",
    description:
      "Browsers and web platform features CUI depends on, with the support baseline for each.",
    breadcrumb: [{ label: "Docs" }, { label: "Browser Support" }],
    group: "Introduction",
    keywords: ["browser", "support", "compatibility", "baseline"],
    sections: [
      { id: "browsers", title: "Browsers", blocks: [{ type: "custom", key: "browser-matrix" }] },
      { id: "platform-features", title: "Platform features", blocks: [{ type: "custom", key: "feature-matrix" }] },
      {
        id: "legacy",
        title: "Legacy environments",
        blocks: [
          {
            type: "text",
            value:
              "CUI targets browsers with native custom element support. Internet Explorer is not supported and will not be. For environments that must support it, render a server-side fallback and progressively enhance.",
          },
        ],
      },
    ],
  },

  installation: {
    slug: "installation",
    title: "Installation",
    description:
      "Three ways to install CUI: a CDN script tag, a local download, or ES module imports.",
    breadcrumb: [{ label: "Getting Started" }, { label: "Installation" }],
    group: "Getting Started",
    version: V,
    keywords: ["installation", "install", "setup", "cdn", "download", "esm"],
    sections: [
      {
        id: "cdn",
        title: "CDN",
        blocks: [
          { type: "text", value: "The fastest way to start. Nothing to build, nothing to install." },
          { type: "code", language: "html", code: cdnSnippet },
        ],
      },
      {
        id: "local",
        title: "Local",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Download CUI", value: "Grab the release ZIP from the download page." },
              { title: "Copy cui.min.css", value: "Place it in your static assets folder." },
              { title: "Copy cui.min.js", value: "Place it alongside the stylesheet." },
              { title: "Start using components", value: "Reference both files from your layout." },
            ],
          },
        ],
      },
      {
        id: "esm",
        title: "ES Modules",
        blocks: [
          {
            type: "code",
            language: "javascript",
            code: `import "@cui/button";
import "@cui/input";

// or the whole library
import "@cui/all";`,
          },
          {
            type: "callout",
            variant: "info",
            title: "Demonstration package names",
            value:
              "Package names shown here are the planned publishing scheme. They are not published yet.",
          },
        ],
      },
    ],
  },

  "installation/cdn": {
    slug: "installation/cdn",
    title: "CDN",
    description:
      "Load CUI from a CDN: production and development builds, version pinning, per-component entry points, caching, SRI and upgrades.",
    breadcrumb: [{ label: "Getting Started" }, { label: "CDN" }],
    group: "Getting Started",
    version: V,
    keywords: ["cdn", "script tag", "sri", "integrity", "version pinning", "cache"],
    sections: [
      {
        id: "production",
        title: "Production",
        blocks: [
          { type: "code", language: "html", code: cdnSnippet },
          {
            type: "text",
            value:
              "The minified build strips development warnings and is the smallest payload. Always pin an exact version in production.",
          },
        ],
      },
      {
        id: "development",
        title: "Development",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<link rel="stylesheet" href="${CDN}/${V}/cui.css">
<script src="${CDN}/${V}/cui.js" defer></script>`,
          },
          {
            type: "text",
            value:
              "The development build keeps readable class names and logs warnings for invalid attribute values and missing accessible names.",
          },
        ],
      },
      {
        id: "version-pinning",
        title: "Version pinning",
        blocks: [
          {
            type: "table",
            headers: ["URL", "Resolves to", "Recommended for"],
            rows: [
              [`${CDN}/${V}/cui.min.js`, "Exact version, immutable", "Production"],
              [`${CDN}/0.1/cui.min.js`, "Latest patch of 0.1", "Staging"],
              [`${CDN}/latest/cui.min.js`, "Latest release", "Prototypes only"],
            ],
          },
          {
            type: "callout",
            variant: "warning",
            title: "Never ship 'latest'",
            value:
              "An unpinned URL means a release can change your production UI without a deploy.",
          },
        ],
      },
      {
        id: "individual-components",
        title: "Individual components",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<link rel="stylesheet" href="${CDN}/${V}/components/button.css">
<script type="module"
  src="${CDN}/${V}/components/button.js"></script>`,
          },
          {
            type: "text",
            value:
              "Per-component entry points keep the payload small when a page only needs a few elements.",
          },
        ],
      },
      {
        id: "integrity",
        title: "Subresource integrity",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<script
  src="${CDN}/${V}/cui.min.js"
  integrity="sha384-EXAMPLEhashEXAMPLEhashEXAMPLEhashEXAMPLEhash"
  crossorigin="anonymous"
  defer></script>`,
          },
          {
            type: "text",
            value: "Every release publishes SRI hashes next to the download links. The hash above is illustrative.",
          },
        ],
      },
      {
        id: "caching",
        title: "Cache strategy",
        blocks: [
          {
            type: "list",
            items: [
              "Versioned URLs are immutable and served with a one year max-age.",
              "Range aliases such as 0.1 use a short max-age with revalidation.",
              "Preconnect to the CDN origin in the document head to cut a round trip.",
            ],
          },
          {
            type: "code",
            language: "html",
            code: `<link rel="preconnect" href="https://cdn.example.com" crossorigin>`,
          },
        ],
      },
      {
        id: "upgrading",
        title: "Upgrade strategy",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Read the changelog", value: "Check breaking changes for the target version." },
              { title: "Bump in staging", value: "Point the range alias at the new version first." },
              { title: "Run visual checks", value: "Verify dense screens: tables, forms, modals." },
              { title: "Pin in production", value: "Deploy with an exact version and updated SRI hash." },
            ],
          },
        ],
      },
    ],
  },

  "installation/local": {
    slug: "installation/local",
    title: "Local Installation",
    description:
      "Download CUI and serve it from your own application: plain HTML, ASP.NET and PHP examples.",
    breadcrumb: [{ label: "Getting Started" }, { label: "Local Installation" }],
    group: "Getting Started",
    keywords: ["local", "download", "self host", "asp.net", "php"],
    sections: [
      {
        id: "steps",
        title: "Installation steps",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Download", value: "Get cui-" + V + ".zip from the download page." },
              { title: "Extract", value: "Unpack the archive into a temporary folder." },
              { title: "Copy files", value: "Move cui.min.css and cui.min.js into your static assets." },
              { title: "Include CSS", value: "Reference the stylesheet in your layout head." },
              { title: "Include JS", value: "Reference the script with defer before the closing body tag." },
              { title: "Use CUI", value: "Add CUI elements anywhere in your markup." },
            ],
          },
        ],
      },
      {
        id: "plain-html",
        title: "Plain HTML",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<link rel="stylesheet" href="/assets/cui/cui.min.css">
<script src="/assets/cui/cui.min.js" defer></script>

<cui-button variant="primary">Save</cui-button>`,
          },
        ],
      },
      {
        id: "aspnet",
        title: "ASP.NET",
        blocks: [
          {
            type: "code",
            language: "html",
            title: "_Layout.cshtml",
            code: `<link rel="stylesheet" href="~/lib/cui/cui.min.css" asp-append-version="true" />
<script src="~/lib/cui/cui.min.js" asp-append-version="true" defer></script>

<cui-input label="Employee name" value="@Model.Name"></cui-input>`,
          },
        ],
      },
      {
        id: "php",
        title: "PHP",
        blocks: [
          {
            type: "code",
            language: "html",
            title: "layout.php",
            code: `<link rel="stylesheet" href="<?= asset('cui/cui.min.css') ?>">
<script src="<?= asset('cui/cui.min.js') ?>" defer></script>

<cui-badge variant="success"><?= htmlspecialchars($status) ?></cui-badge>`,
          },
          {
            type: "callout",
            variant: "info",
            title: "Documentation examples",
            value:
              "These snippets show how CUI is meant to be embedded. They are not shipped integrations or framework plugins.",
          },
        ],
      },
    ],
  },

  "installation/esm": {
    slug: "installation/esm",
    title: "ES Modules",
    description:
      "Import CUI components as ES modules, with tree-shaking friendly per-component entry points.",
    breadcrumb: [{ label: "Getting Started" }, { label: "ES Modules" }],
    group: "Getting Started",
    keywords: ["esm", "modules", "import", "bundler", "tree shaking"],
    sections: [
      {
        id: "import",
        title: "Importing components",
        blocks: [
          {
            type: "code",
            language: "javascript",
            code: `import "@cui/button";
import "@cui/input";
import "@cui/modal";`,
          },
          {
            type: "text",
            value:
              "Importing a component module registers its custom element. There is nothing else to call — the element upgrades wherever it appears in the document.",
          },
        ],
      },
      {
        id: "browser-modules",
        title: "Native browser modules",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<script type="module">
  import "${CDN}/${V}/components/button.js";
</script>`,
          },
        ],
      },
      {
        id: "frameworks",
        title: "Using CUI inside a framework",
        blocks: [
          {
            type: "codeTabs",
            tabs: [
              {
                label: "React",
                language: "jsx",
                code: `import "@cui/button";

export function SaveButton({ onSave }) {
  // Custom events need a ref because React does not bind them by name.
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    el.addEventListener("cui-click", onSave);
    return () => el.removeEventListener("cui-click", onSave);
  }, [onSave]);

  return <cui-button ref={ref} variant="primary">Save</cui-button>;
}`,
              },
              {
                label: "Vue",
                language: "html",
                code: `<template>
  <cui-button variant="primary" @cui-click="save">Save</cui-button>
</template>

<script setup>
import "@cui/button";
</script>`,
              },
              {
                label: "Angular",
                language: "typescript",
                code: `// app.module.ts
import "@cui/button";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({ schemas: [CUSTOM_ELEMENTS_SCHEMA] })
export class AppModule {}`,
              },
            ],
          },
          {
            type: "callout",
            variant: "info",
            title: "Compatibility targets, not integrations",
            value:
              "CUI does not require these frameworks and does not ship wrappers for them. The snippets show how standard custom elements are consumed in each environment.",
          },
        ],
      },
    ],
  },

  "installation/quick-start": {
    slug: "installation/quick-start",
    title: "Quick Start",
    description: "Build a working CUI screen in five minutes: form, validation, table and toast.",
    breadcrumb: [{ label: "Getting Started" }, { label: "Quick Start" }],
    group: "Getting Started",
    keywords: ["quick start", "tutorial", "first component"],
    sections: [
      {
        id: "add-cui",
        title: "1. Add CUI to the page",
        blocks: [{ type: "code", language: "html", code: cdnSnippet }],
      },
      {
        id: "build-form",
        title: "2. Build a form",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<form id="employee-form">
  <cui-input name="name" label="Full name" required></cui-input>
  <cui-select name="department" label="Department">
    <cui-option value="engineering">Engineering</cui-option>
    <cui-option value="design">Design</cui-option>
  </cui-select>
  <cui-switch name="active" checked>Active employee</cui-switch>
  <cui-button type="submit" variant="primary">Create employee</cui-button>
</form>`,
          },
        ],
      },
      {
        id: "handle-events",
        title: "3. Handle events",
        blocks: [
          {
            type: "code",
            language: "javascript",
            code: `const form = document.getElementById('employee-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));

  await fetch('/api/employees', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });

  CUI.toast({ variant: 'success', title: 'Employee created' });
});`,
          },
        ],
      },
      {
        id: "theme",
        title: "4. Apply your brand",
        blocks: [
          {
            type: "code",
            language: "css",
            code: `:root {
  --cui-primary: #2b7f9e;
  --cui-radius-md: 6px;
  --cui-font-family: "IBM Plex Sans", system-ui, sans-serif;
}`,
          },
        ],
      },
    ],
  },

  "installation/project-setup": {
    slug: "installation/project-setup",
    title: "Project Setup",
    description:
      "Recommended folder structure, asset pipeline and conventions for adopting CUI across an application portfolio.",
    breadcrumb: [{ label: "Getting Started" }, { label: "Project Setup" }],
    group: "Getting Started",
    keywords: ["project setup", "structure", "conventions", "assets"],
    sections: [
      {
        id: "structure",
        title: "Suggested structure",
        blocks: [
          {
            type: "code",
            language: "text",
            code: `assets/
  cui/
    cui.min.css
    cui.min.js
  theme/
    tokens.css        your brand token overrides
    overrides.css     rare, documented exceptions`,
          },
        ],
      },
      {
        id: "load-order",
        title: "Load order",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "cui.min.css",
              "your tokens.css (overrides the CUI defaults)",
              "application stylesheet",
              "cui.min.js with defer",
            ],
          },
        ],
      },
      {
        id: "conventions",
        title: "Conventions",
        blocks: [
          {
            type: "list",
            items: [
              "Theme through custom properties, never by targeting internal shadow parts that are not documented.",
              "Keep one tokens file per brand and load it after the CUI stylesheet.",
              "Pin the CUI version per application and upgrade deliberately.",
              "Treat metadata.json as the contract when generating your own documentation.",
            ],
          },
        ],
      },
    ],
  },

  "foundations/design-tokens": {
    slug: "foundations/design-tokens",
    title: "Design Tokens",
    description:
      "The complete CUI token reference: colour, typography, spacing, radius, elevation, z-index and motion.",
    breadcrumb: [{ label: "Foundations" }, { label: "Design Tokens" }],
    group: "Foundations",
    version: V,
    keywords: ["tokens", "design tokens", "variables", "custom properties"],
    sections: [
      {
        id: "how-tokens-work",
        title: "How tokens work",
        blocks: [
          {
            type: "text",
            value:
              "Every visual value in CUI is a CSS custom property declared on :root. Components read tokens rather than hard-coded values, so a theme is a stylesheet — no build step, no configuration file.",
          },
          {
            type: "code",
            language: "css",
            code: `:root {
  --cui-primary: #2b7f9e;
  --cui-radius-md: 6px;
  --cui-space-4: 16px;
  --cui-duration-fast: 140ms;
}`,
          },
        ],
      },
      { id: "colors", title: "Colors", blocks: [{ type: "custom", key: "color-palette" }] },
      { id: "typography", title: "Typography", blocks: [{ type: "custom", key: "type-scale" }] },
      { id: "spacing", title: "Spacing", blocks: [{ type: "custom", key: "spacing-scale" }] },
      { id: "radius", title: "Radius", blocks: [{ type: "custom", key: "radius-scale" }] },
      { id: "shadows", title: "Shadows", blocks: [{ type: "custom", key: "shadow-scale" }] },
      { id: "z-index", title: "Z-index", blocks: [{ type: "custom", key: "z-scale" }] },
      { id: "motion", title: "Motion", blocks: [{ type: "custom", key: "motion-scale" }] },
    ],
  },

  "foundations/colors": {
    slug: "foundations/colors",
    title: "Colors",
    description:
      "The CUI colour system: brand, neutral and status scales, plus contrast requirements.",
    breadcrumb: [{ label: "Foundations" }, { label: "Colors" }],
    group: "Foundations",
    keywords: ["color", "palette", "contrast", "brand"],
    sections: [
      { id: "palette", title: "Palette", blocks: [{ type: "custom", key: "color-palette" }] },
      {
        id: "usage",
        title: "Usage rules",
        blocks: [
          {
            type: "list",
            items: [
              "Body text must meet 4.5:1 contrast; large text and UI borders must meet 3:1.",
              "Status is always paired with text or an icon, never conveyed by colour alone.",
              "The accent colour is reserved for interactive emphasis, not decoration.",
              "Dark mode is a separate token set, not an inverted filter.",
            ],
          },
        ],
      },
    ],
  },

  "foundations/typography": {
    slug: "foundations/typography",
    title: "Typography",
    description: "The CUI type scale, families and rules for dense documentation and data screens.",
    breadcrumb: [{ label: "Foundations" }, { label: "Typography" }],
    group: "Foundations",
    keywords: ["typography", "type scale", "fonts", "headings"],
    sections: [
      { id: "scale", title: "Type scale", blocks: [{ type: "custom", key: "type-scale" }] },
      {
        id: "families",
        title: "Families",
        blocks: [
          {
            type: "table",
            headers: ["Role", "Token", "Default"],
            rows: [
              ["Interface", "--cui-font-family", "IBM Plex Sans, system-ui, sans-serif"],
              ["Display", "--cui-font-display", "Space Grotesk, sans-serif"],
              ["Code", "--cui-font-mono", "JetBrains Mono, ui-monospace, monospace"],
            ],
          },
        ],
      },
      {
        id: "rules",
        title: "Rules",
        blocks: [
          {
            type: "list",
            items: [
              "Never skip heading levels — the outline is what assistive technology navigates.",
              "Line length stays between 60 and 80 characters in documentation.",
              "Numeric columns in tables use tabular figures.",
            ],
          },
        ],
      },
    ],
  },

  "foundations/spacing": {
    slug: "foundations/spacing",
    title: "Spacing",
    description: "The 4px based spacing scale and how density is applied across CUI components.",
    breadcrumb: [{ label: "Foundations" }, { label: "Spacing" }],
    group: "Foundations",
    keywords: ["spacing", "layout", "density", "scale"],
    sections: [
      { id: "scale", title: "Scale", blocks: [{ type: "custom", key: "spacing-scale" }] },
      {
        id: "density",
        title: "Density",
        blocks: [
          {
            type: "table",
            headers: ["Context", "Row height", "Inner padding"],
            rows: [
              ["Compact table", "32px", "--cui-space-2"],
              ["Default table", "40px", "--cui-space-3"],
              ["Form control (medium)", "36px", "--cui-space-3"],
              ["Card", "auto", "--cui-space-5"],
            ],
          },
        ],
      },
    ],
  },

  "foundations/icons": {
    slug: "foundations/icons",
    title: "Icons",
    description: "The CUI icon set: sizing, stroke, alignment and accessible usage.",
    breadcrumb: [{ label: "Foundations" }, { label: "Icons" }],
    group: "Foundations",
    keywords: ["icons", "iconography", "svg"],
    sections: [
      { id: "set", title: "Icon set", blocks: [{ type: "custom", key: "icon-grid" }] },
      {
        id: "usage",
        title: "Usage",
        blocks: [
          {
            type: "code",
            language: "html",
            code: `<cui-icon name="download"></cui-icon>
<cui-button icon="plus">New record</cui-button>
<cui-button icon="trash" aria-label="Delete employee"></cui-button>`,
          },
          {
            type: "list",
            items: [
              "Icons are 16px in dense UI, 20px in default UI and 24px in empty states.",
              "Stroke width stays at 1.5px so icons remain legible at 16px.",
              "Decorative icons are hidden from assistive technology with aria-hidden.",
              "Icon-only controls must carry an aria-label.",
            ],
          },
        ],
      },
    ],
  },

  "foundations/motion": {
    slug: "foundations/motion",
    title: "Motion",
    description: "Duration, easing and the rules that keep CUI animation purposeful.",
    breadcrumb: [{ label: "Foundations" }, { label: "Motion" }],
    group: "Foundations",
    keywords: ["motion", "animation", "transition", "easing"],
    sections: [
      { id: "scale", title: "Motion tokens", blocks: [{ type: "custom", key: "motion-scale" }] },
      {
        id: "rules",
        title: "Rules",
        blocks: [
          {
            type: "list",
            items: [
              "Motion communicates a relationship between two states; it is never decorative.",
              "Entering elements ease out, leaving elements ease in, and exits are faster than entrances.",
              "Nothing animates for longer than 220ms in a productivity interface.",
              "prefers-reduced-motion removes movement and keeps only opacity changes.",
            ],
          },
          {
            type: "code",
            language: "css",
            code: `@media (prefers-reduced-motion: reduce) {
  cui-modal, cui-drawer, cui-toast {
    --cui-duration-base: 0ms;
  }
}`,
          },
        ],
      },
    ],
  },

  "foundations/accessibility": {
    slug: "foundations/accessibility",
    title: "Accessibility",
    description:
      "CUI accessibility principles: keyboard support, focus management, ARIA, contrast and reduced motion, with a review checklist.",
    breadcrumb: [{ label: "Foundations" }, { label: "Accessibility" }],
    group: "Foundations",
    keywords: ["accessibility", "a11y", "aria", "keyboard", "screen reader", "wcag"],
    sections: [
      {
        id: "principles",
        title: "Principles",
        blocks: [
          {
            type: "text",
            value:
              "CUI targets WCAG 2.2 AA. Accessibility is implemented inside each component so that correct markup is the default outcome, not an extra task for the application developer.",
          },
        ],
      },
      {
        id: "keyboard",
        title: "Keyboard navigation",
        blocks: [
          {
            type: "table",
            headers: ["Key", "Behaviour"],
            rows: [
              ["Tab / Shift+Tab", "Moves between composite widgets, never inside them"],
              ["Arrow keys", "Move within tabs, menus, radio groups and listboxes"],
              ["Enter / Space", "Activate the focused control"],
              ["Escape", "Close the topmost overlay"],
              ["Home / End", "Jump to the first or last item in a collection"],
            ],
          },
        ],
      },
      {
        id: "focus",
        title: "Focus management",
        blocks: [
          {
            type: "list",
            items: [
              "Focus is visible at all times with a 2px ring that survives forced-colors mode.",
              "Overlays trap focus while open and restore it to the trigger on close.",
              "Focus is never moved without a user action.",
            ],
          },
        ],
      },
      {
        id: "aria",
        title: "ARIA and screen readers",
        blocks: [
          {
            type: "list",
            items: [
              "Native semantics are used first; ARIA is only added when no element exists for the pattern.",
              "Live regions announce toasts politely and errors assertively.",
              "Form controls always expose a programmatic label, not just a placeholder.",
              "Shadow DOM boundaries are bridged with explicit aria attributes so names are exposed correctly.",
            ],
          },
        ],
      },
      { id: "checklist", title: "Review checklist", blocks: [{ type: "custom", key: "a11y-checklist" }] },
    ],
  },

  "resources/templates": {
    slug: "resources/templates",
    title: "Templates",
    description: "Page templates assembled from CUI components for common enterprise screens.",
    breadcrumb: [{ label: "Resources" }, { label: "Templates" }],
    group: "Resources",
    keywords: ["templates", "layouts", "starters"],
    sections: [
      {
        id: "available",
        title: "Available templates",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "List and detail", value: "Filterable table with a detail drawer and bulk actions." },
              { title: "Record form", value: "Two column form with validation summary and sticky action bar." },
              { title: "Dashboard", value: "Metric cards, activity feed and a dense data table." },
              { title: "Settings", value: "Sectioned settings with switches and confirmation dialogs." },
              { title: "Authentication", value: "Sign in, forgotten password and two-factor screens." },
              { title: "Empty workspace", value: "Onboarding empty state with a primary next action." },
            ],
          },
          {
            type: "callout",
            variant: "info",
            title: "Preview available now",
            value:
              "Working previews of these layouts live on the Examples page. Downloadable template files ship with the CUI runtime.",
          },
        ],
      },
    ],
  },

  "resources/design-resources": {
    slug: "resources/design-resources",
    title: "Design Resources",
    description: "Design assets for teams working with CUI: token exports, grids and redlines.",
    breadcrumb: [{ label: "Resources" }, { label: "Design Resources" }],
    group: "Resources",
    keywords: ["design", "figma", "assets", "tokens export"],
    sections: [
      {
        id: "assets",
        title: "Assets",
        blocks: [
          {
            type: "table",
            headers: ["Asset", "Format", "Status"],
            rows: [
              ["Token export", "JSON, CSS", "Available"],
              ["Icon set", "SVG sprite", "Available"],
              ["Component library", "Design tool file", "In progress"],
              ["Redline specifications", "PDF", "Planned"],
            ],
          },
        ],
      },
      {
        id: "token-export",
        title: "Token export format",
        blocks: [
          {
            type: "code",
            language: "json",
            code: `{
  "color": {
    "primary": { "value": "#2b7f9e" },
    "danger":  { "value": "#b3352b" }
  },
  "radius": { "md": { "value": "6px" } },
  "space":  { "4":  { "value": "16px" } }
}`,
          },
        ],
      },
    ],
  },

  "resources/migration": {
    slug: "resources/migration",
    title: "Migration Guide",
    description:
      "Move an existing interface to CUI incrementally, from Bootstrap or a framework-bound component kit.",
    breadcrumb: [{ label: "Resources" }, { label: "Migration Guide" }],
    group: "Resources",
    keywords: ["migration", "upgrade", "bootstrap", "adoption"],
    sections: [
      {
        id: "strategy",
        title: "Incremental strategy",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Load CUI alongside your current stack", value: "Custom elements do not collide with existing class names." },
              { title: "Start with leaf components", value: "Buttons, badges and inputs carry the least layout risk." },
              { title: "Map your tokens", value: "Point CUI custom properties at your existing brand values." },
              { title: "Replace overlays", value: "Modals and drawers benefit most from the shared focus layer." },
              { title: "Remove the old kit", value: "Delete the legacy stylesheet once no screen references it." },
            ],
          },
        ],
      },
      {
        id: "mapping",
        title: "Component mapping",
        blocks: [
          {
            type: "table",
            headers: ["Legacy", "CUI equivalent", "Notes"],
            rows: [
              ["btn btn-primary", "cui-button variant=\"primary\"", "Variant replaces the class pair"],
              ["form-control", "cui-input", "Label is a property, not a sibling element"],
              ["modal fade", "cui-modal", "No JavaScript plugin initialisation needed"],
              ["badge bg-success", "cui-badge variant=\"success\"", "Tone plus text"],
              ["table table-striped", "cui-table", "Rows are supplied as a property"],
            ],
          },
        ],
      },
    ],
  },

  "resources/browser-support": {
    slug: "resources/browser-support",
    title: "Browser Compatibility",
    description:
      "Detailed browser and platform feature compatibility for CUI, including fallbacks.",
    breadcrumb: [{ label: "Resources" }, { label: "Browser Compatibility" }],
    group: "Resources",
    keywords: ["browser", "compatibility", "support", "polyfill"],
    sections: [
      { id: "browsers", title: "Supported browsers", blocks: [{ type: "custom", key: "browser-matrix" }] },
      { id: "features", title: "Platform features", blocks: [{ type: "custom", key: "feature-matrix" }] },
      {
        id: "fallbacks",
        title: "Fallbacks",
        blocks: [
          {
            type: "list",
            items: [
              "Elements render their light DOM content until the definition upgrades, so text stays visible.",
              "The :defined selector can hide unupgraded elements to avoid a flash of unstyled markup.",
              "No polyfills are shipped; unsupported browsers get an unstyled but functional document.",
            ],
          },
          {
            type: "code",
            language: "css",
            code: `cui-button:not(:defined) { visibility: hidden; }`,
          },
        ],
      },
    ],
  },

  "project/contributing": {
    slug: "project/contributing",
    title: "Contributing",
    description: "How to contribute components, documentation and bug reports to CUI.",
    breadcrumb: [{ label: "Project" }, { label: "Contributing" }],
    group: "Project",
    keywords: ["contributing", "open source", "pull request", "issues"],
    sections: [
      {
        id: "ways",
        title: "Ways to contribute",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Report a bug", value: "Include the browser, the CUI version and a minimal reproduction." },
              { title: "Propose a component", value: "Describe the use case and the accessibility pattern it follows." },
              { title: "Improve documentation", value: "Documentation lives in the same repository as the components." },
              { title: "Review pull requests", value: "Accessibility and API review are the highest value feedback." },
            ],
          },
        ],
      },
      {
        id: "component-checklist",
        title: "New component checklist",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "component.js implementing the base element contract",
              "component.css using only documented tokens",
              "metadata.json with properties, events, methods and examples",
              "README.md with usage guidance and design notes",
              "Keyboard interaction table and ARIA pattern reference",
              "Examples covering every documented state",
            ],
          },
        ],
      },
      {
        id: "conduct",
        title: "Code of conduct",
        blocks: [
          {
            type: "text",
            value:
              "Contributors are expected to be respectful and constructive. Technical disagreement is welcome; personal criticism is not.",
          },
        ],
      },
    ],
  },

  "project/license": {
    slug: "project/license",
    title: "License",
    description: "CUI is distributed under the MIT license.",
    breadcrumb: [{ label: "Project" }, { label: "License" }],
    group: "Project",
    keywords: ["license", "mit", "legal"],
    sections: [
      {
        id: "mit",
        title: "MIT License",
        blocks: [
          {
            type: "code",
            language: "text",
            code: `MIT License

Copyright (c) 2026 CUI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`,
          },
        ],
      },
      {
        id: "usage",
        title: "What this means",
        blocks: [
          {
            type: "list",
            items: [
              "Commercial use is permitted.",
              "Modification and redistribution are permitted.",
              "The copyright notice must be preserved.",
              "The software is provided without warranty.",
            ],
          },
        ],
      },
    ],
  },
};

export const docPage = (slug: string) => docPages[slug];
export const allDocPages = Object.values(docPages);
