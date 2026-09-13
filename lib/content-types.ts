// Shared JSON content schema. Every "text" field below accepts the small
// inline markup handled by lib/richText.tsx: **bold**, _italic_, [t](href).

export type ChipTone = "s" | "w" | "g" | "r";

export type ChipSpec = {
  label: string;
  tone?: ChipTone;
  /** Source id (e.g. "r37") — resolved against a page's srcBase to build the href. */
  srcId?: string;
  /** Explicit href, used instead of srcId for non-source links. */
  href?: string;
};

export type TableCellSpec = {
  text: string;
  strong?: boolean;
  mono?: boolean;
  italic?: boolean;
  color?: "teal" | "rose" | "cobalt" | "mute";
};

export type TableBlock = {
  type: "table";
  columns: { label: string; minWidth?: number }[];
  rows: TableCellSpec[][];
  /** 0-based row indexes to highlight (cobalt-tinted background). */
  highlightRows?: number[];
  minWidth?: number;
};

export type DefinitionTableBlock = {
  type: "definition";
  rows: { label: string; value: string; chips?: ChipSpec[] }[];
};

export type Block =
  | { type: "p"; text: string }
  | { type: "field"; label?: string; text?: string; items?: string[] }
  | { type: "highlight"; label: string; text: string; amber?: boolean }
  | { type: "chips"; items: ChipSpec[] }
  | TableBlock
  | DefinitionTableBlock;

export type AccordionSpec = {
  num?: string;
  title: string;
  desc?: string;
  /** Appended after `desc`, bold + colored — e.g. "PlayBlue: active" status tags. */
  descSuffix?: { text: string; color: "cobalt" | "mute" | "amber" | "rose" | "teal" };
  defaultOpen?: boolean;
  body: Block[];
};

export type MatrixRowSpec = {
  name: string;
  layer: string;
  /** "f" = established, "p" = partial/emerging, "o" = not present. */
  cells: ("f" | "p" | "o")[];
  me?: boolean;
};

export type SourceSpec = {
  id: string;
  label: string;
  url: string;
  host: string;
  /** True when `url` is a placeholder ("VERIFY_URL") pending manual confirmation — not safe to cite externally. */
  needsVerification?: boolean;
  note?: string;
};
