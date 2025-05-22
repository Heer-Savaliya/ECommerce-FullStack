import React from 'react'
import Topbar from './Topbar'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar';
import UserBar from './UserBar';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
     <Topbar />

    {/* Main header */}
    <div className='w-full shadow '>
     <div className='container py-3 flex items-center gap-5'>

        {/* Logo */}
        <div className='flex items-center gap-4'>
          <img src="./images/full_logo.png" alt="" className='h-8'/>
          <img src="./images/location_logo.png" alt="" className='h-6' />
          <h2 className='text-[12px] text-gray-600'>Deliver to <div className='text-black font-semibold'>all</div></h2>
        </div>

        {/* Search  */}
        <div className='flex-1'>
            <SearchBar />
        </div>

        {/* User account and count */}
        <div>
            <UserBar />
        </div>
     </div>
    </div>
    </div>
  )
}

export default Header
