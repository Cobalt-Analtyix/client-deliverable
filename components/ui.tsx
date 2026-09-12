import type { ReactNode } from "react";

/* ============ SECTION ============ */
export function Section({
  id,
  n,
  title,
  intro,
  children,
}: {
  id: string;
  n: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id}>
      <div className="sHead">
        <span className="n">{n}</span>
        <h2>{title}</h2>
      </div>
      {intro ? <p className="sIntro">{intro}</p> : null}
      {children}
    </section>
  );
}

export function SubHead({ mark, children }: { mark: string; children: ReactNode }) {
  return (
    <h3 className="sub">
      <em>{mark}</em> {children}
    </h3>
  );
}

/* ============ CHIPS ============ */
export function Chip({
  tone,
  href,
  children,
}: {
  tone?: "s" | "w" | "g" | "r";
  href?: string;
  children: ReactNode;
}) {
  const cls = ["chip", tone].filter(Boolean).join(" ");
  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return <span className={cls}>{children}</span>;
}

export function Chips({ children }: { children: ReactNode }) {
  return <div className="chips">{children}</div>;
}

/* ============ ACCORDION ============ */
export function Accordion({
  num,
  title,
  desc,
  defaultOpen,
  children,
}: {
  num?: string;
  title: ReactNode;
  desc?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details className="ac" open={defaultOpen}>
      <summary>
        {num ? <span className="acNum">{num}</span> : null}
        <span className="acPlus" />
        <span className="acTitle">
          <span className="t">{title}</span>
          {desc ? <span className="d">{desc}</span> : null}
        </span>
      </summary>
      <div className="acBody">{children}</div>
    </details>
  );
}

export function Field({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="fld">
      {label ? <b>{label}</b> : null}
      {children}
    </div>
  );
}

export function Highlight({
  label,
  amber,
  children,
}: {
  label: string;
  amber?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="fld">
      <div className="hl" style={amber ? { background: "var(--amberSoft)" } : undefined}>
        <b style={amber ? { color: "var(--amber)" } : undefined}>{label}</b>
        {children}
      </div>
    </div>
  );
}

/* ============ CARDS / GRID ============ */
export function CardGrid({ cols = 2, children }: { cols?: 2 | 3; children: ReactNode }) {
  return <div className={cols === 3 ? "g3" : "g2"}>{children}</div>;
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p style={{ color: "var(--mute)" }}>{children}</p>
    </div>
  );
}

/* ============ CALLOUTS ============ */
export function Callout({
  tone,
  label,
  children,
}: {
  tone: "blue" | "amber" | "dark";
  label: string;
  children: ReactNode;
}) {
  return (
    <div className={`call ${tone}`}>
      <b className="lbl">{label}</b>
      {children}
    </div>
  );
}

/* ============ STAT BAR ============ */
export function StatBar({
  stats,
}: {
  stats: { v: string; l: ReactNode }[];
}) {
  return (
    <div className="statBar">
      {stats.map((s, i) => (
        <div key={i}>
          <div className="v">{s.v}</div>
          <div className="l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

/* ============ DATA BARS ============ */
export function Bars({ children }: { children: ReactNode }) {
  return <div className="bars">{children}</div>;
}

export function BarRow({
  name,
  sub,
  value,
  widthPct,
  variant,
}: {
  name: string;
  sub?: string;
  value: string;
  widthPct: number;
  variant?: "q" | "t";
}) {
  return (
    <div className="barRow">
      <span className="nm">
        {name}
        {sub ? (
          <>
            <br />
            <span className="mn" style={{ fontSize: "9.5px", color: "var(--mute)" }}>
              {sub}
            </span>
          </>
        ) : null}
      </span>
      <span className="barTrack">
        <span
          className={["barFill", variant].filter(Boolean).join(" ")}
          style={{ width: `${widthPct}%` }}
        />
      </span>
      <span className="barVal">{value}</span>
    </div>
  );
}

/* ============ FUNNEL ============ */
export function Funnel({ children }: { children: ReactNode }) {
  return <div className="fn">{children}</div>;
}

export function FunnelRow({
  widthPx,
  color,
  headline,
  body,
}: {
  widthPx: number;
  color?: string;
  headline: string;
  body: ReactNode;
}) {
  return (
    <div className="fnRow">
      <div className="fnBar" style={{ width: `${widthPx}px`, background: color }} />
      <div className="fnTxt">
        <div className="a">{headline}</div>
        <div className="b">{body}</div>
      </div>
    </div>
  );
}

/* ============ TABLE ============ */
export function TableWrap({
  children,
  minWidth,
  className,
}: {
  children: ReactNode;
  minWidth?: number;
  className?: string;
}) {
  return (
    <div className="tw">
      <table className={className} style={minWidth ? { minWidth } : undefined}>
        {children}
      </table>
    </div>
  );
}

/* ============ TIMELINE ============ */
export function Timeline({ children }: { children: ReactNode }) {
  return <div className="tl">{children}</div>;
}

export function TimelineRow({ wk, title, children }: { wk: string; title: string; children: ReactNode }) {
  return (
    <div className="tlRow">
      <div className="wk">{wk}</div>
      <div>
        <h5>{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
}

/* ============ MODULE BOX ============ */
export function ModuleBox({ mark, title, children }: { mark: string; title: string; children: ReactNode }) {
  return (
    <div className="mod">
      <div className="hd">
        <span className="mk">{mark}</span>
        <h4>{title}</h4>
      </div>
      <div className="bd">{children}</div>
    </div>
  );
}

/* ============ KV / ATTR ============ */
export function KV({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <div className="kv">
      {items.map((it, i) => (
        <div key={i}>
          <b>{it.label}</b>
          {it.value}
        </div>
      ))}
    </div>
  );
}

export function AttrGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="attr">
      {items.map((it, i) => (
        <div className="attrItem" key={i}>
          <b>{it.label}</b>
          <span>{it.value}</span>
        </div>
      ))}
    </div>
  );
}
