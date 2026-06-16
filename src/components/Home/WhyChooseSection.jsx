import React from "react";

import warehouseImg from "../../assets/images/warehouse.png";
import experienceImg from "../../assets/images/experience.png";
import containerImg from "../../assets/images/container.png";

const features = [
  "Global Trade Network",
  "Quality Assurance",
  "Reliable Logistics Support",
  "Competitive Pricing",
  "Customized Sourcing Solutions",
  "End-to-End Trade Management",
  "Trade Compliance & Documentation",
  "Trusted Business Partnerships",
];

const WhyChooseSection = () => {
  return (
    <section className="bg-[#EEF2F5] py-14  overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-[#2CA5D7] text-white text-sm px-4 py-2 rounded-md mb-5">
              Why Choose AHPL
            </span>

            <h2 className="text-[#1D355D] text-[36px] md:text-[48px] font-bold leading-tight">
              Why Businesses Trust
              <br />
              AHPL for Global Trade
              <span className="text-[#FF2B68]">.</span>
            </h2>

            <p className="mt-5 text-[#6D6D6D] text-[15px] leading-relaxed max-w-[500px]">
              At Ananta horizons pvt ltd, we go beyond buying and selling products. We build long-term partnerships by delivering reliable sourcing, quality assurance, transparent processes, and seamless international trade solutions that help businesses grow confidently across global markets.
            </p>

            {/* FEATURES BOX */}
            <div className="mt-8 bg-[#2CA5D7] rounded-[18px] p-5">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${
                      index < 4 ? "sm:border-r sm:border-[#0E6F9C] sm:pr-4" : ""
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#17325A] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px]">✦</span>
                    </div>

                    <span className="text-white text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
         {/* RIGHT CONTENT */}
<div className="relative mt-10 lg:mt-0">
  {/* Hanging Container */}
  <img
    src={containerImg}
    alt=""
    className="hidden lg:block absolute top-[-70px] right-0 w-[280px] z-20"
  />

  <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 items-end">
    {/* LARGE IMAGE */}
    <div
      className="rounded-[22px] overflow-hidden h-[380px] sm:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${warehouseImg})`,
      }}
    />

    {/* RIGHT COLUMN */}
    <div className="flex flex-col justify-end h-auto sm:h-[500px]">
      {/* EXPERIENCE CARD */}
      <div
        className="relative rounded-[20px] overflow-hidden h-[150px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${experienceImg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#10274A]/70" />

        <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
          <h3 className="text-[52px] font-bold leading-none">10+</h3>
          <p className="text-sm">Years of Experience</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;