"use client";

import React, { useState, useMemo } from "react";
import CarBlogCard from "../components/infotenmentCard";
import { cars } from "../Data/carData";

const allTags = [
  "All",
  "SUV",
  "EV",
  "Luxury",
  "Sedan",
  "Economy",
  "Family",
  "Reliable",
  "Hybrid",
];

function NewTechnology() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = car.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesTag =
        activeTag === "All" || (car.tags && car.tags.includes(activeTag));
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="p-6 pt-24 space-y-10 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
        New Technology
      </h2>

      {/* Search & Tags */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search blog titles..."
          className="flex-1 min-w-[200px] max-w-sm px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 shadow-sm ${
                activeTag === tag
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {filteredCars.length > 0 ? (
          filteredCars.map((card) => (
            <div key={card.id_} className="min-w-[280px] flex-shrink-0">
              <CarBlogCard {...card} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default NewTechnology;
