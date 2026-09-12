"use client";

import { useEffect, useRef, useState } from "react";

export type SectionLink = { href: string; label: string };

export function SectionNav({ links }: { links: SectionLink[] }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    if (!("IntersectionObserver" in window) || targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveHref(`#${en.target.id}`);
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [links]);

  return (
    <nav className="secnav" ref={navRef} aria-label="Sections">
      {links.map((l) => (
        <a key={l.href} href={l.href} className={activeHref === l.href ? "on" : ""}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
