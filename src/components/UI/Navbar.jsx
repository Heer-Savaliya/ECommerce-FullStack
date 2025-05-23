import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-white shadow w-full text-[11px] lg:text-[12.5px] py-2 font-medium'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <div className='flex  items-center gap-1 cursor-pointer' onClick={()=> navigate("/")}>
                Home
                <IoIosArrowDown className='mt-0.5'/>
            </div>
            <div className='flex items-center gap-1 cursor-pointer' onClick={()=>navigate("./about")}>
                Shop
                <IoIosArrowDown className='mt-0.5'/>
            </div>
            <div className='cursor-pointer' onClick={()=>navigate("./about")}>
                Fruits & Vegetables
            </div>
            <div className=' cursor-pointer' onClick={()=>navigate("./about")}>
                Bevrages
            </div>
            <div className=' cursor-pointer' onClick={()=>navigate("./about")}>
                Blog
            </div>
            <div className=' cursor-pointer' onClick={()=>navigate("./about")}>
                Contact
            </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='flex  items-center gap-1 cursor-pointer' onClick={()=> navigate("/")}>
                Trending Products
                <IoIosArrowDown className='mt-0.5'/>
            </div>
            <div className='flex  items-center gap-1 cursor-pointer text-red-500' onClick={()=> navigate("/")}>
                Almost finished
                <div className='py-1 px-2 rounded-[5px] text-white bg-linear-65 from-red-500 to-orange-500'>Sale</div>
                <IoIosArrowDown className='mt-0.5'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
