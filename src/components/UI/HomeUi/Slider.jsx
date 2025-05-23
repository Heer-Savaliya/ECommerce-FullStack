import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    image: './images/slide1.png', // background image
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
    <div className="container !py-8">
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
              className="relative w-full h-100  lg:h-120 bg-cover bg-center rounded-2xl overflow-hidden flex items-center !px-6 md:!px-16"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className=" p-6 md:p-10 rounded-xl max-w-xl text-left">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full font-semibold">
                  {slide.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-purple mt-3">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mt-4 text-sm">{slide.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                  <button className="custom-button py-2 px-5">
                    {slide.button}
                  </button>
                  <div className="text-left">
                    <span className="text-red-600 text-2xl font-bold">{slide.priceNow}</span>
                    <span className="line-through text-gray-500 ml-2">{slide.priceOld}</span>
                    <p className="text-gray-400 text-sm">Don't miss this limited time offer.</p>
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
