import React, { useEffect } from "react";
import AboutJinstore from "../components/UI/AboutUi/AboutJinstore";
import { initializeAOS } from "../utilis/initializeAOS";

const Blog = () => {
  useEffect(() => {
    initializeAOS();
  }, []);
  const blogPosts = [
    {
      title: "Top 10 Spices Every Kitchen Needs",
      author: "Sophie Green",
      date: "28 May 2025",
      img: "/images/blog/blog1.jpg",
    },
    {
      title: "How to Store Fresh Produce Correctly",
      author: "Arjun Mehta",
      date: "26 May 2025",
      img: "/images/blog/blog2.jpg",
    },
    {
      title: "Meal Prep Hacks for Busy Weekdays",
      author: "Lena Patel",
      date: "25 May 2025",
      img: "/images/blog/blog3.jpg",
    },
    {
      title: "Easy One-Pot Dinner Recipes",
      author: "Carlos Rivera",
      date: "24 May 2025",
      img: "/images/blog/blog4.jpg",
    },
    {
      title: "Why Organic Matters in Your Diet",
      author: "Dr. Nina Rao",
      date: "22 May 2025",
      img: "/images/blog/blog5.jpg",
    },
    {
      title: "The Ultimate Grocery Checklist",
      author: "Eliza Dsouza",
      date: "21 May 2025",
      img: "/images/blog/blog6.jpg",
    },
    {
      title: "Seasonal Fruits to Try This Summer",
      author: "Ravi Kapoor",
      date: "20 May 2025",
      img: "/images/blog/blog7.jpg",
    },
    {
      title: "Budget-Friendly Grocery Shopping Tips",
      author: "Anjali Verma",
      date: "19 May 2025",
      img: "/images/blog/blog8.jpg",
    },
    {
      title: "5-Minute Healthy Breakfast Ideas",
      author: "Chef Alex Dhanraj",
      date: "18 May 2025",
      img: "/images/blog/blog9.jpg",
    },
  ];

  return (
    <div className="container !py-8 md:!py-10">
      <h1 className="font-semibold text-sm md:text-base">Recent blog posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm "
            data-aos="fade-up"
          >
            <div className="relative group cursor-pointer">
              <img
                src={post.img}
                alt={post.title}
                className=" w-full h-35 md:h-48 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[rgba(20,19,19,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="bg-gray-50 py-2 px-4 text-xs md:text-sm rounded-2xl text-gray-700">
                  Read more
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm md:text-[16.5px] font-semibold mb-1">
                {post.title}
              </h3>
              <p className="text-xs md:text-[13.5px] text-gray-500">
                {post.author} • {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AboutJinstore />
    </div>
  );
};

export default Blog;
