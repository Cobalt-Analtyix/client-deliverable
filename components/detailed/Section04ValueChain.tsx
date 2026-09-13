import { Section, Callout } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import { RT } from "@/lib/richText";
import type { AccordionSpec } from "@/lib/content-types";
import valueChain from "@/data/detailed/valueChain.json";

const stages = valueChain.stages as AccordionSpec[];

export function Section04ValueChain() {
  return (
    <Section
      id="s4"
      n="04"
      title="Value chain and market map"
      intro="Eight stages, in the order inventory moves through them. Expand any stage for its sub-stages and technologies, the players operating there, and where PlayBlue sits today."
    >
      <Callout tone="dark" label="Reading the map">
        <RT text={valueChain.readingCallout} />
      </Callout>

      {stages.map((s) => (
        <DataAccordion spec={s} srcBase="" key={s.num} />
      ))}
    </Section>
  );
}
