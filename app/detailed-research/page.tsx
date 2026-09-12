import Link from "next/link";
import { Nav } from "@/components/Nav";
import { SectionNav } from "@/components/SectionNav";
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

const links = [
  { href: "#s2", label: "02 Client" },
  { href: "#s3", label: "03 Market" },
  { href: "#s4", label: "04 Value chain" },
  { href: "#s5", label: "05 Arena" },
  { href: "#s6", label: "06 Trends" },
  { href: "#s7", label: "07 Implications" },
  { href: "#s8", label: "08 Proposal" },
  { href: "#s9", label: "09 Roadmap" },
  { href: "#s10", label: "10 Sources" },
];

export default function DetailedResearchPage() {
  return (
    <>
      <Nav active="detailed-research" />
      <SectionNav links={links} />
      <div className="wrap">
        <div className="cover" style={{ padding: "2.2rem 0 1rem" }}>
          <div className="kicker">Cobalt Analytix · Prepared for PlayBlue · Detailed Research</div>
          <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", maxWidth: "22ch" }}>
            The full evidence behind the executive read
          </h1>
          <p className="lede" style={{ fontSize: ".98rem" }}>
            Client resolution, market sizing, the value chain, the competitive arena, trend
            analysis, strategic implications, the proposed engagement, and the wider roadmap —
            in full, with sources. See the <Link href="/executive-summary">executive summary</Link>{" "}
            for the seven headline findings.
          </p>
        </div>

        <Section02Client />
        <Section03Market />
        <Section04ValueChain />
        <Section05Arena />
        <Section06Trends />
        <Section07Implications />
        <Section08Proposal />
        <Section09Roadmap />
        <Section10Sources />
      </div>

      <footer>
        <div>Cobalt Analytix · Prepared for PlayBlue</div>
        <div>Public sources only · Prepared August 2026</div>
      </footer>
    </>
  );
}
