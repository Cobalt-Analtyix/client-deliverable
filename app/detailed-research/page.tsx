import Link from "next/link";
import { Nav } from "@/components/Nav";
import { DetailedTabs } from "@/components/detailed/DetailedTabs";
import { Section02Client } from "@/components/detailed/Section02Client";
import { Section03Market } from "@/components/detailed/Section03Market";
import { Section04ValueChain } from "@/components/detailed/Section04ValueChain";
import { Section05Arena } from "@/components/detailed/Section05Arena";
import { Section06Trends } from "@/components/detailed/Section06Trends";
import { Section07Implications } from "@/components/detailed/Section07Implications";
import { Section08Proposal } from "@/components/detailed/Section08Proposal";
import { Section09Roadmap } from "@/components/detailed/Section09Roadmap";
import { Section10Sources } from "@/components/detailed/Section10Sources";

export const metadata = {
  title: "Detailed Research | PlayBlue — Cobalt Analytix",
};

const tabs = [
  { id: "s2", label: "02 Client", content: <Section02Client /> },
  { id: "s3", label: "03 Market", content: <Section03Market /> },
  { id: "s4", label: "04 Value chain", content: <Section04ValueChain /> },
  { id: "s5", label: "05 Arena", content: <Section05Arena /> },
  { id: "s6", label: "06 Trends", content: <Section06Trends /> },
  { id: "s7", label: "07 Implications", content: <Section07Implications /> },
  { id: "s8", label: "08 Proposal", content: <Section08Proposal /> },
  { id: "s9", label: "09 Roadmap", content: <Section09Roadmap /> },
  { id: "s10", label: "10 Sources", content: <Section10Sources /> },
];

export default function DetailedResearchPage() {
  return (
    <>
      <Nav active="detailed-research" />
      <DetailedTabs
        tabs={tabs}
        header={
          <div className="cover" style={{ padding: "2.2rem 0 1rem" }}>
            <div className="kicker">Cobalt Analytix · Prepared for PlayBlue · Detailed Research</div>
            <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", maxWidth: "22ch" }}>
              The full evidence behind the executive read
            </h1>
            <p className="lede" style={{ fontSize: ".98rem" }}>
              Client resolution, market sizing, the value chain, the competitive arena, trend
              analysis, strategic implications, the proposed engagement, and the wider roadmap —
              in full, with sources. See the{" "}
              <Link href="/executive-summary">executive summary</Link> for the six headline
              findings. Use the tabs above to move between sections — one section is shown at a
              time.
            </p>
          </div>
        }
      />

      <footer>
        <div>Cobalt Analytix · Prepared for PlayBlue</div>
        <div>Public sources only · Prepared August 2026</div>
      </footer>
    </>
  );
}
