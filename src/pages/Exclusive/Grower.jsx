import React from 'react'
import HeroGrower from './HeroGrower'
import Card from './Card'
import SecureYourSpot from './SecureSpot'

const Grower = () => {
  return (
    <section className='overflow-hidden '>
      <HeroGrower/>
      <Card />
      <SecureYourSpot />
      
    </section>
  )
}

export default Grower