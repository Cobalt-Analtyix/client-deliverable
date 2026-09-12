import { Section, Callout } from "@/components/ui";

const sources: { id: string; label: string; url: string; host: string }[] = [
  { id: "r1", label: "Zee Business — PlayBlue seed funding.", url: "https://www.zeebiz.com/startups/news-multi-brand-sports-retail-platform-playblue-raises-27-million-seed-funding-398335", host: "zeebiz.com" },
  { id: "r2", label: "SiliconIndia — PlayBlue $2.7M seed.", url: "https://www.siliconindia.com/startup/startup-funding/playblue-raises-27-million-seed-round-to-scale-sports-retail-nwid-54946.html", host: "siliconindia.com" },
  { id: "r3", label: "Indian Retailer — 150+ store plan.", url: "https://www.indianretailer.com/news/funding-alert-playblue-raises-27-mn-build-omnichannel-sports-retail-network-india", host: "indianretailer.com" },
  { id: "r4", label: "FinSMEs — city rollout detail.", url: "https://www.finsmes.com/2026/07/playblue-raises-2-7m-in-seed-funding.html", host: "finsmes.com" },
  { id: "r5", label: "Local Samosa — founder and investor quotes, market sizing.", url: "https://www.localsamosa.com/news/playblue-raises-capital-in-seed-funding-12129294", host: "localsamosa.com" },
  { id: "r6", label: "Company release, 3 Jul 2026 — ₹100 Cr and profitability target.", url: "https://www.passionateinmarketing.com/playblue-raises-usd-2-7-million-in-seed-funding-to-build-indias-first-omnichannel-brand-in-the-sports-ecosystem/", host: "passionateinmarketing.com" },
  { id: "r7", label: "WoodenScale — round analysis and founder backgrounds.", url: "https://www.woodenscale.ai/blogs/playblue-funding-2-7m-for-indias-sports-retail-bet/", host: "woodenscale.ai" },
  { id: "r8", label: "Whalesbook — ₹5,000 Cr and 150-store figures.", url: "https://www.whalesbook.com/news/English/consumer-products/Sports-Retail-Startup-PlayBlue-Raises-dollar27-Million-Seed-Funding/6a48b144a571fa4b5b96d561", host: "whalesbook.com" },
  { id: "r9", label: "PlayBlue — homepage and customer promise.", url: "https://www.playblue.com/", host: "playblue.com" },
  { id: "r10", label: "PlayBlue — About page, founder profiles, brand narrative.", url: "https://www.playblue.com/about", host: "playblue.com/about" },
  { id: "r11", label: "Storyboard18 — Satyam Trivedi appointed CEO, GMR Sports.", url: "https://www.storyboard18.com/brand-makers/gmr-sports-appoints-satyam-trivedi-as-chief-executive-officer-39215.htm", host: "storyboard18.com" },
  { id: "r12", label: "Ascendants — expert guidance, centralised inventory, fulfilment.", url: "https://ascendants.in/business-stories/playblue-raises-2-7m-seed-round/", host: "ascendants.in" },
  { id: "r13", label: "Hotelier India — Centre Court ₹410 Cr fund close, sports economy sizing.", url: "https://www.hotelierindia.com/operations/centre-court-capital-closes-maiden-fund-at-%E2%82%B9410-crore-surpassing-target", host: "hotelierindia.com" },
  { id: "r14", label: "YourStory — Centre Court fund detail, LP base, cheque sizes.", url: "https://yourstory.com/2025/12/centre-court-capital-maiden-fund-sports-social-gaming-cos", host: "yourstory.com" },
  { id: "r15", label: "PlayBlue — Careers page, seven open roles and locations.", url: "https://www.playblue.com/careers", host: "playblue.com/careers" },
  { id: "r17", label: "India Briefing — Decathlon India strategy, FY24 revenue and profit, Ajio partnership.", url: "https://www.india-briefing.com/news/decathlon-india-sports-retail-market-strategy-40036.html/", host: "india-briefing.com" },
  { id: "r18", label: "Ken Research — India sports equipment and outdoor gear market; sourcing and policy detail.", url: "https://www.kenresearch.com/industry-reports/india-sports-equipment-and-outdoor-gear-market", host: "kenresearch.com" },
  { id: "r19", label: "Retail Systems — Decathlon €100M India investment, 110→190 stores, local sourcing.", url: "https://www.retail-systems.com/rs/Decathlon_To_Invest_100m_In_India.php", host: "retail-systems.com" },
  { id: "r20", label: "SGI Europe — Decathlon 90+ city expansion, ₹8,000 Cr by 2030.", url: "https://www.sgieurope.com/corporate/decathlon-accelerates-growth-in-india-with-nationwide-expansion-plans/116093.article", host: "sgieurope.com" },
  { id: "r21", label: "Expert Market Research — India sports and fitness goods market to 2035.", url: "https://www.expertmarketresearch.com/reports/indian-sports-and-fitness-goods-market", host: "expertmarketresearch.com" },
  { id: "r22", label: "Tracxn — Centre Court Capital portfolio and activity.", url: "https://tracxn.com/d/venture-capital/centre-court-capital/__2MvJQnoQapvEpWeS9y9sknfFJIwE2UPioisY1IQgRu8", host: "tracxn.com" },
  { id: "r23", label: "Scroll.in — analysis of the 2024 Time Use Survey, NSO.", url: "https://scroll.in/article/1090236/in-charts-how-india-doesnt-exercise", host: "scroll.in" },
  { id: "r24", label: "IndiaSpend — Time Use Survey detail, income and state breakdowns.", url: "https://www.indiaspend.com/health/9-in-10-indians-do-not-exercise-977727", host: "indiaspend.com" },
  { id: "r25", label: "Dalberg — State of Sports and Physical Activity baseline study.", url: "https://dalberg.com/our-ideas/state-of-sports-and-physical-activity-sapa-report-unlocking-indias-potential-for-economic-growth-health-and-gender-equality/", host: "dalberg.com" },
  { id: "r26", label: "GrabOn / MoSPI TUS 2024 — gym membership base and projections.", url: "https://www.grabon.in/indulge/tech/fitness-industry-statistics/", host: "grabon.in" },
  { id: "r27", label: "Grand View Research — athleisure market, India CAGR.", url: "https://www.grandviewresearch.com/industry-analysis/athleisure-market", host: "grandviewresearch.com" },
  { id: "r28", label: "Business Standard / Cushman & Wakefield — Q2 2026 retail leasing.", url: "https://www.business-standard.com/amp/industry/news/retail-leasing-rises-18-per-cent-yoy-in-q2-on-tight-supply-cushman-126070100524_1.html", host: "business-standard.com" },
  { id: "r29", label: "H1 2026 retail leasing, four-year high; mall supply down 64%.", url: "https://www.newkerala.com/news/a/indias-retail-leasing-surges-105-pc-fouryear-high-318.htm", host: "newkerala.com" },
  { id: "r30", label: "Q2 2026 leasing, high-street rent growth by corridor.", url: "https://www.newkerala.com/news/a/indias-retail-leasing-24-msf-q2-up-176-361.htm", host: "newkerala.com" },
  { id: "r31", label: "Exponential Compass — India sportswear revenue league table, Technosport and BlissClub.", url: "https://exponentialcompass.substack.com/p/nike-is-the-worlds-biggest-sportswear", host: "exponentialcompass.substack.com" },
  { id: "r32", label: "CEO Vine — Indian athleisure brands, online demand growth, segment shares.", url: "https://www.ceovine.com/top-10-indian-athleisure-brands-growing-fast-in-2026", host: "ceovine.com" },
  { id: "r33", label: "Maximize Market Research — India sports apparel: price sensitivity, unorganised retail, online order growth.", url: "https://www.maximizemarketresearch.com/market-report/india-sports-apparel-market/77721/", host: "maximizemarketresearch.com" },
  { id: "r34", label: "Ken Research — India sports apparel; international brand share of premium.", url: "https://www.kenresearch.com/industry-reports/india-sports-apparel-market", host: "kenresearch.com" },
  { id: "r35", label: "Mordor Intelligence — athleisure by segment, channel and category.", url: "https://www.mordorintelligence.com/industry-reports/athleisure-market", host: "mordorintelligence.com" },
  { id: "r36", label: "GIS — India sports industry sizing, Decathlon footprint, sports budget.", url: "https://gis.sport/news/the-true-size-of-indias-sports-industry/", host: "gis.sport" },
  { id: "r37", label: "LinkedIn/Sahoo — Decathlon's vertical integration model, own-brand portfolio.", url: "https://www.linkedin.com/pulse/decathlons-evolutionary-brand-strategy-sport-retail-industry-sahoo", host: "linkedin.com" },
  { id: "r38", label: "Apparel Resources — Decathlon lists rival brands online; single-brand vs multi-brand FDI distinction.", url: "https://in.apparelresources.com/business-news/retail/decathlon-india-begins-listing-rival-brands-website/", host: "in.apparelresources.com" },
  { id: "r39", label: "Business Standard — Reliance Retail exploring a Decathlon-rival sports format.", url: "https://www.business-standard.com/companies/news/reliance-retail-plans-to-launch-sports-format-to-compete-with-decathlon-124070900620_1.html", host: "business-standard.com" },
  { id: "r40", label: "Outlook Business — Decathlon seeking multi-brand retail permission from government.", url: "https://www.outlookbusiness.com/news/reliance-retail-plans-to-enter-sportswear-space-says-report", host: "outlookbusiness.com" },
  { id: "r41", label: "Reliance Industries / X — Yousta FIFA licensed apparel collection, June 2026.", url: "https://x.com/RIL_Updates/status/2069343976021529082", host: "x.com/RIL_Updates" },
];

export function Section10Sources() {
  return (
    <Section
      id="s10"
      n="10"
      title="Sources and method"
      intro="All public, accessed August 2026. Where sources conflict, both are shown and the conflict is named in the body rather than averaged away. Nothing in this document draws on non-public PlayBlue information."
    >
      <Callout tone="amber" label="Three points worth aligning on directly">
        <strong>1.</strong> Amit Bindrani&rsquo;s current mandate on the PlayBlue engagement,
        given public records reflect his substantive role at Arvind Limited.
        <br />
        <strong>2.</strong> The composition of PlayBlue&rsquo;s finance function and board — the
        F&amp;A leadership brief implies both exist, though neither is publicly named.
        <br />
        <strong>3.</strong> PlayBlue&rsquo;s internal operating figures — assortment economics,
        capex per store, unit economics, launch timing. Every figure quoted here is the
        company&rsquo;s own public statement, not an internal result.
      </Callout>

      <Callout tone="blue" label="A note on the value chain positioning">
        The &ldquo;where PlayBlue plays today&rdquo; reads in section 04, and the PlayBlue row in
        the section 05 matrix, are inferred from public signals — job postings, site copy,
        funding commentary — rather than disclosed positions. We would welcome the PlayBlue
        team&rsquo;s own view alongside them.
      </Callout>

      <ol className="src">
        {sources.map((s) => (
          <li id={s.id} key={s.id}>
            {s.label} <a href={s.url}>{s.host}</a>
          </li>
        ))}
      </ol>
    </Section>
  );
}
