import {
  Section,
  SubHead,
  Callout,
  CardGrid,
  Card,
  ModuleBox,
  AttrGrid,
  KV,
  Timeline,
  TimelineRow,
} from "@/components/ui";

export function Section08Proposal() {
  return (
    <Section
      id="s8"
      n="08"
      title="Proposed engagement"
      intro="One recommendation, scoped properly. Everything else in section 09 can follow if this is useful."
    >
      <div className="call dark" style={{ padding: "1.2rem 1.3rem" }}>
        <b className="lbl">The proposal in one line</b>
        <p
          style={{
            fontSize: "1.15rem",
            fontFamily: "var(--dsp)",
            fontWeight: 500,
            letterSpacing: "-.02em",
            lineHeight: 1.35,
            color: "#fff",
            margin: 0,
          }}
        >
          A four-week Launch Readiness Diagnostic that tests PlayBlue&rsquo;s four stated
          differentiators, ranks category demand, and maps the price corridor against Decathlon —
          in the last window where the answers can still change the store.
        </p>
      </div>

      <SubHead mark="8a">Why this, why now</SubHead>
      <CardGrid>
        <Card title="The window is closing">
          Assortment, pricing, floor plan and staffing model are being decided in the next few
          months. After the Bengaluru opening, the same research measures a decision already made
          and paid for. This is the only period where the findings are cheap to act on.
        </Card>
        <Card title="The cost asymmetry is extreme">
          A wrong assortment call on a 15,000 sq ft store, or a permanent staffing line for a
          differentiator customers do not value, runs into crores over a store&rsquo;s life — and
          repeats at every subsequent store. The diagnostic is a fraction of one store&rsquo;s
          fit-out.
        </Card>
        <Card title="It produces the Series A evidence base">
          Centre Court&rsquo;s thesis is explicitly analytics-weighted. A consumer dataset
          PlayBlue owns — bottom-up sizing, willingness-to-pay, segment preference — is exactly
          the material that makes a profitability case checkable rather than asserted.
        </Card>
        <Card title="Nothing comparable exists">
          There is no public India-specific evidence on whether consumers will pay for
          multi-brand curation in sport. Whoever runs it first owns the answer — and it is a
          defensible asset going into brand negotiations as well as investor conversations.
        </Card>
      </CardGrid>

      <SubHead mark="8b">The three modules</SubHead>

      <ModuleBox mark="MODULE A" title="Differentiator & positioning test">
        <p style={{ fontSize: "13.8px" }}>
          <strong>The question:</strong> Do PlayBlue&rsquo;s four stated differentiators actually
          drive preference against the real competitive set — and which one carries the most
          weight per rupee it costs to deliver?
        </p>
        <p style={{ fontSize: "13.8px", marginBottom: ".6rem" }}>
          <strong>How:</strong> Scored consumer panel in Bengaluru and Mumbai, running the
          PlayBlue proposition head-to-head against Decathlon, marketplaces, single-brand D2C and
          vertically integrated challengers. Attributes scored individually, then trade-off tested
          so we learn relative weight rather than just approval.
        </p>
        <AttrGrid
          items={[
            { label: "Trust in curation", value: 'Does "we chose these 100 brands for you" reduce or increase decision anxiety?' },
            { label: "Value of expert guidance", value: "Is staffed advice a reason to visit, or perceived sales pressure?" },
            { label: "Delivery speed", value: "Willingness to pay for 4-hour against next-day and click-and-collect" },
            { label: "Community & membership", value: "Would they join one, and what would have to be in it?" },
            { label: "Price perception", value: "Where PlayBlue is placed relative to the Decathlon anchor before any price is shown" },
            { label: "Channel preference", value: "Store versus online by category — which categories need to be touched" },
          ]}
        />
        <KV
          items={[
            { label: "Sample", value: "n ≈ 600, screened for category purchase in last 12 months, quota'd on income band and activity level" },
            { label: "Output", value: "Attribute scorecard by segment, relative-weight ranking, verbatim consumer language, positioning recommendation" },
            { label: "Decision it de-risks", value: "Staffing model, delivery investment, brand messaging, store comms" },
          ]}
        />
      </ModuleBox>

      <ModuleBox mark="MODULE B" title="Category & assortment demand ranking">
        <p style={{ fontSize: "13.8px" }}>
          <strong>The question:</strong> Across six categories and 100+ brands, which combinations
          actually pull demand — and which are shelf space spent on optics?
        </p>
        <p style={{ fontSize: "13.8px" }}>
          <strong>How:</strong> MaxDiff trade-off exercise across sport categories and a
          brand-preference screen within each. Cross-cut by the four consumer groups in the plan,
          plus the parent-buying-for-child segment MIXI flagged and PlayBlue has not named.
          Includes an explicit white-space read: categories consumers want organised retail for
          and cannot currently find.
        </p>
        <KV
          items={[
            { label: "Sample", value: "Same panel, extended module" },
            { label: "Output", value: "Ranked category architecture, brand priority tiers, white-space list, segment-by-category demand matrix" },
            { label: "Decision it de-risks", value: "Buying plan, space allocation, brand partnership sequencing" },
          ]}
        />
      </ModuleBox>

      <ModuleBox mark="MODULE C" title="Price corridor mapping">
        <p style={{ fontSize: "13.8px" }}>
          <strong>The question:</strong> In which categories can a curated multi-brand format
          hold a premium, and where does the ₹399 Decathlon t-shirt make a premium unsellable?
        </p>
        <p style={{ fontSize: "13.8px" }}>
          <strong>How:</strong> Van Westendorp price sensitivity by category, plus a competitive
          price audit across Decathlon, marketplace listings and brand D2C on matched products.
          Produces acceptable price bands rather than a single point.
        </p>
        <KV
          items={[
            { label: "Sample", value: "Same panel, category-rotated" },
            { label: "Output", value: "Acceptable price band by category, premium-defensible list, categories where PlayBlue must match or exit" },
            { label: "Decision it de-risks", value: "Margin planning, promotional policy, the private-label question" },
          ]}
        />
      </ModuleBox>

      <SubHead mark="8c">Four weeks, week by week</SubHead>
      <Timeline>
        <TimelineRow wk="Week 0" title="Scoping session">
          Half a day with your team. We align on the competitive set to test against, the
          categories to cover, and the specific decisions the output has to serve. You approve
          the instrument before anything goes to field.
        </TimelineRow>
        <TimelineRow wk="Week 1" title="Instrument design and pilot">
          Questionnaire built and soft-launched to a small cell to check comprehension and
          screen-out rates. Leading or biased questions flagged and corrected before full field.
        </TimelineRow>
        <TimelineRow wk="Week 2" title="Fielding">
          Full panel in Bengaluru and Mumbai. Live progress visibility — you see completion by
          city, segment and quota as it fills, not at the end.
        </TimelineRow>
        <TimelineRow wk="Week 3" title="Analysis and interim readout">
          Cleaning, de-duplication, open-end coding, cross-tabs. A 30-minute interim call on
          headline findings so nothing in the final report is a surprise, and so you can redirect
          the cut if something unexpected appears.
        </TimelineRow>
        <TimelineRow wk="Week 4" title="Delivery and working session">
          Decision brief plus the underlying data. We walk the team through it and stay for the
          argument — the output is meant to be challenged, not filed.
        </TimelineRow>
      </Timeline>

      <SubHead mark="8d">What you get, and what you keep</SubHead>
      <CardGrid>
        <Card title="A decision brief, not a deck">
          Headline finding, the evidence under it, and a recommended action per decision.
          Structured so a section can be lifted straight into a board pack.
        </Card>
        <Card title="The raw data">
          Full response set, coded open-ends, cross-tab tables. Yours to keep, re-cut and re-run.
          We are not building a dependency.
        </Card>
        <Card title="A re-runnable instrument">
          The same questionnaire can be fielded again post-launch to measure movement. Wave one
          becomes a baseline rather than a one-off.
        </Card>
        <Card title="Consumer language">
          Verbatims in the words customers actually use — directly usable in store signage,
          product copy and staff training.
        </Card>
      </CardGrid>

      <SubHead mark="8e">What we need from you, and what this does not do</SubHead>
      <CardGrid>
        <div className="card">
          <h4 style={{ color: "var(--cobalt)" }}>What we need</h4>
          <p style={{ color: "var(--mute)" }}>
            Half a day for scoping. The competitive set you actually consider yourself against.
            Your current category list and any indicative price architecture. One named
            decision-owner. That is the whole ask.
          </p>
        </div>
        <div className="card">
          <h4 style={{ color: "var(--amber)" }}>What this does not do</h4>
          <p style={{ color: "var(--mute)" }}>
            It will not select your sites — that is a separate study with a spatial component. It
            will not tell you what your unit economics are, because that needs your cost data. It
            will not validate the 4-hour delivery build economically; it only tells you what
            customers will pay for it.
          </p>
        </div>
      </CardGrid>

      <Callout tone="blue" label="How to judge whether it worked">
        Three tests, agreed upfront. One: at least one differentiator is ranked materially lower
        by consumers than PlayBlue currently assumes, or all four are confirmed with evidence you
        can cite. Two: the category ranking changes at least one buying decision. Three: you can
        state a price position by category with a number behind it. If none of those happen, the
        study did not earn its cost and we would rather you knew the criteria in advance.
      </Callout>

      <Callout tone="amber" label="On staging">
        If a four-week scope is too much for a first engagement, Module A alone runs in two to
        three weeks and answers the highest-value question on its own. We would rather start
        narrow and earn the rest than oversell the first piece.
      </Callout>
    </Section>
  );
}
