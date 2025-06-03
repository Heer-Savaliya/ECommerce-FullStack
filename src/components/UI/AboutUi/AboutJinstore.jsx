import React, { useEffect } from "react";
import { initializeAOS } from "../../../utilis/initializeAOS";

// JSON-style data array
const features = [
  {
    title: "Fresh Products",
    text: "Daily-updated stocks of veggies, dairy, and pantry staples",
    img: "/images/blog/blog_a1.jpg",
  },
  {
    title: "Weekly Discounts",
    text: "10% weekend discount. See homepage highlights and stock alerts before deals run out",
    img: "/images/blog/blog_a2.jpg",
  },
  {
    title: "Clean Experience",
    text: "Browse by category, track availability, fast delivery and shop confidently",
    img: "/images/blog/blog_a3.jpg",
  },
];

const AboutJinstore = () => {
  useEffect(() => {
    initializeAOS();
  }, []);
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-12 pb-4 pt-14"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="4000"
    >
      {features.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl bg-gray-100 text-gray-600 text-center pt-14 px-4 pb-5 overflow-visible transition duration-500 ease-in-out hover:-translate-y-3"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={item.img}
              alt={item.title}
              className="w-15 h-15 md:w-20 md:h-20 rounded-full border-white object-cover shadow"
            />
          </div>

          <h2 className="text-md lg:text-xl font-semibold md:font-bold">
            {item.title}
          </h2>
          <p className="text-xs lg:text-sm mt-1">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutJinstore;
