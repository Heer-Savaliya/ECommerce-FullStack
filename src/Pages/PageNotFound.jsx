import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate =useNavigate();
  return (
    <div className='container !py-4  flex flex-col gap-8 justify-center items-center' >
      <img src="/images/404.gif" alt="Not found.." className='h-60 md:h-90' />
      <div className='flex flex-col gap-3 items-center'>
        <h2 className='text-center text-xs md:text-base text-gray-600'>Lost in space? We can’t find the page which might have been moved or deleted.</h2>
        <button className='py-2 px-5 custom-button text-xs md:text-base' onClick={()=>navigate("/")}>Go back to HOME</button>
      </div>
    </div>
  )
}

export default PageNotFound
