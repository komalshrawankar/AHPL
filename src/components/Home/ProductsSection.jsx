import React from "react";

import productsBg from "../../assets/images/product-bg.png";

import agricultural from "../../assets/images/agricultural.png";
import spices from "../../assets/images/spices.png";
import textiles from "../../assets/images/textile.png";
import industrial from "../../assets/images/industry.png";

const products = [
  {
    image: agricultural,
    title: "Agricultural Products",
    description:
      "Premium agricultural commodities sourced from trusted producers and supplied to international markets with consistent quality and reliability.",
  },
  {
    image: spices,
    title: "Spices & Food Products",
    description:
      "Authentic and high-quality food products and spices carefully sourced to meet global demand while maintaining freshness and quality standards.",
  },
  {
    image: textiles,
    title: "Textiles & Garments",
    description:
      "A wide selection of textile products and apparel tailored to meet the needs of wholesalers, retailers, and international buyers.",
  },
  {
    image: industrial,
    title: "Industrial Materials",
    description:
      "Reliable industrial products and raw materials supplied to manufacturing and infrastructure sectors worldwide.",
  },
];

const ProductsSection = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-12 pt-5">
      <div
        className="relative max-w-[1300px] mx-auto rounded-[20px] overflow-hidden bg-cover bg-center px-5 sm:px-8 lg:px-9 py-12 lg:py-14"
        style={{
          backgroundImage: `url(${productsBg})`,
        }}
      >
        <div className="relative z-10 text-center">
          <span className="inline-block bg-[#25A0D4] text-white text-[15px] px-4 py-2 rounded-[6px] mb-4">
            Products We Import & Export
          </span>

          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[38px] font-bold leading-tight">
            Diverse Products
            <span className="text-[#FF1F63]">.</span> Global Markets
            <span className="text-[#FF1F63]">.</span>
            <br className="hidden sm:block" />
            Reliable Trade Solutions
            <span className="text-[#FF1F63]">.</span>
          </h2>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {products.map((item, index) => (
              <div
                key={index}
                className="border border-[#1E76B6] rounded-[8px] p-2 bg-[#162C52]/70"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-[6px]"
                />

                <h3 className="mt-3 text-white text-[18px] font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-white text-[14px] leading-[1.15]">
                  {item.description}
                </p>

                <button className="mt-6 text-[#FF1F63] text-[14px]">
                  View more
                </button>
              </div>
            ))}
          </div>

          <button className="mt-9 bg-[#FF1F63] text-white text-[15px] px-8 py-3 rounded-[8px] hover:bg-[#e91655] transition">
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;