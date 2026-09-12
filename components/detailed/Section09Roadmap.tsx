import { Section, SubHead, Accordion, Field, Highlight, CardGrid } from "@/components/ui";

export function Section09Roadmap() {
  return (
    <Section
      id="s9"
      n="09"
      title="What follows"
      intro="The wider capability, sequenced against PlayBlue's timeline rather than listed as a menu. Expand any item for scope."
    >
      <Accordion num="04" title="Spatial strategy — catchment and site selection" desc="Phase 1 · 4–6 weeks · Mumbai and Delhi NCR">
        <Field label="Question"><p>Which catchments hold enough of the right consumer to support a 15,000 sq ft store, and what does demand look like at street level?</p></Field>
        <Field label="Method"><p>Catchment profiling by income band and measured activity rate, competitor proximity mapping, gym and club density overlay, intercept surveys at shortlisted locations.</p></Field>
        <Field label="Output"><p>Ranked site shortlist with demand rationale, catchment-level bottom-up sizing, cannibalisation read.</p></Field>
        <Highlight label="Why it matters here">Given the supply squeeze in section 06d, this is arguably the highest-value single study in the roadmap after the diagnostic.</Highlight>
      </Accordion>

      <Accordion num="05" title="Store experience diagnostics" desc="Phase 1 · 3–4 weeks · post-opening">
        <Field label="Question"><p>Is &ldquo;expert guidance&rdquo; landing as a reason to visit, or as staff standing near shelves? Which zones earn their floor space?</p></Field>
        <Field label="Method"><p>Exit intercepts, mystery shopping, zone-level observation, matched competitor store audits.</p></Field>
        <Field label="Output"><p>Experience scorecard by zone, conversion friction list, staff capability read.</p></Field>
        <Highlight label="Timing">Run before the Mumbai build-out so the format iterates once rather than three times.</Highlight>
      </Accordion>

      <Accordion num="06" title="Brand partner intelligence" desc="Phase 1 · 4–5 weeks · B2B">
        <Field label="Question"><p>What do the 100+ brands need from a new retail partner, what are they getting from Decathlon and the marketplaces, and what makes PlayBlue worth allocating stock to?</p></Field>
        <Field label="Method"><p>Depth interviews with brand and distributor decision-makers, terms benchmarking.</p></Field>
        <Field label="Output"><p>Partner requirement map, PlayBlue pitch positioning, margin and terms benchmark.</p></Field>
      </Accordion>

      <Accordion num="07" title="Omnichannel journey diagnostics" desc="Phase 2 · 4 weeks · needs live trading">
        <Field label="Question"><p>Where does the online-to-store promise break, and is 4-hour delivery a purchase driver or an expensive hygiene factor?</p></Field>
        <Field label="Method"><p>Journey mapping, conversion-path research, delivery-promise conjoint against live behaviour.</p></Field>
        <Field label="Output"><p>Break-point map, willingness-to-pay for speed, channel role definition.</p></Field>
      </Accordion>

      <Accordion num="08" title="Community and loyalty architecture" desc="Phase 2 · 4–5 weeks">
        <Field label="Question"><p>What would make an Indian sports consumer join a retailer&rsquo;s community and stay in it, and what data foundation does that require?</p></Field>
        <Field label="Method"><p>Membership concept testing, benefit trade-off analysis, comparator teardown including cultpass and Nike Membership.</p></Field>
        <Field label="Output"><p>Membership construct, benefit ladder, required data model.</p></Field>
        <Highlight label="Note">The data-model output is worth specifying early even if the programme launches late — retrofitting a customer data layer is far more expensive than designing for it.</Highlight>
      </Accordion>

      <Accordion num="09" title="Technology scouting" desc="Phase 2 · 3–5 weeks">
        <Field label="Question"><p>Which retail technologies materially change PlayBlue&rsquo;s unit economics, and which are demos?</p></Field>
        <Field label="Scope"><p>PIM and catalogue, cross-brand sizing and fit, clienteling, inventory allocation, quick-commerce orchestration.</p></Field>
        <Field label="Output"><p>Shortlist by layer, build-versus-buy read, sequencing recommendation, reference-call synthesis.</p></Field>
      </Accordion>

      <Accordion num="10" title="Market and competitive tracker" desc="Retained · quarterly">
        <Field label="Question"><p>What changed this quarter in consumer preference, competitor moves and category demand — and what should change in response?</p></Field>
        <Field label="Method"><p>Recurring wave of the Module A instrument plus competitor initiative monitoring.</p></Field>
        <Field label="Output"><p>Quarterly deltas against baseline, standing dashboard, board-ready read.</p></Field>
        <Highlight label="Why it compounds">The launch diagnostic becomes wave one. Every subsequent wave measures movement rather than a fresh snapshot, which is what makes a trend line possible for the Series A narrative.</Highlight>
      </Accordion>

      <SubHead mark="9b">Open questions for the session</SubHead>
      <CardGrid>
        <div className="card"><p><strong>1.</strong> What decision is on your desk right now that a lack of consumer evidence is holding up?</p></div>
        <div className="card"><p><strong>2.</strong> Where is your mandate at PlayBlue, and who else would be in the room on a decision like this?</p></div>
        <div className="card"><p><strong>3.</strong> How is assortment across 100+ brands being decided today — instinct, vendor availability, or data?</p></div>
        <div className="card"><p><strong>4.</strong> Which consumer group is the Bengaluru format actually optimised for? And is the parent-buying-for-child segment deliberately excluded?</p></div>
        <div className="card"><p><strong>5.</strong> What is still open on Mumbai and Delhi NCR — catchment, format, or timing? How are sites being evaluated?</p></div>
        <div className="card"><p><strong>6.</strong> What is the internal answer to &ldquo;why not vertical integration, like Technosport&rdquo;?</p></div>
        <div className="card"><p><strong>7.</strong> Which market size number is in the board deck, and where did it come from?</p></div>
        <div className="card"><p><strong>8.</strong> In your Reliance and Arvind years — what research did you buy, and what actually got used?</p></div>
      </CardGrid>
    </Section>
  );
}
