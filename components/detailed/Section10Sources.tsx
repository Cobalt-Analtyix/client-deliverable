import { Fragment } from "react";
import { Section, Callout, Chip } from "@/components/ui";
import { RT } from "@/lib/richText";
import type { SourceSpec } from "@/lib/content-types";
import sources from "@/data/detailed/sources.json";

const sourceList = sources.sources as SourceSpec[];

export function Section10Sources() {
  return (
    <Section
      id="s10"
      n="10"
      title="Sources and method"
      intro="All public, accessed August 2026. Where sources conflict, both are shown and the conflict is named in the body rather than averaged away. Nothing in this document draws on non-public PlayBlue information."
    >
      <Callout tone="amber" label="Three points worth aligning on directly">
        {sources.alignCallout.split("\n").map((line, i, arr) => (
          <Fragment key={i}>
            <RT text={line} />
            {i < arr.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </Callout>

      <Callout tone="blue" label="A note on the value chain positioning">
        <RT text={sources.valueChainCallout} />
      </Callout>

      <ol className="src">
        {sourceList.map((s) => (
          <li id={s.id} key={s.id}>
            {s.label}{" "}
            {s.needsVerification ? (
              <span className="mn" style={{ color: "var(--mute)" }}>
                {s.host}
              </span>
            ) : (
              <a href={s.url}>{s.host}</a>
            )}{" "}
            {s.needsVerification ? <Chip tone="w">unverified — do not cite externally</Chip> : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
