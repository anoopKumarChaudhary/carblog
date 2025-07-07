"use client";

import React from "react";
import ReviewCard from "../components/ReviewCard";

function AllCategory() {
  return (
    <div className="w-full px-6 pt-8 pb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Explore All Categories
      </h2>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex gap-6 w-max pb-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              key={index}
              imageUrl={`./bmw${index + 1}.jpg`}
              title={`Category ${index + 1}`}
              description="Explore cars with best mileage, comfort, and technology."
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCategory;
