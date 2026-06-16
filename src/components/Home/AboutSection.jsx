import React from "react";

import warehouseImg from "../../assets/images/warehouse.png";
import trainImg from "../../assets/images/train.png";
import experienceImg from "../../assets/images/experience.png";
import bgPattern from "../../assets/images/background.png";

const AboutSection = () => {
  return (
    <section className="bg-[#EEF1F4] py-16 lg:py-24 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-[#2EA9DF] text-white text-md px-4 py-2 rounded-md mb-5">
              About AHPL
            </span>

            <h2 className="text-[#20365C] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Connecting Global
              <br />
              Markets with Confidence
             
            </h2>

            <p className="text-[#707070] text-base leading-relaxed max-w-lg mb-8">
              At Ananta horizons pvt ltd, we simplify international trade by providing comprehensive export solutions tailored to the needs of modern businesses. With a strong global network of suppliers, manufacturers, logistics partners, and buyers, we ensure efficient and transparent trade operations from sourcing to delivery.

              <br />
              <br />
             Whether you are looking to expand your business into international markets, Ananta horizons pvt ltd serves as your trusted partner for reliable and profitable trade.
            </p>

           <div className="pb-5">
  <button className="inline-flex items-center justify-center bg-[#FF2B68] hover:bg-[#e9235c] text-white px-7 py-3 rounded-lg font-medium leading-none transition">
    Know About Us
  </button>
</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

             {/* Background Image */}
  <div
    className="absolute inset-0  bg-center bg-no-repeat z-0"
    style={{
      backgroundImage: `url(${bgPattern})`,
    }}
  />
           

            <div className=" relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* LEFT COLUMN */}
              <div className="space-y-5">
                {/* CLIENT CARD */}
                <div className="bg-white rounded-2xl shadow-md p-5 h-[95px] flex items-center">
                  <div className="flex -space-x-3">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="w-10 h-10 rounded-full bg-[#20365C] border-2 border-white flex items-center justify-center text-white font-bold">
                      +
                    </div>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-3xl font-bold text-[#202020]">
                      500+
                    </h4>
                    <p className="text-gray-500">Total Clients</p>
                  </div>
                </div>

                {/* WAREHOUSE IMAGE */}
                <div
                  className="rounded-3xl overflow-hidden h-[340px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${warehouseImg})`,
                  }}
                />
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-5 sm:mt-[-30px] lg:mt-[-30px]">
                
                {/* TRAIN IMAGE */}
                <div
                  className="rounded-3xl overflow-hidden h-[260px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trainImg})`,
                  }}
                />

                {/* EXPERIENCE CARD */}
                <div
                  className="rounded-3xl overflow-hidden h-[120px] relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${experienceImg})`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#0D2147]/70" />

                  <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
                    <h3 className="text-5xl font-bold">10+</h3>
                    <p className="text-lg">Years of Experience</p>
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

export default AboutSection;