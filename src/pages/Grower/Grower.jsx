import React from 'react'
import HeroGrower from './HeroGrower'
import FeaturesSec from './FeaturesSec'
import JourneySec from './JourneySec'
import FaqSec from './FaqSec'
import Footer from '../../components/Footer'

const Grower = () => {
  return (
    <section className='overflow-hidden h-fit'>
      <HeroGrower/>
      <FeaturesSec/>
      <JourneySec />
      <FaqSec />
    </section>
  )
}

export default Grower