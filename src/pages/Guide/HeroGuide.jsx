import React from 'react'
import Banner from "../../assets/Guide/HomeGuide.png";
import Banner1 from "../../assets/Guide/HomeGuideMobile.png"
import JoinWaitlist_Btn from "../../components/JoinWaitlist_Btn";
import LeftShade from "../../assets/Grower/LeftShade.png"
import RightShade from "../../assets/Grower/RightShade.png"

const HeroGuide = () => {
  return (
   <section className="bg-GrayBg pt-20 overflow-hidden">
      {/* Heading and Paragraph  */}
      <div className="mx-auto  xs:px-0 sm:px-6 text-center flex flex-col items-center-safe z-10 
                  xs:w-[90vw]
                  xl:w-[90vw] 2xl:w-[1400px]">
        <h1 className="font-Urbanist font-semibold leading-tight tracking-tight capitalize text-textPrimary
                xs:text-Heading8 sm:text-Heading7 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1  ">
          Share what you know. 
          <br className='' />
         Guide With Purpose.
        </h1>
        <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray mt-6 
                xs:text-Paragraph6 md:text-Paragraph5 lg:text-Paragraph4">
         You don’t need a massive following to make an impact. Nawaya helps you reach the right people,
          <br />
           create meaningful sessions, and earn from your expertise - without noise or complexity.
        </p>

        {/* Button Join the waitlist */}
        <div className="w-fit mt-6 relative z-10 ">
          <JoinWaitlist_Btn  />
        </div>
      </div>

      {/* Image Section */}
      <div className="xs:mt-10 lg:mt-16 mx-auto xs:w-[95vw] xl:w-[1050px] relative">
        <img src={Banner} className="z-3 relative xs:hidden lg:inline lg:relative lg:w-full lg:h-auto " />
                <img src={Banner1} className="z-8 relative xs:inline xs:w-full xs:h-full lg:hidden" />


        {/* left Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-left-60 z-0">
          <img src={LeftShade} alt="" className="" />
        </div>
        {/* Right Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-left-60 z-0">
          <img src={RightShade} alt="" className="" />
        </div>
      </div>
    </section>
  )
}

export default HeroGuide