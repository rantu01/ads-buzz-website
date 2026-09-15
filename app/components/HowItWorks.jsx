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
    <div className="min-h-auto bg-[#03050C] text-white font-sans flex flex-col items-center justify-center py-4 px-4 selection:bg-blue-500/30">
      
      {/* === হেডার সেকশন === */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <p className="text-[#3B82F6] text-sm md:text-base font-semibold tracking-wide mb-4 uppercase">
          How It Works
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
          Get your Agency Ad Accounts in 3 Simple Steps
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Getting started is fast, simple, and designed to keep your campaigns running smoothly—no stress, no bans.
        </p>
      </div>

      {/* === স্টেপস গ্রিড === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">
        {steps.map((item, index) => (
          <div 
            key={index} 
            className="relative flex items-start gap-5 p-6 rounded-2xl border border-white/[0.08] bg-[#0A0E17] hover:border-white/[0.15] transition-colors duration-300"
          >
            {/* আইকন বক্স */}
            <div className="shrink-0 w-12 h-12 rounded-lg bg-[#131823] border border-white/[0.05] flex items-center justify-center shadow-inner">
              {item.icon}
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <div className="flex flex-col flex-1 pt-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-[15px] font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                {/* স্টেপ ব্যাজ */}
                <span className="text-[10px] font-bold text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.step}
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}