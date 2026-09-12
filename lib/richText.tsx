import { Fragment, type ReactNode } from "react";

/**
 * Very small inline-markup parser for JSON-sourced content, so copy can be
 * edited in data files without touching components:
 *   **bold**        -> <strong>
 *   _italic_        -> <em>
 *   [text](href)    -> <a>
 * Plain Unicode (curly quotes, em dashes, ₹, etc.) is typed directly in the
 * JSON strings — no HTML entities needed.
 */
const INLINE_RE = /\*\*(.+?)\*\*|_(.+?)_|\[([^\]]+)\]\(([^)]+)\)/g;

export function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  INLINE_RE.lastIndex = 0;
  while ((match = INLINE_RE.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    const [, bold, italic, linkText, href] = match;
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={key++}>{italic}</em>);
    } else if (linkText !== undefined) {
      nodes.push(
        <a key={key++} href={href}>
          {linkText}
        </a>
      );
    }
    lastIndex = INLINE_RE.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}

/** Renders a markup string inline (no wrapping element). */
export function RT({ text }: { text: string }) {
  return <>{parseInline(text)}</>;
}
