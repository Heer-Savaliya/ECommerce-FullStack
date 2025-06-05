import React from "react";
import UserProfile from "../components/UI/MyAccountUi/UserProfile";
import FreeCash from "../components/UI/MyAccountUi/FreeCash";

const MyAccount = () => {
  return (
    <div className="container !py-8 md:!py-10 ">


      <div className="flex rounded-2xl shadow ">
        <div className="w-sm py-5">
            
      <UserProfile />
      <FreeCash />
        </div>
        <div className="border-l-2 border-gray-200 py-5">
          1
        </div>
      </div>

    </div>
  );
};

export default MyAccount;
