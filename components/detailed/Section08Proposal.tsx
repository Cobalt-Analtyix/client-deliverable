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
import { RT } from "@/lib/richText";
import proposal from "@/data/detailed/proposal.json";

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
          <RT text={proposal.oneLiner} />
        </p>
      </div>

      <SubHead mark="8a">Why this, why now</SubHead>
      <CardGrid>
        {proposal.whyNow.map((c, i) => (
          <Card title={c.title} key={i}>
            <RT text={c.text} />
          </Card>
        ))}
      </CardGrid>

      <SubHead mark="8b">The three modules</SubHead>
      {proposal.modules.map((m, i) => (
        <ModuleBox mark={m.mark} title={m.title} key={i}>
          <p style={{ fontSize: "13.8px" }}>
            <strong>The question:</strong> <RT text={m.question} />
          </p>
          <p style={{ fontSize: "13.8px", marginBottom: m.attrs ? ".6rem" : undefined }}>
            <strong>How:</strong> <RT text={m.how} />
          </p>
          {m.attrs ? <AttrGrid items={m.attrs} /> : null}
          <KV items={m.kv} />
        </ModuleBox>
      ))}

      <SubHead mark="8c">Four weeks, week by week</SubHead>
      <Timeline>
        {proposal.timeline.map((t, i) => (
          <TimelineRow wk={t.wk} title={t.title} key={i}>
            <RT text={t.text} />
          </TimelineRow>
        ))}
      </Timeline>

      <SubHead mark="8d">What you get, and what you keep</SubHead>
      <CardGrid>
        {proposal.whatYouGet.map((c, i) => (
          <Card title={c.title} key={i}>
            <RT text={c.text} />
          </Card>
        ))}
      </CardGrid>

      <SubHead mark="8e">What we need from you, and what this does not do</SubHead>
      <CardGrid>
        {proposal.needVsNot.map((c, i) => (
          <div className="card" key={i}>
            <h4 style={{ color: `var(--${c.color})` }}>{c.title}</h4>
            <p style={{ color: "var(--mute)" }}>
              <RT text={c.text} />
            </p>
          </div>
        ))}
      </CardGrid>

      <Callout tone="blue" label="How to judge whether it worked">
        <RT text={proposal.judgeCallout} />
      </Callout>

      <Callout tone="amber" label="On staging">
        <RT text={proposal.stagingCallout} />
      </Callout>
    </Section>
  );
}
