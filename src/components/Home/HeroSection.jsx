import React from "react";
import heroBg from "../../assets/images/home-bg.png"; // change path

const HeroSection = () => {
  return (
    <section className="w-full bg-[#edf2f6] px-4 sm:px-6 lg:px-8 pt-3 pb-6">
      <div
        className="relative  mx-auto min-h-[400px] sm:min-h-[460px] lg:min-h-[550px] rounded-[14px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Left dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06234f]/95 via-[#06234f]/65 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-[560px] px-6 sm:px-8 lg:px-8 py-10 sm:py-12 lg:py-10 text-white">
          <span className="inline-flex items-center justify-center bg-[#2eaee7] text-white text-[14px] px-5 py-1.5 rounded-[6px] mb-4">
            AHPL
          </span>

          <h1 className="text-[32px] sm:text-[44px] lg:text-[33px] xl:text-[44px] font-bold leading-[1.25] tracking-[-0.5px]">
            Global Trade. Trusted <br className="hidden sm:block" />
            Partnerships.{" "}
            <span className="text-[#ff1f63]">
              Limitless <br className="hidden sm:block" />
              Opportunities.
            </span>
          </h1>

          <p className="mt-4 max-w-[450px] text-[13px] sm:text-[15px] lg:text-[15px]  font-normal">
            AHPL is a leading import-export company connecting businesses across
            international markets through reliable sourcing, seamless logistics,
            and world-class trade solutions. From agricultural commodities and
            industrial materials to consumer products and customized sourcing, we
            help businesses grow beyond borders.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center bg-white text-[#162c52] text-[15px] font-medium px-4 py-2.5 rounded-[6px] hover:bg-[#ff1f63] hover:text-white transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Bottom left boxes */}
        <div className="absolute bottom-0 left-8 hidden sm:flex">
          <div className="w-[34px] h-[35px] bg-white/10" />
          <div className="w-[34px] h-[35px] bg-white/35" />
          <div className="w-[34px] h-[35px] bg-white/15" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;