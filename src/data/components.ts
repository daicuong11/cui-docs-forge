import type { ComponentMeta } from "./types";

/**
 * Central CUI component registry.
 *
 * This is the single source of truth for the catalog, the search index, the
 * sidebar and every component documentation page. When the real CUI library
 * emits `metadata.json` per component, this array is replaced by the generated
 * data — no rendering code changes.
 */
export const components: ComponentMeta[] = [
  {
    name: "Button",
    slug: "button",
    category: "General",
    status: "stable",
    tag: "cui-button",
    summary: "Trigger actions and events.",
    description:
      "Buttons let users trigger an action or navigate. CUI ships a single custom element with variants, sizes and states so the same markup works in any stack.",
    version: "0.1.0",
    since: "0.0.1",
    keywords: ["button", "action", "cta", "submit", "click"],
    properties: [
      {
        name: "variant",
        type: `"primary" | "secondary" | "success" | "warning" | "danger" | "ghost" | "link"`,
        default: `"secondary"`,
        description: "Visual emphasis of the button.",
      },
      {
        name: "size",
        type: `"small" | "medium" | "large"`,
        default: `"medium"`,
        description: "Control height, padding and font size.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Prevents interaction and removes the element from the tab order.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Shows a spinner and blocks further activation.",
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        description: "Stretches the button to the full width of its container.",
      },
      {
        name: "icon",
        type: "string",
        default: `""`,
        description: "Name of a CUI icon rendered before the label.",
      },
      {
        name: "type",
        type: `"button" | "submit" | "reset"`,
        default: `"button"`,
        description: "Native button behaviour when placed inside a form.",
      },
      {
        name: "href",
        type: "string",
        default: `""`,
        description: "Renders the button as a link while keeping button styling.",
      },
    ],
    events: [
      {
        name: "cui-click",
        detail: "{ originalEvent: MouseEvent }",
        description: "Fired when the button is activated by pointer, Enter or Space.",
      },
      {
        name: "cui-focus",
        description: "Fired when the button receives focus.",
      },
      { name: "cui-blur", description: "Fired when the button loses focus." },
    ],
    methods: [
      {
        name: "focus",
        signature: "focus(options?: FocusOptions): void",
        description: "Moves keyboard focus to the button.",
      },
      {
        name: "blur",
        signature: "blur(): void",
        description: "Removes focus from the button.",
      },
      {
        name: "click",
        signature: "click(): void",
        description: "Programmatically activates the button and emits cui-click.",
      },
    ],
    slots: [
      { name: "(default)", description: "Button label content." },
      { name: "prefix", description: "Content rendered before the label." },
      { name: "suffix", description: "Content rendered after the label." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        description: "The default button renders a secondary action.",
        demo: [{ name: "Button", props: { children: "Button" } }],
        code: {
          html: `<cui-button>Button</cui-button>`,
        },
      },
      {
        id: "variants",
        title: "Variants",
        description:
          "Seven variants cover the common emphasis levels in an application.",
        demo: [
          { name: "Button", props: { variant: "primary", children: "Primary" } },
          { name: "Button", props: { variant: "secondary", children: "Secondary" } },
          { name: "Button", props: { variant: "success", children: "Success" } },
          { name: "Button", props: { variant: "warning", children: "Warning" } },
          { name: "Button", props: { variant: "danger", children: "Danger" } },
          { name: "Button", props: { variant: "ghost", children: "Ghost" } },
          { name: "Button", props: { variant: "link", children: "Link" } },
        ],
        code: {
          html: `<cui-button variant="primary">Primary</cui-button>
<cui-button variant="secondary">Secondary</cui-button>
<cui-button variant="success">Success</cui-button>
<cui-button variant="warning">Warning</cui-button>
<cui-button variant="danger">Danger</cui-button>
<cui-button variant="ghost">Ghost</cui-button>
<cui-button variant="link">Link</cui-button>`,
          css: `cui-button[variant="primary"] {
  --cui-button-bg: var(--cui-primary);
  --cui-button-fg: var(--cui-on-primary);
}`,
        },
      },
      {
        id: "sizes",
        title: "Sizes",
        description: "Three sizes align with the CUI control height scale.",
        demo: [
          { name: "Button", props: { size: "small", children: "Small" } },
          { name: "Button", props: { size: "medium", children: "Medium" } },
          { name: "Button", props: { size: "large", children: "Large" } },
        ],
        code: {
          html: `<cui-button size="small">Small</cui-button>
<cui-button size="medium">Medium</cui-button>
<cui-button size="large">Large</cui-button>`,
        },
      },
      {
        id: "disabled",
        title: "Disabled",
        description:
          "Disabled buttons are removed from the tab order and announce their state.",
        demo: [
          {
            name: "Button",
            props: { variant: "primary", disabled: true, children: "Primary" },
          },
          { name: "Button", props: { disabled: true, children: "Secondary" } },
          {
            name: "Button",
            props: { variant: "ghost", disabled: true, children: "Ghost" },
          },
        ],
        code: {
          html: `<cui-button variant="primary" disabled>Primary</cui-button>
<cui-button disabled>Secondary</cui-button>
<cui-button variant="ghost" disabled>Ghost</cui-button>`,
        },
      },
      {
        id: "loading",
        title: "Loading",
        description:
          "While loading the button keeps its width, shows a spinner and sets aria-busy.",
        demo: [
          {
            name: "Button",
            props: { variant: "primary", loading: true, children: "Saving" },
          },
          { name: "Button", props: { loading: true, children: "Loading" } },
        ],
        code: {
          html: `<cui-button variant="primary" loading>Saving</cui-button>
<cui-button loading>Loading</cui-button>`,
          js: `const button = document.querySelector('cui-button');
button.addEventListener('cui-click', async () => {
  button.loading = true;
  await save();
  button.loading = false;
});`,
        },
      },
      {
        id: "with-icon",
        title: "With icon",
        description: "Icons are declared by name and inherit the label colour.",
        demo: [
          {
            name: "Button",
            props: { variant: "primary", icon: "plus", children: "New record" },
          },
          { name: "Button", props: { icon: "download", children: "Download" } },
          { name: "Button", props: { variant: "danger", icon: "trash", children: "Delete" } },
        ],
        code: {
          html: `<cui-button variant="primary" icon="plus">New record</cui-button>
<cui-button icon="download">Download</cui-button>
<cui-button variant="danger" icon="trash">Delete</cui-button>`,
        },
      },
      {
        id: "block",
        title: "Block",
        description: "Block buttons fill the width of their container.",
        layout: "column",
        demo: [
          {
            name: "Button",
            props: { variant: "primary", block: true, children: "Continue" },
          },
          { name: "Button", props: { block: true, children: "Cancel" } },
        ],
        code: {
          html: `<cui-button variant="primary" block>Continue</cui-button>
<cui-button block>Cancel</cui-button>`,
        },
      },
    ],
    playground: {
      name: "Button",
      tag: "cui-button",
      slotControl: "children",
      controls: [
        {
          name: "variant",
          label: "variant",
          type: "select",
          options: [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "ghost",
            "link",
          ],
          value: "primary",
        },
        {
          name: "size",
          label: "size",
          type: "select",
          options: ["small", "medium", "large"],
          value: "medium",
        },
        { name: "disabled", label: "disabled", type: "switch", value: false },
        { name: "loading", label: "loading", type: "switch", value: false },
        { name: "block", label: "block", type: "switch", value: false },
        { name: "children", label: "label", type: "text", value: "Save" },
      ],
    },
    accessibility: [
      "Renders a native button internally, so Enter and Space activation work without extra code.",
      "Disabled buttons set aria-disabled and are removed from the tab order.",
      "Loading buttons set aria-busy so screen readers announce the pending state.",
      "Icon-only buttons require an aria-label attribute.",
      "Focus is shown with a 2px focus ring that respects forced-colors mode.",
    ],
    designNotes: [
      "Use exactly one primary button per view section.",
      "Danger actions should be paired with a confirmation modal.",
      "Keep labels to a verb plus object: 'Save changes', not 'OK'.",
    ],
    related: ["input", "dropdown", "modal"],
  },

  {
    name: "Input",
    slug: "input",
    category: "Form",
    status: "stable",
    tag: "cui-input",
    summary: "Single-line text entry.",
    description:
      "Text input with label, helper text, validation states, prefixes and suffixes. Participates in native form submission through form-associated custom elements.",
    version: "0.1.0",
    since: "0.0.1",
    keywords: ["input", "text", "form", "field"],
    properties: [
      { name: "value", type: "string", default: `""`, description: "Current field value." },
      { name: "label", type: "string", default: `""`, description: "Visible field label." },
      { name: "placeholder", type: "string", default: `""`, description: "Placeholder text." },
      {
        name: "type",
        type: `"text" | "email" | "password" | "number" | "search"`,
        default: `"text"`,
        description: "Native input type.",
      },
      {
        name: "size",
        type: `"small" | "medium" | "large"`,
        default: `"medium"`,
        description: "Control height.",
      },
      {
        name: "state",
        type: `"default" | "error" | "success"`,
        default: `"default"`,
        description: "Validation appearance.",
      },
      { name: "helper", type: "string", default: `""`, description: "Helper or error message." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the field." },
      { name: "readonly", type: "boolean", default: "false", description: "Makes the field read only." },
      { name: "required", type: "boolean", default: "false", description: "Marks the field as required." },
    ],
    events: [
      { name: "cui-input", detail: "{ value: string }", description: "Fired on every keystroke." },
      { name: "cui-change", detail: "{ value: string }", description: "Fired when the value is committed." },
      { name: "cui-clear", description: "Fired when a clearable input is cleared." },
    ],
    methods: [
      { name: "focus", signature: "focus(): void", description: "Focuses the inner field." },
      { name: "select", signature: "select(): void", description: "Selects the whole value." },
      { name: "reportValidity", signature: "reportValidity(): boolean", description: "Runs constraint validation and shows the message." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [{ name: "Input", props: { label: "Full name", placeholder: "Jane Cooper" } }],
        code: { html: `<cui-input label="Full name" placeholder="Jane Cooper"></cui-input>` },
      },
      {
        id: "states",
        title: "States",
        description: "Error and success states pair a border colour with a helper message.",
        layout: "column",
        demo: [
          {
            name: "Input",
            props: {
              label: "Email",
              value: "jane@",
              state: "error",
              helper: "Enter a valid email address.",
            },
          },
          {
            name: "Input",
            props: {
              label: "Username",
              value: "jane.cooper",
              state: "success",
              helper: "Username is available.",
            },
          },
          { name: "Input", props: { label: "Employee ID", value: "EMP-2048", disabled: true } },
        ],
        code: {
          html: `<cui-input label="Email" value="jane@" state="error"
  helper="Enter a valid email address."></cui-input>
<cui-input label="Username" value="jane.cooper" state="success"
  helper="Username is available."></cui-input>
<cui-input label="Employee ID" value="EMP-2048" disabled></cui-input>`,
        },
      },
      {
        id: "sizes",
        title: "Sizes",
        layout: "column",
        demo: [
          { name: "Input", props: { size: "small", placeholder: "Small" } },
          { name: "Input", props: { size: "medium", placeholder: "Medium" } },
          { name: "Input", props: { size: "large", placeholder: "Large" } },
        ],
        code: {
          html: `<cui-input size="small" placeholder="Small"></cui-input>
<cui-input size="medium" placeholder="Medium"></cui-input>
<cui-input size="large" placeholder="Large"></cui-input>`,
        },
      },
    ],
    playground: {
      name: "Input",
      tag: "cui-input",
      controls: [
        { name: "label", label: "label", type: "text", value: "Email" },
        { name: "placeholder", label: "placeholder", type: "text", value: "you@company.com" },
        { name: "size", label: "size", type: "select", options: ["small", "medium", "large"], value: "medium" },
        { name: "state", label: "state", type: "select", options: ["default", "error", "success"], value: "default" },
        { name: "helper", label: "helper", type: "text", value: "" },
        { name: "disabled", label: "disabled", type: "switch", value: false },
      ],
    },
    accessibility: [
      "The label is programmatically associated with the inner input.",
      "Helper and error text are linked with aria-describedby.",
      "Error state sets aria-invalid on the inner control.",
      "Placeholder text is never used as a replacement for a label.",
    ],
    related: ["textarea", "select", "checkbox"],
  },

  {
    name: "Select",
    slug: "select",
    category: "Form",
    status: "stable",
    tag: "cui-select",
    summary: "Choose one value from a list.",
    description:
      "A listbox-backed select with keyboard navigation, typeahead and optional search. Renders its popup in the top layer so it never gets clipped.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["select", "dropdown", "listbox", "form", "options"],
    properties: [
      { name: "value", type: "string", default: `""`, description: "Selected option value." },
      { name: "label", type: "string", default: `""`, description: "Field label." },
      { name: "placeholder", type: "string", default: `"Select"`, description: "Shown when nothing is selected." },
      { name: "size", type: `"small" | "medium" | "large"`, default: `"medium"`, description: "Control height." },
      { name: "searchable", type: "boolean", default: "false", description: "Adds a filter field to the popup." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the control." },
      { name: "clearable", type: "boolean", default: "false", description: "Shows a clear affordance when a value is set." },
    ],
    events: [
      { name: "cui-change", detail: "{ value: string }", description: "Fired when the selection changes." },
      { name: "cui-open", description: "Fired when the popup opens." },
      { name: "cui-close", description: "Fired when the popup closes." },
    ],
    methods: [
      { name: "open", signature: "open(): void", description: "Opens the option list." },
      { name: "close", signature: "close(): void", description: "Closes the option list." },
      { name: "clear", signature: "clear(): void", description: "Resets the selection." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [
          {
            name: "Select",
            props: {
              label: "Department",
              value: "Engineering",
              options: ["Engineering", "Design", "Finance", "Operations"],
            },
          },
        ],
        code: {
          html: `<cui-select label="Department" value="engineering">
  <cui-option value="engineering">Engineering</cui-option>
  <cui-option value="design">Design</cui-option>
  <cui-option value="finance">Finance</cui-option>
</cui-select>`,
        },
      },
      {
        id: "disabled",
        title: "Disabled",
        layout: "column",
        demo: [
          {
            name: "Select",
            props: { label: "Region", value: "APAC", options: ["APAC", "EMEA"], disabled: true },
          },
        ],
        code: { html: `<cui-select label="Region" value="apac" disabled></cui-select>` },
      },
    ],
    playground: {
      name: "Select",
      tag: "cui-select",
      controls: [
        { name: "label", label: "label", type: "text", value: "Department" },
        { name: "size", label: "size", type: "select", options: ["small", "medium", "large"], value: "medium" },
        { name: "disabled", label: "disabled", type: "switch", value: false },
        { name: "searchable", label: "searchable", type: "switch", value: false },
      ],
    },
    accessibility: [
      "Implements the ARIA listbox pattern with roving focus.",
      "Home, End, arrow keys and typeahead move the active option.",
      "Escape closes the popup and returns focus to the trigger.",
      "The selected option is exposed with aria-selected.",
    ],
    related: ["input", "dropdown", "checkbox"],
  },

  {
    name: "Checkbox",
    slug: "checkbox",
    category: "Form",
    status: "stable",
    tag: "cui-checkbox",
    summary: "Select one or many options.",
    description:
      "A form-associated checkbox with indeterminate support, useful for bulk selection in tables and permission matrices.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["checkbox", "form", "toggle", "multi select"],
    properties: [
      { name: "checked", type: "boolean", default: "false", description: "Checked state." },
      { name: "indeterminate", type: "boolean", default: "false", description: "Mixed state for partial selection." },
      { name: "label", type: "string", default: `""`, description: "Inline label text." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the control." },
      { name: "value", type: "string", default: `"on"`, description: "Value submitted with the form." },
    ],
    events: [
      { name: "cui-change", detail: "{ checked: boolean }", description: "Fired when the checked state changes." },
    ],
    methods: [{ name: "toggle", signature: "toggle(): void", description: "Inverts the checked state." }],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [
          { name: "Checkbox", props: { label: "Email notifications", checked: true } },
          { name: "Checkbox", props: { label: "SMS notifications" } },
          { name: "Checkbox", props: { label: "All permissions", indeterminate: true } },
          { name: "Checkbox", props: { label: "Locked policy", checked: true, disabled: true } },
        ],
        code: {
          html: `<cui-checkbox checked>Email notifications</cui-checkbox>
<cui-checkbox>SMS notifications</cui-checkbox>
<cui-checkbox indeterminate>All permissions</cui-checkbox>
<cui-checkbox checked disabled>Locked policy</cui-checkbox>`,
        },
      },
    ],
    playground: {
      name: "Checkbox",
      tag: "cui-checkbox",
      slotControl: "label",
      controls: [
        { name: "label", label: "label", type: "text", value: "Send weekly report" },
        { name: "checked", label: "checked", type: "switch", value: true },
        { name: "indeterminate", label: "indeterminate", type: "switch", value: false },
        { name: "disabled", label: "disabled", type: "switch", value: false },
      ],
    },
    accessibility: [
      "Uses role=checkbox with aria-checked including the mixed value.",
      "Space toggles the control, matching native behaviour.",
      "Clicking the label toggles the control.",
    ],
    related: ["radio", "switch", "input"],
  },

  {
    name: "Radio",
    slug: "radio",
    category: "Form",
    status: "stable",
    tag: "cui-radio",
    summary: "Select exactly one option.",
    description:
      "Radio buttons grouped by cui-radio-group, with arrow key roving focus inside the group.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["radio", "form", "option", "group"],
    properties: [
      { name: "value", type: "string", default: `""`, description: "Value of this radio." },
      { name: "checked", type: "boolean", default: "false", description: "Whether the radio is selected." },
      { name: "label", type: "string", default: `""`, description: "Inline label text." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the option." },
      { name: "name", type: "string", default: `""`, description: "Group name for form submission." },
    ],
    events: [{ name: "cui-change", detail: "{ value: string }", description: "Fired when the group selection changes." }],
    methods: [{ name: "select", signature: "select(): void", description: "Selects this radio inside its group." }],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [
          { name: "Radio", props: { label: "Monthly billing", checked: true, name: "billing" } },
          { name: "Radio", props: { label: "Annual billing", name: "billing" } },
          { name: "Radio", props: { label: "Enterprise agreement", name: "billing", disabled: true } },
        ],
        code: {
          html: `<cui-radio-group name="billing" value="monthly">
  <cui-radio value="monthly">Monthly billing</cui-radio>
  <cui-radio value="annual">Annual billing</cui-radio>
  <cui-radio value="enterprise" disabled>Enterprise agreement</cui-radio>
</cui-radio-group>`,
        },
      },
    ],
    playground: {
      name: "Radio",
      tag: "cui-radio",
      slotControl: "label",
      controls: [
        { name: "label", label: "label", type: "text", value: "Monthly billing" },
        { name: "checked", label: "checked", type: "switch", value: true },
        { name: "disabled", label: "disabled", type: "switch", value: false },
      ],
    },
    accessibility: [
      "The group exposes role=radiogroup with an accessible name.",
      "Arrow keys move between options and select as they move.",
      "Only the selected radio is in the tab order.",
    ],
    related: ["checkbox", "select", "switch"],
  },

  {
    name: "Switch",
    slug: "switch",
    category: "Form",
    status: "stable",
    tag: "cui-switch",
    summary: "Toggle a setting on or off.",
    description:
      "A switch commits immediately, unlike a checkbox in a form. Use it for settings that take effect right away.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["switch", "toggle", "setting", "boolean"],
    properties: [
      { name: "checked", type: "boolean", default: "false", description: "On state." },
      { name: "label", type: "string", default: `""`, description: "Inline label." },
      { name: "size", type: `"small" | "medium"`, default: `"medium"`, description: "Control size." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the switch." },
    ],
    events: [{ name: "cui-change", detail: "{ checked: boolean }", description: "Fired when toggled." }],
    methods: [{ name: "toggle", signature: "toggle(): void", description: "Inverts the state." }],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [
          { name: "Switch", props: { label: "Two-factor authentication", checked: true } },
          { name: "Switch", props: { label: "Beta features" } },
          { name: "Switch", props: { label: "Managed by policy", checked: true, disabled: true } },
        ],
        code: {
          html: `<cui-switch checked>Two-factor authentication</cui-switch>
<cui-switch>Beta features</cui-switch>
<cui-switch checked disabled>Managed by policy</cui-switch>`,
        },
      },
    ],
    playground: {
      name: "Switch",
      tag: "cui-switch",
      slotControl: "label",
      controls: [
        { name: "label", label: "label", type: "text", value: "Enable audit log" },
        { name: "checked", label: "checked", type: "switch", value: true },
        { name: "size", label: "size", type: "select", options: ["small", "medium"], value: "medium" },
        { name: "disabled", label: "disabled", type: "switch", value: false },
      ],
    },
    accessibility: [
      "Uses role=switch with aria-checked.",
      "Space and Enter toggle the control.",
      "State is never communicated by colour alone — the knob position also changes.",
    ],
    related: ["checkbox", "radio", "button"],
  },

  {
    name: "Modal",
    slug: "modal",
    category: "Feedback",
    status: "stable",
    tag: "cui-modal",
    summary: "Focused dialog for a single task.",
    description:
      "A modal dialog built on the native dialog element, with focus trapping, scroll locking and an escape hatch that returns focus to the trigger.",
    version: "0.1.0",
    since: "0.0.3",
    keywords: ["modal", "dialog", "overlay", "confirm"],
    properties: [
      { name: "open", type: "boolean", default: "false", description: "Controls visibility." },
      { name: "title", type: "string", default: `""`, description: "Dialog heading." },
      { name: "size", type: `"small" | "medium" | "large" | "full"`, default: `"medium"`, description: "Dialog width." },
      { name: "closable", type: "boolean", default: "true", description: "Shows the close affordance." },
      { name: "mask-closable", type: "boolean", default: "true", description: "Allows closing by clicking the backdrop." },
    ],
    events: [
      { name: "cui-open", description: "Fired after the dialog becomes visible." },
      { name: "cui-close", detail: "{ reason: 'escape' | 'mask' | 'button' }", description: "Fired after the dialog closes." },
      { name: "cui-confirm", description: "Fired when the primary action is activated." },
    ],
    methods: [
      { name: "show", signature: "show(): void", description: "Opens the dialog." },
      { name: "hide", signature: "hide(): void", description: "Closes the dialog." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        description: "Open the dialog to see focus trapping and the backdrop.",
        demo: [{ name: "Modal", props: { title: "Delete employee" } }],
        code: {
          html: `<cui-button variant="danger" id="open">Delete employee</cui-button>

<cui-modal id="confirm" title="Delete employee">
  <p>This permanently removes the employee record. This cannot be undone.</p>
  <div slot="footer">
    <cui-button data-close>Cancel</cui-button>
    <cui-button variant="danger">Delete</cui-button>
  </div>
</cui-modal>`,
          js: `document.getElementById('open')
  .addEventListener('cui-click', () => document.getElementById('confirm').show());`,
        },
      },
    ],
    accessibility: [
      "Focus is trapped inside the dialog while it is open.",
      "Escape closes the dialog unless closable is false.",
      "The dialog is labelled by its heading through aria-labelledby.",
      "Background content is inert and page scrolling is locked.",
      "Focus returns to the element that opened the dialog.",
    ],
    related: ["drawer", "toast", "button"],
  },

  {
    name: "Drawer",
    slug: "drawer",
    category: "Feedback",
    status: "beta",
    tag: "cui-drawer",
    summary: "Side panel for secondary flows.",
    description:
      "A drawer slides in from any edge and is ideal for filters, details panels and long forms that should not lose the underlying context.",
    version: "0.1.0",
    since: "0.0.4",
    keywords: ["drawer", "panel", "sidebar", "overlay"],
    properties: [
      { name: "open", type: "boolean", default: "false", description: "Controls visibility." },
      { name: "placement", type: `"left" | "right" | "top" | "bottom"`, default: `"right"`, description: "Edge the drawer enters from." },
      { name: "size", type: "string", default: `"420px"`, description: "Width or height of the panel." },
      { name: "title", type: "string", default: `""`, description: "Panel heading." },
    ],
    events: [
      { name: "cui-open", description: "Fired when the drawer opens." },
      { name: "cui-close", description: "Fired when the drawer closes." },
    ],
    methods: [
      { name: "show", signature: "show(): void", description: "Opens the drawer." },
      { name: "hide", signature: "hide(): void", description: "Closes the drawer." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        demo: [{ name: "Drawer", props: { title: "Filter employees" } }],
        code: {
          html: `<cui-drawer placement="right" title="Filter employees">
  <cui-select label="Department"></cui-select>
  <cui-select label="Status"></cui-select>
</cui-drawer>`,
        },
      },
    ],
    accessibility: [
      "Behaves as a modal dialog with focus trapping when a backdrop is present.",
      "Escape closes the drawer.",
      "The panel is labelled by its heading.",
    ],
    related: ["modal", "menu", "tabs"],
  },

  {
    name: "Dropdown",
    slug: "dropdown",
    category: "Navigation",
    status: "stable",
    tag: "cui-dropdown",
    summary: "Contextual menu of actions.",
    description:
      "A dropdown anchors a menu to a trigger, flips when there is not enough space and closes on outside click or Escape.",
    version: "0.1.0",
    since: "0.0.3",
    keywords: ["dropdown", "menu", "actions", "popover"],
    properties: [
      { name: "placement", type: `"bottom-start" | "bottom-end" | "top-start" | "top-end"`, default: `"bottom-start"`, description: "Preferred anchor position." },
      { name: "trigger", type: `"click" | "hover"`, default: `"click"`, description: "How the menu opens." },
      { name: "open", type: "boolean", default: "false", description: "Controls visibility." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents the menu from opening." },
    ],
    events: [
      { name: "cui-select", detail: "{ value: string }", description: "Fired when a menu item is chosen." },
      { name: "cui-open", description: "Fired when the menu opens." },
      { name: "cui-close", description: "Fired when the menu closes." },
    ],
    methods: [
      { name: "open", signature: "open(): void", description: "Opens the menu." },
      { name: "close", signature: "close(): void", description: "Closes the menu." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        demo: [
          {
            name: "Dropdown",
            props: { label: "Actions", items: ["Edit record", "Duplicate", "Export CSV", "Delete"] },
          },
        ],
        code: {
          html: `<cui-dropdown placement="bottom-start">
  <cui-button slot="trigger">Actions</cui-button>
  <cui-menu-item value="edit">Edit record</cui-menu-item>
  <cui-menu-item value="duplicate">Duplicate</cui-menu-item>
  <cui-menu-item value="delete" variant="danger">Delete</cui-menu-item>
</cui-dropdown>`,
        },
      },
    ],
    accessibility: [
      "Trigger exposes aria-haspopup and aria-expanded.",
      "Arrow keys move between menu items, Escape closes the menu.",
      "Focus returns to the trigger when the menu closes.",
    ],
    related: ["menu", "select", "button"],
  },

  {
    name: "Tooltip",
    slug: "tooltip",
    category: "Feedback",
    status: "stable",
    tag: "cui-tooltip",
    summary: "Short contextual hint on hover or focus.",
    description:
      "Tooltips explain an icon-only control or add a short clarification. They never contain interactive content.",
    version: "0.1.0",
    since: "0.0.3",
    keywords: ["tooltip", "hint", "popover", "help"],
    properties: [
      { name: "content", type: "string", default: `""`, description: "Tooltip text." },
      { name: "placement", type: `"top" | "right" | "bottom" | "left"`, default: `"top"`, description: "Preferred side." },
      { name: "delay", type: "number", default: "150", description: "Open delay in milliseconds." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents the tooltip from showing." },
    ],
    events: [
      { name: "cui-show", description: "Fired when the tooltip becomes visible." },
      { name: "cui-hide", description: "Fired when the tooltip hides." },
    ],
    methods: [
      { name: "show", signature: "show(): void", description: "Shows the tooltip." },
      { name: "hide", signature: "hide(): void", description: "Hides the tooltip." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        demo: [
          { name: "Tooltip", props: { content: "Synchronise with payroll", children: "Hover me" } },
          { name: "Tooltip", props: { content: "Bottom placement", placement: "bottom", children: "Bottom" } },
        ],
        code: {
          html: `<cui-tooltip content="Synchronise with payroll">
  <cui-button>Sync</cui-button>
</cui-tooltip>`,
        },
      },
    ],
    accessibility: [
      "The tooltip is linked to its trigger with aria-describedby.",
      "Shows on focus as well as hover so keyboard users get the hint.",
      "Escape dismisses a visible tooltip.",
      "Never place links or buttons inside a tooltip.",
    ],
    related: ["dropdown", "badge", "button"],
  },

  {
    name: "Toast",
    slug: "toast",
    category: "Feedback",
    status: "beta",
    tag: "cui-toast",
    summary: "Transient confirmation message.",
    description:
      "Toasts confirm that an action succeeded or failed without interrupting the flow. They stack in a corner region and auto dismiss.",
    version: "0.1.0",
    since: "0.0.4",
    keywords: ["toast", "notification", "snackbar", "message"],
    properties: [
      { name: "variant", type: `"info" | "success" | "warning" | "danger"`, default: `"info"`, description: "Tone of the message." },
      { name: "title", type: "string", default: `""`, description: "Toast heading." },
      { name: "message", type: "string", default: `""`, description: "Body text." },
      { name: "duration", type: "number", default: "4000", description: "Auto dismiss delay in ms. 0 keeps it open." },
      { name: "placement", type: `"top-right" | "bottom-right" | "top-center"`, default: `"top-right"`, description: "Region the toast stacks in." },
    ],
    events: [
      { name: "cui-show", description: "Fired when the toast appears." },
      { name: "cui-dismiss", detail: "{ reason: 'timeout' | 'user' }", description: "Fired when the toast is removed." },
    ],
    methods: [
      { name: "show", signature: "CUI.toast(options): CuiToast", description: "Creates and shows a toast imperatively." },
      { name: "dismiss", signature: "dismiss(): void", description: "Removes the toast." },
    ],
    examples: [
      {
        id: "basic",
        title: "Variants",
        layout: "column",
        demo: [
          { name: "Toast", props: { variant: "success", title: "Employee created", message: "Jane Cooper was added to Engineering." } },
          { name: "Toast", props: { variant: "danger", title: "Upload failed", message: "The file exceeds the 10 MB limit." } },
        ],
        code: {
          js: `CUI.toast({
  variant: 'success',
  title: 'Employee created',
  message: 'Jane Cooper was added to Engineering.',
  duration: 4000
});`,
          html: `<cui-toast variant="success" title="Employee created">
  Jane Cooper was added to Engineering.
</cui-toast>`,
        },
      },
    ],
    accessibility: [
      "The toast region uses role=status with aria-live=polite.",
      "Danger toasts use aria-live=assertive.",
      "Auto dismiss pauses while the toast is hovered or focused.",
    ],
    related: ["alert", "modal", "notification"],
  },

  {
    name: "Tabs",
    slug: "tabs",
    category: "Navigation",
    status: "stable",
    tag: "cui-tabs",
    summary: "Switch between related views.",
    description:
      "Tabs organise content into panels within the same context. Supports manual and automatic activation.",
    version: "0.1.0",
    since: "0.0.3",
    keywords: ["tabs", "navigation", "panels", "sections"],
    properties: [
      { name: "value", type: "string", default: `""`, description: "Active tab value." },
      { name: "variant", type: `"line" | "solid"`, default: `"line"`, description: "Visual style." },
      { name: "activation", type: `"automatic" | "manual"`, default: `"automatic"`, description: "Whether arrow keys activate immediately." },
    ],
    events: [{ name: "cui-change", detail: "{ value: string }", description: "Fired when the active tab changes." }],
    methods: [{ name: "select", signature: "select(value: string): void", description: "Activates a tab by value." }],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [{ name: "Tabs", props: { tabs: ["Overview", "Attendance", "Documents"] } }],
        code: {
          html: `<cui-tabs value="overview">
  <cui-tab value="overview">Overview</cui-tab>
  <cui-tab value="attendance">Attendance</cui-tab>
  <cui-tab-panel value="overview">Employee summary</cui-tab-panel>
  <cui-tab-panel value="attendance">Attendance log</cui-tab-panel>
</cui-tabs>`,
        },
      },
    ],
    accessibility: [
      "Implements the ARIA tabs pattern with role=tablist, tab and tabpanel.",
      "Arrow keys move between tabs, Home and End jump to the ends.",
      "Each panel is labelled by its tab.",
    ],
    related: ["menu", "pagination", "card"],
  },

  {
    name: "Table",
    slug: "table",
    category: "Data Display",
    status: "beta",
    tag: "cui-table",
    summary: "Structured rows of enterprise data.",
    description:
      "A dense data table with sortable headers, selection, sticky header and responsive horizontal scrolling.",
    version: "0.1.0",
    since: "0.0.4",
    keywords: ["table", "grid", "data", "rows", "sort"],
    properties: [
      { name: "columns", type: "ColumnDef[]", default: "[]", description: "Column definitions supplied as a property." },
      { name: "rows", type: "object[]", default: "[]", description: "Row data." },
      { name: "selectable", type: "boolean", default: "false", description: "Adds a selection column." },
      { name: "sortable", type: "boolean", default: "false", description: "Enables header sorting." },
      { name: "density", type: `"compact" | "default"`, default: `"default"`, description: "Row height." },
      { name: "sticky-header", type: "boolean", default: "false", description: "Keeps the header visible while scrolling." },
    ],
    events: [
      { name: "cui-sort", detail: "{ column: string, direction: 'asc' | 'desc' }", description: "Fired when a header is sorted." },
      { name: "cui-select", detail: "{ rows: object[] }", description: "Fired when the selection changes." },
      { name: "cui-row-click", detail: "{ row: object }", description: "Fired when a row is activated." },
    ],
    methods: [
      { name: "setRows", signature: "setRows(rows: object[]): void", description: "Replaces the row data." },
      { name: "clearSelection", signature: "clearSelection(): void", description: "Deselects every row." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [{ name: "Table", props: { selectable: true } }],
        code: {
          html: `<cui-table id="employees" selectable sortable sticky-header></cui-table>`,
          js: `const table = document.getElementById('employees');
table.columns = [
  { key: 'name', title: 'Employee', sortable: true },
  { key: 'department', title: 'Department' },
  { key: 'status', title: 'Status' }
];
table.rows = await fetch('/api/employees').then(r => r.json());`,
        },
      },
    ],
    accessibility: [
      "Renders a semantic table element with proper header scope.",
      "Sortable headers expose aria-sort and are keyboard activatable.",
      "The scroll container is focusable so keyboard users can scroll wide tables.",
    ],
    related: ["pagination", "card", "badge"],
  },

  {
    name: "Pagination",
    slug: "pagination",
    category: "Navigation",
    status: "stable",
    tag: "cui-pagination",
    summary: "Move through paged results.",
    description:
      "Pagination for tables and lists, with page size selection and a total count summary.",
    version: "0.1.0",
    since: "0.0.4",
    keywords: ["pagination", "pager", "pages", "table"],
    properties: [
      { name: "page", type: "number", default: "1", description: "Current page." },
      { name: "page-size", type: "number", default: "20", description: "Rows per page." },
      { name: "total", type: "number", default: "0", description: "Total number of records." },
      { name: "compact", type: "boolean", default: "false", description: "Reduced layout for narrow containers." },
    ],
    events: [
      { name: "cui-change", detail: "{ page: number, pageSize: number }", description: "Fired when the page or size changes." },
    ],
    methods: [
      { name: "next", signature: "next(): void", description: "Goes to the next page." },
      { name: "prev", signature: "prev(): void", description: "Goes to the previous page." },
    ],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "column",
        demo: [{ name: "Pagination", props: { page: 3, total: 248, pageSize: 20 } }],
        code: {
          html: `<cui-pagination page="3" page-size="20" total="248"></cui-pagination>`,
        },
      },
    ],
    accessibility: [
      "Wrapped in a nav element with an accessible name.",
      "The current page is marked with aria-current=page.",
      "Disabled arrows are removed from the tab order.",
    ],
    related: ["table", "tabs", "button"],
  },

  {
    name: "Card",
    slug: "card",
    category: "Data Display",
    status: "stable",
    tag: "cui-card",
    summary: "Group related content in a surface.",
    description:
      "Cards group content with optional header, footer and actions. They use a hairline border rather than heavy elevation.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["card", "surface", "panel", "container"],
    properties: [
      { name: "title", type: "string", default: `""`, description: "Card heading." },
      { name: "subtitle", type: "string", default: `""`, description: "Secondary heading text." },
      { name: "bordered", type: "boolean", default: "true", description: "Shows the hairline border." },
      { name: "hoverable", type: "boolean", default: "false", description: "Adds a hover affordance for clickable cards." },
      { name: "padding", type: `"none" | "compact" | "default"`, default: `"default"`, description: "Inner spacing." },
    ],
    events: [{ name: "cui-click", description: "Fired when a hoverable card is activated." }],
    methods: [],
    examples: [
      {
        id: "basic",
        title: "Basic",
        layout: "grid",
        demo: [
          { name: "Card", props: { title: "Headcount", subtitle: "248 employees", body: "12 joined this month across four departments." } },
          { name: "Card", props: { title: "Attendance", subtitle: "96.4% present", body: "Nine employees on approved leave today." } },
        ],
        code: {
          html: `<cui-card title="Headcount" subtitle="248 employees">
  12 joined this month across four departments.
</cui-card>`,
        },
      },
    ],
    accessibility: [
      "A clickable card exposes a single focusable action rather than a click handler on the container.",
      "Heading levels inside cards follow the surrounding document outline.",
    ],
    related: ["badge", "table", "alert"],
  },

  {
    name: "Badge",
    slug: "badge",
    category: "Data Display",
    status: "stable",
    tag: "cui-badge",
    summary: "Compact status or count indicator.",
    description:
      "Badges label a status or show a small count. Use tone plus text, never tone alone.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["badge", "status", "tag", "count", "label"],
    properties: [
      { name: "variant", type: `"neutral" | "primary" | "success" | "warning" | "danger"`, default: `"neutral"`, description: "Tone of the badge." },
      { name: "appearance", type: `"soft" | "solid" | "outline"`, default: `"soft"`, description: "Fill style." },
      { name: "dot", type: "boolean", default: "false", description: "Shows a leading status dot." },
    ],
    events: [],
    methods: [],
    examples: [
      {
        id: "basic",
        title: "Variants",
        demo: [
          { name: "Badge", props: { children: "Neutral" } },
          { name: "Badge", props: { variant: "primary", children: "Primary" } },
          { name: "Badge", props: { variant: "success", dot: true, children: "Active" } },
          { name: "Badge", props: { variant: "warning", children: "Pending" } },
          { name: "Badge", props: { variant: "danger", children: "Suspended" } },
        ],
        code: {
          html: `<cui-badge>Neutral</cui-badge>
<cui-badge variant="success" dot>Active</cui-badge>
<cui-badge variant="danger">Suspended</cui-badge>`,
        },
      },
    ],
    playground: {
      name: "Badge",
      tag: "cui-badge",
      slotControl: "children",
      controls: [
        { name: "variant", label: "variant", type: "select", options: ["neutral", "primary", "success", "warning", "danger"], value: "success" },
        { name: "appearance", label: "appearance", type: "select", options: ["soft", "solid", "outline"], value: "soft" },
        { name: "dot", label: "dot", type: "switch", value: true },
        { name: "children", label: "label", type: "text", value: "Active" },
      ],
    },
    accessibility: [
      "Status is conveyed with text, not only colour.",
      "Count badges attached to a control include an accessible label such as '3 unread notifications'.",
    ],
    related: ["card", "table", "alert"],
  },

  {
    name: "Alert",
    slug: "alert",
    category: "Feedback",
    status: "stable",
    tag: "cui-alert",
    summary: "Inline message about the current context.",
    description:
      "Alerts communicate an important message in place, unlike toasts which are transient.",
    version: "0.1.0",
    since: "0.0.2",
    keywords: ["alert", "banner", "message", "warning", "error"],
    properties: [
      { name: "variant", type: `"info" | "success" | "warning" | "danger"`, default: `"info"`, description: "Tone of the alert." },
      { name: "title", type: "string", default: `""`, description: "Alert heading." },
      { name: "closable", type: "boolean", default: "false", description: "Shows a dismiss control." },
      { name: "icon", type: "boolean", default: "true", description: "Shows the tone icon." },
    ],
    events: [{ name: "cui-close", description: "Fired when the alert is dismissed." }],
    methods: [{ name: "close", signature: "close(): void", description: "Dismisses the alert." }],
    examples: [
      {
        id: "basic",
        title: "Variants",
        layout: "column",
        demo: [
          { name: "Alert", props: { variant: "info", title: "Scheduled maintenance", children: "The payroll service is read only on Sunday 02:00–04:00 UTC." } },
          { name: "Alert", props: { variant: "success", title: "Import complete", children: "248 employee records were imported." } },
          { name: "Alert", props: { variant: "warning", title: "Approaching quota", children: "You have used 92% of your storage." } },
          { name: "Alert", props: { variant: "danger", title: "Sync failed", children: "The directory connection was refused." } },
        ],
        code: {
          html: `<cui-alert variant="warning" title="Approaching quota" closable>
  You have used 92% of your storage.
</cui-alert>`,
        },
      },
    ],
    accessibility: [
      "Danger and warning alerts use role=alert so they are announced immediately.",
      "Informational alerts use role=status.",
      "The dismiss control has an accessible label.",
    ],
    related: ["toast", "modal", "badge"],
  },

  {
    name: "Spinner",
    slug: "spinner",
    category: "Feedback",
    status: "stable",
    tag: "cui-spinner",
    summary: "Indeterminate loading indicator.",
    description:
      "A spinner communicates that work is in progress. Pair it with a label whenever the wait can exceed a second.",
    version: "0.1.0",
    since: "0.0.1",
    keywords: ["spinner", "loading", "progress", "busy"],
    properties: [
      { name: "size", type: `"small" | "medium" | "large"`, default: `"medium"`, description: "Diameter of the spinner." },
      { name: "label", type: "string", default: `"Loading"`, description: "Accessible label." },
      { name: "inline", type: "boolean", default: "false", description: "Renders inline with text." },
    ],
    events: [],
    methods: [],
    examples: [
      {
        id: "basic",
        title: "Sizes",
        demo: [
          { name: "Spinner", props: { size: "small" } },
          { name: "Spinner", props: { size: "medium" } },
          { name: "Spinner", props: { size: "large" } },
        ],
        code: { html: `<cui-spinner size="small"></cui-spinner>
<cui-spinner size="medium"></cui-spinner>
<cui-spinner size="large"></cui-spinner>` },
      },
    ],
    accessibility: [
      "Exposes role=status with an accessible label.",
      "Animation is disabled under prefers-reduced-motion and replaced with a pulsing indicator.",
    ],
    related: ["button", "table", "toast"],
  },
];

export const componentBySlug = (slug: string) =>
  components.find((component) => component.slug === slug);

export const componentCategories = [
  "General",
  "Form",
  "Data Display",
  "Feedback",
  "Navigation",
  "Advanced",
] as const;

/** Components on the roadmap that do not have documentation yet. */
export const plannedComponents = [
  { name: "Textarea", category: "Form", status: "planned" },
  { name: "Menu", category: "Navigation", status: "planned" },
  { name: "Breadcrumb", category: "Navigation", status: "planned" },
  { name: "Tag", category: "Data Display", status: "planned" },
  { name: "List", category: "Data Display", status: "planned" },
  { name: "Timeline", category: "Data Display", status: "planned" },
  { name: "DatePicker", category: "Advanced", status: "planned" },
  { name: "Upload", category: "Advanced", status: "planned" },
  { name: "Tree", category: "Advanced", status: "planned" },
  { name: "DataTable", category: "Advanced", status: "planned" },
] as const;
