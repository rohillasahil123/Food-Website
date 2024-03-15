import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import Fooditem from './Fooditem'
const Home = ( {addi}) => {
  return (
    <div>
      <Hero />
      <Delivery />
      <Fooditem addi={addi} /> 
    </div>
  )
}

export default Home