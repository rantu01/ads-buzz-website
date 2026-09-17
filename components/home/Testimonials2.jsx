import React from 'react';

export default function Testimonials2() {
  const testimonialsList = [
    {
      rating: 5.0,
      title: "Never losing millions to bans again",
      quote: "“I've tried at least five providers before. None of them lasted more than a few weeks. With AdsBuzz, it's the first time I've had both stable accounts and actual support. Total game-changer.”",
      name: "Robert F.",
      role: "8-Figure Advertiser",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5.0,
      title: "We are literally getting paid to use this service",
      quote: "“For us the whole service is now free of charge, we are now spending $300k/month which means $3k in cashback. The account service runs me $1k/month, so after cashback we are pocketing $2k . Feels like I'm being paid to use accounts that don't die.”",
      name: "Leonard M.",
      role: "E-commerce Brand Owner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5.0,
      title: "Running D2C offers without fear now",
      quote: "“Before paying, they actually answered every question I had. Account was live in under 2 hours. Been running 7 months without any issues. Only regret is not joining earlier.”",
      name: "Alex G.",
      role: "$180k/month ad spend",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5.0,
      title: "Didn't think these accounts would last... they do",
      quote: "“I was always wondering why these accounts don't get banned too, what is the reason. The answer is they have real partnerships with platforms. I've been running for months now without any major issues. Whenever something occurred, the team always supported.”",
      name: "Martin S.",
      role: "Digital Agency Owner",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5.0,
      title: "From testing to $20k/day in 2 weeks",
      quote: "“Scaling used to be our biggest headache. With AdsBuzz, we went from test campaigns to $20k/day in under 2 weeks. Instant approvals + no spend caps is the real deal.”",
      name: "Dan O.",
      role: "E-commerce Brand CEO",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5.0,
      title: "Pixel PTSD is finally over",
      quote: "“We lost our pixel data to bans so many times, it nearly shut down our store. With AdsBuzz accounts, the same pixel has been safe for over a year. That alone makes the switch worth it.”",
      name: "Chloe S.",
      role: "Dropshipping Marketer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      
      {/* Top Header Section */}
      <div className="text-center mb-12 relative">
        
        {/* Laurel Wreath Effect Simulation */}
        <div className="flex items-center justify-center gap-2 mb-3 text-[#999999] text-sm select-none">
          <span className="tracking-widest">🌿</span>
          <span className="bg-[#0b0c1f] border border-[#ffffff1f] px-4 py-1 rounded-full text-xs font-semibold text-white shadow-inner">
            Testimonials
          </span>
          <span className="tracking-widest transform scale-x-[-1]">🌿</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#999999] text-sm md:text-base max-w-lg mx-auto">
          See Testimonials from hundreds of entrepreneurs who already made the switch
        </p>

        {/* Overall Rating Pill */}
        <div className="mt-6 inline-flex items-center gap-2 bg-[#0b0c1f] border border-[#ffffff1f] px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
          <span className="text-white">4.8/5</span>
          <div className="flex text-emerald-400 text-xs">
            ★★★★★
          </div>
          <span className="text-[#d2d4df]">Rating</span>
        </div>

      </div>

      {/* Testimonials Grid Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsList.map((item, index) => (
          <div 
            key={index}
            className="bg-[#040719] border border-[#ffffff1f] hover:border-[#ffffff24] rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Stars & Rating Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-emerald-400 text-xs">
                  ★★★★★
                </div>
                <span className="text-xs font-bold text-[#d2d4df]">{item.rating}</span>
              </div>

              {/* Review Title */}
              <h3 className="text-white font-bold text-base mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Quote text */}
              <p className="text-[#999999] text-xs md:text-[13px] leading-relaxed mb-6">
                {item.quote}
              </p>
            </div>

            {/* Author Profile Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#ffffff1f]">
              <img 
                src={item.avatar} 
                alt={item.name} 
                className="w-10 h-10 rounded-full object-cover border border-[#ffffff1f]"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-[#999999] text-xs">{item.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}