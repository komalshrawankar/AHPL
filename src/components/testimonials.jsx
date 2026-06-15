import React, { useState } from "react";

const testimonials = [
  {
    text: "AHPL has been a dependable trade partner for our business. Their commitment to quality, timely shipments, and professional communication has helped us streamline our procurement process.",
    name: "Ravi Zha",
    role: "Business Owner, United Kingdom",
    image: "https://i.pravatar.cc/80?img=12",
  },
  {
    text: "We have been sourcing products through AHPL for several years. Their attention to quality control and supplier verification gives us complete confidence in every shipment.",
    name: "Santosh k",
    role: "Procurement Manager, UAE",
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    text: "Excellent support and transparent process from start to finish. AHPL made international sourcing simple and reliable for our company.",
    name: "Meera Shah",
    role: "Importer, India",
    image: "https://i.pravatar.cc/80?img=45",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const visibleCards = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ];

  return (
    <section className="bg-[#EAEFF3] py-14 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[330px_1fr] gap-10 lg:gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#25A0D4] text-white text-[15px] px-4 py-2 rounded-[4px] mb-5">
            Customer Testimonials
          </span>

          <h2 className="text-[#1D355D] text-[36px] sm:text-[46px] lg:text-[44px] font-bold leading-[1.12]">
            Trusted by
            <br />
            Businesses
            <br />
            Across Global
            <br />
            Markets<span className="text-[#FF1F63]">.</span>
          </h2>

          <p className="mt-7 text-[#777777] text-[15px] leading-[1.25] max-w-[600px]">
            We take pride in building lasting relationships with clients
            worldwide. Here's what our partners have to say about their
            experience working with AHPL.
          </p>
        </div>

        {/* Right Slider */}
        <div>
          <div className="grid md:grid-cols-2 gap-5">
            {visibleCards.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative bg-white rounded-[8px] overflow-visible shadow-sm"
              >
                {/* Quote */}
                <div className="absolute top-2 right-7 w-[52px] h-[42px] bg-white rounded-[8px] flex items-center justify-center ">
                  <span className="text-[#25A0D4] text-[66px] bg-[#EAEFF3] font-bold leading-none -mt-8">
                    ”
                  </span>
                </div>

                <div className="px-4 pt-5 pb-6 min-h-[175px]">
                  <div className="text-[#FFB400] text-[18px] leading-none mb-5">
                    ★★★★★
                  </div>

                  <p className="text-[#111111] text-[15px] leading-[1.18] pr-6">
                    {item.text}
                  </p>
                </div>

                <div className="border-t border-[#DCDCDC] px-4 py-3 flex items-center justify-between">
                  <div>
                    <h4 className="text-[#111111] text-[15px] font-semibold leading-none">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-[#333333] text-[9px] italic">
                      {item.role}
                    </p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-9 flex items-center gap-5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#25A0D4] group transition"
            >
              <span className="text-[#25A0D4] text-[34px] leading-none group-hover:text-white">
                ‹
              </span>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`rounded-full transition-all ${
                    active === index
                      ? "w-3 h-3 bg-[#25A0D4]"
                      : "w-2 h-2 bg-[#BFC7D5]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#25A0D4] group transition"
            >
              <span className="text-[#25A0D4] text-[34px] leading-none group-hover:text-white">
                ›
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;