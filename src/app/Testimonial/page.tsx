import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div className="bg-[#1c1d2a] dark:bg-[#12131d] text-white flex flex-wrap justify-between gap-16 px-6 py-24">
      {/* Left side */}
      <div className="flex-1 min-w-[280px]">
        <p className="uppercase tracking-wider text-sm mb-4">TESTIMONIALS</p>
        <h2 className="text-3xl font-bold leading-snug mb-4 dark:text-white">
          What people say <br /> about our blog
        </h2>
        <p className="text-[#d1d1d1] dark:text-[#bbbbbb] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>

      {/* Right side */}
      <div className="flex-1 min-w-[280px] flex flex-col justify-between">
        <p className="text-lg font-semibold leading-relaxed mb-6 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src="./bmw1.jpg"
              alt="Jonathan"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold dark:text-white">Jonathan Vallem</p>
              <p className="text-sm text-[#cccccc] dark:text-[#aaaaaa]">
                New York, USA
              </p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
              <ArrowLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#f25252] text-white flex items-center justify-center hover:scale-105 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
