import React from "react";

const AboutJinstore = () => {
  return (
    <>
      <h1>Why Choose Jinstore?</h1>
      <div className="grid grid-cols-3 gap-4 py-4">
        <div className="relative rounded-xl bg-gray-100 text-gray-600 text-center pt-14 px-4 pb-5 overflow-visible">
          {/* Circular image positioned at top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/images/blog/blog_a1.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-white object-cover shadow"
            />
          </div>

          <h2 className="text-xl font-bold">Hy</h2>
          <p className="text-sm">10% weekend discount</p>
        </div>

        <div className="relative rounded-xl bg-gray-100 text-gray-600 text-center pt-14 px-4 pb-5 overflow-visible">
          {/* Circular image positioned at top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/images/blog/blog_a2.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-white object-cover shadow"
            />
          </div>

          <h2 className="text-xl font-bold">Hy</h2>
          <p className="text-sm">10% weekend discount</p>
        </div>
        <div className="relative rounded-xl bg-gray-100 text-gray-600 text-center pt-14 px-4 pb-5 overflow-visible">
          {/* Circular image positioned at top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/images/blog/blog_a3.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-white object-cover shadow"
            />
          </div>

          <h2 className="text-xl font-bold">Hy</h2>
          <p className="text-sm">10% weekend discount</p>
        </div>
      </div>
    </>
  );
};

export default AboutJinstore;
