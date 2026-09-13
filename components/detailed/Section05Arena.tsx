import { Section, SubHead, Callout, Bars, BarRow, TableWrap } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import { RT } from "@/lib/richText";
import type { AccordionSpec, MatrixRowSpec } from "@/lib/content-types";
import arena from "@/data/detailed/arena.json";

const layers = arena.layers as AccordionSpec[];
const matrix = arena.matrix as MatrixRowSpec[];

const CELL_GLYPH: Record<string, string> = { f: "●", p: "◐", o: "○" };

function MatrixRow({ row }: { row: MatrixRowSpec }) {
  return (
    <tr className={row.me ? "me" : undefined}>
      <td>
        <strong>{row.name}</strong>
        <br />
        <span className="mn" style={{ fontSize: "9.5px", color: row.me ? "var(--cobalt)" : "var(--mute)" }}>
          {row.layer}
        </span>
      </td>
      {row.cells.map((c, i) => (
        <td className={`c ${c}`} key={i}>
          {CELL_GLYPH[c]}
        </td>
      ))}
    </tr>
  );
}

export function Section05Arena() {
  return (
    <Section
      id="s5"
      n="05"
      title="The competitive arena"
      intro="Organised by the five layers set out in finding A, since comparing across layers is the distinction that matters most here. Suppliers are shown separately from structural competitors; nothing in this section ranks a supplier's revenue against PlayBlue's."
    >
      <Callout tone="blue" label={arena.readingCallout.label}>
        <RT text={arena.readingCallout.text} />
      </Callout>

      <SubHead mark="5a">Layer 1 — brand principals (suppliers, not competitors)</SubHead>
      <p className="sIntro" style={{ marginBottom: ".7rem" }}>
        These companies sell <em>to</em> PlayBlue, wholesale. Their India revenue sizes the
        wholesale pool PlayBlue is trying to intermediate — it is not a bar to clear.
      </p>
      <Bars>
        {arena.suppliersBars.map((b, i) => (
          <BarRow key={i} name={b.name} sub={b.sub} value={b.value} widthPct={b.widthPct} variant={b.variant as "q" | "t" | undefined} />
        ))}
      </Bars>
      <Callout tone="amber" label={arena.suppliersCallout.label}>
        <RT text={arena.suppliersCallout.text} />
      </Callout>

      <SubHead mark="5b">Layer 2 — vertically integrated retail (PlayBlue&rsquo;s real revenue comparators)</SubHead>
      <p className="sIntro" style={{ marginBottom: ".7rem" }}>
        Same shelf, same customer wallet, structurally different economics — full
        manufacturer-plus-retail margin, versus PlayBlue&rsquo;s retail margin only. This is
        still the closest thing to an apples-to-apples chart available, and even it needs the
        caveat stated.
      </p>
      <Bars>
        {arena.retailBars.map((b, i) => (
          <BarRow key={i} name={b.name} sub={b.sub} value={b.value} widthPct={b.widthPct} variant={b.variant as "q" | "t" | undefined} />
        ))}
      </Bars>
      <Callout tone="amber" label={arena.retailCallout.label}>
        <RT text={arena.retailCallout.text} />
      </Callout>

      <SubHead mark="5c">The five layers, in detail</SubHead>
      {layers.map((l, i) => (
        <DataAccordion spec={l} srcBase="" key={i} />
      ))}

      <SubHead mark="5d">Presence across the value chain</SubHead>
      <p className="sIntro" style={{ marginBottom: ".6rem" }}>
        Rows grouped by layer. Stage numbers correspond to section 04.
      </p>
      <TableWrap className="mx" minWidth={600}>
        <thead>
          <tr>
            <th style={{ minWidth: 160 }}>Player</th>
            <th className="c">01</th>
            <th className="c">02</th>
            <th className="c">03</th>
            <th className="c">04</th>
            <th className="c">05</th>
            <th className="c">06</th>
            <th className="c">07</th>
            <th className="c">08</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <MatrixRow row={row} key={i} />
          ))}
        </tbody>
      </TableWrap>
      <p style={{ fontSize: "11.5px", color: "var(--mute)", marginTop: ".45rem" }}>
        <span className="mn" style={{ color: "var(--cobalt)" }}>●</span> established &nbsp;·&nbsp;{" "}
        <span className="mn" style={{ color: "var(--mute2)" }}>◐</span> partial or emerging &nbsp;·&nbsp;{" "}
        <span className="mn" style={{ color: "#DDDDD5" }}>○</span> not present. Assessed from public evidence.
      </p>
    </Section>
  );
}
