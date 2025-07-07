"use client";

"use client";

import React from "react";
import Link from "next/link";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";

interface Data {
  id?: number;
  url: string;
  name: string;
  content: string;
}

const CarCard: React.FC<Data> = ({ id, url, name, content }) => {
  return (
    <Link href={id ? `/cars/${id}` : "#"}>
      <div
        className={clsx(
          "relative w-full bg-center bg-no-repeat bg-cover shadow-[0_0_70px_rgba(0,0,0,1)]",
          "h-[100vh] pt-[80px] pb-[60px] md:pt-0 md:pb-0",
          "cursor-pointer"
        )}
        style={{ backgroundImage: `url(${url})` }}
      >
        {/* Heading */}
        <h1
          className={clsx(
            "absolute font-extrabold bg-gradient-to-r from-[#ff6a00] via-[#ee0979] via-[#8e2de2] via-[#4a00e0] via-[#00c9ff] to-[#92fe9d]",
            "bg-[length:300%] bg-clip-text text-transparent animate-gradientMove",
            "top-[10%] left-[3%] text-[65px]",
            "md:left-[10%] md:text-[130px]",
            "sm:text-[80px]"
          )}
        >
          {name}
        </h1>

        {/* Content */}
        <h2
          className={clsx(
            "absolute font-medium text-white",
            "top-[40%] left-[3%] text-[14px] w-[80vw]",
            "md:left-[10%] md:text-[27px] md:w-[40vw]"
          )}
        >
          {content}
        </h2>

        {/* Button */}
        <div className="absolute top-[85%] left-[3%] md:left-[10%]">
          <button
            className="flex items-center justify-around px-12 py-4 md:px-20 md:py-6 text-white text-lg font-bold rounded-lg
            bg-gradient-to-br from-cyan-400/60 via-blue-500/60 to-blue-600/60
            transition-all duration-300 hover:shadow-lg"
          >
            Subscribe
            <span className="ml-2">
              <SendHorizonal />
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

// Memoized for performance
function areEqual(prev: Data, next: Data) {
  return (
    prev.url === next.url &&
    prev.name === next.name &&
    prev.content === next.content &&
    prev.id === next.id
  );
}

export default React.memo(CarCard, areEqual);
