"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Affiliates 25%", href: "#rewards" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] h-[89px] border-b border-[#ffffff1f] bg-[#000111]/95 backdrop-blur-[32px]">
      <div className="mx-auto flex h-full w-full max-w-[1260px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="flex min-h-[44px] items-center gap-2.5"
          aria-label="AdsBuzz home"
        >
          {/* <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center"
          >
            <img
              src="/logo/Adbuzz Icon Blue@2x.png"
              alt=""
              className="h-9 w-9 object-contain"
            />
          </span> */}

          <span className="flex items-center">
            <img
              src="/logo/Adsbuzz logo-White@2x.png"
              alt="AdsBuzz"
              className="h-[28px] w-auto object-contain"
            />
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex min-h-[44px] items-center rounded-full px-4 py-2 text-sm font-normal text-white transition-colors duration-300 hover:text-[#d2d4df]"
            >
              {l.label}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              type="button"
              aria-expanded={drop}
              aria-haspopup="true"
              onClick={() => setDrop((v) => !v)}
              className="flex min-h-[44px] items-center gap-1.5 rounded-full px-4 py-2 text-sm font-normal text-white transition-colors duration-300 hover:text-[#d2d4df]"
            >
              Agency Accounts
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {drop && (
              <div className="absolute left-0 top-full w-[260px] rounded-[20px] border border-[#ffffff1f] bg-[#000111] p-3 shadow-[rgba(0,0,0,0.25)_0px_4px_16px_0px]">
                {[
                  ["Meta Agency Ad Accounts", "#platforms"],
                  ["Google Agency Ad Accounts", "#platforms"],
                  ["TikTok Agency Ad Accounts", "#platforms"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-sm text-white transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#services"
            className="flex min-h-[44px] items-center rounded-full px-4 py-2 text-sm font-normal text-white transition-colors duration-300 hover:text-[#d2d4df]"
          >
            Other Services
          </a>
          <a
            href="#blog"
            className="flex min-h-[44px] items-center rounded-full px-4 py-2 text-sm font-normal text-white transition-colors duration-300 hover:text-[#d2d4df]"
          >
            Resources
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#pricing"
            className="button-bright btn-glow inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] px-6 text-sm font-medium text-white"
          >
            Get Started
          </a>
          <a
            href="#cta"
            className="button-bright btn-glow inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#5f57ff] px-6 text-sm font-medium text-white"
          >
            Telegram
          </a>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/[0.12] text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#ffffff1f] bg-[#040719cc] backdrop-blur-[32px] lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1260px] flex-col gap-1 px-5 py-4">
            {[...NAV_LINKS, { label: "Agency Accounts", href: "#pricing" }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-[15px] text-white hover:bg-white/[0.06]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 pb-2">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] px-6 text-sm font-medium text-white"
              >
                Get Started
              </a>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-[#5f57ff] px-6 text-sm font-medium text-white"
              >
                Telegram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
