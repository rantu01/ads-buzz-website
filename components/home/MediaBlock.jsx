import Reveal from "../common/Reveal";
import { NewsletterForm } from "../common/Interactive";
import { SHELL, Eyebrow, PrimaryCta, SecondaryCta } from "../common/Ui";

export default function MediaBlock() {
  return (
    <section aria-labelledby="review-heading" className="bg-[#000111]">
      <div className={`${SHELL} grid gap-6 pb-20 md:pb-24 lg:grid-cols-2`}>
        <Reveal className="rounded-2xl border border-white/[0.12] bg-[#040719] p-8">
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
        <Reveal className="rounded-2xl border border-white/[0.12] bg-gradient-to-br from-[#0d152e] to-[#14213e] p-8">
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
  );
}
