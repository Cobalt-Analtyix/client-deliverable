import { Section, SubHead, CardGrid } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import { RT } from "@/lib/richText";
import type { AccordionSpec } from "@/lib/content-types";
import roadmap from "@/data/detailed/roadmap.json";

const items = roadmap.items as AccordionSpec[];

export function Section09Roadmap() {
  return (
    <Section
      id="s9"
      n="09"
      title="What follows"
      intro="The wider capability, sequenced against PlayBlue's timeline rather than listed as a menu. Expand any item for scope."
    >
      {items.map((spec) => (
        <DataAccordion spec={spec} srcBase="" key={spec.num} />
      ))}

      <SubHead mark="9b">Open questions for the session</SubHead>
      <CardGrid>
        {roadmap.openQuestions.map((q, i) => (
          <div className="card" key={i}>
            <p>
              <strong>{i + 1}.</strong> <RT text={q} />
            </p>
          </div>
        ))}
      </CardGrid>
    </Section>
  );
}
