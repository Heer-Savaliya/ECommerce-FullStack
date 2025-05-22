import { signOut } from 'firebase/auth';
import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const UserBar = () => {
    const navigate = useNavigate();
    
    // Logout
    const handleLogout = async () =>{
        try{
            await signOut(auth);
            navigate("/login");
        }catch(err){
            console.error("Logout error : ",error); 
        }
    };


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
        <RiLogoutCircleRLine className="w-6 h-6 stroke-[0.3] cursor-pointer" onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default UserBar
