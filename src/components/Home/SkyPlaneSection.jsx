import React, { useEffect, useState } from "react";

import bg from "../../assets/images/background-bg.png";
import cloudLeft from "../../assets/images/cloud-left.png";
import cloudRight from "../../assets/images/cloud-right.png";
import cloudTop from "../../assets/images/cloud-top.png";
import plane from "../../assets/images/plane.png";

const Counter = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-[#0A2346] text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-none">
        {count}
        {suffix}
      </h3>

      <p className="mt-2 text-[#0A2346] text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
};

const SkyPlaneSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sky-plane-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

     const value = (1 - rect.top / windowHeight) * 0.45;
const clamped = Math.min(Math.max(value, 0), 1);

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <section
  id="sky-plane-section"
  className="relative -mt-[114px] pt-[114px] min-h-[110vh] bg-[#EAEFF3] overflow-hidden flex items-end justify-center"
>
   
      {/* Common Background */}
{/* Common Background */}
<img
  src={bg}
  alt=""
 className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[88vw] max-w-[1980px] z-10"
/>

      {/* Top Cloud */}
      <img
        src={cloudTop}
        alt=""
        className="absolute z-30 w-[48vw] max-w-[680px] min-w-[300px] transition-all duration-300 ease-out"
       style={{
  top: `${18 + progress * 32}%`,
  right: `${-35 + progress * 35}%`,
  opacity: 0.35 + progress * 0.65,
}}
      />

      {/* Plane */}
      <img
        src={plane}
        alt=""
        className="absolute z-40   min-w-[320px] transition-all duration-300 ease-out"
       style={{
  top: `${28 + progress * 25}%`,
  left: `${70 - progress * 38}%`,
  transform: `translateX(-50%) scale(${0.75 + progress * 0.25})`,
 
}}
      />

      {/* Left Cloud */}
      <img
        src={cloudLeft}
        alt=""
        className="absolute z-50 w-[34vw] max-w-[520px] min-w-[260px] transition-all duration-300 ease-out"
        style={{
  bottom: `${4 + progress * 4}%`,
  left: `${-18 + progress * 44}%`,
  opacity: 0.4 + progress * 0.6,
}}
      />

      {/* Right Cloud */}
      <img
        src={cloudRight}
        alt=""
        className="absolute z-50 w-[34vw] max-w-[520px] min-w-[260px] transition-all duration-300 ease-out"
       style={{
  bottom: `${2 + progress * 5}%`,
  right: `${-18 + progress * 44}%`,
  opacity: 0.4 + progress * 0.6,
}}
      />

      {/* Spacer content height */}
     {/* Counter Bar */}
<div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1050px]">
  <div className="relative overflow-hidden bg-[#25A0D4] rounded-[22px] px-4 sm:px-8 py-6 sm:py-8">
     {/* Noise Layer */}
    <div
      className="absolute inset-0 opacity-25 pointer-events-none"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      }}
    />
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <Counter
        end={25}
        suffix="+"
        label="Countries Served"
      />

      <Counter
        end={500}
        suffix="+"
        label="Products Traded"
      />

      <Counter
        end={1000}
        suffix="+"
        label="Successful Shipments"
      />

      <Counter
        end={100}
        suffix="+"
        label="Global Clients"
      />
    </div>
  </div>
</div>

{/* Spacer content height */}
<div className="relative z-0 h-[820px] sm:h-[860px] lg:h-[900px]" />
    </section>
  );
};

export default SkyPlaneSection;