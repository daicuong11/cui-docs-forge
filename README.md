# CUI Docs Hub

# Build a Production-Grade Documentation Website for CUI — Universal Vanilla UI Library

## 1. ROLE

Act as a senior product designer, UX engineer, frontend architect, and documentation-platform engineer.

Build a complete, production-quality documentation website for a new UI library called:

**CUI — Universal Vanilla UI**

CUI is intended to become a framework-independent UI library built entirely with:

* HTML
* CSS
* Vanilla JavaScript
* Web Components
* CSS Custom Properties

CUI has zero runtime dependency on React, Vue, Angular, jQuery, Bootstrap, Tailwind, or other UI frameworks.

The website you are building is NOT the UI library itself.

It is the **official documentation, showcase, playground, release, and developer portal for CUI**.

The visual quality, information architecture, navigation model, documentation experience, component showcase, code examples, and developer experience should be inspired by high-quality documentation websites such as Ant Design, but DO NOT copy Ant Design's branding, exact visual design, assets, source code, or proprietary content.

Create an original CUI design system and visual identity.

---

# 2. PRODUCT VISION

The website should feel like the official home of a serious open-source / developer-focused UI library.

Users should immediately understand:

> CUI is a universal UI library for the web that works anywhere JavaScript, HTML, and CSS work.

The website must support these major use cases:

1. Discover CUI
2. Learn CUI
3. Browse components
4. Preview components interactively
5. Copy HTML/CSS/JavaScript
6. Experiment with component properties
7. Read API documentation
8. Browse examples
9. Read changelogs
10. Browse releases
11. Explore design tokens
12. Explore themes
13. Download CUI
14. Get CDN installation instructions
15. Understand browser compatibility
16. Follow the roadmap
17. Search the entire documentation
18. Eventually allow every CUI component to have its own documentation page

The architecture must be designed so the website can later consume real CUI component metadata and documentation without requiring a major rewrite.

---

# 3. TECHNOLOGY

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui where appropriate
* Lucide icons
* Modern responsive CSS
* Client-side routing

Use clean, modular architecture.

Do NOT implement the actual CUI component library inside this project.

Instead, create a **documentation platform** with reusable demo components and a clean architecture that can later connect to the real CUI library.

Avoid unnecessary dependencies.

The website itself should be fast and production-oriented.

---

# 4. BRAND

Product name:

**CUI**

Full name:

**Universal Vanilla UI**

Suggested positioning:

> Build once. Use anywhere.

Alternative supporting message:

> A framework-independent UI library built with native HTML, CSS and JavaScript.

Create an original visual identity.

Do not make the website look like a generic AI-generated SaaS landing page.

Avoid:

* excessive gradients
* excessive glassmorphism
* huge decorative blobs
* excessive rounded cards
* generic startup illustrations
* overly colorful dashboard aesthetics

The visual language should feel like a serious developer tool:

* precise
* clean
* technical
* premium
* highly usable
* information-dense
* elegant
* modern
* developer-oriented

Use subtle visual details rather than decorative effects.

---

# 5. GLOBAL LAYOUT

Create a documentation layout similar in information architecture to mature developer documentation platforms.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ CUI Logo     Docs Components Resources     Search    GitHub │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│ LEFT SIDEBAR │              MAIN CONTENT                    │
│              │                                              │
│ Introduction │                                              │
│ Getting      │                                              │
│ Started      │                                              │
│ Components   │                                              │
│ Resources    │                                              │
│ Changelog    │                                              │
│              │                                              │
│              │                                              │
│              │                              RIGHT TOC        │
│              │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

Mobile:

* compact header
* hamburger navigation
* search
* content-first layout
* sticky bottom / floating actions where useful
* responsive component examples

---

# 6. HEADER

Create a polished documentation header.

Left:

* CUI logo
* CUI
* "Universal Vanilla UI"

Navigation:

* Docs
* Components
* Resources
* Changelog
* Roadmap

Right:

* Search
* GitHub
* Theme switcher
* Version selector

Version selector example:

```text
v0.1.0
v0.2.0
v1.0.0
Latest
```

The version selector should be functional in the UI, even if it uses mock data initially.

Header should remain visually stable while scrolling.

---

# 7. SIDEBAR NAVIGATION

Create a collapsible documentation sidebar.

Structure:

```text
Introduction

Overview
Why CUI?
Features
Architecture
Browser Support

Getting Started

Installation
CDN
Local Installation
ES Modules
Quick Start
Project Setup

Foundations

Design Tokens
Colors
Typography
Spacing
Icons
Motion
Accessibility
Themes

Components

General
  Button
  Icon
  Typography
  Divider

Form
  Input
  Textarea
  Select
  Checkbox
  Radio
  Switch

Data Display
  Table
  Card
  Badge
  Tag
  List
  Timeline

Feedback
  Alert
  Modal
  Drawer
  Toast
  Notification
  Loading

Navigation
  Tabs
  Dropdown
  Menu
  Breadcrumb
  Pagination

Advanced
  DatePicker
  Upload
  Tree
  DataTable

Resources

Examples
Templates
Design Resources
Migration Guide
Browser Compatibility

Project

Changelog
Releases
Roadmap
Contributing
License
```

Sidebar requirements:

* active route
* expandable groups
* nested navigation
* smooth transitions
* scroll preservation
* mobile drawer
* clear hierarchy
* version-aware navigation

---

# 8. LANDING PAGE

Create a polished homepage at `/`.

Hero:

```text
CUI

Universal Vanilla UI

Build once. Use anywhere.

A framework-independent UI library built with
native HTML, CSS and JavaScript.

[ Get Started ] [ Explore Components ]
```

Secondary actions:

* View GitHub
* Download
* CDN

Hero should include an interactive component showcase rather than a generic illustration.

For example:

```text
<cui-button>
<cui-input>
<cui-select>
<cui-modal>
<cui-table>
```

Display them inside a realistic application interface.

The homepage should communicate that CUI works in:

```text
HTML
ASP.NET
PHP
Laravel
React
Vue
Angular
JSP
Legacy applications
```

Do not claim actual framework integrations exist yet. Clearly present them as compatibility targets / usage environments.

---

# 9. HOMEPAGE SECTIONS

Create:

## Why CUI

Cards:

* Zero Runtime Dependencies
* Framework Independent
* Native Web Standards
* CDN Ready
* Local Download
* Web Components
* Accessible
* Themeable
* Enterprise Ready

## Installation

Show three methods:

### CDN

```html
<link rel="stylesheet"
      href="https://cdn.example.com/cui/1.0.0/cui.min.css">

<script
    src="https://cdn.example.com/cui/1.0.0/cui.min.js">
</script>
```

### Local

```text
Download CUI
→ Copy cui.min.css
→ Copy cui.min.js
→ Start using components
```

### ESM

```javascript
import "@cui/button";
```

These are demonstration examples only.

## Component Showcase

Create a grid of representative components.

## Framework Independence

Show:

```text
HTML
ASP.NET
PHP
Laravel
React
Vue
Angular
```

with the message:

> CUI does not require these frameworks.

## Design Tokens

Show sample:

* colors
* spacing
* typography
* radius
* shadows

## Dark Mode

Create an interactive theme preview.

## Latest Release

Show:

```text
CUI v0.1.0
Initial documentation platform
```

## Changelog Preview

Show recent releases.

## Roadmap

Show:

```text
Core Runtime
Foundation Components
Interactive Components
Forms
Data Components
Enterprise Components
```

## Final CTA

```text
Build interfaces without framework lock-in.

[ Get Started ]
```

---

# 10. DOCUMENTATION ENGINE

The most important architectural requirement:

Build the site so documentation pages are **data-driven**.

Do NOT hardcode every page independently.

Create a reusable documentation page system.

Conceptually:

```text
DocumentationPage
├── Breadcrumb
├── Title
├── Description
├── Version
├── Content
├── LiveExample
├── CodeBlock
├── APIReference
├── PropsTable
├── EventsTable
├── MethodsTable
├── DesignNotes
├── Accessibility
├── RelatedComponents
└── RightSideTableOfContents
```

Create reusable components such as:

```text
<DocPage />
<DocSection />
<LivePreview />
<CodeBlock />
<APIReference />
<PropsTable />
<EventsTable />
<MethodsTable />
<ExampleCard />
<Callout />
<VersionBadge />
<CopyButton />
<DownloadButton />
<TableOfContents />
```

---

# 11. COMPONENT DOCUMENTATION PAGE

Create a high-quality example page:

`/components/button`

It should look like a real component library documentation page.

Header:

```text
Button

Buttons trigger actions and events.

Import
```

Show installation:

```html
<script src="..."></script>
```

Then sections:

## Basic

Interactive button preview.

Code:

```html
<cui-button>
    Button
</cui-button>
```

## Variants

Show:

* primary
* secondary
* success
* warning
* danger
* ghost
* link

## Sizes

Show:

* small
* medium
* large

## Disabled

## Loading

## With Icon

## Block

## API

Properties table:

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |

## Events

| Event | Description |
| ----- | ----------- |

## Methods

| Method | Description |
| ------ | ----------- |

## Accessibility

## Related Components

---

# 12. INTERACTIVE PLAYGROUND

Every component example should support a live playground.

For example:

```text
┌───────────────────────────────────────────────┐
│ Preview                                       │
│                                               │
│        [ Save ]                               │
│                                               │
├───────────────────────────────────────────────┤
│ Controls                                      │
│                                               │
│ variant   [ primary ▼ ]                       │
│ size      [ medium ▼ ]                        │
│ disabled  [ OFF ]                             │
│ loading   [ OFF ]                             │
├───────────────────────────────────────────────┤
│ HTML                                          │
│ <cui-button variant="primary">                │
│   Save                                        │
│ </cui-button>                                 │
│                                  [Copy]        │
└───────────────────────────────────────────────┘
```

Changing controls must update the preview.

Create a reusable playground system.

The architecture should later allow real CUI components to replace mock demo components.

---

# 13. CODE BLOCK SYSTEM

Build a professional code viewer.

Features:

* syntax highlighting
* copy button
* language indicator
* line numbers optionally
* expandable code
* tabs for HTML / CSS / JS
* copied state
* dark code theme

Example:

```text
HTML | CSS | JavaScript
────────────────────────────
<cui-button
    variant="primary"
    size="large">

    Save

</cui-button>

                         Copy
```

---

# 14. COMPONENT CATALOG

Create `/components`.

It should be a visual component directory.

Categories:

```text
General
Forms
Data Display
Feedback
Navigation
Layout
Advanced
```

Each component card:

```text
Button

Trigger actions and events.

[Preview]

Button
General
Stable

View Documentation →
```

Include:

* search
* category filter
* status filter
* alphabetical sorting

Status:

```text
Experimental
Beta
Stable
Deprecated
```

---

# 15. COMPONENT STATUS

Every component should support:

```text
Experimental
Beta
Stable
Deprecated
```

Example:

```text
Button     Stable
Table      Beta
DatePicker Experimental
```

Use subtle badges.

---

# 16. SEARCH

Implement global documentation search UI.

Search should search:

* pages
* components
* properties
* events
* methods
* changelog
* examples

Create:

```text
⌘ K
```

or:

```text
Ctrl K
```

keyboard shortcut.

Search overlay:

```text
┌─────────────────────────────────────────────┐
│ Search CUI...                               │
├─────────────────────────────────────────────┤
│ Components                                  │
│ Button                                      │
│ Modal                                       │
│ Table                                       │
│                                             │
│ Documentation                               │
│ Installation                                │
│ Design Tokens                               │
└─────────────────────────────────────────────┘
```

Add keyboard navigation:

* Arrow Up
* Arrow Down
* Enter
* Escape

---

# 17. DESIGN TOKENS PAGE

Create:

`/foundations/design-tokens`

Show:

## Colors

Interactive color palette.

## Typography

Display hierarchy:

```text
Display
Heading 1
Heading 2
Heading 3
Body
Caption
```

## Spacing

Visual spacing scale.

## Radius

Examples.

## Shadows

Examples.

## Z-index

Documentation.

## Motion

Duration and easing examples.

The page should feel like a real design system.

---

# 18. THEME BUILDER

Create:

`/foundations/themes`

Interactive theme builder.

Controls:

```text
Primary Color
Success Color
Warning Color
Danger Color
Background
Text Color
Border Color
Border Radius
```

Preview the entire documentation component showcase.

Include:

```text
Reset
Export CSS
Copy Tokens
```

Example generated output:

```css
:root {
    --cui-primary: #1677ff;
    --cui-radius-md: 8px;
}
```

This is a mock design-token editor initially.

---

# 19. CHANGELOG

Create:

`/changelog`

High-quality timeline.

Example:

```text
v0.1.0

August 2026

Added
- Documentation platform
- Component catalog
- Design tokens
- Theme system

Changed
- Initial design system

Fixed
- Initial release
```

Filters:

```text
All
Added
Changed
Fixed
Deprecated
Removed
Security
```

---

# 20. RELEASES

Create:

`/releases`

Display:

```text
v0.1.0
Current

v0.0.5
Previous

v0.0.4
Previous
```

Each release page:

```text
Release notes
Installation
Breaking changes
Migration guide
Contributors
Downloads
```

---

# 21. ROADMAP

Create:

`/roadmap`

Visual roadmap:

```text
Completed

✓ Architecture
✓ Design System
✓ Documentation Platform

In Progress

● Core Runtime
● Foundation Components

Planned

○ Form System
○ DataTable
○ DatePicker
○ Enterprise Components
```

Allow roadmap items to have:

* status
* description
* target version
* target date
* priority

---

# 22. DOWNLOAD PAGE

Create:

`/download`

Provide sections:

## CDN

```text
Production
Development
```

## Local Download

Show ZIP download UI.

## Individual Components

Allow:

```text
Button
Modal
Table
Select
...
```

to be selected.

Then show generated download configuration.

Do not implement a real backend download system.

Create realistic mock functionality.

---

# 23. CDN PAGE

Create:

`/installation/cdn`

Explain:

```html
<link rel="stylesheet"
      href="https://cdn.example.com/cui/1.0.0/cui.min.css">

<script
    src="https://cdn.example.com/cui/1.0.0/cui.min.js">
</script>
```

Include:

* Production
* Development
* Version pinning
* Individual components
* Cache strategy
* Integrity / SRI example
* Upgrade strategy

---

# 24. LOCAL INSTALLATION PAGE

Create:

`/installation/local`

Explain:

```text
Download
↓
Extract
↓
Copy files
↓
Include CSS
↓
Include JS
↓
Use CUI
```

Show examples for:

* plain HTML
* ASP.NET
* PHP

These are documentation examples only.

---

# 25. EXAMPLES

Create:

`/examples`

Build realistic UI examples.

Examples:

### Employee Management

* search
* filters
* table
* pagination
* modal
* toast

### Login

### Dashboard

### User Management

### Settings

### File Upload

### Order Management

### Attendance Management

The examples should use CUI-style components and feel like realistic enterprise interfaces.

---

# 26. BROWSER SUPPORT

Create:

`/resources/browser-support`

Display:

```text
Chrome
Edge
Firefox
Safari
```

with support status.

Also explain:

* Custom Elements
* Shadow DOM
* CSS Variables
* ES Modules
* Accessibility

Use clear compatibility indicators.

---

# 27. ACCESSIBILITY PAGE

Create:

`/foundations/accessibility`

Explain CUI accessibility principles.

Sections:

* Keyboard navigation
* Focus management
* ARIA
* Screen readers
* Color contrast
* Reduced motion
* Form labels
* Modal accessibility
* Dropdown accessibility

Create an accessibility checklist UI.

---

# 28. GITHUB / OPEN SOURCE AREA

Header should contain a GitHub button.

Create a GitHub-style project summary section:

```text
CUI

Universal Vanilla UI

Stars
Forks
Issues
Version
License
```

Use mock values.

Do not create fake real GitHub URLs. Use a placeholder configuration constant so the repository URL can be changed later.

---

# 29. FOOTER

Footer:

```text
CUI

Universal Vanilla UI

Documentation
Components
Resources
Changelog
Roadmap

Community
GitHub
Issues
Discussions

Resources
Installation
Accessibility
Browser Support

License
MIT
```

Include:

```text
© 2026 CUI
```

---

# 30. RESPONSIVE DESIGN

Must work well on:

* desktop
* laptop
* tablet
* mobile

Desktop:

```text
Header
Sidebar
Content
Right TOC
```

Tablet:

```text
Header
Sidebar collapsible
Content
```

Mobile:

```text
Header
Search
Content
Mobile navigation drawer
```

Tables must become horizontally scrollable.

Code blocks must never break the page width.

Playgrounds must adapt to narrow screens.

---

# 31. DARK MODE

Implement real dark mode.

Requirements:

* documentation
* components
* code blocks
* playground
* tables
* sidebar
* header
* modals
* cards
* theme builder

Persist preference in localStorage.

Support:

```text
Light
Dark
System
```

---

# 32. MICRO INTERACTIONS

Use subtle animations:

* sidebar expansion
* dropdown
* modal
* tooltip
* toast
* copy feedback
* page transitions where appropriate
* search overlay
* theme transition

Do not over-animate.

Respect:

```text
prefers-reduced-motion
```

---

# 33. VISUAL DESIGN REQUIREMENTS

The website should look like a serious developer product.

Use:

* strong typography
* excellent spacing
* subtle borders
* restrained shadows
* technical visual hierarchy
* clean code blocks
* dense but readable documentation
* strong alignment
* excellent empty states
* clear interaction states

Avoid the "AI generated website" aesthetic.

Do NOT create:

* giant gradients everywhere
* random colorful blobs
* excessive glassmorphism
* unnecessary illustrations
* oversized cards
* huge marketing headlines that consume the whole viewport

The documentation should prioritize **information density and usability**.

---

# 34. ACCESSIBILITY

The documentation website itself must support:

* semantic HTML
* keyboard navigation
* focus states
* accessible buttons
* accessible dialogs
* accessible menus
* proper headings
* color contrast
* aria labels
* reduced motion

---

# 35. ARCHITECTURE

Create a scalable architecture.

Suggested:

```text
src/
├── components/
│   ├── layout/
│   ├── docs/
│   ├── playground/
│   ├── code/
│   ├── navigation/
│   └── ui/
│
├── pages/
│   ├── home/
│   ├── docs/
│   ├── components/
│   ├── foundations/
│   ├── resources/
│   ├── changelog/
│   ├── releases/
│   └── roadmap/
│
├── data/
│   ├── components.ts
│   ├── docs.ts
│   ├── changelog.ts
│   ├── releases.ts
│   └── roadmap.ts
│
├── lib/
├── hooks/
├── styles/
└── routes/
```

The content should be data-driven.

Do not duplicate component documentation layouts.

---

# 36. COMPONENT REGISTRY

Create a central component metadata registry.

Conceptually:

```typescript
{
    name: "Button",
    slug: "button",
    category: "General",
    status: "stable",
    description: "...",
    version: "0.1.0",
    properties: [],
    events: [],
    methods: [],
    examples: []
}
```

This registry will eventually be replaced or synchronized with the real CUI library metadata.

Design the architecture so this migration is easy.

---

# 37. MOCK COMPONENT SYSTEM

Because the real CUI library does not exist yet, create reusable documentation demo components.

Examples:

```text
DemoButton
DemoInput
DemoSelect
DemoModal
DemoTable
DemoTabs
DemoToast
```

These are NOT the real CUI library.

Clearly isolate them under:

```text
src/components/playground/mock-cui/
```

The actual documentation platform must not become tightly coupled to the mock implementation.

---

# 38. DATA-DRIVEN FUTURE

Design the system so eventually this:

```text
CUI Component Source
        ↓
Component Metadata
        ↓
Documentation Generator
        ↓
CUI Website
```

can be implemented.

For example:

```text
components/
button/
  component.js
  button.css
  metadata.json
  README.md
  examples/
```

The documentation platform should be ready for this architecture.

---

# 39. SEO

Implement strong technical SEO.

Every page should have:

* title
* description
* canonical
* Open Graph
* Twitter metadata
* structured headings
* semantic HTML

Component pages should have unique metadata.

Examples:

```text
CUI Button Component
CUI Modal Component
CUI Table Component
CUI Select Component
```

Create sitemap-ready routing architecture.

---

# 40. PERFORMANCE

Prioritize:

* code splitting
* lazy-loaded documentation pages
* optimized assets
* minimal JavaScript
* no unnecessary animation libraries
* efficient search
* efficient component registry

The homepage should load quickly.

---

# 41. ERROR / EMPTY STATES

Create polished:

* 404
* no search results
* component unavailable
* documentation unavailable
* deprecated component
* experimental component

---

# 42. DEVELOPER EXPERIENCE

Important details:

Every code block should have:

```text
Copy
```

Every component page should have:

```text
View Source
Copy HTML
Copy JavaScript
Download
```

Every playground should have:

```text
Reset
Copy
```

Search should have:

```text
⌘K / Ctrl+K
```

Theme switcher should have:

```text
Light
Dark
System
```

---

# 43. INITIAL COMPONENT DATA

Populate the website with realistic mock documentation for at least:

```text
Button
Input
Select
Checkbox
Radio
Switch
Modal
Drawer
Dropdown
Tooltip
Toast
Tabs
Table
Pagination
Card
Badge
Alert
Spinner
```

Do not make these pages empty placeholders.

Each should have:

* description
* examples
* code
* API table
* events
* methods
* accessibility
* related components

At minimum, make the Button documentation page extremely complete so it becomes the template for future component documentation.

---

# 44. INITIAL CHANGELOG DATA

Create realistic sample changelog data:

```text
v0.1.0
Initial documentation platform

v0.0.5
Added component registry

v0.0.4
Added theme system

v0.0.3
Added playground

v0.0.2
Added documentation navigation

v0.0.1
Project initialization
```

Clearly mark these as sample/project data where appropriate.

---

# 45. INITIAL ROADMAP DATA

Create:

```text
Completed
- Documentation Platform
- Design System
- Component Registry

In Progress
- Core Runtime
- Foundation Components

Planned
- Interactive Components
- Form System
- Data Components
- Enterprise Components
- CDN Distribution
- CLI
```

---

# 46. IMPORTANT PRODUCT PRINCIPLE

Do NOT build this as a simple marketing landing page.

It must feel primarily like:

**Ant Design Documentation + Storybook + Design System + Developer Portal**

combined into one cohesive product.

The primary screen users should eventually spend time on is documentation and component exploration, not marketing.

---

# 47. NAVIGATION PRIORITY

The most important navigation items are:

```text
Docs
Components
Foundations
Resources
Changelog
Roadmap
```

Make Components highly discoverable.

---

# 48. VISUAL COMPONENT QUALITY

The mock CUI components used in the playground must look polished and consistent.

Create realistic:

* hover
* focus
* active
* disabled
* loading
* error
* success

states.

Tables should look like real enterprise tables.

Forms should look production-ready.

Modals should feel polished.

Dropdowns should have proper positioning.

Toasts should animate naturally.

---

# 49. NO FAKE FUNCTIONALITY CLAIMS

Do not imply that the actual CUI library already exists.

The website should clearly communicate that this is the documentation and product platform for CUI while the library is under development.

Where functionality is mocked, make the architecture ready for real implementation later.

---

# 50. FINAL QUALITY BAR

Before considering the project complete, verify:

### UX

* navigation works
* routes work
* search works
* theme works
* playground controls work
* copy buttons work
* mobile navigation works
* sidebar works
* table of contents works

### Documentation

* component pages are complete
* code examples are readable
* API tables are consistent
* changelog works
* releases work
* roadmap works

### Visual

* desktop polished
* mobile polished
* dark mode polished
* code blocks polished
* no layout overflow
* no inconsistent spacing
* no generic AI-dashboard appearance

### Architecture

* reusable components
* data-driven docs
* central component registry
* clean routing
* isolated mock CUI components
* easy future integration with real CUI library

---

# 51. MOST IMPORTANT IMPLEMENTATION RULE

Do not stop after creating the homepage.

Build the complete application with working routes and representative content.

The finished result should already feel like the official documentation website of a mature UI library, even though the actual CUI runtime is still under development.

Prioritize:

1. Documentation UX
2. Component exploration
3. Interactive playground
4. Search
5. Code copying
6. Component API documentation
7. Design system
8. Changelog / releases
9. Developer experience
10. Visual polish

Build the application end-to-end now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a6e4a766-6f1b-4a79-a6bb-1413e9a3cd36).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
