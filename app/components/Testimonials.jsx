"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Oliver Brocato",
      role: "CEO & Founder | Bustem.com, tabis.co",
      tag: "[Exited]",
      rating: "5.0",
      text: "Oliver is the founder and CEO of Bustem.com - A software & agency that protects e-commerce brands take down copycats that steal your revenue. Oliver has worked with more than 150 brands such as Comfrt, Neuro Gum, Primal Queen, Oats Over Night & many more.",
      image: "https://i.pravatar.cc/150?img=11" // ডামি ইমেজ
    },
    {
      name: "Ecom King",
      role: "Entrepreneur & E-commerce Mentor",
      rating: "5.0",
      text: "Ecom King is a leading e-commerce mentor known for helping thousands of students launch successful dropshipping stores, building multiple successful brands and generating millions while teaching dropshipping and 7-figure growth.",
      image: "https://i.pravatar.cc/150?img=59" // ডামি ইমেজ
    },
    {
      name: "Max Sturtevant",
      role: "Founder & CEO | WellCopy",
      rating: "5.0",
      text: "Max Sturtevant is the founder and CEO of WellCopy, a leading e-commerce email & SMS marketing agency helping brands scale through retention marketing. Max has worked with 200+ ecommerce brands and generated over $200M in client revenue while building one of the fastest-growing email marketing agencies in the space.",
      image: "https://i.pravatar.cc/150?img=68" // ডামি ইমেজ
    },
    // ডামি ডেটা (স্লাইডার কাজ করার জন্য)
    {
      name: "Sarah Jenkins",
      role: "Marketing Director | GrowFast",
      rating: "4.9",
      text: "Sarah has been instrumental in scaling our ad spend from $10k to $100k per month profitably. Her expertise in media buying is unmatched in the industry.",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "David Chen",
      role: "E-commerce Owner",
      rating: "5.0",
      text: "Working with this team completely changed our business. We were stuck at a plateau for months, and their agency ad accounts helped us break through instantly.",
      image: "https://i.pravatar.cc/150?img=60"
    }
  ];

  // স্লাইডারের স্টেট
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white font-sans flex justify-center items-center py-20 px-4 selection:bg-blue-500/30 overflow-hidden">
      
      {/* === মেইন গ্লো কন্টেইনার === */}
      <div className="relative w-full max-w-[1200px] rounded-[40px] bg-gradient-to-b from-[#0A101D] to-[#040712] border border-white/[0.05] shadow-[0_0_80px_rgba(10,20,50,0.8)] py-16 px-4 md:px-12 overflow-hidden flex flex-col items-center">
        
        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* === হেডার সেকশন === */}
        <div className="relative z-10 flex flex-col items-center text-center mb-12">
          <p className="text-[#3B82F6] text-xs md:text-sm font-semibold tracking-wider mb-4 uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Trusted by 1,750+ media buyers, affiliates, and ecommerce brands spending $50K-$500K+/month
          </p>
          
          {/* রেটিং ব্যাজ */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/10 bg-[#0A101D] shadow-lg">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">4.8/5</span>
            <div className="flex gap-1 text-[#00B67A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">Rating</span>
          </div>
        </div>

        {/* === স্লাইডার সেকশন === */}
        <div className="relative w-full flex items-center justify-center gap-4 z-10">
          
          {/* বাম এরো বাটন */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden md:flex shrink-0 w-10 h-10 rounded-lg border border-white/10 items-center justify-center transition-colors ${currentIndex === 0 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-[#111827] hover:bg-white/10 text-gray-300'}`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* কার্ড কন্টেইনার (অ্যানিমেটেড ট্র্যাক) */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-[calc(33.333%-14px)] shrink-0 flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A101D] overflow-hidden shadow-xl"
                >
                  {/* টপ ইমেজ সেকশন */}
                  <div className="h-48 w-full bg-[#131823] relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent"></div>
                  </div>

                  {/* বটম কন্টেন্ট সেকশন */}
                  <div className="p-6 flex flex-col flex-1">
                    
                    {/* প্রোফাইল ইনফো */}
                    <div className="flex items-start gap-3 mb-4">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full border border-white/20" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                          <BadgeCheck size={14} className="text-blue-500 fill-blue-500/20" />
                        </div>
                        <p className="text-gray-400 text-[10px] leading-tight mt-0.5">{item.role}</p>
                        {item.tag && (
                          <span className="text-gray-500 text-[10px] mt-1 bg-white/5 px-2 py-0.5 rounded w-fit border border-white/5">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* রেটিং */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1 text-[#00B67A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-white text-xs font-bold">{item.rating}</span>
                    </div>

                    {/* রিভিউ টেক্সট */}
                    <p className="text-gray-400 text-xs leading-relaxed flex-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ডান এরো বাটন */}
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 3}
            className={`hidden md:flex shrink-0 w-10 h-10 rounded-lg border border-white/10 items-center justify-center transition-colors ${currentIndex >= testimonials.length - 3 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-[#111827] hover:bg-white/10 text-gray-300'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* মোবাইল এরো বাটন (ঐচ্ছিক) */}
        <div className="flex md:hidden gap-4 mt-6">
           <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition-colors ${currentIndex === 0 ? 'bg-white/5 text-gray-600' : 'bg-[#111827] text-gray-300'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 1}
            className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition-colors ${currentIndex >= testimonials.length - 1 ? 'bg-white/5 text-gray-600' : 'bg-[#111827] text-gray-300'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}