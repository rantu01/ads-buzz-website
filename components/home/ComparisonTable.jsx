import React from 'react';
import { Check, X, Info } from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: 'Unlimited Spending Limit 📈',
      adsbuzz: true,
      regular: false,
    },
    {
      feature: 'Unlimited Ad Accounts',
      adsbuzz: true,
      regular: false,
    },
    {
      feature: (
        <span className="flex items-center gap-1.5">
          Accounts HIVA Score <Info className="w-4 h-4 text-[#999999] cursor-pointer" />
        </span>
      ),
      adsbuzz: 'Platinum',
      regular: 'Silver',
    },
    {
      feature: "CPM's & CPA's",
      adsbuzz: <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded text-xs font-semibold">Low</span>,
      regular: <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 px-3 py-1 rounded text-xs font-semibold">High</span>,
    },
    {
      feature: 'Increase Ad Approval Rate',
      adsbuzz: '687%',
      regular: '0%',
    },
    {
      feature: '24/7 Customer Support',
      adsbuzz: true,
      regular: false,
    },
    {
      feature: 'Average Ad Approval Time',
      adsbuzz: '5 Minutes',
      regular: '5-9 Hours',
    },
    {
      feature: 'Payment Options',
      adsbuzz: 'Bank transfer, Card, Crypto',
      regular: 'Card Payment Only',
    },
    {
      feature: 'US/EU accounts',
      adsbuzz: true,
      regular: false,
    },
  ];

  return (
    <section className="bg-[#000111] py-20 px-4 flex flex-col items-center justify-center font-[var(--font-inter)] text-white">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-[#5f57ff] font-semibold text-xs tracking-widest uppercase">
          ADSBUZZ VS OTHERS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 tracking-tight">
          Comparison
        </h2>
        <p className="text-[#999999] text-sm md:text-base">
          See how AdsBuzz unban services beat all other service providers.
        </p>
      </div>

      {/* Main Table Container */}
      <div className="w-full max-w-5xl bg-[#040719] border border-[#ffffff1f] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Table Header Row */}
        <div className="grid grid-cols-12 border-b border-[#ffffff1f] bg-[#0b0c1f] py-5 px-6 items-center text-sm font-semibold">
          <div className="col-span-6 md:col-span-6"></div>
          <div className="col-span-3 md:col-span-3 flex items-center justify-center gap-2 text-white font-bold tracking-wider">
            {/* AdsBuzz Logo Text / Branding */}
            <span className="flex items-center gap-1.5 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#5f57ff] to-[#60aeff] inline-block"></span>
              adsbuzz
            </span>
          </div>
          <div className="col-span-3 md:col-span-3 text-center text-[#999999] font-medium">
            Regular Accounts
          </div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-[#ffffff1f]">
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-12 py-4 px-6 items-center text-sm hover:bg-white/[0.04] transition-colors"
            >
              {/* Feature Name */}
              <div className="col-span-6 md:col-span-6 text-[#d2d4df] font-medium pr-4">
                {item.feature}
              </div>

              {/* AdsBuzz Column Value */}
              <div className="col-span-3 md:col-span-3 flex justify-center items-center text-white font-medium">
                {item.adsbuzz === true ? (
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : item.adsbuzz === false ? (
                  <div className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  item.adsbuzz
                )}
              </div>

              {/* Regular Accounts Column Value */}
              <div className="col-span-3 md:col-span-3 flex justify-center items-center text-[#999999]">
                {item.regular === true ? (
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : item.regular === false ? (
                  <div className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  item.regular
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}