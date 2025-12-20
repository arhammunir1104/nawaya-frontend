import React from 'react'
import HeroGuide from './HeroGuide'
import FeaturesSec from './FeaturesSec'
import JourneySec from './JourneySec'
import FaqSec from './FaqSec'
import Join from './Join'

const Guide = () => {
  return (
     <section className='overflow-hidden'>
      <HeroGuide/>
      <FeaturesSec/>
      <JourneySec />
      <Join />
      <FaqSec />
     </section> 
  )
}

export default Guide