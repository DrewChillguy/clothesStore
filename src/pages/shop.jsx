import React from 'react'
import Hero from '../components/hero'
import Popular from '../components/popular'
import Offer from '../components/Offer'
import NewCollection from '../components/NewCollection'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop