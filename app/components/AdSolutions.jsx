"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AdSolutions() {
  const adPlatforms = [
    {
      title: "Meta Agency Ad Accounts",
      description: "Run high-performing ads with trusted, whitelisted Meta accounts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
        </svg>
      )
    },
    {
      title: "Google Agency Ad Accounts",
      description: "Scale search and display campaigns with higher approval and reach.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      )
    },
    {
      title: "Tiktok Agency Ad Accounts",
      description: "Launch fast-growing campaigns with better reach and engagement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.28-6.3v-6.9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.73-.23z" fill="#25F4EE"/>
          <path d="M20.27 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.28-6.3v-6.9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.05-.23z" fill="#FE2C55"/>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.28-6.3v-6.9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.73-.23z" fill="#000000"/>
        </svg>
      )
    },
    {
      title: "Bing Agency Ad Accounts",
      description: "Capture high-intent traffic with reliable Microsoft ad accounts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M5 3v16.5l5.5 3 5.5-3V15l4-1.5-9-3.5V3H5z" fill="#008373"/>
        </svg>
      )
    },
    {
      title: "Taboola Agency Ad Accounts",
      description: "Reach premium audiences through trusted native placements.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" fill="#0055FF"/>
          <path d="M8 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="14" r="2" fill="white"/>
        </svg>
      )
    },
    {
      title: "Outbrain Agency Ad Accounts",
      description: "Drive scalable traffic with high-performing native ads across premium publisher networks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" fill="#000000"/>
          <circle cx="12" cy="12" r="6" stroke="#F5A623" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="2" fill="#F5A623"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#05070C] text-white font-sans flex items-center justify-center py-20 px-4 selection:bg-blue-500/30">
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* === হেডার সেকশন === */}
        <div className="mb-12">
          <p className="text-[#3B82F6] text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">
            Enterprise Ad Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight">
            Limitless Scaling with Agency Ad Accounts <br className="hidden md:block" />
            Across All Platforms
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              We work with all major social media platforms to provide enterprise-tier solutions for businesses of all sizes. Forget about advertising limitations, restrictions and unsustainable campaigns.
            </p>
            
            {/* অ্যাকশন বাটন */}
            <div className="flex items-center gap-4 shrink-0">
              <button className="px-6 py-3 rounded-lg bg-[#111827] border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm md:text-base">
                Learn more
              </button>
              <button className="px-6 py-3 rounded-lg bg-[#111827] border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm md:text-base flex items-center gap-2 group">
                Get Started 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* === কার্ড গ্রিড সেকশন === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adPlatforms.map((platform, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-white/[0.08] bg-[#0A0E17] hover:bg-[#0D121F] hover:border-white/[0.15] transition-all duration-300 flex flex-col gap-5"
            >
              {/* আইকন এবং টাইটেল */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:bg-white/[0.06] transition-colors">
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                  {platform.title}
                </h3>
              </div>
              
              {/* ডেসক্রিপশন */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}