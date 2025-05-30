import React from 'react'
import { NavLink } from 'react-router-dom'

const OfficeInfo = () => {
  return (
    <>
      <div className='md:flex-1/2'>
            <h2 className='font-semibold capitalize text-md'>Our officies</h2>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet harum nisi quas quaerat tempora ex quae delectus laboriosam ea!</p>

            <div className='mt-10 flex  justify-between'>
              <div className='flex items-baseline gap-3'>
                <img src="/images/logo/location_logo.png" alt="Location" className='w-4 '/>
                <div className='flex flex-col gap-3'>
                  <div className='transform -translate-y-2'>
                    <h4 className='text-xs'>United States</h4>
                    <h2 className='text-lg font-medium capitalize'>United States Office</h2>
                    <p className='text-gray-500 text-sm text-[12.5px]'>205 middle road, 2nd floor, New york</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-lg'>+0 1234 567 88</h4>
                    <p className='text-blue-500 underline text-sm'><NavLink>info@example.com</NavLink></p>
                  </div>
                </div>
              </div>
              <div className='flex items-baseline gap-3'>
                <img src="/images/logo/location_logo.png" alt="Location" className='w-4 '/>
                <div className='flex flex-col gap-3'>
                  <div className='transform -translate-y-2'>
                    <h4 className='text-xs'>Munich</h4>
                    <h2 className='text-lg font-medium capitalize'>Munich States Office</h2>
                    <p className='text-gray-500 text-[12.5px]'>205 middle road, 2nd floor, New york</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-lg'>+5 456 123 22</h4>
                    <p className='text-blue-500 underline text-sm'><NavLink>contact@example.com</NavLink></p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='w-full text-gray-200 my-8 md:my-10'/>

            {/* Follow us */}
            <div className='flex items-center gap-3'>
                <p className='text-sm'>Follow us :</p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <NavLink className="bg-white p-2 rounded-[8px] shadow" to="https://www.facebook.com" target='_blank'>
                <img
                  src="/images/logo/facebook_logo.png"
                  alt="Facebook"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] shadow" to="https://www.twitter.com" target='_blank'>
                <img
                  src="/images/logo/x_logo.png"
                  alt="Twitter/X"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] shadow" to="https://www.instagram.com" target='_blank'>
                <img
                  src="/images/logo/insta_logo.png"
                  alt="Instagram"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] shadow" to="https://www.linkedin.com" target='_blank'>
                <img
                  src="/images/logo/linkdein_logo.png"
                  alt="LinkedIn"
                  className="w-4"
                />
              </NavLink>
            </div>
            </div>
          </div>
    </>
  )
}

export default OfficeInfo
