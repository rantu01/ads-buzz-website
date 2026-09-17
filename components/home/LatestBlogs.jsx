"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestBlogs() {
  const [activeSlide, setActiveSlide] = useState(0);

  const blogs = [
    {
      title: "PPC Statistics 2026: The Numbers Behind Paid Search",
      description:
        "A sourced roundup of current PPC statistics covering ad spend, average CPC by industry, conversion rates, ROAS, and click fraud benchmarks today.",
      tag: "STATISTICS",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Social Media Retargeting: How It Actually Works and How to Run It Well",
      description:
        "A deep dive into how social media retargeting actually works: data sources, audience segmentation, ad formats, sequencing, and how to measure it.",
      tag: "SOCIAL MEDIA",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Display Ad Networks: The Types That Matter and How to Choose",
      description:
        "Learn how display ad networks work, the main types available, and which networks are worth your budget in this practical, no-fluff buyers guide.",
      tag: "ADS",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Facebook Ads Strategy: How to Scale Your Campaigns",
      description:
        "Discover practical Facebook advertising strategies for scaling campaigns while keeping your costs under control and improving overall performance.",
      tag: "FACEBOOK ADS",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Google Ads vs Meta Ads: Which Platform Should You Use?",
      description:
        "Compare Google Ads and Meta Ads across targeting, cost, conversion intent, creative formats, and campaign objectives.",
      tag: "COMPARISON",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "How to Reduce Ad Costs Without Losing Conversions",
      description:
        "Explore proven ways to optimize campaigns, reduce wasted ad spend, and maintain strong conversion performance.",
      tag: "OPTIMIZATION",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "TikTok Ads in 2026: A Complete Beginner's Guide",
      description:
        "Everything you need to know about launching TikTok advertising campaigns, choosing audiences, creatives, and tracking results.",
      tag: "TIKTOK ADS",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Ad Creative Testing: What You Should Test First",
      description:
        "A practical guide to testing ad creatives, headlines, hooks, formats, and messaging to identify winning combinations faster.",
      tag: "CREATIVE",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "ROAS Explained: How to Measure Advertising Profitability",
      description:
        "Understand ROAS, how to calculate it correctly, and how advertisers can use it to evaluate campaign performance.",
      tag: "ANALYTICS",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Retargeting Campaigns That Actually Convert",
      description:
        "Learn how to build retargeting audiences and create effective ad sequences that bring previous visitors back.",
      tag: "RETARGETING",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Landing Page Optimization for Paid Traffic",
      description:
        "Improve your landing pages with better messaging, structure, speed, and conversion-focused design.",
      tag: "LANDING PAGE",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Ad Tracking & Attribution: What Marketers Need to Know",
      description:
        "Understand modern attribution, tracking limitations, conversion events, and how to make better decisions from your data.",
      tag: "TRACKING",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 3 blogs per slide
  const blogsPerSlide = 3;
  const totalSlides = Math.ceil(blogs.length / blogsPerSlide);

  const slides = Array.from({ length: totalSlides }, (_, slideIndex) =>
    blogs.slice(
      slideIndex * blogsPerSlide,
      slideIndex * blogsPerSlide + blogsPerSlide
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

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Latest blogs
          </h2>

          <button className="button-bright bg-white/[0.05] hover:bg-[#0b0c1f] border border-white/[0.12] text-white text-xs font-medium py-2.5 px-4 rounded-full shadow-md flex items-center gap-1.5 transition-all cursor-pointer min-h-[44px]">
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Slider */}
        <div className="overflow-hidden mb-10">
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
                {slide.map((blog, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="bg-[#040719] border border-[#ffffff1f] hover:border-[#ffffff24] rounded-2xl p-4 shadow-xl flex flex-col justify-between transition-all duration-300 group"
                  >
                    <div>

                      {/* Image */}
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 border border-[#ffffff1f] bg-[#0b0c1f]">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Tag */}
                        <span className="absolute bottom-3 right-3 bg-[#5f57ff] text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider backdrop-blur-sm shadow-md">
                          {blog.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-base mb-2.5 leading-snug hover:text-[#d2d4df] transition-colors cursor-pointer">
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#999999] text-xs leading-relaxed mb-6">
                        {blog.description}
                      </p>
                    </div>

                    {/* Read */}
                    <div>
                      <a
                        href="#read"
                        className="text-[#5f57ff] hover:text-[#7061fb] text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        Read how &gt;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination + Arrows */}
        <div className="flex items-center justify-between pt-4">

          {/* Left Spacer */}
          <div className="w-[80px]" />

          {/* Dots */}
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

          {/* Navigation */}
          <div className="flex items-center gap-2">

            {/* Previous */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous blogs"
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.12] text-[#999999] hover:text-white hover:bg-[#0b0c1f] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next blogs"
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.12] text-[#999999] hover:text-white hover:bg-[#0b0c1f] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}