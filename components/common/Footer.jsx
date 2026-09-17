import { SHELL } from "./Ui";

export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff1f] bg-[#000111]">
      <div className={`${SHELL} grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]`}>
        <div>
          <span className="flex items-center">
            <img
              src="/logo/Adsbuzz logo-White@2x.png"
              alt="AdsBuzz"
              className="h-[28px] w-auto object-contain"
            />
          </span>
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
  );
}
