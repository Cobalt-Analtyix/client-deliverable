import { Section } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import type { AccordionSpec } from "@/lib/content-types";
import implications from "@/data/detailed/implications.json";

const items = implications as AccordionSpec[];

export function Section07Implications() {
  return (
    <Section
      id="s7"
      n="07"
      title="Strategic implications"
      intro="Drawn from sections 03 to 06. Propositions to argue with, not conclusions. Several would be settled quickly by evidence PlayBlue already holds internally."
    >
      {items.map((spec) => (
        <DataAccordion spec={spec} srcBase="" key={spec.num} />
      ))}
    </Section>
  );
}
