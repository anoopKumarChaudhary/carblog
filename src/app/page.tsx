"use client";

import CarCard from "./components/CarCard";
import { useEffect, useState } from "react";
import { fetchCarPosts } from "./redux/carSlice";
import { AppDispatch, RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import NewTechnology from "./NewTechnology/page";
import AllCategory from "./AllCategory/page";
import TestimonialSection from "./Testimonial/page";
import NewsletterSubscribe from "./footer/page";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.car
  );

  const [selectedPost, setSelectedPost] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchCarPosts());
  }, [dispatch]);

  const handlePostClick = (index: number) => {
    setSelectedPost(index);
  };

  const current = posts[selectedPost];
  return (
    <div>
      <CarCard
        url={"./bmw3.jpg"}
        name={"BMW M5 CS"}
        content={
          "The BMW M5 CS is the most powerful M5 ever built, featuring a 4.4-liter twin-turbo V8 with 627 hp. This limited-edition sports sedan delivers blistering performance, exclusive styling, and track-tuned handling."
        }
      />{" "}
      <div className="flex flex-wrap justify-between gap-8 px-8 py-10 space-y-10 md:space-y-0 dark:bg-black dark:text-white">
        {/* Latest Section */}
        <div className="flex-1 min-w-[300px] md:basis-[55%] space-y-8">
          <h2 className="text-xl font-bold">Latest</h2>

          {current ? (
            <>
              <img
                src={`./bmw${current.id}.jpg`}
                alt="Car"
                className="w-full rounded-lg"
              />
              <div className="space-y-9">
                <p className="text-sm">
                  <span className="text-red-500 font-medium">
                    By User {current.userId}
                  </span>{" "}
                  | Aug 23, 2023
                </p>
                <h3 className="text-lg font-semibold">{current.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {current.body.slice(0, 100)}...
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {current.body.slice(100, 200)}...
                </p>
                <Link href={`/car/${current.id}`} className="inline-block">
                  <button className="mt-2 bg-[#f25252] text-white px-5 py-2 rounded font-semibold hover:brightness-110 transition">
                    Read more
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm text-gray-500">No post selected</p>
          )}
        </div>

        {/* Trending Blogs */}
        <div className="flex-1 min-w-[300px] md:basis-[35%] space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Trending Blogs</h2>
            <a href="#" className="text-sm text-gray-900 dark:text-gray-300">
              See all
            </a>
          </div>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <ul className="space-y-4">
            {posts.map((post, idx) => (
              <li
                key={post.id}
                onClick={() => handlePostClick(idx)}
                className={`p-4 rounded-lg cursor-pointer transition ${
                  idx === selectedPost
                    ? "bg-[#ff5e5e] text-white"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-[#222] dark:hover:bg-[#333]"
                }`}
              >
                <p
                  className={`text-xs mb-1 ${
                    idx === selectedPost
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  By <span className="font-medium">User {post.userId}</span> |
                  Aug 23, 2023
                </p>
                <p className="text-sm font-semibold">{post.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NewTechnology />
      <AllCategory />
      <TestimonialSection />
      <NewTechnology />
      <NewsletterSubscribe />
    </div>
  );
}
