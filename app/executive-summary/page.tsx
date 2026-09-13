import { Nav } from "@/components/Nav";
import { Callout, StatBar } from "@/components/ui";
import { DataAccordion } from "@/components/Blocks";
import { RT } from "@/lib/richText";
import type { AccordionSpec } from "@/lib/content-types";
import data from "@/data/executiveSummary.json";

const findings = data.findings as AccordionSpec[];

export const metadata = {
  title: "Executive Summary | PlayBlue — Cobalt Analytix",
};

const SRC_BASE = "/detailed-research";

export default function ExecutiveSummaryPage() {
  return (
    <>
      <Nav active="executive-summary" />
      <div className="wrap">
        {/* ================= COVER ================= */}
        <div className="cover">
          <div className="kicker">{data.kicker}</div>
          <h1>
            <RT text={data.title} />
          </h1>
          <p className="lede">
            <RT text={data.lede} />
          </p>
          <StatBar stats={data.stats.map((s) => ({ v: s.v, l: <RT text={s.l} /> }))} />
        </div>

        {/* ================= EXECUTIVE READ ================= */}
        <section id="s1">
          <div className="sHead">
            <span className="n">01</span>
            <h2>The executive read</h2>
          </div>
          <p className="sIntro">
            Six observations that shape how we see this business. Each is expandable for the
            underlying evidence — source references (e.g. <span className="mn">SRC 37</span>)
            jump to the full citation list on the detailed research page.
          </p>

          {findings.map((f) => (
            <DataAccordion spec={f} srcBase={SRC_BASE} key={f.num} />
          ))}
        </section>

        {/* ================= PROPOSAL CALLOUT ================= */}
        <section id="s2" style={{ paddingTop: "1.4rem" }}>
          <Callout tone="dark" label="What we're proposing">
            <p
              style={{
                fontSize: "1.05rem",
                fontFamily: "var(--dsp)",
                fontWeight: 500,
                letterSpacing: "-.02em",
                lineHeight: 1.35,
                color: "#fff",
                margin: "0 0 .6rem",
              }}
            >
              <RT text={data.proposalCallout} />
            </p>
            <p style={{ margin: 0 }}>
              The full engagement scope, modules, timeline and open questions for the working
              session are on the{" "}
              <a href="/detailed-research#s8" style={{ color: "#fff", textDecoration: "underline" }}>
                detailed research
              </a>{" "}
              page.
            </p>
          </Callout>
        </section>
      </div>

      <footer>
        <div>Cobalt Analytix · Prepared for PlayBlue</div>
        <div>Public sources only · Prepared August 2026</div>
      </footer>
    </>
  );
}
