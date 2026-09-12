import { Section, Accordion, Chip, Chips } from "@/components/ui";
import { Tabs } from "@/components/Tabs";

function MarketPanel() {
  return (
    <div>
      <Accordion title="Hard goods are compounding at ~7.4%; apparel and athleisure at 12%+">
        <p style={{ fontSize: "13.6px" }}>
          Sports and fitness goods: USD 5.24B in 2025 to USD 10.70B by 2035 at 7.4%. Athleisure
          in India: 12.7% CAGR 2026–33, well above the global 9.9%. The category PlayBlue leads
          with — curated equipment and specialist gear — grows at roughly half the rate of the
          category it competes in on price.
        </p>
        <Chips>
          <Chip tone="s" href="#r21">SRC 21</Chip>
          <Chip tone="s" href="#r27">SRC 27</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Value growth is outpacing volume as the mix premiumises">
        <p style={{ fontSize: "13.6px" }}>
          Technical materials, smart fitness systems and branded protective gear are lifting
          average realisation. Volume growth of 5.2–5.5% against 7.4% value growth. Globally, the
          premium athleisure segment is forecast at 10.45% CAGR against 65.6% of 2025 revenue
          still sitting in mass-market lines. Favourable for a curated premium format — provided
          Indian willingness to pay has moved as fast as the assortment.
        </p>
        <Chips>
          <Chip tone="s" href="#r18">SRC 18</Chip>
          <Chip tone="s" href="#r35">SRC 35</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Kids and women are the fastest-growing end-user segments">
        <p style={{ fontSize: "13.6px" }}>
          Globally the kids and children segment is forecast at 11.82% CAGR to 2031 against 91.8%
          of 2025 revenue coming from adults. In India, women were the largest athleisure segment
          at 56.8% of 2025 share and also the fastest growing — the insight BlissClub built a
          ₹250 Cr business on. Both segments are under-served by a format built around serious
          athletes.
        </p>
        <Chips>
          <Chip tone="s" href="#r35">SRC 35</Chip>
          <Chip tone="s" href="#r31">SRC 31</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Online is taking share of sports retail faster than stores">
        <p style={{ fontSize: "13.6px" }}>
          Sports and athletic goods stores held 39.7% of 2025 athleisure sales globally, but
          online retail is advancing at 11.36% CAGR. In India, Myntra, Amazon, Ajio and Decathlon
          reported over 35% YoY growth in online sports apparel demand in 2024, and online
          fashion order volume rose 20.9% in FY24. PlayBlue&rsquo;s parallel e-commerce build is
          strategically correct — and the stage it is least equipped for.
        </p>
        <Chips>
          <Chip tone="s" href="#r35">SRC 35</Chip>
          <Chip tone="s" href="#r32">SRC 32</Chip>
          <Chip tone="s" href="#r33">SRC 33</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Price sensitivity and counterfeit supply remain the binding constraint">
        <p style={{ fontSize: "13.6px" }}>
          Strong price sensitivity and the continued dominance of unorganised and counterfeit
          channels are named as the primary restraint on the India sports apparel market,
          particularly in tier-II and tier-III cities. Over 70% of premium sportswear sold in
          India in 2024 came from international brands — a small, contested, metro-concentrated
          pool.
        </p>
        <Chips>
          <Chip tone="s" href="#r33">SRC 33</Chip>
          <Chip tone="s" href="#r34">SRC 34</Chip>
        </Chips>
      </Accordion>
    </div>
  );
}

function RegulatoryPanel() {
  return (
    <div>
      <Accordion title="Direct state support for domestic sports-goods manufacturing">
        <p style={{ fontSize: "13.6px" }}>
          An INR 500 crore sports-goods manufacturing allocation plus a proposed
          cluster-development roadmap is expected to redirect profit pools toward design, quality
          assurance, connected products, e-commerce fulfilment and compliant domestic production.
          This advantages players with local sourcing depth — Decathlon and the domestic
          manufacturers — over a multi-brand importer.
        </p>
        <Chips>
          <Chip tone="s" href="#r18">SRC 18</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Local sourcing has hardened from policy into competitive economics">
        <p style={{ fontSize: "13.6px" }}>
          Decathlon&rsquo;s shift from 68% to a targeted 85% local sourcing is framed around Make
          in India but functions as a cost and resilience advantage. For a retailer dependent on
          imported global brands, this widens the landed-cost gap on comparable products — and it
          is the strongest argument for PlayBlue eventually developing private label.
        </p>
        <Chips>
          <Chip tone="s" href="#r19">SRC 19</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Public sports investment is expanding the participation base">
        <p style={{ fontSize: "13.6px" }}>
          The Department of Sport budget grew from roughly $79M in 2011–12 to $211M in 2021–22.
          Sustained public and private infrastructure investment is cited across market analyses
          as a participation driver in both urban and rural areas. India&rsquo;s Olympic hosting
          ambition — a subject PlayBlue itself has published on — sits within this. Slow-moving
          but directionally favourable.
        </p>
        <Chips>
          <Chip tone="s" href="#r36">SRC 36</Chip>
          <Chip tone="s" href="#r10">SRC 10</Chip>
        </Chips>
      </Accordion>
      <Accordion title="FDI structure in multi-brand retail — flagged, not asserted">
        <p style={{ fontSize: "13.6px" }}>
          India&rsquo;s distinction between single-brand and multi-brand retail FDI has
          historically constrained foreign-owned multi-brand formats and shaped partnership
          structures. Relevant to how PlayBlue structures brand relationships and any future
          foreign strategic investment — particularly given a Japanese co-lead investor. We have
          not established the current position and would not put a figure on it without a
          specialist legal read.
        </p>
        <Chips>
          <Chip tone="w">Needs verification</Chip>
        </Chips>
      </Accordion>
    </div>
  );
}

function CapitalPanel() {
  return (
    <div>
      <Accordion title="Dedicated sports-sector venture capital now exists at meaningful scale">
        <p style={{ fontSize: "13.6px" }}>
          Centre Court Capital closed a ₹410 crore maiden fund in December 2025, oversubscribed
          against a ₹350 crore target. Cheques of ₹8–24 crore across 15–18 companies in sports,
          fitness, wellness and social gaming, with 30–40% reserved for follow-ons and deployment
          expected within 12–18 months. Sector-specific capital at this scale did not exist in
          India three years ago.
        </p>
        <Chips>
          <Chip tone="s" href="#r13">SRC 13</Chip>
          <Chip tone="s" href="#r14">SRC 14</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Athlete and operator capital is entering the LP base">
        <p style={{ fontSize: "13.6px" }}>
          Centre Court&rsquo;s fund drew Neeraj Chopra, Rishabh Pant, PV Sindhu and Jemimah
          Rodrigues alongside Binny Bansal, Mithun Sacheti and Ankit Nagori, with institutional
          backing from Premji Invest and SIDBI. Athlete-adjacent capital brings distribution and
          credibility, not only money — directly relevant to PlayBlue&rsquo;s brand-access
          advantage.
        </p>
        <Chips>
          <Chip tone="s" href="#r14">SRC 14</Chip>
        </Chips>
      </Accordion>
      <Accordion title="The capital is going to infrastructure and analytics, not merchandising">
        <p style={{ fontSize: "13.6px" }}>
          Centre Court&rsquo;s portfolio spans sports infrastructure (Michezo Sports, ~USD 2.5M
          pre-Series A with Zerodha&rsquo;s Rainmatter), broadcast technology (Quidich Innovation
          Labs) and sports data (Stupa). The stated thesis names infrastructure, analytics and
          fan-facing products. A data-led retailer fits that thesis; a purely merchandising one
          fits it less well.
        </p>
        <Chips>
          <Chip tone="s" href="#r14">SRC 14</Chip>
          <Chip tone="s" href="#r22">SRC 22</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Homegrown sports brands are attracting institutional growth capital">
        <p style={{ fontSize: "13.6px" }}>
          Technosport raised ₹175 Cr from A91 Partners; BlissClub has raised over $21M from
          Elevation Capital and Eight Roads and is raising a further $25M. Capital is validating
          vertical integration and category focus — the opposite structural bet to multi-brand
          curation. Worth understanding how PlayBlue&rsquo;s Series A story differentiates from
          theirs.
        </p>
        <Chips>
          <Chip tone="s" href="#r31">SRC 31</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Cross-border strategic capital is entering Indian sport">
        <p style={{ fontSize: "13.6px" }}>
          MIXI Global Investments co-leading PlayBlue&rsquo;s seed round is an instance of
          Japanese strategic capital taking positions in Indian sports consumer businesses.
          Suggests the category is being underwritten internationally, which matters for Series A
          optionality and for who the eventual acquirers might be.
        </p>
        <Chips>
          <Chip tone="s" href="#r5">SRC 05</Chip>
          <Chip tone="s" href="#r6">SRC 06</Chip>
        </Chips>
      </Accordion>
    </div>
  );
}

function RealEstatePanel() {
  return (
    <div>
      <Accordion title="Retail leasing at a four-year high against a collapsing supply pipeline">
        <p style={{ fontSize: "13.6px" }}>
          H1 2026 gross leasing across the top seven cities reached 6.27 million sq ft, up 10.5%
          — the highest half-year in four years. New shopping mall supply fell 64% year on year
          and no new Grade A mall space was added for two consecutive quarters. Retailers are
          being pushed to evaluate Grade B assets. The 2026–28 pipeline is 12.7 million sq ft,
          with about 1.6 million sq ft due in H2 2026.
        </p>
        <Chips>
          <Chip tone="s" href="#r28">SRC 28</Chip>
          <Chip tone="s" href="#r29">SRC 29</Chip>
          <Chip tone="s" href="#r30">SRC 30</Chip>
        </Chips>
      </Accordion>
      <Accordion title="PlayBlue's three target cities are the three most contested markets">
        <p style={{ fontSize: "13.6px" }}>
          Mumbai (29%), Delhi NCR (24%) and Bengaluru (23%) together took over 75% of H1 2026
          retail leasing volume. Domestic brands accounted for 79.1% of that demand. These are
          precisely PlayBlue&rsquo;s rollout cities, and the competition for space is domestic
          rather than international.
        </p>
        <Chips>
          <Chip tone="s" href="#r29">SRC 29</Chip>
        </Chips>
      </Accordion>
      <Accordion title="High-street rents are rising fastest exactly where a flagship would go">
        <p style={{ fontSize: "13.6px" }}>
          Mumbai&rsquo;s Linking Road recorded a 22% annual rent increase; Bengaluru&rsquo;s
          Indiranagar 100 Feet Road 12%; Chennai&rsquo;s Anna Nagar 2nd Avenue 11%; Delhi
          NCR&rsquo;s Khan Market 9%. Malls took 51.3% of Q2 2026 leasing and main streets 48.7%.
          Occupiers are competing hard for well-located assets, producing tighter vacancies and
          firmer rents.
        </p>
        <Chips>
          <Chip tone="s" href="#r30">SRC 30</Chip>
        </Chips>
      </Accordion>
      <Accordion title="Experience-driven formats are gaining mall share">
        <p style={{ fontSize: "13.6px" }}>
          Malls&rsquo; share of gross leasing rose to 43.1% from 38.9% a year earlier, attributed
          to consumer preference for experience-driven retail. Supportive of PlayBlue&rsquo;s
          experiential format thesis — and equally supportive of every other experiential
          retailer bidding for the same anchor space.
        </p>
        <Chips>
          <Chip tone="s" href="#r29">SRC 29</Chip>
        </Chips>
      </Accordion>
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
          { id: "market", label: "Market", content: <MarketPanel /> },
          { id: "regulatory", label: "Regulatory & policy", content: <RegulatoryPanel /> },
          { id: "capital", label: "Capital", content: <CapitalPanel /> },
          { id: "realestate", label: "Real estate", content: <RealEstatePanel /> },
        ]}
      />
    </Section>
  );
}
