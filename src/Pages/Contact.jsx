import React from 'react'
import OfficeInfo from '../components/UI/ContactUi/OfficeInfo'

const Contact = () => {
  return (
    <div className='container !py-10'>
      <div>
        <div className='text-center flex items-center justify-center flex-col gap-2'>
          <h1 className='text-lg md:text-3xl font-semibold capitalize'>Contact with us</h1>
          <p className='w-full md:w-lg text-[10px] md:text-[13px]'>Contact us for all questions and opinions, or you can solve your problems in a shorter timenwith our contact offices.</p>
        </div>

        <hr className='w-full text-gray-300 my-8 md:my-10'/>

        <div className='flex flex-col md:flex-row items-start gap-10 '>
          {/* Office info */}
          <OfficeInfo />

          {/* Contact form */}
          <div className='md:flex-1/2'>
            2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
