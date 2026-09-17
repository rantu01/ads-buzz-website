import React from 'react';

export default function GuaranteeCertificate() {
  return (
    <section className="bg-[#000111] py-16 px-4 flex flex-col items-center justify-center font-[var(--font-inter)]">
      {/* Top Heading */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8 text-center tracking-wide">
        All Packages Come with Guarantees
      </h2>

      {/* Outer Certificate Border Wrapper */}
      <div className="relative w-full max-w-4xl bg-[#040719] border-2 border-[#ffffff1f] rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden bg-gradient-to-b from-[#0d152e] to-[#040719]">
        
        {/* Decorative Celtic/Guilloche Style Border Pattern Effect */}
        <div className="absolute inset-3 border border-white/[0.12] rounded-xl pointer-events-none flex flex-col justify-between p-1">
          <div className="h-4 w-full border-b border-white/[0.12] bg-[radial-gradient(#36395e_1px,transparent_1px)] [background-size:8px_8px]"></div>
          <div className="h-4 w-full border-t border-white/[0.12] bg-[radial-gradient(#36395e_1px,transparent_1px)] [background-size:8px_8px]"></div>
        </div>

        {/* Inner Content Area */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Golden Seal Badge */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative w-40 h-40 flex items-center justify-center drop-shadow-[0_10px_15px_rgba(234,179,8,0.2)]">
              {/* Outer Starburst / Ribbon Shape simulation via SVG or multi-layer shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600 rounded-full flex items-center justify-center border-4 border-amber-200/50"></div>
              
              {/* Inner Circle content */}
              <div className="relative z-10 flex flex-col items-center text-amber-950 font-bold">
                <div className="flex gap-1 text-amber-100 text-xs mb-0.5">
                  <span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-amber-950 drop-shadow-sm">100%</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-amber-900 border-t border-amber-900/30 pt-0.5 mt-0.5">Guarantee</span>
                <div className="flex gap-1 text-amber-100 text-xs mt-0.5">
                  <span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Guarantee Cards */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Account Replacement Guarantee */}
            <div className="bg-[#0b0c1f]/80 backdrop-blur-md border border-[#ffffff1f] p-4 rounded-xl shadow-lg hover:border-[#ffffff24] transition duration-300">
              <h3 className="text-white font-semibold text-sm mb-1">Account Replacement Guarantee</h3>
              <p className="text-[#999999] text-xs leading-relaxed">
                If your ad account goes down, we&apos;ll replace it within 24 hours at no extra cost.
              </p>
            </div>

            {/* Card 2: Ad Spend Guarantee */}
            <div className="bg-[#0b0c1f]/80 backdrop-blur-md border border-[#ffffff1f] p-4 rounded-xl shadow-lg hover:border-[#ffffff24] transition duration-300">
              <h3 className="text-white font-semibold text-sm mb-1">Ad Spend Guarantee</h3>
              <p className="text-[#999999] text-xs leading-relaxed">
                If you want to stop running your ads, we&apos;ll refund your remaining balance.
              </p>
            </div>

            {/* Card 3: Locked Rate Guarantee (Full width on right side) */}
            <div className="sm:col-span-2 bg-[#0b0c1f]/80 backdrop-blur-md border border-[#ffffff1f] p-4 rounded-xl shadow-lg hover:border-[#ffffff24] transition duration-300">
              <h3 className="text-white font-semibold text-sm mb-1">Locked Rate Guarantee</h3>
              <p className="text-[#999999] text-xs leading-relaxed">
                Your price is locked in for life—even as we raise pricing for new clients.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Section: AdsBuzz Satisfaction & Signature */}
        <div className="relative z-10 mt-10 pt-6 border-t border-[#ffffff1f] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          
          {/* Left Description */}
          <div className="max-w-xl">
            <h4 className="text-white font-medium text-sm mb-1">AdsBuzz Satisfaction Guarantee</h4>
            <p className="text-[#999999] text-xs leading-relaxed">
              AdsBuzz guarantees access to premium ad accounts with direct access to a professional support team. 
              Chosen by advertisers who plan to run long term. Focus on the important parts of the business 
              instead of dealing with daily ad account headaches.
            </p>
          </div>

          {/* Right Signature */}
          <div className="self-end md:self-auto text-right">
            <span className="text-white text-2xl italic tracking-wider opacity-90 select-none">
              AdsBuzz<span className="text-[#999999] text-base">.</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}