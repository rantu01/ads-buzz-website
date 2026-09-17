"use client";

import React from 'react';
import { ArrowRight, Check, CheckCircle2, Phone, Send, ShieldCheck, ShieldAlert, XCircle, Clock, Zap, Share2, Music2, Search, Globe, Newspaper, Target } from 'lucide-react';

export default function PricingSection() {
  const platforms = [
    { name: "Facebook", Icon: Share2 },
    { name: "Low-Risk", Icon: ShieldCheck },
    { name: "Medium-Risk", Icon: ShieldAlert },
    { name: "TikTok", Icon: Music2 },
    { name: "Google", Icon: Search },
    { name: "Bing", Icon: Globe },
    { name: "Taboola", Icon: Newspaper },
    { name: "Outbrain", Icon: Target }
  ];

  const plans = [
    {
      name: "Gold",
      price: "$299",
      period: "PER MONTH",
      theme: "gold",
      isPopular: false,
      features: [
        "No Spend Fees (0%)",
        "Up to $50k/month in spend",
        "Top-up with Crypto/Bank transfer"
      ],
      bonuses: [
        "Meta Rep 24/7 access ($1,000 value)",
        "Professional Meta Asset Setup PDF ($500 value)",
        "Premium Partner Software Bundle ($1,156 value)"
      ],
      coreFeatures: [
        "Platinum HVA Accounts",
        "Reduce Bans & Restrictions",
        "Unlimited Ad Accounts",
        "Ad Account Issued Within 24h",
        "Up to 50% Lower CPA's",
        "8x Higher Ad Approval Rates"
      ]
    },
    {
      name: "Diamond",
      price: "$699",
      period: "PER MONTH",
      theme: "diamond",
      isPopular: false,
      features: [
        "No Spend Fees (0%)",
        "Up to $100k/month in spend",
        "Top-up with Crypto/Bank transfer"
      ],
      bonuses: [
        "Meta Rep 24/7 access ($1,000 value)",
        "Professional Meta Asset Setup PDF ($500 value)",
        "Premium Partner Software Bundle ($1,156 value)"
      ],
      coreFeatures: [
        "Platinum HVA Accounts",
        "Reduce Bans & Restrictions",
        "Unlimited Ad Accounts",
        "Ad Account Issued Within 24h",
        "Up to 50% Lower CPA's",
        "8x Higher Ad Approval Rates"
      ]
    },
    {
      name: "Platinum",
      price: "$995",
      period: "PER MONTH",
      theme: "platinum",
      isPopular: true,
      features: [
        "1% Cashback on ad spend",
        "Unlimited Monthly spend",
        "Top-up with Crypto/Bank transfer"
      ],
      bonuses: [
        "Meta Rep 24/7 access ($1,000 value)",
        "Professional Meta Asset Setup PDF ($500 value)",
        "Dedicated Account Manager ($500 value)",
        "Premium Partner Software Bundle ($1,156 value)"
      ],
      coreFeatures: [
        "Platinum HVA Accounts",
        "Reduce Bans & Restrictions",
        "Unlimited Ad Accounts",
        "Ad Account Issued Within 24h",
        "Up to 50% Lower CPA's",
        "8x Higher Ad Approval Rates"
      ]
    },
    {
      name: "Titanium",
      price: "$1,995",
      period: "PER MONTH",
      theme: "titanium",
      isPopular: false,
      badge: "Best Value",
      features: [
        "Up to 3% Cashback on Ad Spend",
        "Unlimited Daily Spend",
        "Connect Your Own Card",
        "Get ad spend paid by us*"
      ],
      bonuses: [
        "Meta Rep 24/7 access ($1,000 value)",
        "Professional Meta Asset Setup PDF ($500 value)",
        "Dedicated Account Manager ($500 value)",
        "Premium Partner Software Bundle ($1,156 value)"
      ],
      coreFeatures: [
        "Platinum HVA Accounts",
        "Reduce Bans & Restrictions",
        "Unlimited Ad Accounts",
        "Ad Account Issued Within 24h",
        "Up to 50% Lower CPA's",
        "8x Higher Ad Approval Rates"
      ]
    }
  ];

  // থিম অনুযায়ী কালার রিটার্ন করার ফাংশন
  const getThemeColors = (theme) => {
    switch (theme) {
      case 'gold':
        return { border: 'border-[#4A3B1A]', bg: 'bg-gradient-to-b from-[#2A200E] to-[#040719]', btn: 'bg-[#FACC15] text-black hover:bg-[#EAB308]', badge: 'text-[#FACC15] bg-[#FACC15]/10' };
      case 'diamond':
        return { border: 'border-[#1A3A3A]', bg: 'bg-gradient-to-b from-[#0E2A2A] to-[#040719]', btn: 'bg-[#2DD4BF] text-black hover:bg-[#14B8A6]', badge: 'text-[#2DD4BF] bg-[#2DD4BF]/10' };
      case 'platinum':
        return { border: 'border-[#1A3A5A]', bg: 'bg-gradient-to-b from-[#0E2A4A] to-[#040719]', btn: 'bg-[#60A5FA] text-black hover:bg-[#3B82F6]', badge: 'text-[#60A5FA] bg-[#60A5FA]/10' };
      case 'titanium':
        return { border: 'border-[#3A3A3A]', bg: 'bg-gradient-to-b from-[#2A2A2A] to-[#040719]', btn: 'bg-white text-black hover:bg-[#e7e7e7]', badge: 'text-white bg-white/10' };
      default:
        return { border: 'border-white/[0.12]', bg: 'bg-[#040719]', btn: 'bg-white text-black', badge: 'text-white bg-white/10' };
    }
  };

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-[#000111] text-white font-[var(--font-inter)] py-20 md:py-24 selection:bg-[#5f57ff]/30">
      <div className="max-w-[1260px] mx-auto px-5 md:px-8 flex flex-col items-center">

        {/* === টপ সেকশন === */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Limited Spots Available
          </div>

          <h2 id="pricing-heading" className="font-semibold tracking-[-1px] leading-[1.15] mb-4" style={{ fontSize: "var(--_typography---heading--h2)" }}>
            Get Your Agency Account Today!
          </h2>

          <p className="text-[#999999] text-base max-w-3xl leading-6 mb-6">
            <span className="text-red-400 font-semibold">Only 9/20 Spots left</span> | We only open access a few times per year to limited amount of clients to maintain the highest quality accounts & provide hands-on support. Secure your access now—before the doors close.
          </p>

          {/* ট্রাস্টেড ব্যাজ */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" loading="lazy" className="w-8 h-8 rounded-full border-2 border-[#000111]" />
              ))}
            </div>
            <span className="text-[#999999] text-sm">Trusted by 1,700+ Companies</span>
          </div>
        </div>

        {/* === প্ল্যাটফর্ম ফিল্টার বার === */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-6 py-3 rounded-2xl border border-white/[0.12] bg-[#040719] mb-8 max-w-5xl">
          {platforms.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#d2d4df] hover:text-white transition-colors cursor-pointer min-h-[44px]">
              <p.Icon size={16} aria-hidden="true" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>

        <div className="text-[#999999] text-xs mb-12 border border-white/[0.12] px-4 py-2 rounded-full bg-white/5">
          For low-risk businesses in mainstream industries.
        </div>

        {/* === প্রাইসিং কার্ড গ্রিড === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {plans.map((plan, index) => {
            const colors = getThemeColors(plan.theme);

            return (
              <div
                key={index}
                className={`link-card relative flex flex-col rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden shadow-xl`}
              >
                {/* পপুলার ব্যাজ */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-0 w-full bg-[#5f57ff] text-white text-center text-xs font-bold py-1.5 flex items-center justify-center gap-1 z-10">
                    <Zap size={14} className="fill-white" /> Earn Cashback on Ad Spend
                  </div>
                )}
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                    {plan.badge}
                  </div>
                )}

                <div className={`p-6 flex flex-col flex-1 ${plan.isPopular ? 'pt-10' : ''}`}>
                  {/* টাইটেল ও প্রাইস */}
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-3xl font-semibold">{plan.price}</span>
                    <span className="text-[10px] text-[#999999] mb-1">{plan.period}</span>
                  </div>

                  {/* চেক অ্যাভেইলেবিলিটি বাটন */}
                  <button className={`button-bright w-full py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors mb-6 min-h-[50px] ${colors.btn}`}>
                    Check Availability <ArrowRight size={16} />
                  </button>

                  {/* প্ল্যাটফর্ম আইকন (কার্ডের ভেতরে) */}
                  <div className="flex justify-center gap-3 mb-6 flex-wrap text-[#999999]">
                    {[Share2, Music2, Search, Globe, Newspaper, Target].map((Icon, i) => (
                      <span key={i} className="opacity-70 hover:opacity-100 hover:text-white transition-all cursor-pointer"><Icon size={16} aria-hidden="true" /></span>
                    ))}
                  </div>

                  {/* মেইন ফিচার */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#999999] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#d2d4df] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* বোনাস সেকশন */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-6">
                    <p className="text-[10px] text-[#999999] font-medium mb-2 uppercase tracking-[0.14em]">Bonuses Include:</p>
                    <div className="space-y-2">
                      {plan.bonuses.map((bonus, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check size={14} className="text-[#999999] shrink-0 mt-0.5" />
                          <span className="text-[10px] text-[#999999] leading-snug">
                            {bonus.includes('($') ? (
                              <>
                                {bonus.split('(')[0]}
                                <span className="text-[#d2d4df]">({bonus.split('(')[1]}</span>
                              </>
                            ) : bonus}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* কোর ফিচার */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] text-[#999999] font-medium uppercase tracking-[0.14em]">Core Features:</p>
                    {plan.coreFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#999999] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#d2d4df] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* বটম স্পেসার */}
                  <div className="mt-auto"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* === বটম CTA সেকশন === */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/[0.12] bg-[#040719] mb-12">
          <p className="text-[#d2d4df] text-base font-medium text-center md:text-left">
            Not sure where to start? Speak to one of our experts
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a href="#cta" className="button-bright flex items-center justify-center gap-2 px-7 min-h-[50px] rounded-full border border-white/[0.12] bg-white/[0.05] hover:bg-[#0b0c1f] transition-colors text-base font-medium">
              <Phone size={16} /> Book a Call
            </a>
            <a href="#cta" className="button-bright btn-glow flex items-center justify-center gap-2 px-7 min-h-[50px] rounded-full bg-[#5f57ff] text-white transition-colors text-base font-medium">
              <Send size={16} /> Telegram
            </a>
          </div>
        </div>

        {/* === ফুটার ফিচার === */}
        <div className="flex flex-wrap justify-center gap-8 text-[#999999] text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} /> No long-term commitments
          </div>
          <div className="flex items-center gap-2">
            <XCircle size={16} /> Cancel at any time
          </div>
          <div className="flex items-center gap-2 text-red-400">
            <Clock size={16} /> Limited Spots Available
          </div>
        </div>

      </div >
    </section>

  );
}
