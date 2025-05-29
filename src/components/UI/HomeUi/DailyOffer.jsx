import React, { useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { initializeAOS } from '../../../utilis/initializeAOS';

const DailyOffer = () => {
  useEffect(() => {
    initializeAOS();
}, []);

  const offers = [
    {
      img: "./images/banner1.png",
      title: "Quality eggs at an affordable price",
      subtitle: "Eat one every day",
    },
    {
      img: "./images/banner2.png",
      title: "Fresh vegetables with daily discounts",
      subtitle: "Only for today",
    },
    {
      img: "./images/banner3.png",
      title: "Get your dairy essentials",
      subtitle: "Hurry while stock lasts",
    },
  ];

  return (
    <div className="pb-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="shine-button !border-none rounded-2xl overflow-hidden relative bg-cover bg-center flex items-center px-5 w-full min-h-[110px] md:min-h-[210px]"
          style={{ backgroundImage: `url(${offer.img})` }}
          data-aos="fade-up"
        >
          <div className="max-w-[220px] flex flex-col items-start gap-0.5 md:gap-2">
            <p className="text-red-500 text-[8px] md:text-xs">Only this week</p>
            <h1 className="text-[12px] md:text-lg font-semibold">{offer.title}</h1>
            <h5 className="hidden  md:block text-xs font-medium text-gray-600">{offer.subtitle}</h5>
            <button className="shine-button mt-1 md:mt-4 py-1 px-2 md:py-2 md:px-4 text-[9px] md:text-xs">
              <span className="relative z-10 flex items-center gap-1 md:gap-2">
                Shop now <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyOffer;
