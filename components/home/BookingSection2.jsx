"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Lock } from 'lucide-react';

export default function BookingSection2() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState(1); // 1: Fill out form, 2: Book your event (Calendar active)

  const handleContinue = (e) => {
    e.preventDefault();
    // ফর্ম ফিলাপ হলে ক্যালেন্ডার আনলক বা স্টেপ পরিবর্তন হবে
    if (phone && name) {
      setStep(2);
    } else {
      alert('Please fill in both fields.');
    }
  };

  // সেপ্টেম্বর ২০২৬ ক্যালেন্ডার ডাটা (ইমেজ অনুযায়ী)
  const daysInMonth = 30;
  const startDayOffset = 2; // ধরা যাক মঙ্গলবার থেকে শুরু (SUN, MON খালি)

  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      
      {/* Top Tag & Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#040719] border border-[#ffffff1f] px-4 py-1.5 rounded-full text-xs font-medium text-[#d2d4df] mb-4 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#5f57ff] animate-pulse"></span>
          Scale safely from day one
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Book A Quick Call & Get Your Accounts Ready
        </h2>
      </div>

      {/* Outer Card Wrapper */}
      <div className="w-full max-w-5xl bg-[#040719] border border-[#ffffff1f] rounded-2xl shadow-2xl p-6 md:p-8">
        
        {/* Step Indicator Tabs */}
        <div className="flex items-center justify-center gap-8 mb-8 text-sm">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className={`w-2.5 h-2.5 rounded-full ${step === 1 ? 'bg-[#5f57ff] shadow-[0_0_10px_#5f57ff]' : 'bg-emerald-500'}`}></span>
            Fill out the form
          </div>
          <div className="flex items-center gap-2 text-[#999999] font-medium">
            <span className={`w-2.5 h-2.5 rounded-full ${step === 2 ? 'bg-[#5f57ff] shadow-[0_0_10px_#5f57ff]' : 'bg-white/[0.12]'}`}></span>
            Book your event
          </div>
        </div>

        {/* Inner Grid Layout (Form + Calendar + Profile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#000111] border border-[#ffffff1f] rounded-xl overflow-hidden p-6 md:p-8">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#ffffff1f] pb-6 lg:pb-0">
            <div>
              {/* Logo / Brand */}
              <div className="flex items-center gap-1.5 text-lg font-bold tracking-wider mb-4">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#5f57ff] to-[#60aeff] inline-block"></span>
                adsbuzz
              </div>

              <h3 className="text-xl font-bold mb-1 text-white">Agency Ad Accounts | Strategy Call</h3>
              <p className="text-[#999999] text-xs mb-6">Let&apos;s scale your business without limits!</p>

              {/* Form Fields */}
              <form onSubmit={handleContinue} className="space-y-4">
                
                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none gap-1 border-r border-[#ffffff1f] pr-2 my-2">
                    {/* Bangladesh Flag / Default flag icon simulation */}
                    <span className="text-base">🇧🇩</span>
                    <span className="text-[#999999] text-xs">▼</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880"
                    required
                    className="w-full bg-[#0b0c1f] border border-white/[0.12] rounded-xl py-3 pl-20 pr-4 text-sm text-white placeholder-[#999999] focus:outline-none focus:border-[#5f57ff] transition-colors"
                  />
                </div>

                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name *"
                    required
                    className="w-full bg-[#0b0c1f] border border-white/[0.12] rounded-xl py-3 px-4 text-sm text-white placeholder-[#999999] focus:outline-none focus:border-[#5f57ff] transition-colors"
                  />
                </div>

                <p className="text-[11px] text-[#999999] leading-relaxed">
                  By entering your information, you consent to your data being saved in accordance with our <span className="underline cursor-pointer text-[#d2d4df]">Terms</span> & <span className="underline cursor-pointer text-[#d2d4df]">Privacy Policy</span>.
                </p>

                {/* Continue Button */}
                <button
                  type="submit"
                  className="button-bright btn-glow w-full bg-[#5f57ff] hover:bg-[#7061fb] text-white font-medium py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all text-sm cursor-pointer min-h-[50px]"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Powered by iClosed */}
            <div className="mt-8 text-[11px] text-[#999999] flex items-center gap-1.5">
              Powered by <span className="font-bold text-[#d2d4df] flex items-center gap-0.5">⚡ iClosed</span>
            </div>
          </div>

          {/* Middle Column: Calendar Section */}
          <div className="lg:col-span-4 relative flex flex-col justify-center select-none">
            
            {/* If step 1, show overlay blur over calendar as seen in image */}
            {step === 1 && (
              <div className="absolute inset-0 z-20 bg-[#000111]/60 backdrop-blur-[2px] flex items-center justify-center p-4 text-center">
                <div className="bg-[#0b0c1f] border border-[#ffffff1f] px-4 py-3 rounded-xl shadow-2xl text-xs font-medium text-white max-w-[220px]">
                  Please fill out the form before choosing your time slot.
                </div>
              </div>
            )}

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-sm text-[#d2d4df]">September 2026</span>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg bg-[#0b0c1f] border border-[#ffffff1f] text-[#999999] hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg bg-[#0b0c1f] border border-[#ffffff1f] text-[#999999] hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekdays Name */}
            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-[#999999] mb-2">
              <span>SUN</span>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
              {/* Empty offset spaces */}
              {Array.from({ length: startDayOffset }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                // Highlight a sample active date like 15 or 16
                const isSelected = dayNum === 15;
                return (
                  <div
                    key={dayNum}
                    className={`h-8 w-8 mx-auto flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#5f57ff] text-white font-bold shadow-md shadow-[#5f57ff]/40'
                        : 'text-[#d2d4df] hover:bg-white/[0.06]'
                    }`}
                  >
                    {dayNum}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sales Manager Profile Card */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent min-h-[320px] border border-[#ffffff1f]">
            {/* Background Image / Placeholder for Sales Manager */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                alt="Lukas Lainsalu"
                className="w-full h-full object-cover object-top brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040719] via-[#040719]/20 to-transparent"></div>
            </div>

            {/* Profile Info Overlay */}
            <div className="relative z-10 p-4 text-center">
              <h4 className="text-white font-bold text-sm">Lukas Lainsalu</h4>
              <p className="text-[#999999] text-xs">Sales Manager</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}