import React from 'react';

export const StatsBar: React.FC = () => {
  const stats = [
    { value: "6+", label: "Years Management Experience" },
    { value: "8+", label: "Performance & Growth Skills" },
    { value: "1", label: "Featured Case Study & Brand" },
    { value: "100%", label: "Commitment to Quality" }
  ];

  return (
    <section className="bg-[#0b2d59] text-white py-10 border-b border-[#061d3b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
              <strong className="block font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight tabular-nums mb-1">
                {stat.value}
              </strong>
              <span className="text-xs sm:text-[13px] text-[#c5dfff] font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
