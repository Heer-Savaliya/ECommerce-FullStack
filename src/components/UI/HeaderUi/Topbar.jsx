import React from "react";
import OtherTopbar from "./OtherTopbar";

const Topbar = () => {
  return (
    <div>
      {/* Offer Bar */}
      <div className="w-full bg-purple">
        <div className="container text-white flex flex-col md:flex-row justify-around items-center !py-0.5">
          <div className="font-medium text-[9.5px] md:text-[10.5px] text-center md:text-left">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
          </div>
          
          {/* Hide in small screen*/}
          <div className="text-[9.5px] md:text-[10.5px] hidden md:block">
            Sales end in : <span className="text-[12.5px]  md:text-[15.5px] font-semibold">47</span> days{" "}
            <span className="text-[12.5px] md:text-[15.5px] font-semibold">06</span> hours{" "}
            <span className="text-[12.5px] md:text-[15.5px] font-semibold">57</span> minutes{" "}
            <span className="text-[12.5px] md:text-[15.5px] font-semibold">08</span> sec.
          </div>
        </div>
      </div>

      {/* Additional Topbar */}
      <OtherTopbar />
    </div>
  );
};

export default Topbar;
