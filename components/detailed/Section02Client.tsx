import { Section, Accordion, Chip, Chips, Field, Highlight, TableWrap } from "@/components/ui";
import { Tabs } from "@/components/Tabs";
import { FeedbackBoard, type FeedbackItem } from "@/components/FeedbackBoard";

const statedGoals: FeedbackItem[] = [
  {
    id: "G1",
    text: "Reach ₹100 crore in revenue and operational profitability in phase one, before the next fundraise.",
    sources: [{ label: "SRC 06 · Company release, 3 Jul 2026", href: "#r6" }],
  },
  {
    id: "G2",
    text: "Open a 15,000 sq ft flagship in Bengaluru, then expand to Mumbai and Delhi NCR.",
    sources: [
      { label: "SRC 04", href: "#r4" },
      { label: "SRC 02", href: "#r2" },
    ],
  },
  {
    id: "G3",
    text: "Launch a pan-India e-commerce platform in parallel with the stores, not after them.",
    sources: [
      { label: "SRC 04", href: "#r4" },
      { label: "SRC 15", href: "#r15" },
    ],
  },
  {
    id: "G4",
    text: "Bring together 100+ global and Indian brands across six categories.",
    sources: [{ label: "SRC 06", href: "#r6" }],
  },
  {
    id: "G5",
    text: "Build a network of more than 150 stores over five years.",
    sources: [{ label: "SRC 03", href: "#r3" }],
  },
  {
    id: "G6",
    text: "Reach ₹5,000 crore in annual revenue on a five-year horizon.",
    sources: [{ label: "SRC 08", href: "#r8" }],
  },
  {
    id: "G7",
    text: "Deliver 4-hour delivery, expert in-store guidance and centralised cross-channel inventory as the core customer promise.",
    sources: [
      { label: "SRC 09", href: "#r9" },
      { label: "SRC 12", href: "#r12" },
    ],
  },
  {
    id: "G8",
    text: "Build a community that goes beyond the transaction, framed around accelerating India's shift from watching sport to playing it.",
    sources: [{ label: "SRC 10", href: "#r10" }],
  },
  {
    id: "G9",
    text: "Stand up a quick-commerce fulfilment operation alongside standard e-commerce delivery.",
    sources: [{ label: "SRC 15", href: "#r15" }],
  },
  {
    id: "G10",
    text: "Build finance, HR, buying and brand partnership functions from zero, based in Ahmedabad.",
    sources: [{ label: "SRC 15", href: "#r15" }],
  },
];

function CompanyPanel() {
  return (
    <TableWrap>
      <tbody>
        <tr>
          <th style={{ width: 170 }}>Legal entity</th>
          <td>
            PlayBlue Sports Pvt. Ltd. <Chip tone="g">Sourced</Chip>
          </td>
        </tr>
        <tr>
          <th>Founded</th>
          <td>2025, by Satyam Trivedi and Jayam Vora</td>
        </tr>
        <tr>
          <th>Base</th>
          <td>
            Bengaluru (registered, first flagship). Corporate functions appear to be forming in
            Ahmedabad <Chip>Inferred</Chip>
          </td>
        </tr>
        <tr>
          <th>Model</th>
          <td>
            Omnichannel multi-brand sports retail — 100+ Indian and global brands across
            athleisure, footwear, equipment, fitness gear, recovery and nutrition
          </td>
        </tr>
        <tr>
          <th>Capital raised</th>
          <td>
            USD 2.7M seed (≈₹25.7 Cr), announced 3 July 2026. Co-led by Centre Court Capital and
            MIXI Global Investments; WEH Ventures participating
          </td>
        </tr>
        <tr>
          <th>First format</th>
          <td>15,000 sq ft experiential flagship, Bengaluru. Mumbai and Delhi NCR to follow</td>
        </tr>
        <tr>
          <th>Customer promise</th>
          <td>4-hour delivery, expert in-store guidance, curated multi-brand assortment, centralised inventory</td>
        </tr>
        <tr>
          <th>Trading status</th>
          <td>Not live. Site is a brand page and waitlist; careers page confirms the online store does not exist yet</td>
        </tr>
        <tr>
          <th>Public content</th>
          <td>
            Editorial on Olympic hosting ambition, community participation growth, and sports
            sector investment — all dated April 2026, pre-funding
          </td>
        </tr>
      </tbody>
    </TableWrap>
  );
}

function StakeholdersPanel() {
  return (
    <div>
      <Accordion
        title="Amit Bindrani — Senior General Manager, Arvind Limited"
        desc="Two decades of retail operating leadership across three major Indian formats"
      >
        <Field label="Career background">
          <ul>
            <li>Senior General Manager, Arvind Limited — Ahmedabad, since 2023</li>
            <li>General Manager, Operations, Arvind Limited, 2016–2023</li>
            <li>Regional Sales Manager, Arvind Limited, 2014–2016</li>
            <li>Cluster Manager, Reliance Trends, 2008–2014</li>
            <li>Store Manager, Pantaloons, 2005–2008</li>
            <li>MA, London Metropolitan University</li>
          </ul>
        </Field>
        <Highlight label="Relevance to this engagement">
          Two decades of operating discipline spanning large-format, multi-brand and specialty
          retail — store rollout, regional sales leadership, and operations management at scale.
          That range of formats, from Pantaloons through Reliance Trends to Arvind, is a directly
          relevant lens on the store rollout and assortment decisions PlayBlue is now working
          through.
        </Highlight>
      </Accordion>

      <Accordion title="Satyam Trivedi — Co-founder" desc="Institutional sports operator. The brand-access advantage.">
        <Field label="Track record">
          <ul>
            <li>CEO, GMR Sports — cricket conglomerate across geographies (IPL, WPL, ILT20, The Hundred, PKL); created new IPs and infrastructure projects</li>
            <li>Deputy CEO &amp; Executive Director, RPSG Sports — franchises in India and South Africa (IPL, SA20, ISL)</li>
            <li>Founding member and CEO, Adani Sportsline — built from the ground up (PKL, WPL, Ahmedabad Marathon)</li>
            <li>Also associated with Ultimate Kho Kho and Big Bout Indian Boxing League</li>
          </ul>
        </Field>
        <Highlight label="Strategic read">
          This is the asset that makes 100+ brand partnerships plausible at seed stage — very few
          Indian retail founders can open those doors. It is also a sports-industry network
          rather than a retail one, which is why the operating hires are being recruited from
          outside.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r11">SRC 11</Chip>
          <Chip tone="s" href="#r10">SRC 10</Chip>
        </Chips>
      </Accordion>

      <Accordion title="Jayam Vora — Co-founder" desc="Consumer and fitness operator. Most likely internal champion for consumer research.">
        <Field label="Track record">
          <ul>
            <li>Co-founder, Fitternity — India&rsquo;s largest fitness booking platform, 1M+ paid users, acquired by Curefit in 2021</li>
            <li>Cult.fit leadership team; led Gold&rsquo;s Gym India, co-led the 300+ gym cultpass network</li>
            <li>Investor and strategic advisor to Indian D2C brands across jewellery, personal care and perfumery</li>
            <li>The public voice on market sizing and the retail touchpoint gap</li>
          </ul>
        </Field>
        <Highlight label="Strategic read">
          Fitternity and cultpass are membership and retention businesses. That experience maps
          directly onto the 10M-community ambition — and means he will already have views on
          what a consumer data layer needs to look like. Expect a sophisticated buyer, not a
          persuadable one.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r10">SRC 10</Chip>
          <Chip tone="s" href="#r7">SRC 07</Chip>
        </Chips>
      </Accordion>

      <Accordion title="Mustafa Ghouse — Centre Court Capital, co-lead investor" desc="Sector-specialist fund with an explicit analytics thesis.">
        <Field label="Position">
          <ul>
            <li>Founder and General Partner; former professional tennis player; former CEO, JSW Sports</li>
            <li>Closed a ₹410 Cr maiden fund in Dec 2025, oversubscribed against a ₹350 Cr target</li>
            <li>Cheques of ₹8–24 Cr across a planned 15–18 companies; 30–40% reserved for follow-ons; leads or co-leads most deals</li>
            <li>LP base includes Neeraj Chopra, Rishabh Pant, PV Sindhu, Jemimah Rodrigues, Binny Bansal, Mithun Sacheti, Ankit Nagori, Premji Invest and SIDBI</li>
            <li>Portfolio: Michezo Sports (infrastructure), Quidich Innovation Labs (broadcast tech), Stupa Sports (data), Fancraze</li>
          </ul>
        </Field>
        <Highlight label="Strategic read">
          His stated thesis names &ldquo;infrastructure, analytics and fan-facing
          products.&rdquo; The portfolio is weighted toward data and technology rather than
          merchandising. A PlayBlue that can show consumer evidence rather than assertion fits
          that thesis; one that cannot, fits it less well. This is the most receptive audience in
          the room for what we do.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r13">SRC 13</Chip>
          <Chip tone="s" href="#r14">SRC 14</Chip>
          <Chip tone="s" href="#r22">SRC 22</Chip>
        </Chips>
      </Accordion>

      <Accordion title="MIXI Global Investments and WEH Ventures" desc="Japanese strategic capital plus an Indian early-stage fund.">
        <Field label="MIXI Global — Tomoharu Urabe, Managing Director">
          <p>
            Co-lead. Public rationale centres on rising participation across age groups and,
            notably, parent-led youth participation — a segment PlayBlue&rsquo;s own materials do
            not name. Brings comparative format expectations from a more mature market.
          </p>
        </Field>
        <Field label="WEH Ventures">
          <p>Participating investor. Indian early-stage fund.</p>
        </Field>
        <Highlight label="Worth asking">
          MIXI&rsquo;s stated thesis flags parents buying for children. PlayBlue&rsquo;s public
          segmentation does not. Either it is a deliberate omission or an unclaimed segment — and
          it has very different format implications.
        </Highlight>
        <Chips>
          <Chip tone="s" href="#r5">SRC 05</Chip>
          <Chip tone="s" href="#r6">SRC 06</Chip>
        </Chips>
      </Accordion>

      <Accordion title="CFO and board — referenced but not named" desc="Implied by the F&A job posting. Unknown composition.">
        <Field>
          <p>
            The F&amp;A Head posting refers to &ldquo;the models the board and the CFO run the
            business on,&rdquo; implying both exist. A co-led seed round typically produces
            investor-nominated directors. Nobody is publicly named.
          </p>
        </Field>
        <Highlight label="Why it matters">
          If the buying decision routes through a CFO measuring cost per decision rather than
          through an operator measuring risk reduction, the framing changes materially. Worth
          asking early who else would be in the room.
        </Highlight>
        <Chips>
          <Chip tone="w">Needs verification</Chip>
        </Chips>
      </Accordion>
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
          {
            id: "goals",
            label: "Stated goals",
            content: (
              <div>
                <p className="sIntro" style={{ marginTop: 0 }}>
                  PlayBlue&rsquo;s stated corporate goals, recorded as found with no
                  interpretation. Mark what is not a priority, correct what we have wrong, add
                  what we cannot see from outside. Feedback stays in this browser and is not sent
                  anywhere.
                </p>
                <FeedbackBoard items={statedGoals} />
              </div>
            ),
          },
        ]}
      />
    </Section>
  );
}
