"use client";
import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CallToActionBanner() {


  return (
    <section className="bg-[#000111] py-20 px-0 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">

      {/* Main Banner Card */}
      <div
        className="w-full max-w-6xl relative rounded-2xl overflow-hidden border border-[#ffffff1f] shadow-2xl bg-cover bg-center bg-no-repeat p-10 md:p-16 text-center"
        style={{
          backgroundImage: "url('/bg-img/img-2.png')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#000111]/50 pointer-events-none"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

          {/* Main Title */}
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 leading-snug">
            Tired of watching your competitors scale while you&apos;re getting banned right & left?
          </h2>

          {/* Subtitle */}
          <p className="text-[#999999] text-xs md:text-sm mb-8 font-medium">
            This is your infrastructure upgrade. Your whitelist. Your VIP access.
          </p>

          {/* Request Access Button */}
          <button className="bg-white hover:bg-[#e7e7e7] text-black font-semibold text-sm py-3 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 cursor-pointer mb-6 min-h-[50px]">
            Request Access
          </button>

          {/* Footer Notice */}
          <p className="text-[11px] text-[#999999] tracking-wide">
            Limited access. No BS. Just results.
          </p>

        </div>
      </div>

      {/* Floating Dock Navigation at Bottom */}
      {/* Bottom Background Image */}
      <div className="mt-12 flex w-full items-center justify-center px-2 md:px-2">
        <img
          src="/bg-img/img-1.png"
          alt=""
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>

    </section>
  );
}