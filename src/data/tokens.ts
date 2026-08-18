export type ColorToken = { name: string; value: string; usage: string };

export const colorScales: { title: string; description: string; tokens: ColorToken[] }[] = [
  {
    title: "Brand",
    description: "Primary accent used for emphasis, focus and selected states.",
    tokens: [
      { name: "--cui-primary-100", value: "#e6f1f6", usage: "Subtle background" },
      { name: "--cui-primary-300", value: "#9dc6d9", usage: "Borders, dividers" },
      { name: "--cui-primary-500", value: "#2b7f9e", usage: "Primary actions" },
      { name: "--cui-primary-700", value: "#1c5a72", usage: "Hover, pressed" },
      { name: "--cui-primary-900", value: "#123c4d", usage: "Text on light" },
    ],
  },
  {
    title: "Neutral",
    description: "Ink scale for text, borders and surfaces.",
    tokens: [
      { name: "--cui-neutral-0", value: "#ffffff", usage: "Surface" },
      { name: "--cui-neutral-50", value: "#f7f7f5", usage: "Page background" },
      { name: "--cui-neutral-200", value: "#e4e5e7", usage: "Hairline border" },
      { name: "--cui-neutral-400", value: "#b0b3b8", usage: "Disabled text" },
      { name: "--cui-neutral-600", value: "#6b7076", usage: "Secondary text" },
      { name: "--cui-neutral-900", value: "#24272b", usage: "Primary text" },
    ],
  },
  {
    title: "Status",
    description: "Semantic tones. Always paired with text or an icon.",
    tokens: [
      { name: "--cui-success", value: "#1f7a4d", usage: "Success state" },
      { name: "--cui-warning", value: "#b8791b", usage: "Warning state" },
      { name: "--cui-danger", value: "#b3352b", usage: "Destructive state" },
      { name: "--cui-info", value: "#2f5bb7", usage: "Informational state" },
    ],
  },
];

export const typeScale = [
  { name: "Display", token: "--cui-font-display", size: "40px / 44px", weight: "600", sample: "Build once. Use anywhere." },
  { name: "Heading 1", token: "--cui-font-h1", size: "32px / 38px", weight: "600", sample: "Component documentation" },
  { name: "Heading 2", token: "--cui-font-h2", size: "24px / 30px", weight: "600", sample: "Installation" },
  { name: "Heading 3", token: "--cui-font-h3", size: "18px / 26px", weight: "600", sample: "Design tokens" },
  { name: "Body", token: "--cui-font-body", size: "15px / 24px", weight: "400", sample: "CUI is a framework-independent UI library." },
  { name: "Caption", token: "--cui-font-caption", size: "13px / 20px", weight: "400", sample: "Updated August 2026" },
];

export const spacingScale = [
  { token: "--cui-space-1", value: "4px" },
  { token: "--cui-space-2", value: "8px" },
  { token: "--cui-space-3", value: "12px" },
  { token: "--cui-space-4", value: "16px" },
  { token: "--cui-space-5", value: "24px" },
  { token: "--cui-space-6", value: "32px" },
  { token: "--cui-space-7", value: "48px" },
  { token: "--cui-space-8", value: "64px" },
];

export const radiusScale = [
  { token: "--cui-radius-none", value: "0px" },
  { token: "--cui-radius-sm", value: "4px" },
  { token: "--cui-radius-md", value: "6px" },
  { token: "--cui-radius-lg", value: "10px" },
  { token: "--cui-radius-full", value: "999px" },
];

export const shadowScale = [
  { token: "--cui-shadow-xs", value: "0 1px 1px rgba(20, 24, 28, 0.05)" },
  { token: "--cui-shadow-sm", value: "0 1px 3px rgba(20, 24, 28, 0.08)" },
  { token: "--cui-shadow-md", value: "0 6px 16px rgba(20, 24, 28, 0.10)" },
  { token: "--cui-shadow-lg", value: "0 16px 40px rgba(20, 24, 28, 0.14)" },
];

export const zIndexScale = [
  { token: "--cui-z-base", value: "0", usage: "Document flow" },
  { token: "--cui-z-sticky", value: "100", usage: "Sticky headers" },
  { token: "--cui-z-dropdown", value: "500", usage: "Dropdown, select popups" },
  { token: "--cui-z-overlay", value: "900", usage: "Modal backdrop" },
  { token: "--cui-z-modal", value: "1000", usage: "Modal, drawer" },
  { token: "--cui-z-toast", value: "1200", usage: "Toast region" },
];

export const motionScale = [
  { token: "--cui-duration-instant", value: "80ms", usage: "Hover, focus" },
  { token: "--cui-duration-fast", value: "140ms", usage: "Dropdown, tooltip" },
  { token: "--cui-duration-base", value: "220ms", usage: "Modal, drawer" },
  { token: "--cui-easing-standard", value: "cubic-bezier(0.2, 0, 0, 1)", usage: "Entering elements" },
  { token: "--cui-easing-exit", value: "cubic-bezier(0.4, 0, 1, 1)", usage: "Leaving elements" },
];
