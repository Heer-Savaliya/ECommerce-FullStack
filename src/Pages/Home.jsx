import React from 'react'
import Slider from '../components/UI/HomeUi/Slider'
import Category from '../components/UI/HomeUi/Category'
import DailyOffer from '../components/UI/HomeUi/DailyOffer'
import Products from '../components/UI/HomeUi/Products'

const Home = () => {
  return (
    <div className='container'>
      <Slider />
      <Category />
      <DailyOffer />
      <Products />
    </div>
  )
}

export default Home
