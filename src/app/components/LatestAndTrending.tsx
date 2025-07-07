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
    <div className="flex flex-col bg-[#f8f6ff] rounded-2xl shadow-sm p-4 max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt="Car Thumbnail"
        className="w-full h-auto rounded-xl object-cover mb-4"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{authorName}</p>
          <p className="text-xs text-gray-500">
            {date} &bull; {readTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarBlogCard;
