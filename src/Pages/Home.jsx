import React from 'react'
import Slider from '../components/UI/HomeUi/Slider'
import Category from '../components/UI/HomeUi/Category'
import DailyOffer from '../components/UI/HomeUi/DailyOffer'

const Home = () => {
  return (
    <div className='container'>
      <Slider />
      <Category />
      <DailyOffer />
    </div>
  )
}

export default Home
