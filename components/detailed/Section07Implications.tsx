import { Section, Accordion, Chip, Chips } from "@/components/ui";

export function Section07Implications() {
  return (
    <Section
      id="s7"
      n="07"
      title="Strategic implications"
      intro="Drawn from sections 03 to 06. Propositions to argue with, not conclusions. Several would be settled quickly by evidence PlayBlue already holds internally."
    >
      <Accordion num="01" defaultOpen title="The core strategic question is why Layer 3 is empty, and PlayBlue needs a confident answer">
        <p style={{ fontSize: "13.6px" }}>
          Genuine multi-brand curated sports retail barely exists in India at scale. That is
          either the opportunity — nobody has executed it well yet — or a warning that the model
          runs into structural headwinds here: FDI friction on multi-brand structures, Layer 2
          players matching price without sacrificing curation credibility, or thin margins that
          don&rsquo;t support the staffing &ldquo;expert guidance&rdquo; requires.
          PlayBlue&rsquo;s pitch, and its Series A story, needs an explicit answer to &ldquo;why
          hasn&rsquo;t this worked in India before,&rdquo; not just &ldquo;why we&rsquo;re the
          ones who can do it.&rdquo;
        </p>
        <Chips><Chip>From 01A · 05c</Chip></Chips>
      </Accordion>

      <Accordion num="02" title="Sizing has to move from top-down to bottom-up before the Series A">
        <p style={{ fontSize: "13.6px" }}>
          The $30B figure will not survive diligence — goods-only forecasts land near $10.7B, and
          no two sources agree. Meanwhile the government&rsquo;s own data shows sub-1% sport
          participation. The defensible story is bottom-up: households above an income threshold,
          within a catchment, at measured activity rates, plus 13.6M gym members growing 11% a
          year. That is checkable, it is smaller, and it is far more persuasive to an investor
          whose portfolio is analytics-weighted.
        </p>
        <Chips><Chip>From 01C · 03a · 06c</Chip></Chips>
      </Accordion>

      <Accordion num="03" title="Site selection is now the highest-value decision in the business">
        <p style={{ fontSize: "13.6px" }}>
          Grade A supply down 64%, rents up 12–22% on target high streets, 75% of national
          leasing concentrated in PlayBlue&rsquo;s three cities, and Decathlon adding 80 stores
          into the same squeeze. At 15,000 sq ft, PlayBlue needs the scarcest category of space.
          In that market, catchment quality determines store economics more than format does —
          and a wrong site cannot be corrected without writing off capex the profitability target
          cannot absorb.
        </p>
        <Chips><Chip>From 01D · 06d</Chip></Chips>
      </Accordion>

      <Accordion num="04" title="Price is the weakest ground against Layer 2; premium specialism is the opening">
        <p style={{ fontSize: "13.6px" }}>
          Decathlon&rsquo;s local sourcing and full-margin capture, the ₹500 Cr manufacturing
          push, and Technosport&rsquo;s vertical integration all widen the cost gap against a
          wholesale-buying retailer. But value growth outpaces volume, and premium is the
          faster-growing tier. The winnable position is premium and specialist rather than value
          — and the unresolved question is which specific categories carry premium
          willingness-to-pay in India today. That is measurable, and currently unmeasured.
        </p>
        <Chips><Chip>From 01E · 06a · 06b</Chip></Chips>
      </Accordion>

      <Accordion num="05" title="All four stated differentiators are untested, and they carry very different costs">
        <p style={{ fontSize: "13.6px" }}>
          Curation, expert guidance, community and 4-hour delivery are asserted as reasons to
          choose PlayBlue. None has been validated with Indian consumers. Each has a different
          cost structure: expert guidance is a permanent staffing line, 4-hour delivery is
          fulfilment capex, community is a data and programming investment. If expert guidance
          drives preference it justifies its cost; if it does not, that cost is unrecovered on
          every store, forever. Testing four assumptions costs a fraction of building all four.
        </p>
        <Chips><Chip>From 04 · 05c</Chip></Chips>
      </Accordion>

      <Accordion num="06" title={<>Layer 2 challengers are the fastest-growing threat, and &ldquo;why not vertical integration&rdquo; needs a rehearsed answer</>}>
        <p style={{ fontSize: "13.6px" }}>
          Technosport and BlissClub are growing faster than anyone in PlayBlue&rsquo;s stated
          competitive set, and they win by owning product and customer rather than curating.
          Technosport&rsquo;s 300-store plan also contests the same scarce retail space. Any
          Series A conversation will surface these names. Having a considered answer to &ldquo;why
          not vertical integration&rdquo; is worth more than another slide on curation.
        </p>
        <Chips><Chip>From 01E · 05c</Chip></Chips>
      </Accordion>

      <Accordion num="07" title="Profitability and community pull in opposite directions, and the sequencing is undecided">
        <p style={{ fontSize: "13.6px" }}>
          Operational profitability before Series A rewards tight cost control. A 10M-member
          community requires sustained investment before it returns anything. Both are stated
          goals. The resolvable question is not which to choose but what to <em>build</em> now
          versus what to <em>design</em> now and build later — and the data architecture is the
          part that is very expensive to retrofit and relatively cheap to specify upfront.
        </p>
        <Chips><Chip>From 02c · Stage 08</Chip></Chips>
      </Accordion>

      <Accordion num="08" title="The multi-brand FDI question should be closed before it compounds across three more stores">
        <p style={{ fontSize: "13.6px" }}>
          Decathlon&rsquo;s own reported push to be reclassified multi-brand confirms the
          restriction is live. PlayBlue&rsquo;s model is definitionally multi-brand, and its seed
          round carries a Japanese co-lead investor. This is a structuring question for
          PlayBlue&rsquo;s counsel, not something we can resolve — but it is cheaper to close
          now, before Mumbai and Delhi NCR add scale to whatever the current structure is.
        </p>
        <Chips><Chip>From 01G</Chip></Chips>
      </Accordion>
    </Section>
  );
}
