"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/userSlice";

const CarDetailPage = () => {
  const { id } = useParams();
  const carId = id as string;

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.data);
  const status = useSelector((state: RootState) => state.user.status);

  useEffect(() => {
    dispatch(fetchUser(carId));
  }, [dispatch, carId]);

  if (status === "loading") {
    return <div className="p-8">Loading...</div>;
  }

  if (!user) {
    return <div className="p-8">User not found</div>;
  }

  const blogData = {
    heroImage: `https://picsum.photos/seed/car${carId}/800/600`,
    title: `Classic Revival: Revisiting Iconic Cars Through ${user.company.name}`,
    author: {
      name: user.name,
      avatar: `https://i.pravatar.cc/100?u=car${carId}`,
      date: "July 6, 2025",
      readTime: "5 min read",
    },
    sections: [
      {
        heading: user.company.catchPhrase,
        paragraphs: [
          `${user.name} from ${user.company.name} has reimagined the classic driving experience.`,
          `Located in ${user.address.city}, they offer some of the most innovative tech solutions in the auto industry.`,
        ],
      },
      {
        heading: `Why Enthusiasts Trust ${user.company.name}`,
        paragraphs: [
          `Performance and precision is at the heart of ${user.company.bs}.`,
          `Their services cater to modern drivers who value both style and function.`,
        ],
      },
    ],
    bulletPoints: [
      `Contact: ${user.phone}`,
      `Website: ${user.website}`,
      `Email: ${user.email}`,
    ],
  };

  return (
    <div className="p-8 bg-white text-black dark:bg-[#121212] dark:text-white font-sans leading-relaxed">
      <img
        src={`/bmw${carId}.jpg`}
        alt="Car Hero"
        className="w-full h-[800px] object-cover rounded-lg mb-20"
      />

      <h1 className="text-4xl font-extrabold mb-6">{blogData.title}</h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 text-base font-medium mb-10 flex-wrap">
        <img
          src={blogData.author.avatar}
          alt={blogData.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-gray-600 dark:text-gray-400">
          {blogData.author.name}
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          {blogData.author.date}
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          • {blogData.author.readTime}
        </span>
      </div>

      {/* Sections */}
      {blogData.sections.map((section, i) => (
        <div key={i}>
          <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-5">
            {section.heading}
          </h2>
          {section.paragraphs.map((para, j) => (
            <p
              key={j}
              className="mb-6 text-lg text-gray-800 dark:text-gray-300"
            >
              {para}
            </p>
          ))}
        </div>
      ))}

      {/* Bullet Points */}
      {blogData.bulletPoints.length > 0 && (
        <ul className="pl-6 mt-4 mb-12 list-disc text-lg text-gray-900 dark:text-gray-200">
          {blogData.bulletPoints.map((point, idx) => (
            <li key={idx} className="mb-3 font-semibold">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarDetailPage;
