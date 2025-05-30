import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-y-4 gap-x-3'>
        <div className='flex items-start gap-3'>
            <img src="/images/logo/about1.png" alt="" className='w-11 md:w-13'/>
            <div>
                <h2 className='font-semibold text-sm'>Payment only online</h2>
                <p className='text-[11px] md:text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illum.</p>
            </div>
        </div>
        <div className='flex items-start gap-3'>
            <img src="/images/logo/about2.png" alt="" className='w-11 md:w-13'/>
            <div>
                <h2 className='font-semibold text-sm'>New stocks and sales</h2>
                <p className='text-[11px] md:text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='flex items-start gap-3'>
            <img src="/images/logo/about3.png" alt="" className='w-11 md:w-13'/>
            <div>
                <h2 className='font-semibold text-sm'>Quality assurance</h2>
                <p className='text-[11px] md:text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.</p>
            </div>
        </div>
        <div className='flex items-start gap-3'>
            <img src="/images/logo/about4.png" alt="" className='w-11 md:w-13'/>
            <div>
                <h2 className='font-semibold text-sm'>Delivery in 1 hour</h2>
                <p className='text-[11px] md:text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
