import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import BookingSection from "@/components/home/BookingSection";
import MediaBlock from "@/components/home/MediaBlock";
import AdSolutions from "@/components/home/AdSolutions";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div id="top" className="bg-[#040719] text-white">
      <Header />

      <main id="main" className="pt-[89px]">
        {/* 1 · HERO */}
        <Hero />

        <BookingSection></BookingSection>

        {/* 3 · MEDIA block */}
        <MediaBlock />

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

      <Footer />
    </div>
  );
}
