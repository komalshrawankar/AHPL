import React, { useState } from "react";
import contactBg from "../assets/images/contact-bg.png";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzofswGKMiEKVzYP43kAPaEKX6fwPH1X8hqnDlvp5v42K9LATU4Fe1Nfa2j2k5Iq3A75w/exec";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#EAEFF3] px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="relative max-w-[1160px] mx-auto rounded-[22px] overflow-hidden bg-cover bg-center min-h-[520px] lg:min-h-[560px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(14,34,62,0.78) 0%, rgba(14,34,62,0.45) 42%, rgba(14,34,62,0.05) 100%), url(${contactBg})`,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[520px] lg:min-h-[560px] px-6 sm:px-10 lg:px-16 py-10">
          
          {/* Left Content */}
          <div className="text-white">
            <span className="inline-block bg-[#25A0D4] text-white text-md px-4 py-1.5 rounded-md mb-5">
              Let’s get in Touch!
            </span>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[46px] font-bold leading-tight max-w-[720px]">
              Optimize Your Logistics
              <br />
              Today With Our Expert
              <br />
              Solutions<span className="text-[#FF1F63]">.</span>
            </h2>
          </div>

          {/* Form */}
          <div className="lg:flex lg:justify-end">
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-[350px] mx-auto lg:mx-0 bg-white/90 backdrop-blur-md px-8 py-8 shadow-lg  overflow-hidden"   style={{
    clipPath:
      "polygon(0 0, 82% 0, 100% 14%, 100% 100%, 0 100%)",
    borderRadius: "34px",
  }}
            >
              <h3 className="text-[#1D355D] text-[26px] font-bold mb-8">
                Get in Touch:
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-black text-xs font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-[38px] rounded-md border border-gray-300 px-3 text-xs outline-none focus:border-[#25A0D4]"
                  />
                </div>

                <div>
                  <label className="block text-black text-xs font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-[38px] rounded-md border border-gray-300 px-3 text-xs outline-none focus:border-[#25A0D4]"
                  />
                </div>

                <div>
                  <label className="block text-black text-xs font-semibold mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full h-[38px] rounded-md border border-gray-300 px-3 text-xs outline-none focus:border-[#25A0D4]"
                  />
                </div>

                <div>
                  <label className="block text-black text-xs font-semibold mb-1">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    required
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows="4"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs outline-none resize-none focus:border-[#25A0D4]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1D355D] text-white py-3 rounded-md text-sm font-medium hover:bg-[#25A0D4] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request a Quote"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;