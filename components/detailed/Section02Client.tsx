import { Section, TableWrap } from "@/components/ui";
import { DataAccordion, ChipRow } from "@/components/Blocks";
import { Tabs } from "@/components/Tabs";
import { RT } from "@/lib/richText";
import type { AccordionSpec, ChipSpec } from "@/lib/content-types";
import client from "@/data/detailed/client.json";

const company = client.company as { label: string; value: string; chips?: ChipSpec[] }[];
const stakeholders = client.stakeholders as AccordionSpec[];
const statedGoals = client.statedGoals as { text: string; chips?: ChipSpec[] }[];

function CompanyPanel() {
  return (
    <TableWrap>
      <tbody>
        {company.map((row, i) => (
          <tr key={i}>
            <th style={{ width: 170 }}>{row.label}</th>
            <td>
              <RT text={row.value} /> {row.chips ? <ChipRow items={row.chips} srcBase="" /> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
}

function StakeholdersPanel() {
  return (
    <div>
      {stakeholders.map((s, i) => (
        <DataAccordion spec={s} srcBase="" key={i} />
      ))}
    </div>
  );
}

function GoalsPanel() {
  return (
    <div>
      <p className="sIntro" style={{ marginTop: 0 }}>
        PlayBlue&rsquo;s stated corporate goals, recorded as found with no interpretation.
      </p>
      <div className="g2">
        {statedGoals.map((g, i) => (
          <div className="card" key={i}>
            <p style={{ marginBottom: g.chips ? ".5rem" : 0 }}>
              <RT text={g.text} />
            </p>
            {g.chips ? <ChipRow items={g.chips} srcBase="" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Section02Client() {
  return (
    <Section
      id="s2"
      n="02"
      title="Client resolution"
      intro="Company, founders, capital, stated goals and the people around the table. Switch tabs to move between views."
    >
      <Tabs
        groupLabel="Client resolution"
        tabs={[
          { id: "company", label: "Company", content: <CompanyPanel /> },
          { id: "stakeholders", label: "Founders & stakeholders", content: <StakeholdersPanel /> },
          { id: "goals", label: "Stated goals", content: <GoalsPanel /> },
        ]}
      />
    </Section>
  );
}
