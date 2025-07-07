import React from "react";

interface ReviewCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="bg-[#f5f0fa] dark:bg-[#1a1a1a] rounded-2xl px-8 py-10 text-center max-w-sm mx-auto shadow-md hover:-translate-y-1 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-32 h-32 rounded-full object-cover mb-6 mx-auto"
      />
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ReviewCard;
