import React from "react";

interface CarBlogCardProps {
  imageUrl: string;
  title: string;
  authorImage: string;
  authorName: string;
  date: string;
  readTime: string;
}

const CarBlogCard: React.FC<CarBlogCardProps> = ({
  imageUrl,
  title,
  authorImage,
  authorName,
  date,
  readTime,
}) => {
  return (
    <div className="w-[100%] h-[480px] bg-[#f9f6ff] dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md p-6 transition-all duration-300">
      <img
        src={imageUrl}
        alt="Car Image"
        className="rounded-xl w-full h-[300px] object-cover"
      />

      <h2 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>

      <div className="mt-4 flex items-center gap-4">
        <img
          src={authorImage}
          alt={authorName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <p className="font-medium text-gray-900 dark:text-white">
            {authorName}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {date} • {readTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarBlogCard;
