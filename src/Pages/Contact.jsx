import React from 'react'
import OfficeInfo from '../components/UI/ContactUi/OfficeInfo'
import ContactForm from '../components/UI/ContactUi/ContactForm'
import AboutUs from '../components/UI/AboutUi/AboutUs'
import OfficeMap from '../components/UI/ContactUi/OfficeMap'

const Contact = () => {
  return (
    <div className='container !py-8 md:!py-15'>
      
      <div>
        <div className='text-center flex items-center justify-center flex-col gap-2'>
          <h1 className='text-lg md:text-3xl font-semibold capitalize'>Contact with us</h1>
          <p className='w-full md:w-lg text-[10px] md:text-[13px]'>Contact us for all questions and opinions, or you can solve your problems in a shorter timenwith our contact offices.</p>
        </div>

        <hr className='w-full hidden md:block text-gray-300 my-8 md:my-10'/>

        <div className='flex flex-col-reverse md:flex-row items-start gap-15 mb-15'>
          {/* Office info */}
          <OfficeInfo />

          {/* Contact form */}
          <div className='w-full md:flex-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>

      <AboutUs />

      {/* Map */}
      <OfficeMap />
    </div>
  )
}

export default Contact
