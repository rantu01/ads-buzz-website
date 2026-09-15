"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, MessageSquare, Zap, ChevronDown } from 'lucide-react';

export default function HeroSection() {
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
    <div className="min-h-screen bg-[#05030E] text-white font-sans overflow-hidden relative flex flex-col items-center pt-10 selection:bg-blue-500/30 ">

      {/* ================= BACKGROUND SECTION (SVG BASED) ================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center my-20">

        {/* ১. মেইন আর্ক এবং ড্যাশ লাইন (SVG) */}
        <svg
          className="absolute bottom-0 w-[150%] md:w-[120%] max-w-[1300px] h-auto min-h-[500px]"
          viewBox="-100 -155 1400 800"  // <--- এখানে viewBox পরিবর্তন করা হয়েছে
          preserveAspectRatio="xMidYMax meet" // <--- slice এর পরিবর্তে meet করা হয়েছে
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* বাইরের কার্ভের গ্রেডিয়েন্ট (উজ্জ্বল নীল থেকে ট্রান্সপারেন্ট) */}
            <linearGradient id="glowArc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6A7BFF" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#3B4EFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#05030E" stopOpacity="0" />
            </linearGradient>

            {/* ভেতরের গ্লো (অন্ধকার নীল) */}
            <linearGradient id="innerGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A3BDB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#05030E" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* স্তর ১: বাইরের সবচেয়ে বড় আর্ক (গ্লো) */}
          <path
            d="M -100 600 A 700 700 0 0 1 1300 600"
            stroke="url(#glowArc)"
            strokeWidth="120"
            strokeLinecap="round"
          />

          {/* স্তর ২: সলিড আর্ক লাইন */}
          <path
            d="M -100 600 A 650 650 0 0 1 1300 600"
            stroke="#3B4EFF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* স্তর ৩: ড্যাশড আর্ক লাইন (মাঝখানের ডটেড কার্ভ) */}
          <path
            d="M -100 600 A 600 600 0 0 1 1300 600"
            stroke="#8A9AFF"
            strokeWidth="2"
            strokeDasharray="4 8"
            strokeOpacity="0.4"
          />

          {/* স্তর ৪: ভেতরের সলিড আর্ক */}
          <path
            d="M 50 600 A 550 550 0 0 1 1150 600"
            stroke="#2A3BDB"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* স্তর ৫: ভেতরের ড্যাশড আর্ক */}
          <path
            d="M 150 600 A 450 450 0 0 1 1050 600"
            stroke="#8A9AFF"
            strokeWidth="1.5"
            strokeDasharray="3 10"
            strokeOpacity="0.2"
          />

          {/* স্তর ৬: গ্লো ফিল (নিচের দিকের আলো) */}
          <path
            d="M 150 600 A 450 450 0 0 1 1050 600 L 1050 600 L 150 600 Z"
            fill="url(#innerGlow)"
          />
        </svg>



      </div>
      {/* ================= END BACKGROUND SECTION ================= */}


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* === লোগো সেকশন === */}
        <div className="w-full flex flex-col items-center justify-center gap-8 mb-20 opacity-60 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05030E] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05030E] to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex w-[200%] animate-scroll-left">
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow1.map((logo, i) => (
                <span key={`r1-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-gray-300 whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow1.map((logo, i) => (
                <span key={`r1-dup-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-gray-300 whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-[200%] animate-scroll-right">
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow2.map((logo, i) => (
                <span key={`r2-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-gray-300 whitespace-nowrap px-6">{logo}</span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center px-4">
              {logosRow2.map((logo, i) => (
                <span key={`r2-dup-${i}`} className="text-xl md:text-2xl font-bold tracking-tight text-gray-300 whitespace-nowrap px-6">{logo}</span>
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
          <div className="absolute top-[-140px] w-full flex justify-between px-[2%] md:px-[5%] z-20">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-[#0A0A14] text-xs md:text-sm font-medium shadow-lg">
              <MessageSquare size={16} className="text-gray-300" /> Get Your Current Setup Reviewed
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-[#0A0A14] text-xs md:text-sm font-medium shadow-lg">
              <CheckCircle2 size={16} className="text-gray-300" /> Free Access to E-Books ($4,245 Value)
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-[#0A0A14] text-xs md:text-sm font-medium shadow-lg">
              <Zap size={16} className="text-gray-300" /> Start Scaling The Same Day
            </div>
          </div>

          {/* === মেইন বুকিং কার্ড === */}
          <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-[#0A0A14]/90 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col mt-4">

            {/* কার্ড হেডার */}
            <div className="flex justify-center items-center py-4 border-b border-white/10 relative bg-white/[0.02]">
              <div className="flex items-center gap-8 text-sm font-medium">
                <button onClick={() => setActiveTab('form')} className={`flex items-center gap-2 transition-colors ${activeTab === 'form' ? 'text-white' : 'text-gray-500'}`}>
                  <div className={`w-2 h-2 rounded-full ${activeTab === 'form' ? 'bg-blue-500' : 'bg-gray-600'}`}></div> Fill out the form
                </button>
                <button onClick={() => setActiveTab('calendar')} className={`flex items-center gap-2 transition-colors ${activeTab === 'calendar' ? 'text-white' : 'text-gray-500'}`}>
                  <div className={`w-2 h-2 rounded-full ${activeTab === 'calendar' ? 'bg-blue-500' : 'bg-gray-600'}`}></div> Book your event
                </button>
              </div>
            </div>

            {/* কার্ড বডি */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* বাম দিক: ফর্ম */}
              <div className="p-8 border-r border-white/10 relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-sm transform -skew-x-12"></div>
                  <span className="font-semibold text-lg tracking-wide">uproas</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Agency Ad Accounts | Strategy Call</h2>
                <p className="text-gray-400 text-sm mb-8">Let's scale your business without limits!</p>

                <form className="space-y-4">
                  <div className="flex items-center bg-[#13131F] border border-white/10 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-r border-white/10">
                      <span className="text-lg">🇧🇩</span><span className="text-gray-300 text-sm">+880</span><ChevronDown size={14} className="text-gray-500" />
                    </div>
                    <input type="tel" className="flex-1 bg-transparent px-4 py-3 outline-none text-white w-full" />
                  </div>
                  <div className="bg-[#13131F] border border-white/10 rounded-lg focus-within:border-blue-500 transition-colors">
                    <input type="text" placeholder="Name *" className="w-full bg-transparent px-4 py-3 outline-none text-white placeholder-gray-500" />
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-2">
                    By entering your information, you consent to your data being saved in accordance with our <a href="#" className="underline hover:text-gray-300">Terms & Privacy Policy</a>.
                  </p>
                  <button type="button" className="w-full mt-4 bg-[#3B4EFF] hover:bg-[#2A3BDB] text-white font-medium py-3 rounded-lg flex justify-center items-center gap-2 transition-colors shadow-[0_0_20px_rgba(59,78,255,0.3)]">
                    Continue <ChevronRight size={18} />
                  </button>
                </form>
              </div>

              {/* ডান দিক: ক্যালেন্ডার */}
              <div className="p-8 relative bg-white/[0.01]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-gray-300">September 2026</h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronLeft size={18} className="text-gray-400" /></button>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronRight size={18} className="text-gray-400" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {daysOfWeek.map(day => (<div key={day} className="text-gray-500 font-medium py-2">{day}</div>))}
                  {calendarDays.map((day, index) => {
                    const isSelected = day === 21 || day === 22 || day === 23;
                    const isCurrentMonth = index >= 2 && index <= 31;
                    return (
                      <div key={index} className={`py-2.5 rounded-md flex items-center justify-center text-sm ${!isCurrentMonth ? 'text-gray-700' : 'text-gray-300'} ${isSelected ? 'bg-[#2A2A3B] border border-white/10 shadow-sm' : 'hover:bg-white/5 cursor-pointer'}`}>
                        {day}
                      </div>
                    );
                  })}
                </div>
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-[#1A1A2E] border border-white/10 p-3 rounded-lg text-center shadow-2xl">
                  <p className="text-xs text-gray-300">Please fill out the form before choosing your time slot.</p>
                </div>
              </div>
            </div>

            <div className="text-center py-3 border-t border-white/10 bg-black/40">
              <p className="text-[10px] text-gray-500 flex justify-center items-center gap-1">Powered by <span className="font-semibold text-gray-400">▼ iClosed</span></p>
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