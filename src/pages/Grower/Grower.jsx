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
      <ExclusiveAccessCard headline={"Ready to take your growth journey to the next level?"} subheadline={"Join Nawaya’s first circle of early members and receive a personal message from the founder about why this platform exists, and how you can help shape it from the start."} /> 
      <FaqSec />
    </section>
  )
}

export default Grower