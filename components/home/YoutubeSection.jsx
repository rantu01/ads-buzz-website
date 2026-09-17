"use client";

import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function YoutubeSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const youtubeVideos = [
    {
      title: "Facebook Agency Ad Accounts 101 - The Complete Guide",
      duration: "10:48",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Meta Account Trust Score Explained: Why Some Accounts Never Get Banned",
      duration: "3:26",
      thumbnail:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "EVERYTHING You Need to Know About Agency Ad Accounts",
      duration: "6:52",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "How to Choose the Right Facebook Agency Ad Account",
      duration: "8:21",
      thumbnail:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Why Meta Ad Accounts Get Restricted and How to Avoid It",
      duration: "7:35",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Agency Ad Accounts vs Personal Ad Accounts",
      duration: "5:42",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "How Facebook Ads Billing Actually Works",
      duration: "9:14",
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Facebook Ads Scaling Strategy for Beginners",
      duration: "12:06",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Top Mistakes People Make With Meta Advertising",
      duration: "6:18",
      thumbnail:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "How to Manage Multiple Ad Accounts Efficiently",
      duration: "11:27",
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Understanding Facebook Ads Account Quality",
      duration: "7:49",
      thumbnail:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Complete Guide to Scaling Paid Social Campaigns",
      duration: "14:32",
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 3 videos per slide
  const videosPerSlide = 3;
  const totalSlides = Math.ceil(
    youtubeVideos.length / videosPerSlide
  );

  const slides = Array.from({ length: totalSlides }, (_, slideIndex) =>
    youtubeVideos.slice(
      slideIndex * videosPerSlide,
      slideIndex * videosPerSlide + videosPerSlide
    )
  );

  const handlePrevious = () => {
    setActiveSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      <div className="w-full max-w-6xl mx-auto">

        {/* Top Header */}
        <div className="text-center mb-12">
          <span className="text-[#5f57ff] font-semibold text-xs tracking-widest uppercase mb-2 inline-block">
            YOUTUBE
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 flex items-center justify-center gap-2">
            Follow Us on

            <span className="inline-flex items-center text-red-600">
              <svg
                className="w-8 h-8 fill-current inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>

              <span className="text-white ml-1">
                Youtube
              </span>
            </span>
          </h2>

          <p className="text-[#999999] text-xs md:text-sm max-w-xl mx-auto">
            Subscribe to our YouTube channel for the latest videos,
            fresh updates, behind-the-scenes content, and everything
            happening at AdsBuzz.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {slide.map((video, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="bg-[#040719] border border-[#ffffff1f] hover:border-[#ffffff24] rounded-2xl p-4 shadow-xl flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                  >
                    <div>

                      {/* Thumbnail */}
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-[#ffffff1f] bg-[#0b0c1f]">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                        />

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Duration */}
                        <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                          {video.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-semibold text-sm mb-3 leading-snug group-hover:text-[#d2d4df] transition-colors">
                        {video.title}
                      </h3>
                    </div>

                    {/* Channel */}
                    <div className="flex items-center gap-2 pt-3 border-t border-[#ffffff1f] text-xs text-[#999999]">
                      <span className="w-5 h-5 rounded-full bg-[#5f57ff] flex items-center justify-center text-[10px] font-bold text-white">
                        a
                      </span>

                      <span>AdsBuzz</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-4">

          {/* Left Spacer */}
          <div className="w-[80px]" />

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === index
                    ? "w-8 bg-[#5f57ff]"
                    : "w-2 bg-white/[0.12] hover:bg-[#ffffff24]"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">

            {/* Previous */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous videos"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#999999] hover:text-white hover:bg-[#0b0c1f] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next videos"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#999999] hover:text-white hover:bg-[#0b0c1f] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}