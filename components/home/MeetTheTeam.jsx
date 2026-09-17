import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function MeetTheTeam() {
  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      
      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <span className="text-[#5f57ff] font-semibold text-xs tracking-widest uppercase mb-2 inline-block">
            BUILT BY PEOPLE WHO CARE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Meet The Team
          </h2>
        </div>

        {/* Upper Grid (Text + Stacked Photo Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Description & Button */}
          <div className="lg:col-span-5 text-left">
            <p className="text-[#d2d4df] text-base md:text-lg leading-relaxed mb-8">
              We started AdsBuzz after facing the same problems our clients deal with today - unstable ad accounts, sudden bans, and unreliable providers. Instead of accepting it, we built direct relationships, proper infrastructure, and a system that actually scales.
            </p>

            <button className="button-bright bg-white/[0.05] hover:bg-[#0b0c1f] border border-white/[0.12] text-white text-sm font-medium py-3.5 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer min-h-[50px]">
              Meet the AdsBuzz Team <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Overlapping Photos (Stack Effect) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[360px] md:h-[400px]">
              
              {/* Background Decorative Blue Shape */}
              <div className="absolute top-0 right-10 w-32 h-32 bg-[#5f57ff]/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* First Image Card (Back / Left side) */}
              <div className="absolute left-0 top-6 w-[70%] md:w-[65%] h-[85%] rounded-2xl overflow-hidden border border-[#ffffff1f] shadow-2xl bg-[#0b0c1f] transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                  alt="AdsBuzz Team working" 
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#5f57ff]"></span> adsbuzz
                </div>
              </div>

              {/* Second Image Card (Foreground / Right side overlapping) */}
              <div className="absolute right-0 top-0 w-[70%] md:w-[65%] h-[90%] rounded-2xl overflow-hidden border border-[#5f57ff]/40 shadow-2xl bg-[#0b0c1f] transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                  alt="AdsBuzz Founders" 
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#5f57ff]"></span> adsbuzz
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower Section: Our Offices */}
        <div className="mt-16 text-center">
          <h3 className="text-[#999999] text-xs font-semibold tracking-widest uppercase mb-8">
            Our Offices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* Office 1: Tallinn, Estonia */}
            <div className="bg-[#040719] border border-[#ffffff1f] hover:border-[#ffffff24] p-5 rounded-2xl shadow-lg flex items-center justify-between text-left transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[#ffffff1f]">
                  <img 
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=150&q=80" 
                    alt="Tallinn" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#5f57ff]" /> Tallinn, Estonia
                  </div>
                  <span className="text-[#999999] text-xs mt-0.5 block">EU HQ</span>
                </div>
              </div>
              {/* Mini Map Graphic Simulation */}
              <div className="w-16 h-12 bg-[#0b0c1f] rounded-lg border border-[#ffffff1f] flex items-center justify-center opacity-70">
                <div className="w-2 h-2 rounded-full bg-[#5f57ff] shadow-[0_0_8px_#5f57ff]"></div>
              </div>
            </div>

            {/* Office 2: Miami, USA */}
            <div className="bg-[#040719] border border-[#ffffff1f] hover:border-[#ffffff24] p-5 rounded-2xl shadow-lg flex items-center justify-between text-left transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[#ffffff1f]">
                  <img 
                    src="https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=150&q=80" 
                    alt="Miami" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#5f57ff]" /> Miami, USA
                  </div>
                  <span className="text-[#999999] text-xs mt-0.5 block">North America</span>
                </div>
              </div>
              {/* Mini Map Graphic Simulation */}
              <div className="w-16 h-12 bg-[#0b0c1f] rounded-lg border border-[#ffffff1f] flex items-center justify-center opacity-70">
                <div className="w-2 h-2 rounded-full bg-[#5f57ff] shadow-[0_0_8px_#5f57ff]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}