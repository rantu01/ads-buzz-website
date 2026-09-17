"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, MessageSquare, Zap, ChevronDown } from 'lucide-react';

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState('form');

  // লোগো ডেটা
  const logosRow1 = ["nelliCopy", "floxy", "foreplay", "Dolphin(anty)", "wetracked.io", "EarnTask", "mokeugc", "TechFlow", "ScaleUp"];
  const logosRow2 = ["ug", "AdsPower", "capital club", "PLUMI", "Dropship", "ICECARTEL", "TrackBee", "moro", "AdVantage", "MarketPro"];

  // ক্যালেন্ডার ডেটা
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const calendarDays = [
    30, 31, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 1, 2, 3
  ];

  return (
    <div className="bg-[#000111] text-white font-[var(--font-inter)] overflow-hidden relative flex flex-col items-center py-20 selection:bg-[#5f57ff]/30">

      {/* ================= BACKGROUND SECTION (LOCAL IMAGE) ================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center items-end">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url('/bg-img/img-3.png')` }}
        ></div>
        {/* ব্ল্যাক গ্রেডিয়েন্ট ওভারলে যাতে নিচের দিকটা ভালোভাবে মিশে যায় */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000111] via-transparent to-[#000111]"></div>
      </div>
      {/* ================= END BACKGROUND SECTION ================= */}


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1260px] mx-auto flex flex-col items-center px-5 md:px-8 mt-2">

        {/* === লোগো সেকশন === */}
        <div className="w-full flex flex-col items-center justify-center gap-8 mb-20 opacity-60 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000111] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000111] to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex w-[200%] animate-scroll-left">
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow1.map((logo, i) => (
                <span key={`r1-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-[#d2d4df] whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow1.map((logo, i) => (
                <span key={`r1-dup-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-[#d2d4df] whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-[200%] animate-scroll-right">
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow2.map((logo, i) => (
                <span key={`r2-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-[#d2d4df] whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow2.map((logo, i) => (
                <span key={`r2-dup-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-[#d2d4df] whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
          </div>
        </div>

        {/* === মেইন কার্ড কন্টেইনার === */}
        <div className="relative w-full max-w-[900px] flex justify-center mt-24">

          {/* ড্যাশ লাইন (কার্ডের উপরে) */}
          <div className="absolute hidden md:block top-[-100px] left-[10%] w-[1px] h-[100px] dashed-line z-0"></div>
          <div className="absolute hidden md:block top-[-100px] left-1/2 -translate-x-1/2 w-[1px] h-[100px] dashed-line z-0"></div>
          <div className="absolute hidden md:block top-[-100px] right-[10%] w-[1px] h-[100px] dashed-line z-0"></div>

          {/* ফিচার ব্যাজ */}
          <div className="absolute top-[-140px] w-full hidden sm:flex justify-between gap-2 px-[2%] md:px-[5%] z-20">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.12] bg-[#040719] text-xs md:text-sm font-medium shadow-lg">
              <MessageSquare size={16} className="text-[#d2d4df]" /> Get Your Current Setup Reviewed
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.12] bg-[#040719] text-xs md:text-sm font-medium shadow-lg">
              <CheckCircle2 size={16} className="text-[#d2d4df]" /> Free Access to E-Books ($4,245 Value)
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.12] bg-[#040719] text-xs md:text-sm font-medium shadow-lg">
              <Zap size={16} className="text-[#d2d4df]" /> Start Scaling The Same Day
            </div>
          </div>

          {/* === মেইন বুকিং কার্ড === */}
          <div className="relative z-10 w-full rounded-2xl border border-white/[0.12] bg-[#040719]/90 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col mt-4">

            {/* কার্ড হেডার */}
            <div className="flex justify-center items-center py-4 border-b border-white/[0.12] relative bg-white/[0.02]">
              <div className="flex items-center gap-8 text-sm font-medium">
                <button onClick={() => setActiveTab('form')} className={`flex items-center gap-2 transition-colors ${activeTab === 'form' ? 'text-white' : 'text-[#999999]'}`}>
                  <div className={`w-2 h-2 rounded-full ${activeTab === 'form' ? 'bg-[#5f57ff]' : 'bg-white/[0.12]'}`}></div> Fill out the form
                </button>
                <button onClick={() => setActiveTab('calendar')} className={`flex items-center gap-2 transition-colors ${activeTab === 'calendar' ? 'text-white' : 'text-[#999999]'}`}>
                  <div className={`w-2 h-2 rounded-full ${activeTab === 'calendar' ? 'bg-[#5f57ff]' : 'bg-white/[0.12]'}`}></div> Book your event
                </button>
              </div>
            </div>

            {/* কার্ড বডি */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* বাম দিক: ফর্ম */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/[0.12] relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 bg-gradient-to-tr from-[#5f57ff] to-[#60aeff] rounded-sm transform -skew-x-12"></div>
                  <span className="font-semibold text-lg tracking-wide">adsbuzz</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight mb-2">Agency Ad Accounts | Strategy Call</h2>
                <p className="text-[#999999] text-sm mb-8">Let&apos;s scale your business without limits!</p>

                <form className="space-y-4">
                  <div className="flex items-center bg-[#0b0c1f] border border-white/[0.12] rounded-xl overflow-hidden focus-within:border-[#5f57ff] transition-colors">
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-r border-white/[0.12]">
                      <span className="text-lg">🇧🇩</span><span className="text-[#d2d4df] text-sm">+880</span><ChevronDown size={14} className="text-[#999999]" />
                    </div>
                    <input type="tel" aria-label="Phone number" className="flex-1 bg-transparent px-4 py-3 outline-none text-white w-full" />
                  </div>
                  <div className="bg-[#0b0c1f] border border-white/[0.12] rounded-xl focus-within:border-[#5f57ff] transition-colors">
                    <input type="text" placeholder="Name *" aria-label="Name" className="w-full bg-transparent px-4 py-3 outline-none text-white placeholder-[#999999]" />
                  </div>
                  <p className="text-[11px] text-[#999999] leading-relaxed mt-2">
                    By entering your information, you consent to your data being saved in accordance with our <a href="#" className="underline hover:text-[#d2d4df]">Terms & Privacy Policy</a>.
                  </p>
                  <button type="button" className="button-bright btn-glow w-full mt-4 bg-[#5f57ff] text-white font-medium py-3 rounded-full flex justify-center items-center gap-2 transition-colors min-h-[50px]">
                    Continue <ChevronRight size={18} />
                  </button>
                </form>
              </div>

              {/* ডান দিক: ক্যালেন্ডার */}
              <div className="p-8 relative bg-white/[0.01]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-[#d2d4df]">September 2026</h3>
                  <div className="flex gap-2">
                    <button aria-label="Previous month" className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronLeft size={18} className="text-[#999999]" /></button>
                    <button aria-label="Next month" className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronRight size={18} className="text-[#999999]" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {daysOfWeek.map(day => (<div key={day} className="text-[#999999] font-medium py-2">{day}</div>))}
                  {calendarDays.map((day, index) => {
                    const isSelected = day === 21 || day === 22 || day === 23;
                    const isCurrentMonth = index >= 2 && index <= 31;
                    return (
                      <div key={index} className={`py-2.5 rounded-md flex items-center justify-center text-sm ${!isCurrentMonth ? 'text-[#999999]/40' : 'text-[#d2d4df]'} ${isSelected ? 'bg-[#5f57ff]/20 border border-white/[0.12] shadow-sm' : 'hover:bg-white/5 cursor-pointer'}`}>
                        {day}
                      </div>
                    );
                  })}
                </div>
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-[#0b0c1f] border border-white/[0.12] p-3 rounded-xl text-center shadow-2xl">
                  <p className="text-xs text-[#d2d4df]">Please fill out the form before choosing your time slot.</p>
                </div>
              </div>
            </div>

            <div className="text-center py-3 border-t border-white/[0.12] bg-black/40">
              <p className="text-[10px] text-[#999999] flex justify-center items-center gap-1">Powered by <span className="font-semibold text-[#d2d4df]">▼ iClosed</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* === কাস্টম CSS অ্যানিমেশন === */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scrollLeft 30s linear infinite; }
        .animate-scroll-right { animation: scrollRight 30s linear infinite; }
        .dashed-line {
          background-image: linear-gradient(to bottom, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 0%);
          background-position: right; background-size: 1px 8px; background-repeat: repeat-y;
        }
      `}} />
    </div>
  );
}