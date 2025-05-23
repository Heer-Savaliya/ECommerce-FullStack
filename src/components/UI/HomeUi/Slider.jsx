import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    image: './images/slide1.png',
    tag: 'Weekend Discount',
    title: 'Get the best quality products at the lowest prices',
    description: 'We have prepared special discounts for you on organic breakfast products.',
    priceNow: '$21.67',
    priceOld: '$59.99',
    button: 'Shop Now',
  },
  {
    image: './images/slide2.png',
    tag: 'Weekend Discount',
    title: 'Get the best quality products at the lowest prices',
    description: 'We have prepared special discounts for you on organic breakfast products.',
    priceNow: '$21.67',
    priceOld: '$59.99',
    button: 'Shop Now',
  },
  {
    image: './images/slide4.png',
    tag: 'Weekend Discount',
    title: 'Get the best quality products at the lowest prices',
    description: 'We have prepared special discounts for you on organic breakfast products.',
    priceNow: '$21.67',
    priceOld: '$59.99',
    button: 'Shop Now',
  },
];

const Slider = () => {
  return (
    <div className="container !py-4 sm:!py-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[350px] md:h-[410px] lg:h-[450px] xl:h-[550px] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-12"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-xl max-w-full sm:max-w-lg text-left">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-xs sm:text-sm rounded-full font-semibold">
                  {slide.tag}
                </span>
                <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple mt-2 sm:mt-3">
                  {slide.title}
                </h2>
                <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm mt-3">{slide.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
                  <button className=" py-2 px-5 custom-button">
                    {slide.button}
                  </button>
                  <div className="text-left">
                    <span className="text-red-600 text-xl sm:text-2xl font-bold">
                      {slide.priceNow}
                    </span>
                    <span className="line-through text-gray-500 ml-2 text-sm sm:text-base">
                      {slide.priceOld}
                    </span>
                    <p className="text-gray-400 text-xs sm:text-sm">Don't miss this limited time offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
