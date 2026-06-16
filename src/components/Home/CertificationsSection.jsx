import React from "react";

import cert1 from "../../assets/images/cert-1.jpg";
import cert2 from "../../assets/images/cert-2.jpg";
import cert3 from "../../assets/images/cert-3.jpg";
import cert4 from "../../assets/images/cert-4.jpg";
import cert5 from "../../assets/images/cert-5.jpg";
import cert6 from "../../assets/images/cert-6.jpg";

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

const CertificationsSection = () => {
  return (
    <section className=" py-14 sm:py-16 lg:py-20 px-4">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="inline-block bg-[#25A0D4] text-white text-sm px-4 py-1.5 rounded-md mb-5">
        Certifications & Membership
        </span>

        <h2 className="text-[#1D355D] text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-tight">
          Certified<span className="text-[#FF1F63]">.</span> Compliant
          <span className="text-[#FF1F63]">.</span> Trusted
          <br className="hidden sm:block" />
          Worldwide<span className="text-[#FF1F63]">.</span>
        </h2>

        <p className="mt-6 max-w-[680px] mx-auto text-[#727272] text-sm sm:text-[15px] leading-[1.25]">
          At AHPL, we are committed to maintaining the highest standards of
          quality, transparency, and regulatory compliance. Our certifications
          and industry registrations reflect our dedication to conducting
          international trade with integrity, reliability, and professionalism.
        </p>

        <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8">
          {certificates.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] h-[120px] sm:h-[130px] flex items-center justify-center "
            >
              <img
                src={img}
                alt={`Certificate ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;