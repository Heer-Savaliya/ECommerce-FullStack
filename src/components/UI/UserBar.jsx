import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";

const UserBar = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <div>
        <img src="./images/user_logo.png" className='w-5 cursor-pointer' alt="" />
      </div>
      <div>
        <img src="./images/like_logo.png" className='w-6 cursor-pointer' alt="" />
      </div>
      <div>
        <img src="./images/cart_logo.png" className='w-6 cursor-pointer' alt="" />
      </div>
      <div>
        <RiLogoutCircleRLine className="w-6 h-6 stroke-[0.3] cursor-pointer" />
      </div>
    </div>
  )
}

export default UserBar
