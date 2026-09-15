import Reveal from "../common/Reveal";
import { SHELL, Eyebrow, PrimaryCta, SecondaryCta } from "../common/Ui";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#000111]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(95,87,255,0.28),transparent)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)",
          }}
        />
      </div>
      <div className={`${SHELL} relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center`}>
        <Reveal className="flex flex-col items-start gap-6">
          <Eyebrow>Whitelisted Agency Ad Accounts</Eyebrow>
          <h1
            id="hero-heading"
            className="font-semibold tracking-[-1px]"
            style={{ fontSize: "var(--_typography---heading--h1-large)", lineHeight: 1.15 }}
          >
            Unlock Limitless Advertising with{" "}
            <span className="text-gradient-silver">Whitelisted Agency Ad Accounts</span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#999999]">
            We Rent Agency Ad Accounts for Facebook, Google, TikTok &amp; More. Unlimited
            spend, zero bans and instant approval — scale your campaigns without limits.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryCta href="#cta">Chat with us</PrimaryCta>
            <SecondaryCta href="#cta">Book a Call</SecondaryCta>
          </div>
          <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#d2d4df]">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Setup time</dt>
              <dd><strong className="text-white">24h</strong> setup</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Uptime</dt>
              <dd><strong className="text-white">99.9%</strong> account stability</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Support</dt>
              <dd><strong className="text-white">24/7</strong> human support</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-[#ffffff26] bg-[#040719] p-5">
            <div aria-hidden="true" className="hero-pulse absolute right-8 top-8 h-2.5 w-2.5 rounded-full bg-[#70ed7c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#999999]">Total Ad Spend · Live</p>
            <p className="mt-2 text-4xl font-semibold text-white">$4,248,910</p>
            <p className="mt-1 text-sm text-[#70ed7c]">+38.2% this month</p>
            <div className="mt-5 grid grid-cols-7 items-end gap-2" aria-hidden="true">
              {[38, 56, 44, 72, 60, 88, 100].map((h, i) => (
                <div key={i} className="rounded-t-lg bg-gradient-to-t from-[#5f57ff] to-[#60aeff]" style={{ height: `${h * 1.4}px` }} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/[0.12] bg-[#000111] p-3">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5f57ff] font-semibold">U</span>
              <div>
                <p className="text-sm font-medium">Uproas Connection Active</p>
                <p className="text-xs text-[#999999]">Meta · Google · TikTok linked</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
