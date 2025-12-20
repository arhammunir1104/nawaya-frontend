import React from 'react'
import HeroGrower from './HeroGrower'
import FeaturesSec from './FeaturesSec'
import JourneySec from './JourneySec'
import FaqSec from './FaqSec'
import Footer from '../../components/Footer'
import ExclusiveAccessCard from './ExclusiveAccessCard'

const Grower = () => {
  return (
    <section className='overflow-hidden h-fit'>
      <HeroGrower/>
      <FeaturesSec/>
      <JourneySec />
      <ExclusiveAccessCard />
      <FaqSec />
    </section>
  )
}

export default Grower