import { Section, Accordion, Callout, Field, Highlight } from "@/components/ui";

export function Section04ValueChain() {
  return (
    <Section
      id="s4"
      n="04"
      title="Value chain and market map"
      intro="Eight stages, in the order inventory moves through them. Expand any stage for its sub-stages and technologies, the players operating there, and where PlayBlue sits today."
    >
      <Callout tone="dark" label="Reading the map">
        PlayBlue&rsquo;s public evidence of activity clusters at stages <strong>01</strong>{" "}
        (brand access), <strong>04</strong> (brand narrative) and <strong>05</strong> (the
        store). Stages <strong>03, 06, 07 and 08</strong> are explicitly not built. That is
        normal for a pre-launch retailer — but the operating spine and the profitability path
        both run through the stages with the least in place.
      </Callout>

      <Accordion
        num="01"
        title="Brand & supply sourcing"
        desc={<>Securing the right to sell, on workable terms · <strong style={{ color: "var(--cobalt)" }}>PlayBlue: active</strong></>}
      >
        <Field label="Description">
          <p>
            Brand partnership negotiation, distributor and importer relationships, private-label
            development, and increasingly domestic manufacturing. Determines landed cost, which
            determines everything downstream.
          </p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Brand and distributor contracting — margin, exclusivity, stock allocation</li>
            <li>Import, duty and compliance for global brands</li>
            <li>Private-label design, sourcing and QA</li>
            <li>Domestic manufacturing and sports-goods cluster sourcing</li>
            <li>Vendor management, PO and contract tooling</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Decathlon</strong> — own brands, own supply chain, ~68% locally sourced in 2024 targeting 85%</li>
            <li><strong>Brand principals</strong> — Puma (₹3,274 Cr), Adidas (₹3,114 Cr), Nike (₹1,380 Cr) control their own India distribution</li>
            <li><strong>Vertically integrated challengers</strong> — Technosport owns its fabric technology and manufacturing</li>
            <li><strong>Domestic manufacturers</strong> — SG, Cosco, MRF Sports, Nivia</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Active, and this is the structural advantage. Satyam Trivedi&rsquo;s institutional
          network is the most credible route to 100+ partnerships at seed stage. A Brand
          Partnerships lead is being recruited to formalise the pipeline. No public evidence of
          private label or manufacturing — which leaves the landed-cost gap against Decathlon
          unaddressed.
        </Highlight>
      </Accordion>

      <Accordion
        num="02"
        title="Assortment planning & buying"
        desc={<>What to stock, how deep, at what price · <strong style={{ color: "var(--mute)" }}>PlayBlue: forming</strong></>}
      >
        <Field label="Description">
          <p>
            Where margin is won or lost in multi-brand retail, and the hardest thing to do well
            across six categories and 100+ brands at once.
          </p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Category architecture and space allocation</li>
            <li>Range planning and open-to-buy management</li>
            <li>Price architecture and margin planning by category</li>
            <li>Demand forecasting and size-curve planning</li>
            <li>Merchandise planning systems; AI-assisted allocation</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Decathlon</strong> — controls assortment end to end through own-brand architecture</li>
            <li><strong>Marketplaces</strong> — effectively outsource assortment to seller supply</li>
            <li><strong>Fashion multi-brand operators</strong> — Shoppers Stop, Lifestyle, Reliance Trends bring mature buying discipline from adjacent categories</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Forming. The Senior Buyer posting reads as though assortment logic is still being set —
          it explicitly asks for someone who can identify &ldquo;white spaces nobody&rsquo;s
          filled yet.&rdquo; Highest-leverage stage for external demand evidence, and the
          shortest window in which that evidence is still actionable.
        </Highlight>
      </Accordion>

      <Accordion
        num="03"
        title="Catalogue & product data"
        desc={<>The structured layer everything digital sits on · <strong style={{ color: "var(--amber)" }}>PlayBlue: not built</strong></>}
      >
        <Field label="Description">
          <p>Unglamorous and load-bearing. Search, filtering, sizing, returns and conversion all depend on it.</p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Product information management (PIM) and taxonomy design</li>
            <li>Attribute enrichment, imagery, cross-brand sizing normalisation</li>
            <li>Digital asset management</li>
            <li>Search and filter relevance tuning</li>
            <li>Automated attribute extraction and catalogue QA</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Marketplaces</strong> — mature catalogue infrastructure at very large scale</li>
            <li><strong>Decathlon</strong> — simplified by own-brand control and one consistent taxonomy</li>
            <li><strong>PIM and commerce vendors</strong> — where the technology scouting question sits</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Not built. The Catalog Manager posting is explicit: no product data, images, specs,
          sizing or structure exists. Normalising sizing across 100+ brands is genuinely hard and
          a known conversion killer — and unlike Decathlon, PlayBlue cannot solve it by
          controlling the brands.
        </Highlight>
      </Accordion>

      <Accordion
        num="04"
        title="Demand generation & community"
        desc={<>Reasons to care before reasons to buy · <strong style={{ color: "var(--cobalt)" }}>PlayBlue: active</strong></>}
      >
        <Field label="Description">
          <p>In sports retail this extends past advertising into events, teams, athletes, clubs and participation programming.</p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Brand and performance marketing; CAC management</li>
            <li>Athlete and team associations, sponsorships</li>
            <li>Events, runs, clinics, grassroots programming</li>
            <li>Content and owned media</li>
            <li>CRM, CDP and audience infrastructure</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Puma</strong> — cricket sponsorships and Bollywood ambassadors took it to No.1 in India</li>
            <li><strong>Adidas</strong> — Indian national cricket team association</li>
            <li><strong>Decathlon</strong> — participation-led, store-attached playing fields, low ad spend</li>
            <li><strong>cultsport / Cult.fit</strong> — community-led demand generation at scale</li>
            <li><strong>Marketplaces</strong> — category budgets a seed-stage entrant cannot match</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Active and ahead of the rest of the chain — brand narrative and editorial are live
          before the store is. Founder access to leagues, teams and athletes is real. The open
          question is whether community is a marketing posture or an operating model with a data
          layer behind it.
        </Highlight>
      </Accordion>

      <Accordion
        num="05"
        title="Store format & experience"
        desc={<>Where the differentiator lives or dies · <strong style={{ color: "var(--cobalt)" }}>PlayBlue: building now</strong></>}
      >
        <Field label="Description">
          <p>
            Where stores go, how they are laid out, and what happens between walking in and
            deciding. &ldquo;Expert guidance&rdquo; is a floor-plan and staffing decision before
            it is a marketing claim.
          </p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Catchment analysis and site selection</li>
            <li>Store design, zoning and space productivity</li>
            <li>Trial infrastructure — fitting, gait analysis, racquet demo, testing zones</li>
            <li>Staff expertise, training and clienteling tools</li>
            <li>POS, footfall measurement, in-store analytics</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Decathlon</strong> — ~130 stores in 55+ cities, expanding to 190 across 90+ cities on a €100M commitment</li>
            <li><strong>Puma</strong> — 570+ stores</li>
            <li><strong>Technosport</strong> — 300 new stores announced on ₹200 Cr</li>
            <li><strong>Brand flagships</strong> — Nike, Adidas in premium metro locations</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Building. This is where the seed capital goes and where execution risk concentrates.
          Constrained Grade A supply and 12–22% rent growth on target high streets make site
          selection a strategic decision, not a property one.
        </Highlight>
      </Accordion>

      <Accordion
        num="06"
        title="Digital commerce & omnichannel"
        desc={<>The storefront and the connective tissue · <strong style={{ color: "var(--amber)" }}>PlayBlue: not built</strong></>}
      >
        <Field label="Description">
          <p>Online store plus unified inventory, click-and-collect, endless aisle, and a single customer view across store and app.</p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>E-commerce platform and mobile app</li>
            <li>Unified inventory and order management</li>
            <li>Click-and-collect, ship-from-store, endless aisle</li>
            <li>Quick-commerce storefront and dark-store orchestration</li>
            <li>Personalisation and conversion optimisation</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Amazon, Flipkart, Myntra, Ajio</strong> — where online sports and athleisure discovery happens today</li>
            <li><strong>Decathlon</strong> — own platform plus an Ajio partnership extending reach</li>
            <li><strong>Brand D2C</strong> — Nike, Adidas, Puma apps and loyalty programmes</li>
            <li><strong>Quick commerce</strong> — increasingly carrying sports and fitness SKUs</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Not built. Building this in parallel with three store launches is the most demanding
          commitment in the plan, and the stage where a seed-stage team is most directly
          outgunned. Note that even Decathlon treats marketplaces as necessary distribution
          rather than pure competition.
        </Highlight>
      </Accordion>

      <Accordion
        num="07"
        title="Fulfilment & supply chain"
        desc={<>The 4-hour promise, priced · <strong style={{ color: "var(--amber)" }}>PlayBlue: not built</strong></>}
      >
        <Field label="Description">
          <p>Moving product at a cost the margin can absorb. The delivery promise makes this a strategic commitment rather than a back-office function.</p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Warehousing and inventory positioning</li>
            <li>Dark stores or store-as-node fulfilment</li>
            <li>Last mile — owned or 3PL</li>
            <li>Returns and reverse logistics</li>
            <li>WMS, routing and delivery-promise engines</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Marketplaces</strong> — national fulfilment at scale advantage</li>
            <li><strong>Quick-commerce operators</strong> — dark-store density that is expensive to replicate</li>
            <li><strong>3PL providers</strong> — the realistic route for a new entrant</li>
            <li><strong>Decathlon</strong> — store-backed fulfilment across 55+ cities</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Not built. Sports goods are bulky, size-variable and carry higher return rates than
          most categories, which makes a 4-hour promise structurally expensive. Whether customers
          will pay for it — or even value it — is testable before it is built, and considerably
          cheaper to test than to discover.
        </Highlight>
      </Accordion>

      <Accordion
        num="08"
        title="Service, returns & loyalty"
        desc={<>Everything that determines a second purchase · <strong style={{ color: "var(--amber)" }}>PlayBlue: not built</strong></>}
      >
        <Field label="Description">
          <p>
            In sport this is unusually rich — servicing, restringing, fitting, coaching, clubs —
            and it is the natural home of the community ambition.
          </p>
        </Field>
        <Field label="Sub-stages & technologies">
          <ul>
            <li>Returns, exchanges and warranty</li>
            <li>Product servicing — restringing, bike service, shoe fitting, repair</li>
            <li>Membership and loyalty design</li>
            <li>Community programming and clubs</li>
            <li>CDP, retention analytics, lifecycle marketing</li>
          </ul>
        </Field>
        <Field label="Current players">
          <ul>
            <li><strong>Decathlon</strong> — in-store workshops and servicing at scale</li>
            <li><strong>Cult.fit</strong> — membership and retention mechanics in adjacent fitness</li>
            <li><strong>Brand programmes</strong> — Nike Membership, adiClub</li>
            <li><strong>Specialist independents</strong> — servicing depth in running, cycling, racquet sports</li>
          </ul>
        </Field>
        <Highlight label="Where PlayBlue plays today">
          Not built. The 10M-community ambition sits here with no announced membership
          construct. This is where Jayam Vora&rsquo;s Fitternity and cultpass experience is most
          directly transferable — and where the tension with the profitability target is
          sharpest.
        </Highlight>
      </Accordion>
    </Section>
  );
}
