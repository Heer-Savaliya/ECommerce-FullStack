import React from 'react'
import FooterEmail from './FooterUi/FooterEmail'
import Help from './FooterUi/Help'
import CopyRight from './FooterUi/CopyRight'

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full py-10 md:py-15 '>
      <div className='container'>
        <FooterEmail />

        <hr className='my-6 md:my-8 text-gray-400'/>

        <Help />

        <hr className='my-6 md:my-8 text-gray-400'/>

        <CopyRight />
      </div>
    </div>
  )
}

export default Footer
