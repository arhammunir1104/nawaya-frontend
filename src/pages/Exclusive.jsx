import React from 'react'
import Grower from './Exclusive/Grower'
import Guide from './Guide/Guide'
import Footer from '../components/Footer'

/*
  Responsive slider approach:
  - The outer wrapper is `overflow-hidden`.
  - The inner track is a flex row with two children, width auto; we translate the track by -100% to show the second page.
  - Each slide is `w-full flex-shrink-0` so it keeps its natural height and the track's height becomes the height of the tallest slide.
  This avoids needing a fixed height on the parent.
*/
const Exclusive = ({ role }) => {
  const translate = role === 'grower' ? '0%' : '-50%'

  return (
    <main className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out overflow-hidden "
        style={{ transform: `translateX(${translate})`, width: '200%' }}
      >
        <section className="w-1/2 shrink-0 h-auto overflow-hidden">
          <Grower />
        </section>
{/* 
        <section className="w-1/2 shrink-0 h-fit overflow-hidden">
          <Guide />
        </section> */}
      </div>
    </main>
  )
}

export default Exclusive