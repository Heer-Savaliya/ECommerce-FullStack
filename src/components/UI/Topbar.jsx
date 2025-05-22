import React from "react";
import OtherTopbar from "./OtherTopbar";

const Topbar = () => {
  return (
    <div>
      {/* Offer Bar */}
      <div className="w-full bg-purple">
        <div className="container text-white flex flex-col md:flex-row justify-around items-center py-1">
          <div className="font-medium text-[12.5px] text-center md:text-left">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
          </div>
          
          {/* Hide this on small screens, show on md and above */}
          <div className="text-[12.5px] hidden md:block">
            Sales end in : <span className="text-[16.5px] font-semibold">47</span> days{" "}
            <span className="text-[16.5px] font-semibold">06</span> hours{" "}
            <span className="text-[16.5px] font-semibold">57</span> minutes{" "}
            <span className="text-[16.5px] font-semibold">08</span> sec.
          </div>
        </div>
      </div>

      {/* Additional Topbar */}
      <OtherTopbar />
    </div>
  );
};

export default Topbar;
