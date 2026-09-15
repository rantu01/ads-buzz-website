"use client";

import { useState } from "react";

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-white/[0.12] bg-[#040719]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-white"
            >
              {item.q}
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-lg leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-6 text-[#999999]">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      action="#"
      method="GET"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Where should we email your access?
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="johndoe32@gmail.com"
        className="h-[50px] w-full flex-1 rounded-full border border-white/[0.12] bg-[#0b0c1f] px-5 text-base text-white placeholder:text-[#999999]"
      />
      <button
        type="submit"
        className="button-bright btn-glow inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#5f57ff] px-6 text-sm font-medium text-white"
      >
        {sent ? "Check Your Inbox" : "Get Access"}
      </button>
    </form>
  );
}
