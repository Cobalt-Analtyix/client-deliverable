import { Fragment } from "react";
import { Section, Callout } from "@/components/ui";
import { RT } from "@/lib/richText";
import sources from "@/data/detailed/sources.json";

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
        {sources.sources.map((s) => (
          <li id={s.id} key={s.id}>
            {s.label} <a href={s.url}>{s.host}</a>
          </li>
        ))}
      </ol>
    </Section>
  );
}
