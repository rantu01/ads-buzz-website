import Header from "./components/Header";
import Reveal from "./components/Reveal";
import { Faq, NewsletterForm } from "./components/Interactive";
import BookingSection from "./components/BookingSection";
import AdSolutions from "./components/AdSolutions";
import BenefitsSection from "./components/BenefitsSection";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";

const SHELL = "mx-auto w-full max-w-[1260px] px-5 md:px-8";

function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d2d4df]">
      {children}
    </p>
  );
}

function PrimaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="button-bright btn-glow inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#5f57ff] px-7 text-base font-medium text-white"
    >
      {children}
    </a>
  );
}

function SecondaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="button-bright inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] px-7 text-base font-medium text-white hover:bg-[#0b0c1f]"
    >
      {children}
    </a>
  );
}

function SectionHead({ eyebrow, title, copy, align = "center" }) {
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

const LOGOS = [
  "Wellcopy", "Floxy", "Foreplay", "Dolphin Anty", "Wetracked.io", "Earn Task",
  "MakeUGC", "Accelerated", "Chargeback", "RedShield", "Bustem", "Incognition",
];

const PLATFORMS = [
  { name: "Meta Agency Ad Accounts", desc: "Whitelisted Facebook and Instagram accounts with unlimited spend and instant approval.", tag: "Most Popular" },
  { name: "Google Agency Ad Accounts", desc: "Scale Search, YouTube and Display with zero bans and dedicated billing.", tag: "High Trust" },
  { name: "TikTok Agency Ad Accounts", desc: "Unlock limitless TikTok spend for e-commerce, lead gen and global offers.", tag: "Fast Setup" },
];

const BENEFITS = [
  { t: "No Spending Limits", d: "Break free from daily caps. Scale winners from $100 to $100,000 per day without reviews." },
  { t: "Zero Bans, Zero Rejections", d: "Whitelisted agency status keeps accounts stable while regular accounts get flagged." },
  { t: "Instant Approval", d: "Get your agency ad accounts ready in under 24 hours with guided onboarding." },
  { t: "Dedicated Support", d: "Real humans on Telegram and WhatsApp plus direct platform escalation paths." },
  { t: "Safe Billing", d: "Agency invoicing with transparent fees — no card flags, no surprise holds." },
  { t: "Multi-Platform", d: "One partner for Facebook, Google, TikTok, Bing and Taboola." },
];

const STEPS = [
  { n: "01", t: "Book a Quick Call", d: "Tell us your niche, spend goals and risk level. We match you to the right account type." },
  { n: "02", t: "Get Your Accounts Ready", d: "Receive whitelisted agency accounts, pixels and billing — set up in hours, not weeks." },
  { n: "03", t: "Scale Without Limits", d: "Launch, test and scale with unlimited spend plus ongoing reviews and support." },
];

const TESTIMONIALS = [
  { q: "Oliver is the founder and CEO of Bustem.com — a software and agency that protects e-commerce brands. Oliver has worked with us to scale spend past six figures a month with zero bans.", n: "Oliver", r: "Founder, Bustem.com" },
  { q: "Ecom King is a leading e-commerce mentor known for helping thousands start and scale online stores, building multiple successful brands and generating millions in tracked revenue.", n: "Ecom King", r: "E-commerce Mentor" },
  { q: "We moved from constant rejections to unlimited spend in 48 hours. Support replies in minutes, not days. Best decision for our agency this year.", n: "Lukas Lainsalu", r: "Sales Manager" },
];

const POSTS = [
  { t: "Ad Revenue Explained: How It Works", d: "The numbers behind profitable scaling in 2026." },
  { t: "Display Ad Networks: The Types That Matter", d: "Where agency accounts give you an unfair edge." },
  { t: "Social Media Retargeting: How To Win", d: "Turn warm traffic into limitless revenue." },
];

export default function Home() {
  return (
    <div id="top" className="bg-[#040719] text-white">
      <Header />

      <main id="main" className="pt-[89px]">
        {/* 1 · HERO */}
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
        
        <BookingSection></BookingSection>

        {/* 3 · MEDIA block */}
        <section aria-labelledby="review-heading" className="bg-[#000111]">
          <div className={`${SHELL} grid gap-6 pb-20 lg:grid-cols-2`}>
            <Reveal className="rounded-2xl border border-white/[0.15] bg-[#040719] p-8">
              <Eyebrow>Free Audit</Eyebrow>
              <h2 id="review-heading" className="mt-4 text-3xl font-semibold tracking-tight">
                Get Your Current Setup Reviewed
              </h2>
              <p className="mt-3 leading-6 text-[#999999]">
                Our media buyers audit your pixels, domains and account health — then map the
                fastest path to unlimited spend.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta href="#cta">Learn more</PrimaryCta>
                <SecondaryCta href="#cta">Get Started</SecondaryCta>
              </div>
            </Reveal>
            <Reveal className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-[#0d152e] to-[#14213e] p-8">
              <Eyebrow>Free Access to E-Books ($4,240 Value)</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Scaling Playbooks, Free With Any Account
              </h2>
              <div className="mt-6">
                <NewsletterForm />
              </div>
              <p className="mt-3 text-xs text-[#999999]">Join 18,000+ readers. Unsubscribe anytime.</p>
            </Reveal>
          </div>
        </section>

        {/* 4 · CONTENT — platforms */}
        <AdSolutions></AdSolutions>

        {/* 5 · BENEFITS */}
        <BenefitsSection></BenefitsSection>

        {/* 6 · SUCCESS STORIES */}
        <Testimonials></Testimonials>

        {/* 7 · HOW IT WORKS */}
        <HowItWorks></HowItWorks>

        {/* 8 · PRICING */}
        <PricingSection></PricingSection>

        {/* 9 · GUARANTEES */}
        {/* <section aria-labelledby="guarantee-heading" className="bg-[#000111]">
          <div className={`${SHELL} py-20`}>
            <SectionHead title="All Packages Come with Guarantees" />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                ["Replacement Guarantee", "Any banned account is replaced free — no questions, no downtime."],
                ["Stability Guarantee", "Whitelisted status keeps spend flowing through reviews and peaks."],
                ["Support Guarantee", "Replies in under 15 minutes on Telegram and WhatsApp, day or night."],
              ].map(([t, d]) => (
                <Reveal key={t} className="rounded-2xl border border-white/[0.15] bg-[#040719] p-6 text-center">
                  <h3 className="text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#999999]">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* 10 · COMPARISON */}
        {/* <section aria-labelledby="compare-heading" className="bg-[#000111]">
          <div className="mx-auto w-full max-w-[1024px] px-5 py-20 md:px-8">
            <SectionHead eyebrow="Uproas vs Others" title="Comparison" />
            <Reveal className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.15]">
              <table className="w-full min-w-[560px] border-collapse bg-[#040719] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.12] text-[#999999]">
                    <th scope="col" className="p-5 font-medium">Feature</th>
                    <th scope="col" className="bg-[#0b0c1f] p-5 font-semibold text-white">AdsBuzz Agency</th>
                    <th scope="col" className="p-5 font-medium">Regular Accounts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Spending limit", "Unlimited", "$50–$500/day caps"],
                    ["Ban risk", "Near zero (whitelisted)", "High"],
                    ["Approval time", "Under 24 hours", "Days to weeks"],
                    ["Support", "24/7 human + escalation", "Bots and forms"],
                    ["Replacement", "Free replacement", "Start over"],
                  ].map(([f, us, them]) => (
                    <tr key={f} className="border-b border-white/[0.08] last:border-0">
                      <th scope="row" className="p-5 font-medium text-[#d2d4df]">{f}</th>
                      <td className="bg-[#0b0c1f] p-5 font-semibold text-white">{us}</td>
                      <td className="p-5 text-[#999999]">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section> */}

        {/* 11 · BOOK A CALL */}
        {/* <section id="cta" aria-labelledby="call-heading" className="bg-[#000111]">
          <div className={`${SHELL} py-20`}>
            <Reveal className="relative overflow-hidden rounded-2xl border border-white/[0.15] bg-gradient-to-br from-[#191d4b] via-[#0b0c1f] to-[#040719] p-8 text-center md:p-14">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(95,87,255,0.35),transparent)]" />
              <div className="relative flex flex-col items-center gap-5">
                <h2 id="call-heading" className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                  Book a Quick Call &amp; Get Your Accounts Ready
                </h2>
                <p className="max-w-xl text-[#d2d4df]">
                  Talk to a real media buyer today. We will match your niche to the right
                  whitelisted accounts — free.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <PrimaryCta href="#pricing">Book a Call</PrimaryCta>
                  <SecondaryCta href="#pricing">Telegram</SecondaryCta>
                </div>
              </div>
            </Reveal>
          </div>
        </section> */}

        {/* 12 · REWARDS */}
        {/* <section id="rewards" aria-labelledby="rewards-heading" className="bg-[#000111]">
          <div className={`${SHELL} grid items-center gap-10 py-20 lg:grid-cols-2`}>
            <Reveal className="flex flex-col items-start gap-5">
              <Eyebrow>Spend Rewards</Eyebrow>
              <h2 id="rewards-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Get Rewarded for Your Ad Spend
              </h2>
              <p className="leading-6 text-[#999999]">
                Every dollar you spend earns points toward fee credits, free months and
                exclusive scaling workshops.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <SecondaryCta href="#rewards">See This Month&apos;s Leaders</SecondaryCta>
                <SecondaryCta href="#rewards">How to Claim</SecondaryCta>
              </div>
            </Reveal>
            <Reveal className="rounded-2xl border border-white/[0.15] bg-[#040719] p-6">
              <ol className="flex flex-col gap-4">
                {[["Alpha Media", "$812,400"], ["North Peak Co", "$640,200"], ["Bright Cartel", "$511,900"]].map(([n, s], i) => (
                  <li key={n} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#000111] p-4">
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5f57ff]/15 font-semibold text-[#b9b4ff]">
                        {i + 1}
                      </span>
                      <span className="font-medium">{n}</span>
                    </span>
                    <span className="text-sm text-[#70ed7c]">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section> */}

        {/* 13 · WHAT CLIENTS SAY + FAQ */}
        {/* <section aria-labelledby="clients-heading" className="bg-[#000111]">
          <div className={`${SHELL} py-20`}>
            <SectionHead eyebrow="Testimonials" title="What Our Clients Say" />
            <div className="mx-auto mt-10 grid max-w-4xl gap-6">
              <Faq
                items={[
                  { q: "Agency Accounts — how fast is setup?", a: "Most accounts go live within 24 hours. You get login access, billing and a guided launch checklist from a real manager." },
                  { q: "Other Services — do you cover my platform?", a: "We support Meta, Google, TikTok, Bing and Taboola, including low-risk, medium-risk and whitelisted verticals." },
                  { q: "Resources — what happens if an account is restricted?", a: "Every plan includes a free replacement guarantee plus direct escalation, so your spend never stops." },
                ]}
              />
            </div>
          </div>
        </section> */}

        {/* 14 · TEAM */}
        {/* <section id="team" aria-labelledby="team-heading" className="bg-[#000111]">
          <div className={`${SHELL} py-20`}>
            <SectionHead
              eyebrow="Built by people who care"
              title="Meet the Team"
              copy="Media buyers, account farmers and support leads who have managed over $40M in tracked ad spend."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                ["Uproas Team", "Founders & Strategy"],
                ["Lukas Lainsalu", "Sales Manager"],
                ["Growth Desk", "24/7 Support"],
              ].map(([n, r]) => (
                <Reveal key={n} className="link-card rounded-2xl border border-white/[0.15] bg-[#040719] p-6 text-center">
                  <span aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#191d4b] text-xl font-semibold">
                    {n[0]}
                  </span>
                  <h3 className="mt-4 font-semibold">{n}</h3>
                  <p className="text-sm text-[#999999]">{r}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 flex justify-center">
              <SecondaryCta href="#team">Meet the Uproas Team</SecondaryCta>
            </Reveal>
          </div>
        </section> */}

        {/* 15 · BLOG */}
        {/* <section id="blog" aria-labelledby="blog-heading" className="bg-[#000111]">
          <div className={`${SHELL} py-20`}>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <SectionHead align="left" eyebrow="Latest Blogs" title="Latest Blogs" />
              <Reveal>
                <SecondaryCta href="#blog">View all</SecondaryCta>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {POSTS.map((p) => (
                <Reveal key={p.t} as="article" className="link-card overflow-hidden rounded-2xl border border-white/[0.15] bg-[#040719]">
                  <div aria-hidden="true" className="blog-list-image h-40 bg-gradient-to-br from-[#36395e] via-[#191d4b] to-[#040719]" />
                  <div className="p-5">
                    <h3 className="font-semibold leading-6">{p.t}</h3>
                    <p className="mt-2 text-sm text-[#999999]">{p.d}</p>
                    <span className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-[#5f57ff]">
                      Read article →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* 16 · YOUTUBE */}
        {/* <section aria-labelledby="yt-heading" className="bg-[#000111]">
          <div className={`${SHELL} pb-24`}>
            <Reveal className="rounded-2xl border border-white/[0.15] bg-[#040719] p-8 text-center md:p-12">
              <Eyebrow>YouTube</Eyebrow>
              <h2 id="yt-heading" className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight">
                Follow Us on YouTube
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[#999999]">
                Weekly breakdowns on agency accounts, scaling systems and ban-proof setups.
              </p>
              <div className="mt-6 flex justify-center">
                <PrimaryCta href="#top">Subscribe</PrimaryCta>
              </div>
            </Reveal>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-[#ffffff1f] bg-[#000111]">
        <div className={`${SHELL} grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]`}>
          <div>
            <p className="flex items-center gap-2.5 text-lg font-semibold">
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5f57ff] text-[17px] font-bold">A</span>
              AdsBuzz
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#999999]">
              Premium agency ad accounts with unlimited spend, zero bans and instant
              approval. Scale your campaigns without limits.
            </p>
            <div className="mt-5 flex gap-3">
              {["Telegram", "WhatsApp"].map((c) => (
                <a
                  key={c}
                  href="#cta"
                  className="inline-flex min-h-[44px] items-center rounded-full border border-white/[0.12] px-5 text-sm text-white hover:bg-white/[0.06]"
                >
                  {c}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-semibold text-white">Company</p>
              <ul className="mt-3 flex flex-col gap-1">
                {[["Pricing", "#pricing"], ["Affiliates 25%", "#rewards"], ["Team", "#team"]].map(([l, h]) => (
                  <li key={l}>
                    <a href={h} className="inline-flex min-h-[44px] items-center text-[#999999] hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Resources</p>
              <ul className="mt-3 flex flex-col gap-1">
                {[["Blog", "#blog"], ["Reviews", "#testimonials"], ["Contact", "#cta"]].map(([l, h]) => (
                  <li key={l}>
                    <a href={h} className="inline-flex min-h-[44px] items-center text-[#999999] hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="border-t border-white/[0.08]">
          <div className={`${SHELL} flex flex-col items-center justify-between gap-3 py-6 text-xs text-[#999999] sm:flex-row`}>
            <p>© 2026 AdsBuzz. All rights reserved.</p>
            <p>Unlock Limitless Advertising.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
