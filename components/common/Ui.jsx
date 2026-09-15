import Reveal from "./Reveal";

export const SHELL = "mx-auto w-full max-w-[1260px] px-5 md:px-8";

export function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d2d4df]">
      {children}
    </p>
  );
}

export function PrimaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="button-bright btn-glow inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#5f57ff] px-7 text-base font-medium text-white"
    >
      {children}
    </a>
  );
}

export function SecondaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="button-bright inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] px-7 text-base font-medium text-white hover:bg-[#0b0c1f]"
    >
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, copy, align = "center" }) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-5 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className="max-w-3xl font-semibold tracking-[-1px] text-white"
        style={{ fontSize: "var(--_typography---heading--h2)", lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {copy ? <p className="max-w-2xl text-base leading-6 text-[#999999]">{copy}</p> : null}
    </Reveal>
  );
}
