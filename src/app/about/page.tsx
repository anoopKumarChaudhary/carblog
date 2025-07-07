"use client";

import React from "react";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";

const About: React.FC = () => {
  return (
    <div>
      <CarCard
        url={"./bmw7.jpg"}
        name={"BMW M5 CS"}
        content={
          "The BMW M5 CS is the most powerful M5 ever built, featuring a 4.4-liter twin-turbo V8 with 627 hp. This limited-edition sports sedan delivers blistering performance, exclusive styling, and track-tuned handling."
        }
      />{" "}
      <main className="min-h-screen bg-black text-gray-100 px-6 pt-24 pb-12 md:px-20 lg:px-40 transition-colors duration-300">
        <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About This Car Blog
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Purpose */}
          <motion.div
            className="bg-[#121212] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              🚗 Why This Blog Exists
            </h2>
            <p className="leading-relaxed text-gray-300">
              CarVerse was born out of a passion for automobiles and a desire to
              help everyday drivers make smarter decisions. Whether you're
              buying your first EV or researching which SUV fits your family
              best, we aim to deliver honest reviews, helpful tips, and
              insightful comparisons.
            </p>
          </motion.div>

          {/* Topics */}
          <motion.div
            className="bg-[#121212] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              📚 Topics We Cover
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>🚘 EVs & Hybrid Vehicle Reviews</li>
              <li>🛻 SUV & Sedan Comparisons</li>
              <li>🛠 Maintenance Tips & DIY Guides</li>
              <li>📊 Resale Value & Ownership Cost Insights</li>
              <li>🌍 Sustainable Car Tech & Trends</li>
              <li>🔋 Charging Infrastructure & Range Realities</li>
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            className="bg-[#121212] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              🤝 Community & Mission
            </h2>
            <p className="leading-relaxed text-gray-300">
              Our mission is to empower readers with trusted automotive
              knowledge. We strive to create a helpful community where
              enthusiasts, buyers, and daily drivers alike can learn, share, and
              stay ahead in the evolving world of cars.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="bg-[#121212] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              🛠 Tech Stack Used
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
              <li>⚡ React (TypeScript)</li>
              <li>🌐 Next.js 14</li>
              <li>🎨 Tailwind CSS</li>
              <li>🎥 Framer Motion</li>
              <li>☁️ Vercel / Heroku</li>
              <li>📦 Git & GitHub</li>
              <li>📊 JSON-based Mock Data</li>
              <li>📱 Mobile-first Responsive Design</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
