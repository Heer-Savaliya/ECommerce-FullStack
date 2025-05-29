import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
import { initializeAOS } from "../../../utilis/initializeAOS";
import { FreeMode, Autoplay } from "swiper/modules";

const Category = () => {
  useEffect(() => {
  initializeAOS();
}, []);
  const categories = [
    { img: "./images/c1.png", label: "Fruits & Vegis", bg: "bg-green-100" },
    { img: "./images/c2.png", label: "Baby & Pregnancy", bg: "bg-blue-100" },
    { img: "./images/c3.png", label: "Beverages", bg: "bg-orange-100" },
    { img: "./images/c4.png", label: "Meats & Seafood", bg: "bg-pink-100" },
    { img: "./images/c5.png", label: "Biscuits & Snacks", bg: "bg-gray-200" },
    { img: "./images/c6.png", label: "Breads & Bakery", bg: "bg-amber-100" },
    { img: "./images/c7.png", label: "Breakfast & Dairy", bg: "bg-blue-50" },
    { img: "./images/c8.png", label: "Frozen Foods", bg: "bg-orange-100" },
    { img: "./images/c9.png", label: "Grocery", bg: "bg-red-100" },
    { img: "./images/c6.png", label: "Breads & Bakery", bg: "bg-amber-100" },
    { img: "./images/c7.png", label: "Breakfast & Dairy", bg: "bg-blue-50" },
    { img: "./images/c8.png", label: "Frozen Foods", bg: "bg-orange-100" },
    { img: "./images/c9.png", label: "Grocery", bg: "bg-red-100" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-5">
          <h1 className="text-lg font-semibold">Featured Categories</h1>
          <p className="text-gray-500 text-sm hidden md:block">
            New products with updated stocks
          </p>
        </div>
        <button className="custom-button text-[10px] px-4 !py-1 ">
          View All
        </button>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        freeMode={true}
        touchStartPreventDefault={false}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, // keep autoplay after manual swipe
        }}
        breakpoints={{
          365: { slidesPerView: 3.5 },
          420: { slidesPerView: 4 },
          560: { slidesPerView: 5 },
          660: { slidesPerView: 5.5 },
          740: { slidesPerView: 6 },
          1050: { slidesPerView: 7 },
          1550: { slidesPerView: 8 },
        }}
        className="!py-3"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`flex flex-col items-center ${cat.bg} p-2 rounded-[13px] w-25 md:w-auto`}
              data-aos="fade-right"
            >
              <img src={cat.img} alt={cat.label} className="w-15 md:w-20" />
              <p className="text-[8px] lg:text-xs text-center">{cat.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
