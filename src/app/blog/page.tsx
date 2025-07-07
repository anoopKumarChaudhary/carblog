import React from "react";
import CarBlogCard from "../components/infotenmentCard";
import InfotainmentBlogCard from "../components/infotechBlogCard";
import CarCard from "../components/CarCard";

const blogData = Array.from({ length: 10 }, (_, index) => ({
  imageUrl: `./bmw${index + 1}.jpg`,
  title: `A Review Of Cars With Advanced Infotainment Systems ${index + 1}`,
  authorImage: "./logo.png",
  authorName: "Dasteen",
  date: "Jan 10, 2024",
  readTime: "3 Min Read",
}));

function Blog() {
  return (
    <div className="flex flex-col gap-6">
      <CarCard
        url={"./bmw9.jpg"}
        name={"BMW M5 CS"}
        content={
          "The BMW M5 CS is the most powerful M5 ever built, featuring a 4.4-liter twin-turbo V8 with 627 hp. This limited-edition sports sedan delivers blistering performance, exclusive styling, and track-tuned handling."
        }
      />{" "}
      {blogData.map((blog, index) => (
        <InfotainmentBlogCard
          key={index}
          imageUrl={blog.imageUrl}
          title={blog.title}
          authorImage={blog.authorImage}
          authorName={blog.authorName}
          date={blog.date}
          readTime={blog.readTime}
          description={""}
          id={index + 1}
        />
      ))}
    </div>
  );
}

export default Blog;
