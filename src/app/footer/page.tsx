"use client";

import React from "react";
import { SendHorizonal } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const NewsletterSubscribe = () => {
  return (
    <div className="bg-[#1c1d2a] dark:bg-[#10111a] text-white px-6 py-12 font-[Segoe UI]">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap mb-10 gap-6">
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Logo" className="h-[50px]" />
        </div>
        <nav className="flex gap-6 flex-wrap text-white dark:text-[#f0f0f0] font-medium">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#2a2b3c] dark:bg-[#181a24] rounded-lg px-6 py-10 flex flex-col items-center justify-center mb-10">
        <h2 className="text-[2.3rem] font-bold text-center leading-tight mb-6 dark:text-white">
          Subscribe to our newsletter to <br />
          get latest updates and news
        </h2>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          <input
            type="email"
            placeholder="example@email.com"
            className="px-4 py-4 rounded-md w-[40vw] min-w-[260px] text-black text-base dark:bg-white dark:text-[#525252] placeholder:text-gray-400 dark:placeholder:text-[#bbbbbb] focus:outline-none"
          />
          <button className="flex items-center gap-2 px-6 py-4 bg-[#f25252] text-white rounded-md font-semibold whitespace-nowrap hover:brightness-110 transition">
            Subscribe <SendHorizonal size={16} />
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-end flex-wrap gap-6">
        <div>
          <p className="text-[#ccc] text-sm dark:text-[#cccccc]">
            Finstreet 118 2561 abctown <br />
            example@femail.com &nbsp; 001 21345 442
          </p>
        </div>
        <div className="flex gap-4 text-white text-xl dark:text-[#f0f0f0]">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
