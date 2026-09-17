"use client";

import React from 'react';
import { ArrowRight, Check, DollarSign, Eye } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Up to 3% Cashback on Your Spend",
      description: "Choose the titanium package and earn up to 3% cashback on your ad spend.",
      image: (
        <div className="w-full h-full bg-[#040719] flex flex-col justify-center items-center p-6 border-b border-white/[0.12] relative overflow-hidden">
           <div className="w-full flex justify-between items-center mb-4 z-10">
              <span className="text-[#5f57ff] font-bold italic text-lg">adsbuzz</span>
             <span className="text-[#999999] text-xs">SALARY</span>
           </div>
           <div className="w-full text-center z-10">
             <h3 className="text-3xl font-semibold text-white">$62,358.7</h3>
           </div>
           <div className="w-full flex justify-between items-center mt-6 z-10">
             <div className="flex gap-2">
                <div className="w-6 h-4 bg-[#5f57ff] rounded-sm"></div>
                <div className="w-6 h-4 bg-[#d2d4df] rounded-sm"></div>
             </div>
             <span className="text-[#999999] text-[10px]">01/25</span>
           </div>
           {/* Background Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#5f57ff]/20 blur-2xl"></div>
        </div>
      )
    },
    {
      title: "Run Aggressive D2C Claims",
      description: "Unlock explosive growth with bold, high-impact offers designed for direct-to-consumer brands.",
      image: (
        <div className="w-full h-full bg-gradient-to-b from-[#191d4b] to-[#040719] flex flex-col justify-center items-center p-4 border-b border-white/[0.12] relative">
           <div className="text-center mb-4 z-10">
             <h3 className="text-xl font-semibold text-white">Lose 5 KG</h3>
             <p className="text-sm text-[#d2d4df]">in 2 Days</p>
           </div>
           <div className="flex items-center gap-4 z-10">
              <div className="w-16 h-24 bg-[#5f57ff]/20 rounded-t-full border border-[#5f57ff]/30 flex items-end justify-center pb-1">
                 <span className="text-[10px] text-[#d2d4df]">Before</span>
             </div>
             <ArrowRight className="text-white w-5 h-5" />
             <div className="w-16 h-24 bg-[#5f57ff]/30 rounded-t-full border border-[#5f57ff]/50 flex items-end justify-center pb-1">
                 <span className="text-[10px] text-[#d2d4df]">After</span>
             </div>
           </div>
        </div>
      )
    },
    {
      title: "Run Ads For Multiple Verticals",
      description: "Run any kind of ads with our Facebook agency ad accounts, many verticals accepted. We have a solution for almost everyone.",
      image: (
        <div className="w-full h-full bg-[#040719] flex justify-center items-center border-b border-white/[0.12] relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           {/* Placeholder for Hacker Image */}
           <div className="w-24 h-24 rounded-full bg-[#0b0c1f] border-2 border-white/[0.12] flex items-center justify-center z-10 shadow-[0_0_30px_rgba(95,87,255,0.15)]">
              <div className="w-16 h-16 bg-[#0b0c1f] rounded-full flex items-center justify-center">
                 <Eye className="w-7 h-7 text-[#d2d4df]" />
              </div>
           </div>
            <div className="absolute top-4 right-4 text-[#d2d4df] text-xl font-bold z-10">$</div>
            <div className="absolute bottom-4 left-4 text-[#d2d4df] text-xl font-bold z-10">$</div>
        </div>
      )
    },
    {
      title: "Reduce Bans & Restrictions",
      description: "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend, instant replacements, and dedicated support.",
      image: (
        <div className="w-full h-full bg-gradient-to-tr from-[#191d4b] to-[#040719] flex justify-center items-end border-b border-white/[0.12] relative overflow-hidden">
           {/* Placeholder for Soldier Image */}
           <div className="w-32 h-32 bg-[#5f57ff]/20 rounded-t-full border-t border-x border-[#5f57ff]/30 flex items-end justify-center pb-2 relative z-10">
              <div className="w-12 h-12 bg-[#5f57ff]/40 rounded-full mb-2"></div>
           </div>
           <span className="absolute bottom-4 right-6 text-white font-bold tracking-widest z-10">YOU</span>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5f57ff]/20 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      title: "Scale Without Limits",
      description: "We offer unlimited ad spend potential on various advertising platforms, helping you reach new heights without hitting budget restrictions or account caps.",
      image: (
        <div className="w-full h-full bg-[#040719] flex flex-col justify-center items-center p-6 border-b border-white/[0.12] relative overflow-hidden">
           {/* Chart Placeholder */}
           <div className="w-full h-24 relative mb-4">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                 <path d="M0 40 Q 20 40, 30 25 T 60 10 T 80 20 T 100 5" fill="none" stroke="#5f57ff" strokeWidth="2" />
                 <circle cx="100" cy="5" r="3" fill="#5f57ff" />
              </svg>
              <span className="absolute top-0 right-0 text-[#999999] text-[10px]">∞</span>
           </div>
           <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0b0c1f] border border-white/[0.12] flex items-center justify-center"><DollarSign size={20} className="text-[#d2d4df]" /></div>
              <div>
                 <p className="text-[#999999] text-xs">Total Spend</p>
                 <p className="text-white font-semibold">$18,890.00</p>
              </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#5f57ff]/10 to-transparent"></div>
        </div>
      )
    },
    {
      title: "Ads Approved in Seconds",
      description: "With our direct access to premium agency ad accounts, your digital advertising campaigns get approved faster and start running without delays or issues.",
      image: (
        <div className="w-full h-full bg-[#040719] flex justify-center items-center border-b border-white/[0.12] relative">
           <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Center Check */}
              <div className="w-16 h-16 bg-[#5f57ff] rounded-full flex items-center justify-center z-20 border-4 border-[#040719] shadow-[0_0_20px_rgba(95,87,255,0.5)]">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              {/* Orbiting Icons */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl font-semibold text-[#4285F4] z-10">G</div>
              <div className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl font-bold text-[#1877F2] z-10">f</div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-xl font-bold text-white z-10">d</div>
              <div className="absolute inset-0 border border-dashed border-white/20 rounded-full scale-125"></div>
           </div>
           <span className="absolute bottom-4 text-xs text-[#999999] bg-white/5 px-2 py-1 rounded-full">Ads Approved in Seconds</span>
        </div>
      )
    },
    {
      title: "Keep Your Ads Running",
      description: "If your ad account gets disabled, we'll instantly replace it for you, so your campaigns continue running without interruption.",
      image: (
        <div className="w-full h-full bg-[#040719] flex flex-col justify-end p-6 border-b border-white/[0.12] relative overflow-hidden">
           {/* Graph */}
           <div className="w-full h-24 relative mb-4">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                 <path d="M0 45 Q 10 20, 20 30 T 40 15 T 60 25 T 80 10 T 100 20" fill="none" stroke="#5f57ff" strokeWidth="2" />
              </svg>
           </div>
           <div className="flex justify-between text-[10px] text-[#999999] w-full mb-4">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
           </div>
           <div className="flex justify-end gap-4 text-[10px] text-[#d2d4df]">
               <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#5f57ff]"></div> AdsBuzz</div>
               <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#999999]"></div> Others</div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#5f57ff]/10 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      title: "Never Lose Your Pixel Data",
      description: "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data forever.",
      image: (
        <div className="w-full h-full bg-[#040719] flex justify-center items-center border-b border-white/[0.12] relative gap-4">
           <div className="w-16 h-16 bg-[#0b0c1f] border border-white/[0.12] rounded-xl flex items-center justify-center transform -rotate-6 shadow-lg z-10">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#5f57ff] to-[#60aeff] rounded-sm transform skew-x-12"></div>
           </div>
           <div className="w-8 h-2 bg-[#5f57ff] rounded-full z-0"></div>
           <div className="w-16 h-16 bg-[#0b0c1f] border border-white/[0.12] rounded-xl flex items-center justify-center transform rotate-6 shadow-lg z-10">
               <span className="text-white font-bold">{'</>'}</span>
           </div>
           <div className="absolute inset-0 bg-[#5f57ff]/5 blur-xl"></div>
        </div>
      )
    },
    {
      title: "Lower CPA's & CPM's",
      description: "Our whitelisted agency ad accounts have built up a strong reputation over the years, allowing us to get up to 50% lower CPAs and CPMs.",
      image: (
        <div className="w-full h-full bg-[#040719] flex justify-center items-center border-b border-white/[0.12] relative">
           {/* Floating Coins */}
           <div className="absolute top-6 w-10 h-10 bg-[#0b0c1f] border border-white/[0.12] rounded-full flex items-center justify-center text-[#d2d4df] z-10">$</div>
           <div className="absolute bottom-8 left-12 w-10 h-10 bg-[#0b0c1f] border border-white/[0.12] rounded-full flex items-center justify-center text-[#d2d4df] z-10">%</div>
           <div className="absolute bottom-8 right-12 w-10 h-10 bg-[#0b0c1f] border border-white/[0.12] rounded-full flex items-center justify-center text-[#d2d4df] z-10">$</div>

           <div className="w-20 h-20 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center z-0">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03]"></div>
           </div>
           <div className="absolute w-32 h-32 rounded-full border border-dashed border-white/5"></div>
        </div>
      )
    }
  ];

  return (
    <section aria-labelledby="benefits-heading" className="bg-[#000111] text-white font-[var(--font-inter)] py-20 md:py-24 selection:bg-[#5f57ff]/30">
      <div className="max-w-[1260px] w-full mx-auto px-5 md:px-8">

        {/* === হেডার সেকশন === */}
        <div className="mb-12">
          <p className="text-[#5f57ff] text-sm font-semibold tracking-[0.14em] mb-4 uppercase">
            Benefits
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
            <h2 id="benefits-heading" className="font-semibold tracking-[-1px] leading-[1.15] max-w-2xl" style={{ fontSize: "var(--_typography---heading--h2)" }}>
              Break Free from Spending Limits, Rejections, and Bans
            </h2>
            <p className="text-[#999999] text-base max-w-xl leading-6">
              We work closely with ad platforms to ensure you, as an entrepreneur, can run your ads smoothly. As 8-figure e-commerce entrepreneurs ourselves, we know the struggles all too well and wish we had this solution back in the day. Now, we&apos;re bringing this powerful tool to you. Scale without limits & get higher ROI with agency ad accounts.
            </p>
          </div>

          <a href="#pricing" className="button-bright inline-flex min-h-[50px] items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-7 text-base font-medium text-white hover:bg-[#0b0c1f] group">
            View Pricing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* === বেনিফিট গ্রিড === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="link-card flex flex-col rounded-2xl border border-white/[0.12] bg-[#040719] overflow-hidden hover:border-white/[0.2] transition-colors duration-300"
            >
              {/* ইমেজ সেকশন */}
              <div className="h-[200px] w-full relative">
                {benefit.image}
              </div>

              {/* টেক্সট সেকশন */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#999999] text-sm leading-6">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
