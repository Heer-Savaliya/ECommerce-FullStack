import React from "react";
import { IoWallet } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const FreeCash = () => {
  return (
    <>
      {/* Gift card */}
      <div className="mx-2 my-4 bg-gray-100 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoWallet className="text-purple" />
            <h2 className="text-sm font-medium">Cash and Gift Card</h2>
          </div>
          <MdKeyboardArrowRight className="text-purple" />
        </div>

        <hr className="border-t-2 border-dotted border-gray-500 my-4" />
        <div className="flex items-center justify-between text-sm">
          <div className="">
            Available Balance :{" "}
            <span className="font-semibold text-[17px]">&#8377;0</span>
          </div>
          <button className="custom-button  px-2.5">Add Balance</button>
        </div>
      </div>

      {/* Free Cash */}
      <div
        className=" flex items-center justify-between rounded-xl p-3 text-sm mx-2 "
        style={{
          background: "linear-gradient(to right, #a485f4, #694bb6)",
          borderColor: "#c21500",
          color: "#fff",
        }}
      >
        <div className="constant-tilt-shake">
          <span >🎁</span><span className="font-semibold ml-2 ">Free Cash</span>
        </div>
        <div className="text-[17px] font-semibold">&#8377; 125</div>
      </div>
    </>
  );
};

export default FreeCash;
