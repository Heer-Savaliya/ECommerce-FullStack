import React from "react";
import UserProfile from "../components/UI/MyAccountUi/UserProfile";

const MyAccount = () => {
  return (
    <div className="container !py-8 md:!py-10 ">
      <h1>My account</h1>

      <UserProfile />
    </div>
  );
};

export default MyAccount;
