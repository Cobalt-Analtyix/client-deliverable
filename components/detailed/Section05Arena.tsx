import { Section, SubHead, Callout, Bars, BarRow, Accordion, Field, Highlight, Chip, Chips, TableWrap } from "@/components/ui";

export function Section05Arena() {
  return (
    <Section
      id="s5"
      n="05"
      title="The competitive arena"
      intro="Organised by the five layers set out in finding A, since comparing across layers is the distinction that matters most here. Suppliers are shown separately from structural competitors; nothing in this section ranks a supplier's revenue against PlayBlue's."
    >
      <Callout tone="blue" label="How to read this section">
        Layer 1 (suppliers) and Layer 3 (PlayBlue&rsquo;s actual layer) are not comparable on
        revenue — different margin structures, different jobs. The only chart below that is a
        fair apples-to-apples comparison is the Layer 2/3 retail-revenue chart in 5b. Everything
        else is shown as context, labelled as such.
      </Callout>

      <SubHead mark="5a">Layer 1 — brand principals (suppliers, not competitors)</SubHead>
      <p className="sIntro" style={{ marginBottom: ".7rem" }}>
        These companies sell <em>to</em> PlayBlue, wholesale. Their India revenue sizes the
        wholesale pool PlayBlue is trying to intermediate — it is not a bar to clear.
      </p>
      <Bars>
        <BarRow name="Puma India" sub="CY2024" value="₹3,274 Cr" widthPct={28.2} variant="q" />
        <BarRow name="Adidas India" sub="latest" value="₹3,114 Cr" widthPct={26.8} variant="q" />
        <BarRow name="Nike India" sub="FY25" value="₹1,380 Cr" widthPct={11.9} variant="q" />
        <BarRow name="Reebok India" sub="FY24" value="~₹450 Cr" widthPct={3.9} variant="q" />
        <BarRow name="Combined FY23" sub="Asics+Puma+Adidas+Skechers" value="₹11,617 Cr" widthPct={100} />
      </Bars>
      <Callout tone="amber" label="The point of this chart">
        This is supplier-pool sizing, not a leaderboard PlayBlue is trying to climb. Puma
        outselling Adidas and Nike in India, by localising hard on price and celebrity
        endorsement, is a signal about <em>Indian consumer behaviour toward global brands</em> —
        useful context for what PlayBlue&rsquo;s assortment mix and price ladder should look like
        — but it says nothing about whether curated multi-brand retail works here. That question
        is answered in Layer 3, which is empty.
      </Callout>

      <SubHead mark="5b">Layer 2 — vertically integrated retail (PlayBlue&rsquo;s real revenue comparators)</SubHead>
      <p className="sIntro" style={{ marginBottom: ".7rem" }}>
        Same shelf, same customer wallet, structurally different economics — full
        manufacturer-plus-retail margin, versus PlayBlue&rsquo;s retail margin only. This is
        still the closest thing to an apples-to-apples chart available, and even it needs the
        caveat stated.
      </p>
      <Bars>
        <BarRow name="PlayBlue" sub="5-yr ambition" value="₹5,000 Cr" widthPct={100} variant="t" />
        <BarRow name="Decathlon India" sub="FY25 · single-brand under FDI law" value="₹4,133 Cr" widthPct={82.7} />
        <BarRow name="Technosport" sub="FY25" value="₹436 Cr" widthPct={8.7} variant="q" />
        <BarRow name="BlissClub" sub="ARR Jan-26" value="~₹250 Cr" widthPct={5} variant="q" />
        <BarRow name="PlayBlue" sub="phase-1 target" value="₹100 Cr" widthPct={2} variant="t" />
      </Bars>
      <Callout tone="amber" label="What this chart actually says">
        PlayBlue&rsquo;s five-year ambition is 21% larger than Decathlon India&rsquo;s current
        business, built over sixteen years with a €100M programme behind it — and Decathlon
        captures full margin where PlayBlue would capture retail margin only on comparable
        revenue. The ₹100 Cr phase-one target is a more honest comparator: roughly a quarter of
        Technosport&rsquo;s current revenue, achievable, and the right number to be judged on in
        the near term.
      </Callout>

      <SubHead mark="5c">The five layers, in detail</SubHead>

      <Accordion
        title="Layer 1 · Nike, Adidas, Puma, Asics, Yonex — suppliers"
        desc="Sell wholesale to retailers including, potentially, PlayBlue. Compete only through their own flagship stores."
      >
        <Field label="Position">
          <p>
            Puma leads India at ₹3,274 Cr (CY2024, up 10%) with 570+ stores, having overtaken
            Adidas in 2021 by localising hard — cricket sponsorships, Bollywood ambassadors,
            mass-market pricing. Only about a quarter of Puma&rsquo;s India revenue is sports
            performance; the rest is lifestyle and athleisure. Adidas sits at roughly ₹3,114 Cr,
            pushing its Indian national cricket team association. Nike, the world&rsquo;s largest
            sportswear brand, is fourth in India at ₹1,380 Cr, up 16%, having scaled back store
            count while retaining brand equity.
          </p>
        </Field>
        <Highlight label="Relationship to PlayBlue">
          Suppliers, and only channel-competitors where they run their own D2C stores — a narrow
          overlap, not a scale contest. Their India revenue is context for assortment planning
          (who to prioritise, what commercial terms are realistic) not a target to outgrow. Note
          what Puma&rsquo;s lead does say: in India, localisation and price accessibility beat
          pure global brand equity — worth carrying into how PlayBlue prices its own curation.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r31">SRC 31</Chip>
          <Chip tone="s" href="#r32">SRC 32</Chip>
        </Chips>
      </Accordion>

      <Accordion
        title="Layer 2 · Decathlon — vertically integrated, legally single-brand"
        desc="₹4,133 Cr FY25 · ~130 stores · the price anchor and the format benchmark"
      >
        <Field label="Position">
          <p>
            India&rsquo;s largest sports retail player. Big-box format, ~20 in-house brands it
            owns outright, aggressive pricing — a functional dry-fit t-shirt at ₹399. Returned to
            profitability in FY24 with ₹197 Cr net profit on ₹4,008 Cr revenue.
          </p>
        </Field>
        <Field label="Trajectory">
          <p>
            €100M committed over five years. Expanding from ~110–132 to 190 stores across 90+
            cities, targeting ~₹8,000 Cr by 2030. ~68% locally sourced in 2024, targeting 85% by
            2026. Distributes through Ajio as well as own channels — and has reportedly
            petitioned the Indian government for multi-brand status so it can stock rival
            products such as Adidas and Garmin, confirming it currently cannot.
          </p>
        </Field>
        <Highlight label="Why the model matters more than the number">
          Decathlon owns its brands, so it captures manufacturer margin plus retail margin, and
          its FDI classification as single-brand is a direct consequence of that structure. It
          sets the price anchor and format expectation PlayBlue must argue against, but it is not
          a like-for-like business-model comparator — it is the model PlayBlue is <em>not</em>{" "}
          running.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r17">SRC 17</Chip>
          <Chip tone="s" href="#r19">SRC 19</Chip>
          <Chip tone="s" href="#r20">SRC 20</Chip>
          <Chip tone="s" href="#r38">SRC 38</Chip>
        </Chips>
      </Accordion>

      <Accordion
        title="Layer 2 · Technosport and BlissClub — the vertically integrated challengers"
        desc="₹436 Cr and ~₹250 Cr ARR, both growing fast · absent from PlayBlue's stated competitive framing"
      >
        <Field label="Technosport">
          <p>
            Founded 2015 in Bengaluru. ₹436 Cr FY25, targeting ₹600 Cr FY26. Raised ₹175 Cr from
            A91 Partners. Controls its own manufacturing and fabric technology — moisture-wicking,
            anti-microbial, UV protection — selling performance wear at entry-level prices,
            effectively Decathlon&rsquo;s playbook run by a startup. 300 new stores announced on
            ₹200 Cr, directly contesting the same scarce retail space PlayBlue needs.
          </p>
        </Field>
        <Field label="BlissClub">
          <p>
            Founded 2020, women-first. Started with a single product — leggings designed for
            Indian women. ₹92 Cr FY24 to a ₹250 Cr annualised run rate by January 2026. Raised
            over $21M from Elevation Capital and Eight Roads, raising a further $25M.
          </p>
        </Field>
        <Highlight label="Why they belong in this analysis">
          Structurally the same layer as Decathlon — own product, own manufacturing, own retail —
          not Layer 3 peers of PlayBlue. But they are proof, right now, that owning product and
          price beats curating other brands, at least so far in India. Their absence from
          PlayBlue&rsquo;s own competitive framing is a real gap, not because they compete
          unit-for-unit but because they are evidence against the Layer 3 thesis.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r31">SRC 31</Chip>
        </Chips>
      </Accordion>

      <Accordion
        title="Layer 3 · Multi-brand curated retail — PlayBlue's actual layer, and it is nearly empty"
        desc="No dedicated multi-brand sports chain occupies this space at scale in India today"
      >
        <Field label="What exists">
          <p>
            General multi-brand fashion retailers (Shoppers Stop, Lifestyle) carry sports and
            athleisure sections but are not sport-specialist. Reliance Retail has been reported
            since mid-2024 to be exploring a Decathlon-rival format and to be seeking multi-brand
            retail permission from the government for exactly this purpose — the same regulatory
            question in finding G. No confirmed launch as of this brief; the most visible recent
            Reliance sports-adjacent move is Yousta&rsquo;s licensed FIFA apparel line, which is
            fashion merchandise rather than curated multi-brand sports retail.
          </p>
        </Field>
        <Highlight label="Why this layer deserves particular attention">
          An unoccupied layer supports two distinct readings: either no operator has executed
          multi-brand sports curation well in India yet, or the model faces structural headwinds
          here — FDI considerations around genuine multi-brand structures, and Layer 2 operators
          matching price without sacrificing curation credibility. Reliance&rsquo;s reported
          interest in this same space, backed by considerably greater capital, is a relevant data
          point for either reading and worth surfacing directly.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r39">SRC 39</Chip>
          <Chip tone="s" href="#r40">SRC 40</Chip>
          <Chip tone="s" href="#r38">SRC 38</Chip>
          <Chip tone="w">Unconfirmed entrant</Chip>
        </Chips>
      </Accordion>

      <Accordion
        title="Layer 4 · Amazon, Flipkart, Myntra, Ajio — marketplaces"
        desc="Aggregate many brands like PlayBlue does, but as a commission platform, not an inventory-owning curator"
      >
        <Field label="Position">
          <p>
            Horizontal and fashion-led marketplaces carrying the widest sports assortment with
            the fastest national fulfilment. Online sports apparel demand on these platforms grew
            over 35% year on year in 2024. Ajio carries Decathlon. India&rsquo;s online fashion
            order volume rose more than 20.9% in FY24.
          </p>
        </Field>
        <Highlight label="Relationship to PlayBlue">
          Structurally the nearest thing to &ldquo;multi-brand&rdquo; that exists at scale in
          India — but as a platform taking commission on third-party inventory, not a curator
          taking ownership and margin risk the way PlayBlue&rsquo;s stores would. They set the
          consumer&rsquo;s baseline expectation on price, selection and delivery speed, which is
          exactly what the 4-hour promise will be benchmarked against.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r32">SRC 32</Chip>
          <Chip tone="s" href="#r33">SRC 33</Chip>
        </Chips>
      </Accordion>

      <Accordion
        title="Layer 5 · Unorganised and counterfeit retail — the real incumbent"
        desc="Price-led, dominant outside metros, the actual base PlayBlue is converting from"
      >
        <Field label="Position">
          <p>
            Unorganised and counterfeit retail continues to dominate large parts of the category.
            Buyers in tier-II and tier-III cities substantially prefer low-cost alternatives, and
            imitation jerseys, gym wear and athleisure are widely available at a fraction of
            branded prices.
          </p>
        </Field>
        <Highlight label="Why it matters more than its place in the list suggests">
          PlayBlue is not primarily fighting Decathlon for share — it is trying to convert
          unorganised demand into organised demand at a materially higher price point. That is a
          slower, harder conversion than a share war between organised players, and it makes
          price perception the decisive variable.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r33">SRC 33</Chip>
          <Chip tone="s" href="#r34">SRC 34</Chip>
        </Chips>
      </Accordion>

      <SubHead mark="5d">Presence across the value chain</SubHead>
      <p className="sIntro" style={{ marginBottom: ".6rem" }}>
        Rows grouped by layer. Stage numbers correspond to section 04.
      </p>
      <TableWrap className="mx" minWidth={600}>
        <thead>
          <tr>
            <th style={{ minWidth: 160 }}>Player</th>
            <th className="c">01</th>
            <th className="c">02</th>
            <th className="c">03</th>
            <th className="c">04</th>
            <th className="c">05</th>
            <th className="c">06</th>
            <th className="c">07</th>
            <th className="c">08</th>
          </tr>
        </thead>
        <tbody>
          <MatrixRow name="Nike / Adidas / Puma" layer="Layer 1" cells={["f", "f", "f", "f", "p", "f", "p", "f"]} />
          <MatrixRow name="Decathlon India" layer="Layer 2" cells={["f", "f", "f", "p", "f", "p", "f", "f"]} />
          <MatrixRow name="Technosport / BlissClub" layer="Layer 2" cells={["f", "f", "p", "f", "p", "f", "p", "p"]} />
          <MatrixRow me name="PlayBlue today" layer="Layer 3" cells={["f", "p", "o", "f", "p", "o", "o", "o"]} />
          <MatrixRow name="Myntra / Ajio" layer="Layer 4" cells={["p", "p", "f", "f", "o", "f", "f", "p"]} />
          <MatrixRow name="Amazon / Flipkart" layer="Layer 4" cells={["p", "o", "f", "f", "o", "f", "f", "p"]} />
          <MatrixRow name="Specialist independents" layer="Layer 5" cells={["p", "p", "o", "o", "f", "o", "o", "f"]} />
        </tbody>
      </TableWrap>
      <p style={{ fontSize: "11.5px", color: "var(--mute)", marginTop: ".45rem" }}>
        <span className="mn" style={{ color: "var(--cobalt)" }}>●</span> established &nbsp;·&nbsp;{" "}
        <span className="mn" style={{ color: "var(--mute2)" }}>◐</span> partial or emerging &nbsp;·&nbsp;{" "}
        <span className="mn" style={{ color: "#DDDDD5" }}>○</span> not present. Assessed from public evidence.
      </p>
    </Section>
  );
}

const CELL_GLYPH: Record<string, string> = { f: "●", p: "◐", o: "○" };

function MatrixRow({
  name,
  layer,
  cells,
  me,
}: {
  name: string;
  layer: string;
  cells: string[];
  me?: boolean;
}) {
  return (
    <tr className={me ? "me" : undefined}>
      <td>
        <strong>{name}</strong>
        <br />
        <span className="mn" style={{ fontSize: "9.5px", color: me ? "var(--cobalt)" : "var(--mute)" }}>
          {layer}
        </span>
      </td>
      {cells.map((c, i) => (
        <td className={`c ${c}`} key={i}>
          {CELL_GLYPH[c]}
        </td>
      ))}
    </tr>
  );
}
