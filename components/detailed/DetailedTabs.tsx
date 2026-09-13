"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

export type DetailedTabDef = { id: string; label: string; content: ReactNode };

/**
 * Top tab bar for the detailed research page: one section mounted at a time
 * (not a long scroll of all nine). Selecting a tab updates the URL hash
 * (via history.replaceState, no navigation) so links like
 * /detailed-research#s8 keep working as deep links into a specific section.
 */
export function DetailedTabs({ tabs, header }: { tabs: DetailedTabDef[]; header?: ReactNode }) {
  const [active, setActive] = useState(0);

  function syncFromHash() {
    const hash = window.location.hash.replace("#", "");
    const idx = tabs.findIndex((t) => t.id === hash);
    if (idx >= 0) setActive(idx);
  }

  // Runs before paint, so a deep link (#s8) selects the right tab without a
  // visible flash of the default (first) section. Reading the current hash
  // is only knowable client-side (server always renders the first tab), so
  // syncing it into state here is intentional.
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    syncFromHash();
    // A same-document navigation to a new hash (browser back/forward, a
    // pasted #sX URL while already on this page) doesn't remount this
    // component, so the effect above alone would miss it — listen too.
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function select(i: number) {
    setActive(i);
    history.replaceState(null, "", `#${tabs[i].id}`);
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <nav className="secnav" role="tablist" aria-label="Sections">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? "on" : ""}
            onClick={() => select(i)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <div className="wrap">
        {header}
        {tabs[active].content}
      </div>
    </>
  );
}
