import React, { useEffect } from "react";
import { initializeAOS } from "../../../utilis/initializeAOS";

const AboutUs = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const aboutItems = [
    {
      img: "/images/logo/about1.png",
      title: "Payment only online",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illum.",
    },
    {
      img: "/images/logo/about2.png",
      title: "New stocks and sales",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      img: "/images/logo/about3.png",
      title: "Quality assurance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.",
    },
    {
      img: "/images/logo/about4.png",
      title: "Delivery in 1 hour",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-y-4 gap-x-3">
      {aboutItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3"
          data-aos="fade-up"
          data-aos-delay={index * 300} 
        >
          <img src={item.img} alt="" className="w-11 md:w-13" />
          <div>
            <h2 className="font-semibold text-sm">{item.title}</h2>
            <p className="text-[11px] md:text-xs text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
