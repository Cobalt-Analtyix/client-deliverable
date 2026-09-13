import { Section, SubHead, Callout, CardGrid, Card, Funnel, FunnelRow } from "@/components/ui";
import { RT } from "@/lib/richText";
import market from "@/data/detailed/market.json";

export function Section03Market() {
  return (
    <Section
      id="s3"
      n="03"
      title="The market, measured"
      intro="What the demand base actually looks like, rather than what the category narrative says it looks like."
    >
      <SubHead mark="3a">The participation funnel</SubHead>
      <p className="sIntro" style={{ marginBottom: ".7rem" }}>
        Percentage of the Indian population, from the 2024 Time Use Survey and Dalberg&rsquo;s
        baseline study. Bar length is proportional.
      </p>
      <Funnel>
        {market.funnel.map((row, i) => (
          <FunnelRow
            key={i}
            widthPx={row.widthPx}
            color={"color" in row ? (row.color as string) : undefined}
            headline={row.headline}
            body={<RT text={row.body} />}
          />
        ))}
      </Funnel>
      <Callout tone={market.funnelCallout.tone as "amber"} label={market.funnelCallout.label}>
        <RT text={market.funnelCallout.text} />
      </Callout>

      <SubHead mark="3b">A concrete addressable base</SubHead>
      <CardGrid cols={3}>
        {market.cards.map((c, i) => (
          <Card title={c.title} key={i}>
            <RT text={c.text} />
          </Card>
        ))}
      </CardGrid>
      <Callout tone={market.baseCallout.tone as "blue"} label={market.baseCallout.label}>
        <RT text={market.baseCallout.text} />
      </Callout>
    </Section>
  );
}
