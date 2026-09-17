import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MilestoneRewards() {
  const leaders = [
    {
      name: 'Joh••••',
      spend: '$3,732,000',
      badgeColor: 'border-[#ffffff1f]',
      barHeight: 'h-40',
      coinType: 'silver',
    },
    {
      name: 'Mag••••',
      spend: '$9,685,100',
      badgeColor: 'border-[#5f57ff]/50',
      barHeight: 'h-56',
      coinType: 'gold',
      isTop: true,
    },
    {
      name: 'Cl••••',
      spend: '$8,301,000',
      badgeColor: 'border-[#ffffff1f]',
      barHeight: 'h-48',
      coinType: 'silver',
    },
  ];

  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      
      {/* Main Container Card */}
      <div className="w-full max-w-6xl bg-[#040719] border border-[#ffffff1f] rounded-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Title, Description & Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Top Subtitle Tag */}
            <span className="text-[#5f57ff] font-semibold text-xs tracking-wider uppercase mb-3">
              AdsBuzz Milestone Clubs
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Get Rewarded for Your <br />
              <span className="text-white">Ad Spend</span>
            </h2>

            {/* Description */}
            <p className="text-[#999999] text-sm md:text-base leading-relaxed mb-8">
              Join our Milestone Program and earn exclusive trophies, curated mystery gifts, and leaderboard status as you scale your monthly ad spend.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="button-bright bg-white/[0.05] hover:bg-[#0b0c1f] border border-white/[0.12] text-white text-sm font-medium py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer min-h-[50px]">
                See This Month&apos;s Leaders <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="button-bright bg-white/[0.05] hover:bg-[#0b0c1f] border border-white/[0.12] text-[#d2d4df] text-sm font-medium py-3 px-6 rounded-full transition-all cursor-pointer min-h-[50px]">
                How to Claim
              </button>
            </div>

          </div>

          {/* Right Column: Podium / Leaderboard Bars */}
          <div className="lg:col-span-7 flex items-end justify-center sm:justify-end gap-4 md:gap-6 pt-10">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col items-center flex-1 max-w-[170px]">
                
                {/* User Info & Spend Badge */}
                <div className="mb-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-semibold text-[#d2d4df] mb-0.5">
                    <span>{leader.name}</span>
                    {/* Verified blue check icon */}
                    <span className="text-[#5f57ff] text-[10px]">✔</span>
                  </div>
                  <div className="text-[10px] text-[#999999] uppercase tracking-wide">Total Ad Spend:</div>
                  <div className="text-xs md:text-sm font-bold text-white">{leader.spend}</div>
                </div>

                {/* Vertical Bar with Gradient & Coin */}
                <div className={`w-full ${leader.barHeight} rounded-2xl bg-gradient-to-b ${leader.isTop ? 'from-[#5f57ff] via-[#4958ff] to-[#0b0c1f]' : 'from-[#5f57ff]/40 via-[#191d4b] to-[#0b0c1f]'} border border-[#5f57ff]/30 shadow-xl flex flex-col items-center justify-center relative p-4 overflow-hidden group hover:border-[#5f57ff]/50 transition-all`}>
                  
                  {/* Subtle diagonal stripe overlay pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-[length:16px_16px]"></div>

                  {/* Coin / Trophy Icon */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    {leader.coinType === 'gold' ? (
                      <div className="w-full h-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-300 rounded-full border-2 border-yellow-200/60 shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center justify-center">
                        <div className="w-6 h-6 border border-amber-800/30 rounded-sm transform rotate-45 flex items-center justify-center"></div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-500 rounded-full border-2 border-slate-100/60 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center">
                        <div className="w-6 h-6 border border-slate-600/30 rounded-sm transform rotate-45 flex items-center justify-center"></div>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}