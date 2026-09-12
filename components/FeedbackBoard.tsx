"use client";

import { useRef, useState } from "react";
import { Chip, Chips } from "./ui";

export type FeedbackItem = {
  id: string;
  text: string;
  sources: { label: string; href: string }[];
};

type ItemState = {
  verdict: "up" | "dn" | null;
  removed: boolean;
  commentOpen: boolean;
  comment: string;
  editing: boolean;
  text: string;
};

function initState(item: FeedbackItem): ItemState {
  return { verdict: null, removed: false, commentOpen: false, comment: "", editing: false, text: item.text };
}

export function FeedbackBoard({ items }: { items: FeedbackItem[] }) {
  const [state, setState] = useState<Record<string, ItemState>>(() =>
    Object.fromEntries(items.map((it) => [it.id, initState(it)]))
  );

  const touched = items.filter((it) => {
    const s = state[it.id];
    return !!(s?.verdict || s?.removed || s?.comment.trim() || s?.text !== it.text);
  }).length;

  function update(id: string, patch: Partial<ItemState>) {
    setState((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }

  function reset() {
    setState(Object.fromEntries(items.map((it) => [it.id, initState(it)])));
  }

  function exportJson() {
    const out = {
      document: "PlayBlue sector and client intelligence",
      section: "Stated goals",
      exported: new Date().toISOString(),
      items: items.map((it) => {
        const s = state[it.id];
        return {
          id: it.id,
          statement: s.text,
          verdict: s.verdict === "up" ? "relevant" : s.verdict === "dn" ? "low priority" : "unmarked",
          removed: s.removed,
          edited: s.text !== it.text,
          comment: s.comment || "",
        };
      }),
    };
    const blob = new Blob([JSON.stringify(out, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "playblue-feedback.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <div>
      <div id="fbList">
        {items.map((it) => {
          const s = state[it.id];
          return <FeedbackCard key={it.id} item={it} state={s} onChange={(patch) => update(it.id, patch)} />;
        })}
      </div>
      <div className="expBar">
        <span>{touched === 0 ? "No feedback recorded yet" : `${touched} item${touched === 1 ? "" : "s"} marked`}</span>
        <button type="button" onClick={exportJson}>
          Download feedback
        </button>
        <button type="button" className="gh" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

function FeedbackCard({
  item,
  state,
  onChange,
}: {
  item: FeedbackItem;
  state: ItemState;
  onChange: (patch: Partial<ItemState>) => void;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  const cardCls = [
    "fb",
    state.removed ? "dim" : "",
    state.verdict === "up" ? "up" : "",
    state.verdict === "dn" ? "dn" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardCls}>
      <div
        className="tx"
        ref={textRef}
        contentEditable={state.editing}
        suppressContentEditableWarning
        onBlur={(e) => onChange({ text: e.currentTarget.textContent?.trim() || state.text })}
      >
        {state.text}
      </div>
      <Chips>
        {item.sources.map((src) => (
          <Chip tone="s" href={src.href} key={src.href + src.label}>
            {src.label}
          </Chip>
        ))}
      </Chips>
      <div className="fbb">
        <button
          type="button"
          aria-pressed={state.verdict === "up"}
          onClick={() => onChange({ verdict: state.verdict === "up" ? null : "up" })}
        >
          Relevant
        </button>
        <button
          type="button"
          aria-pressed={state.verdict === "dn"}
          onClick={() => onChange({ verdict: state.verdict === "dn" ? null : "dn" })}
        >
          Low priority
        </button>
        <button
          type="button"
          aria-pressed={state.editing}
          onClick={() => {
            if (state.editing) {
              onChange({ editing: false, text: textRef.current?.textContent?.trim() || state.text });
            } else {
              onChange({ editing: true });
              requestAnimationFrame(() => textRef.current?.focus());
            }
          }}
        >
          {state.editing ? "Save" : "Edit"}
        </button>
        <button type="button" aria-pressed={state.commentOpen} onClick={() => onChange({ commentOpen: !state.commentOpen })}>
          Comment
        </button>
        <span className="sp" />
        <button type="button" onClick={() => onChange({ removed: !state.removed })}>
          {state.removed ? "Restore" : "Remove"}
        </button>
      </div>
      <textarea
        className="cmt"
        hidden={!state.commentOpen}
        placeholder="Add context…"
        value={state.comment}
        onChange={(e) => onChange({ comment: e.target.value })}
      />
    </div>
  );
}
