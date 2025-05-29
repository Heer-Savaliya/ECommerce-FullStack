import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src="./images/loader.gif"
        alt="Loading..."
        className="w-[80%] h-[80%] sm:w-[90%] sm:h-[90%s] md:w-full md:h-full  object-contain"
      />
    </div>
  );
};

export default Loader;
