import { Accordion, Chip, Chips, Field, Highlight, TableWrap } from "@/components/ui";
import { RT } from "@/lib/richText";
import type { AccordionSpec, Block, ChipSpec, TableCellSpec } from "@/lib/content-types";

const COLOR_VAR: Record<string, string> = {
  teal: "var(--teal)",
  rose: "var(--rose)",
  cobalt: "var(--cobalt)",
  mute: "var(--mute)",
  amber: "var(--amber)",
};

function resolveHref(chip: ChipSpec, srcBase: string): string | undefined {
  if (chip.href) return chip.href;
  if (chip.srcId) return `${srcBase}#${chip.srcId}`;
  return undefined;
}

export function ChipRow({ items, srcBase }: { items: ChipSpec[]; srcBase: string }) {
  return (
    <Chips>
      {items.map((c, i) => (
        <Chip tone={c.tone} href={resolveHref(c, srcBase)} key={i}>
          {c.label}
        </Chip>
      ))}
    </Chips>
  );
}

function Cell({ cell }: { cell: TableCellSpec }) {
  const style = cell.color ? { color: COLOR_VAR[cell.color] } : undefined;
  const className = cell.mono ? "mn" : undefined;
  let content = <RT text={cell.text} />;
  if (cell.strong) content = <strong>{content}</strong>;
  if (cell.italic) content = <em>{content}</em>;
  return (
    <td className={className} style={style}>
      {content}
    </td>
  );
}

function BlockView({ block, srcBase }: { block: Block; srcBase: string }) {
  switch (block.type) {
    case "p":
      return (
        <Field>
          <p>
            <RT text={block.text} />
          </p>
        </Field>
      );
    case "field":
      return (
        <Field label={block.label}>
          {block.text ? (
            <p>
              <RT text={block.text} />
            </p>
          ) : null}
          {block.items ? (
            <ul>
              {block.items.map((it, i) => (
                <li key={i}>
                  <RT text={it} />
                </li>
              ))}
            </ul>
          ) : null}
        </Field>
      );
    case "highlight":
      return (
        <Highlight label={block.label} amber={block.amber}>
          <RT text={block.text} />
        </Highlight>
      );
    case "chips":
      return <ChipRow items={block.items} srcBase={srcBase} />;
    case "table":
      return (
        <Field>
          <TableWrap minWidth={block.minWidth}>
            <thead>
              <tr>
                {block.columns.map((c, i) => (
                  <th key={i} style={c.minWidth ? { minWidth: c.minWidth } : undefined}>
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={block.highlightRows?.includes(ri) ? { background: "var(--cobaltSoft)" } : undefined}
                >
                  {row.map((cell, ci) => (
                    <Cell cell={cell} key={ci} />
                  ))}
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </Field>
      );
    case "definition":
      return (
        <TableWrap>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                <th style={{ width: 170 }}>{row.label}</th>
                <td>
                  <RT text={row.value} />
                  {row.chips ? <ChipRow items={row.chips} srcBase={srcBase} /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      );
    default:
      return null;
  }
}

export function Blocks({ blocks, srcBase }: { blocks: Block[]; srcBase: string }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView block={b} srcBase={srcBase} key={i} />
      ))}
    </>
  );
}

export function DataAccordion({ spec, srcBase }: { spec: AccordionSpec; srcBase: string }) {
  const desc = spec.desc ? (
    <>
      <RT text={spec.desc} />
      {spec.descSuffix ? (
        <strong style={{ color: COLOR_VAR[spec.descSuffix.color] }}> {spec.descSuffix.text}</strong>
      ) : null}
    </>
  ) : undefined;

  return (
    <Accordion num={spec.num} defaultOpen={spec.defaultOpen} title={<RT text={spec.title} />} desc={desc}>
      <Blocks blocks={spec.body} srcBase={srcBase} />
    </Accordion>
  );
}
