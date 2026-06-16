import React from "react";

import logo from "../assets/images/logo.png";

import facebook from "../assets/images/facebook1.png";
import instagram from "../assets/images/insta2.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/x2.png";

const Footer = () => {
  return (
    <footer className="bg-[#EAEFF3] px-2 sm:px-6 lg:px-5 pb-6">
      <div className="max-w-[1300px] mx-auto bg-[#F8F8F8] rounded-[28px] px-6 sm:px-10 lg:px-8 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] gap-10 lg:gap-12">
          
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="AHPL"
              className="h-[58px] object-contain mb-6"
            />

            <h3 className="text-[#1D1D1D] text-[28px] font-semibold mb-3">
              About Company.
            </h3>

            <p className="text-[#333333] text-[15px] leading-[1.35] max-w-[320px]">
              Ananta horizons pvt ltd helps businesses grow globally with trusted export, sourcing, and logistics services.
            </p>

            <div className="flex items-center gap-2 mt-7">
              <img
                src={facebook}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src={instagram}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src={linkedin}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src={twitter}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#111111] text-[28px] font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#222222] text-[15px] hover:text-[#25A0D4]">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="text-[#222222] text-[15px] hover:text-[#25A0D4]">
                  About Us
                </a>
              </li>

              <li>
                <a href="/products" className="text-[#222222] text-[15px] hover:text-[#25A0D4]">
                  Products
                </a>
              </li>

              <li>
                <a href="/blog" className="text-[#222222] text-[15px] hover:text-[#25A0D4]">
                  Blog
                </a>
              </li>

              <li>
                <a href="/contact" className="text-[#222222] text-[15px] hover:text-[#25A0D4]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-[#111111] text-[28px] font-semibold mb-6">
              Product Categories
            </h3>

            <ul className="space-y-3">
              <li className="text-[15px] text-[#222222]">
                Agricultural Products
              </li>

              <li className="text-[15px] text-[#222222]">
                Spices & Food Products
              </li>

              <li className="text-[15px] text-[#222222]">
                Textiles & Garments
              </li>

              <li className="text-[15px] text-[#222222]">
                Industrial Materials
              </li>

              <li className="text-[15px] text-[#222222]">
                Chemicals & Raw Materials
              </li>

              <li className="text-[15px] text-[#222222]">
                Packaging Solutions
              </li>

              <li className="text-[15px] text-[#222222]">
                Consumer Goods
              </li>

              <li className="text-[15px] text-[#222222]">
                Engineering Products
              </li>

              <li className="text-[15px] text-[#222222]">
                Customized Sourcing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#111111] text-[28px] font-semibold mb-6">
              Contact
            </h3>

            <div>
              <p className="font-medium text-[15px] mb-3">
                Operational Address:
              </p>

              <p className="text-[15px] text-[#333333] leading-[1.4]">
                47, Kotwal Nagar, Khamla, Nagpur,
                Maharashtra 440022, India
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-lg">📞</span>
              <span className="text-[15px] text-[#333333]">
                1234567890
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span className="text-[15px] text-[#333333]">
                info@ahpl.com
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#D8D8D8] my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a
              href="/privacy-policy"
              className="text-[14px] text-[#222222] hover:text-[#25A0D4]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-[14px] text-[#222222] hover:text-[#25A0D4]"
            >
              Terms & Conditions
            </a>
          </div>

          <p className="text-[13px] text-[#444444] text-center md:text-right">
            © 2026 AHPL. All Rights Reserved. Site Design and Maintained by
            AdBorn Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;