import { Section } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import { Tabs } from "@/components/Tabs";
import type { AccordionSpec } from "@/lib/content-types";
import trends from "@/data/detailed/trends.json";

function Panel({ items }: { items: AccordionSpec[] }) {
  return (
    <div>
      {items.map((a, i) => (
        <DataAccordion spec={a} srcBase="" key={i} />
      ))}
    </div>
  );
}

export function Section06Trends() {
  return (
    <Section
      id="s6"
      n="06"
      title="Trend analysis"
      intro="Market, regulatory and capital movements bearing on this category. Where a figure comes from an interested party, that is stated rather than smoothed over."
    >
      <Tabs
        groupLabel="Trend analysis"
        tabs={[
          { id: "market", label: "Market", content: <Panel items={trends.market as AccordionSpec[]} /> },
          { id: "regulatory", label: "Regulatory & policy", content: <Panel items={trends.regulatory as AccordionSpec[]} /> },
          { id: "capital", label: "Capital", content: <Panel items={trends.capital as AccordionSpec[]} /> },
          { id: "realestate", label: "Real estate", content: <Panel items={trends.realEstate as AccordionSpec[]} /> },
        ]}
      />
    </Section>
  );
}
