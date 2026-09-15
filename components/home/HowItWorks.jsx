"use client";

import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      step: "STEP 1",
      title: "Submit Your Business Info",
      description: "Tell us about your business so we can find the right fit.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      step: "STEP 2",
      title: "Find Your Account Easily",
      description: "Get approved and receive your account within 24 hours.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M3 10H21M7 15H8M12 15H13M17 15H18M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      step: "STEP 3",
      title: "Launch Ads with Confidence",
      description: "Start running ads instantly with stable, scalable accounts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section aria-labelledby="how-it-works-heading" className="bg-[#000111] text-white font-sans py-20 md:py-24 selection:bg-blue-500/30">
      <div className="max-w-[1260px] w-full mx-auto px-5 md:px-8 flex flex-col items-center">

        {/* === হেডার সেকশন === */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#3B82F6] text-sm font-semibold tracking-[0.14em] mb-4 uppercase">
            How It Works
          </p>
          <h2 id="how-it-works-heading" className="font-semibold tracking-[-1px] leading-[1.15] mb-5" style={{ fontSize: "var(--_typography---heading--h2)" }}>
            Get your Agency Ad Accounts in 3 Simple Steps
          </h2>
          <p className="text-[#999999] text-base leading-6 max-w-2xl">
            Getting started is fast, simple, and designed to keep your campaigns running smoothly—no stress, no bans.
          </p>
        </div>

        {/* === স্টেপস গ্রিড === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {steps.map((item, index) => (
            <div
              key={index}
              className="link-card relative flex items-start gap-5 p-6 rounded-2xl border border-white/[0.12] bg-[#040719] hover:border-white/[0.2] transition-colors duration-300"
            >
              {/* আইকন বক্স */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0b0c1f] border border-white/[0.08] flex items-center justify-center shadow-inner">
                {item.icon}
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div className="flex flex-col flex-1 pt-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-[15px] font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  {/* স্টেপ ব্যাজ */}
                  <span className="text-[10px] font-bold text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-0.5 rounded-full uppercase tracking-[0.14em]">
                    {item.step}
                  </span>
                </div>
                <p className="text-[#999999] text-sm leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
