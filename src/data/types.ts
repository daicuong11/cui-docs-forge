/**
 * Shared documentation content model.
 *
 * Everything the documentation platform renders is described by these types.
 * When the real CUI library ships component metadata (metadata.json per
 * component), it only has to be mapped into `ComponentMeta` — no page needs to
 * be rewritten.
 */

export type ComponentStatus = "experimental" | "beta" | "stable" | "deprecated";

export type ComponentCategory =
  | "General"
  | "Form"
  | "Data Display"
  | "Feedback"
  | "Navigation"
  | "Layout"
  | "Advanced";

export type PropMeta = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export type EventMeta = {
  name: string;
  detail?: string;
  description: string;
};

export type MethodMeta = {
  name: string;
  signature: string;
  description: string;
};

export type SlotMeta = {
  name: string;
  description: string;
};

/** A single mock element rendered inside a live preview. */
export type DemoNode = {
  name: string;
  props?: Record<string, unknown>;
  label?: string;
};

export type PlaygroundControl =
  | {
      name: string;
      label: string;
      type: "select";
      options: string[];
      value: string;
    }
  | { name: string; label: string; type: "switch"; value: boolean }
  | { name: string; label: string; type: "text"; value: string };

export type CodeSample = {
  html: string;
  css?: string;
  js?: string;
};

export type ComponentExample = {
  id: string;
  title: string;
  description?: string;
  /** Elements rendered in the live preview area. */
  demo: DemoNode[];
  code: CodeSample;
  /** Layout hint for the preview surface. */
  layout?: "row" | "column" | "grid";
};

export type ComponentPlayground = {
  /** Mock component used for the preview. */
  name: string;
  /** Custom element tag emitted in generated code. */
  tag: string;
  controls: PlaygroundControl[];
  /** Control name whose value becomes the element's text content. */
  slotControl?: string;
};

export type ComponentMeta = {
  name: string;
  slug: string;
  category: ComponentCategory;
  status: ComponentStatus;
  tag: string;
  description: string;
  summary: string;
  version: string;
  since: string;
  keywords: string[];
  properties: PropMeta[];
  events: EventMeta[];
  methods: MethodMeta[];
  slots?: SlotMeta[];
  examples: ComponentExample[];
  playground?: ComponentPlayground;
  accessibility: string[];
  designNotes?: string[];
  related: string[];
};

/* ---------------------------------------------------------------------- */
/* Generic documentation pages                                            */
/* ---------------------------------------------------------------------- */

export type DocBlock =
  | { type: "text"; value: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; language: string; code: string; title?: string }
  | {
      type: "codeTabs";
      tabs: { label: string; language: string; code: string }[];
    }
  | {
      type: "callout";
      variant: "info" | "warning" | "success" | "danger";
      title: string;
      value: string;
    }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "steps"; items: { title: string; value: string }[] }
  | { type: "cards"; items: { title: string; value: string }[] }
  | { type: "custom"; key: string };

export type DocSectionData = {
  id: string;
  title: string;
  blocks: DocBlock[];
};

export type DocPageData = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: { label: string; to?: string }[];
  group: string;
  version?: string;
  sections: DocSectionData[];
  keywords?: string[];
};
