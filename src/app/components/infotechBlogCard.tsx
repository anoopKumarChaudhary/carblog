import Link from "next/link";
import React from "react";

interface InfotainmentBlogCardProps {
  imageUrl: string;
  title: string;
  authorImage: string;
  authorName: string;
  date: string;
  readTime: string;
  description: string;
  buttonLabel?: string;
  id: number;
}

const InfotainmentBlogCard: React.FC<InfotainmentBlogCardProps> = ({
  imageUrl,
  title,
  authorImage,
  authorName,
  date,
  readTime,
  description,
  id,
  buttonLabel = "Read full article...",
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl dark:bg-[#13131a] dark:text-white w-full">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageUrl}
          alt="Blog visual"
          className="w-full h-auto object-cover rounded-lg max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] dark:text-white">
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={authorImage}
            alt="Author"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div className="flex flex-col text-sm sm:text-base">
            <span className="font-semibold text-[#1a1a1a] dark:text-white">
              {authorName}
            </span>
            <span className="text-[#666] dark:text-[#ccc] text-xs sm:text-sm">
              {date} • {readTime}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#333] dark:text-[#ccc] leading-relaxed">
          {description}
        </p>

        {/* Additional Paragraph */}
        <p className="text-sm sm:text-base text-[#333] dark:text-[#ccc] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam
          hendrerit. Interdum mattis in sed diam egestas metus at duis commodo.
          Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci
          neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim
          egestas sollicitudin tristique quis. Orci neque quis porttitor eu
          amet.
        </p>

        {/* Button */}
        <button className="bg-[#f25252] text-white font-semibold rounded-md py-2 px-4 text-sm sm:text-base w-full sm:w-fit hover:bg-[#e04343] transition">
          <Link href={`/car/${id}`}> {buttonLabel}</Link>
        </button>
      </div>
    </div>
  );
};

export default InfotainmentBlogCard;
