import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/insta.png";
import twitterIcon from "../assets/images/X.png";
import mail from "../assets/images/mail.png";
import telephone from "../assets/images/phone.png";

const Navbar = ({ children }) => {
    const [open, setOpen] = useState(false);

    const navLinks = ["Home", "About Us", "Products", "Blog", "Contact Us"];

    return (
        <>
            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 ">
                {/* Top Bar */}
                <div className="mx-auto w-[94%] bg-[#182f56] text-white rounded-b-2xl px-5 sm:px-8 h-[52px] flex items-center justify-between text-sm">
                    <div className="flex items-center gap-5">
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={twitterIcon} alt="Twitter" />
                    </div>

                    <div className="hidden sm:flex items-center gap-10 text-white">
                        <div className="flex items-center gap-3">
                            <img src={mail} alt="Mail" className="w-5 h-5 object-contain" />
                            <span className="text-lg">info@ahpl.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={telephone} alt="Phone" className="w-5 h-5 object-contain" />
                            <span className="text-lg">1234567890</span>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <nav className="h-[72px] px-5 sm:px-8 lg:px-16 flex items-center justify-between">
                    <div className="flex gap-5 ms-5">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Logo"

                            />
                        </a>

                        <ul className="hidden lg:flex items-center gap-5 text-[#162c52] font-medium text-[16px] ms-5">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-[#ff1f63] transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <a
                        href="#"
                        className="hidden lg:flex bg-[#ff1f63] text-white px-6 py-3 rounded-lg text-md font-medium"
                    >
                        Get a Quote
                    </a>

                    <button
                        className="lg:hidden text-3xl text-[#182f56]"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "×" : "☰"}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden bg-white px-6 py-5 shadow-md">
                        <ul className="flex flex-col gap-4 text-[#162c52] font-medium">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a href="#" onClick={() => setOpen(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="mt-5 inline-flex bg-[#ff1f63] text-white px-6 py-3 rounded-xl"
                        >
                            Get a Quote
                        </a>
                    </div>
                )}
            </header>

            {/* Automatic spacing for fixed navbar */}
            <main className="pt-[114px]">
                {children}
            </main>
        </>
    );
};

export default Navbar;