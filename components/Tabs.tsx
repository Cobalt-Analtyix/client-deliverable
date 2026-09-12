"use client";

import { useId, useState, type ReactNode } from "react";

export type TabDef = {
  id: string;
  label: string;
  content: ReactNode;
};

export function Tabs({ tabs, groupLabel }: { tabs: TabDef[]; groupLabel: string }) {
  const [active, setActive] = useState(0);
  const uid = useId();

  return (
    <div>
      <div className="tabs" role="tablist" aria-label={groupLabel}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${uid}-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`${uid}-panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${uid}-panel-${t.id}`}
          aria-labelledby={`${uid}-tab-${t.id}`}
          className="panel"
          hidden={i !== active}
        >
          {/* Only the active panel's content is mounted, so nested <details>
              accordions and other stateful children reset cleanly on tab switch
              and hidden panels never trap focus. */}
          {i === active ? t.content : null}
        </div>
      ))}
    </div>
  );
}
