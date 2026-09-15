"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Up to 3% Cashback on Your Spend",
      description: "Choose the titanium package and earn up to 3% cashback on your ad spend.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex flex-col justify-center items-center p-6 border-b border-white/5 relative overflow-hidden">
           <div className="w-full flex justify-between items-center mb-4 z-10">
             <span className="text-blue-400 font-bold italic text-lg">uproas</span>
             <span className="text-gray-400 text-xs">SALARY</span>
           </div>
           <div className="w-full text-center z-10">
             <h3 className="text-3xl font-bold text-white">$62,358.7</h3>
           </div>
           <div className="w-full flex justify-between items-center mt-6 z-10">
             <div className="flex gap-2">
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
             </div>
             <span className="text-gray-500 text-[10px]">01/25</span>
           </div>
           {/* Background Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-2xl"></div>
        </div>
      )
    },
    {
      title: "Run Aggressive D2C Claims",
      description: "Unlock explosive growth with bold, high-impact offers designed for direct-to-consumer brands.",
      image: (
        <div className="w-full h-full bg-gradient-to-b from-[#2E1065] to-[#0A0A14] flex flex-col justify-center items-center p-4 border-b border-white/5 relative">
           <div className="text-center mb-4 z-10">
             <h3 className="text-xl font-bold text-white">Lose 5 KG</h3>
             <p className="text-sm text-gray-300">in 2 Days</p>
           </div>
           <div className="flex items-center gap-4 z-10">
             <div className="w-16 h-24 bg-purple-500/30 rounded-t-full border border-purple-400/50 flex items-end justify-center pb-1">
                <span className="text-[10px] text-purple-200">Before</span>
             </div>
             <ArrowRight className="text-white w-5 h-5" />
             <div className="w-16 h-24 bg-blue-500/30 rounded-t-full border border-blue-400/50 flex items-end justify-center pb-1">
                <span className="text-[10px] text-blue-200">After</span>
             </div>
           </div>
        </div>
      )
    },
    {
      title: "Run Ads For Multiple Verticals",
      description: "Run any kind of ads with our Facebook agency ad accounts, many verticals accepted. We have a solution for almost everyone.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex justify-center items-center border-b border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           {/* Placeholder for Hacker Image */}
           <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                 <span className="text-2xl">🕵️</span>
              </div>
           </div>
           <div className="absolute top-4 right-4 text-green-500 text-xl font-bold z-10">$</div>
           <div className="absolute bottom-4 left-4 text-green-500 text-xl font-bold z-10">$</div>
        </div>
      )
    },
    {
      title: "Reduce Bans & Restrictions",
      description: "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend, instant replacements, and dedicated support.",
      image: (
        <div className="w-full h-full bg-gradient-to-tr from-[#1E3A8A] to-[#0A0A14] flex justify-center items-end border-b border-white/5 relative overflow-hidden">
           {/* Placeholder for Soldier Image */}
           <div className="w-32 h-32 bg-blue-400/20 rounded-t-full border-t border-x border-blue-300/30 flex items-end justify-center pb-2 relative z-10">
              <div className="w-12 h-12 bg-blue-300/40 rounded-full mb-2"></div>
           </div>
           <span className="absolute bottom-4 right-6 text-white font-bold tracking-widest z-10">YOU</span>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      title: "Scale Without Limits",
      description: "We offer unlimited ad spend potential on various advertising platforms, helping you reach new heights without hitting budget restrictions or account caps.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex flex-col justify-center items-center p-6 border-b border-white/5 relative overflow-hidden">
           {/* Chart Placeholder */}
           <div className="w-full h-24 relative mb-4">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                 <path d="M0 40 Q 20 40, 30 25 T 60 10 T 80 20 T 100 5" fill="none" stroke="#3B82F6" strokeWidth="2" />
                 <circle cx="100" cy="5" r="3" fill="#3B82F6" />
              </svg>
              <span className="absolute top-0 right-0 text-gray-400 text-[10px]">∞</span>
           </div>
           <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#13131F] border border-white/10 flex items-center justify-center text-2xl">💲</div>
              <div>
                 <p className="text-gray-500 text-xs">Total Spend</p>
                 <p className="text-white font-bold">$18,890.00</p>
              </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        </div>
      )
    },
    {
      title: "Ads Approved in Seconds",
      description: "With our direct access to premium agency ad accounts, your digital advertising campaigns get approved faster and start running without delays or issues.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex justify-center items-center border-b border-white/5 relative">
           <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Center Check */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-20 border-4 border-[#0A0A14] shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              {/* Orbiting Icons */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl z-10">G</div>
              <div className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl z-10">f</div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-xl z-10">🎵</div>
              <div className="absolute inset-0 border border-dashed border-white/20 rounded-full scale-125"></div>
           </div>
           <span className="absolute bottom-4 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">Ads Approved in Seconds</span>
        </div>
      )
    },
    {
      title: "Keep Your Ads Running",
      description: "If your ad account gets disabled, we'll instantly replace it for you, so your campaigns continue running without interruption.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex flex-col justify-end p-6 border-b border-white/5 relative overflow-hidden">
           {/* Graph */}
           <div className="w-full h-24 relative mb-4">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                 <path d="M0 45 Q 10 20, 20 30 T 40 15 T 60 25 T 80 10 T 100 20" fill="none" stroke="#3B82F6" strokeWidth="2" />
              </svg>
           </div>
           <div className="flex justify-between text-[10px] text-gray-500 w-full mb-4">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
           </div>
           <div className="flex justify-end gap-4 text-[10px]">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Uproas</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-500"></div> Others</div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      title: "Never Lose Your Pixel Data",
      description: "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data forever.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex justify-center items-center border-b border-white/5 relative gap-4">
           <div className="w-16 h-16 bg-[#13131F] border border-white/10 rounded-xl flex items-center justify-center transform -rotate-6 shadow-lg z-10">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-sm transform skew-x-12"></div>
           </div>
           <div className="w-8 h-2 bg-blue-500 rounded-full z-0"></div>
           <div className="w-16 h-16 bg-[#13131F] border border-white/10 rounded-xl flex items-center justify-center transform rotate-6 shadow-lg z-10">
              <span className="text-white font-mono font-bold">{'</>'}</span>
           </div>
           <div className="absolute inset-0 bg-blue-500/5 blur-xl"></div>
        </div>
      )
    },
    {
      title: "Lower CPA's & CPM's",
      description: "Our whitelisted agency ad accounts have built up a strong reputation over the years, allowing us to get up to 50% lower CPAs and CPMs.",
      image: (
        <div className="w-full h-full bg-[#0A0A14] flex justify-center items-center border-b border-white/5 relative">
           {/* Floating Coins */}
           <div className="absolute top-6 w-10 h-10 bg-[#1A1A2E] border border-white/10 rounded-full flex items-center justify-center text-gray-400 z-10">$</div>
           <div className="absolute bottom-8 left-12 w-10 h-10 bg-[#1A1A2E] border border-white/10 rounded-full flex items-center justify-center text-gray-400 z-10">%</div>
           <div className="absolute bottom-8 right-12 w-10 h-10 bg-[#1A1A2E] border border-white/10 rounded-full flex items-center justify-center text-gray-400 z-10">$</div>
           
           <div className="w-20 h-20 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center z-0">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03]"></div>
           </div>
           <div className="absolute w-32 h-32 rounded-full border border-dashed border-white/5"></div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#05070C] text-white font-sans flex justify-center py-20 px-4 selection:bg-blue-500/30">
      <div className="max-w-[1100px] w-full">
        
        {/* === হেডার সেকশন === */}
        <div className="mb-14">
          <p className="text-[#3B82F6] text-sm font-semibold tracking-wider mb-3 uppercase">
            Benefits
          </p>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight max-w-2xl">
              Break Free from Spending Limits, Rejections, and Bans
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
              We work closely with ad platforms to ensure you, as an entrepreneur, can run your ads smoothly. As 8-figure e-commerce entrepreneurs ourselves, we know the struggles all too well and wish we had this solution back in the day. Now, we're bringing this powerful tool to you. Scale without limits & get higher ROI with agency ad accounts.
            </p>
          </div>

          <button className="px-5 py-2.5 rounded-lg bg-[#111827] border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium flex items-center gap-2 group">
            View Pricing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* === বেনিফিট গ্রিড === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A0E17] overflow-hidden hover:border-white/[0.15] transition-colors duration-300"
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
                <p className="text-gray-400 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}