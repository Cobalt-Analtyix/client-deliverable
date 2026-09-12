import { Section, SubHead, Callout, CardGrid, Card, Funnel, FunnelRow } from "@/components/ui";

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
        <FunnelRow widthPx={200} headline="100%" body="Total population — the number usually quoted as the opportunity" />
        <FunnelRow
          widthPx={29}
          headline="14.5% men · 4.9% women"
          body="Exercised on the reference day · national average 9.7%, up from 5.7% in 2019"
        />
        <FunnelRow
          widthPx={34}
          color="var(--teal)"
          headline="17%"
          body={
            <>
              Exercise rate in households spending over ₹24,000/month — against 8.4% in
              households spending up to ₹6,500. <strong>This is the commercially relevant band.</strong>
            </>
          }
        />
        <FunnelRow
          widthPx={27}
          headline="13.7% Karnataka · 14.6% Maharashtra"
          body="Both above the 9.7% national average. Goa 24.1%, Himachal 21.5%, Haryana 17.5% lead"
        />
        <FunnelRow
          widthPx={20}
          color="var(--rose)"
          headline="10%"
          body="Of adults met WHO daily activity recommendations. Dalberg puts adult sports engagement at the same level"
        />
        <FunnelRow
          widthPx={5}
          color="var(--rose)"
          headline="<1%"
          body="Played a sport on the reference day — 1.3% of men, 0.3% of women. More than four in five were under 20"
        />
      </Funnel>
      <Callout tone="amber" label="How to hold both facts at once">
        Sport participation in India is very low and heavily skewed to under-20s. Exercise
        participation is low but rising fast and strongly correlated with household income. A
        retailer selling to the second group has a real and growing market. A retailer sizing
        itself off the first group&rsquo;s theoretical expansion does not. The Bengaluru-first
        choice looks well made on this data; the ₹5,000 Cr figure needs a bottom-up defence.
      </Callout>

      <SubHead mark="3b">A concrete addressable base</SubHead>
      <CardGrid cols={3}>
        <Card title="13.6M">
          Paid gym memberships in India, 2025–26. Growing ~11% CAGR to 23.3M by 2030, concentrated
          in tier-1 cities.
        </Card>
        <Card title="~9.7% → rising">
          National exercise participation, near-doubled since 2019. The trend direction supports
          the thesis even where the level does not.
        </Card>
        <Card title=">70%">
          Of premium sportswear sold in India in 2024 was from international brands — the
          assortment PlayBlue is curating.
        </Card>
      </CardGrid>
      <Callout tone="blue" label="The bottom-up framing we would build">
        Gym memberships and income-banded exercise participation give a defensible denominator at
        catchment level: households above an income threshold, within a drive-time, with measured
        activity rates. That is the sizing an investor with a sports thesis can check — and it is
        exactly the calculation a site-selection study produces as a by-product.
      </Callout>
    </Section>
  );
}
