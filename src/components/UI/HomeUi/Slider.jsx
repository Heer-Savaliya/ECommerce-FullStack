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
              className="relative w-full h-[210px] sm:h-[280px] md:h-[370px] lg:h-[390px] xl:h-[490px] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-12"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-white/50 p-4 sm:p-6 md:p-8 rounded-xl max-w-full sm:max-w-lg text-left">
              <div className='hidden sm:block'>
                <span className="inline-block bg-linear-65 from-green-200 to-transparent text-green-700 px-3 py-1 text-xs sm:text-sm rounded-[10px] font-semibold">
                  {slide.tag}
                </span>
                <h2 className="text-md md:text-xl lg:text-2xl font-bold text-purple mt-2 sm:mt-3">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-[8px] sm:text-xs mt-3">{slide.description}</p>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 mt-5">
                  <button className="py-2 px-5 custom-button text-xs sm:text-sm md:text-md">
                    {slide.button}
                  </button>
                  <div className="text-left">
                    <span className="text-red-600 text-md sm:text-xl font-bold">
                      {slide.priceNow}
                    </span>
                    <span className="line-through text-gray-500 ml-2 text-xs sm:text-sm">
                      {slide.priceOld}
                    </span>
                    <p className="text-gray-500 text-[8px] sm:text-xs">Don't miss this limited time offer.</p>
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
