import React from "react";
import OtherTopbar from "./OtherTopbar";

const Topbar = () => {
  return (
    <div>
      {/* offer */}
      <div className="w-[100%] bg-purple">
        <div className="container text-white flex flex-col md:flex-row justify-around items-center py-1 ">
          <div className="font-semibold text-[13px]">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </div>
          <div className="text-[13px]">
            Sales end in : <span className="text-[17px] font-semibold">47</span>{" "}
            days <span className="text-[17px] font-semibold">06</span> hours{" "}
            <span className="text-[17px] font-semibold">57</span> minutes{" "}
            <span className="text-[17px] font-semibold">08</span> sec.
          </div>
        </div>
      </div>

      {/* Additional topbar */}
      <OtherTopbar />
    </div>
  );
};

export default Topbar;
