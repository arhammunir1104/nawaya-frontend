import React from "react";
import Banner from "../../assets/Grower/SessionsGrower.png";
import Banner1 from "../../assets/Grower/SessionsGrowerMobile.png";
import JoinWaitlist_Btn from "../../components/JoinWaitlist_Btn";
import LeftShade from "../../assets/Grower/LeftShade.png"
import RightShade from "../../assets/Grower/RightShade.png"

const HeroGrower = () => {
  return (
    <section className="bg-GrayBg pt-20 overflow-hidden">
      {/* Heading and Paragraph  */}
      <div className=" mx-auto px-6 text-center flex flex-col items-center-safe z-10
                  xs:w-[90vw]
                  xl:w-[90vw] 2xl:w-[1400px]">
        <h1 className="font-Urbanist font-semibold leading-tight tracking-tight capitalize text-textPrimary
                xs:text-Heading8 sm:text-Heading6 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1">
          Grow with guidance,
          <br />
          not guesswork
        </h1>
        <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray mt-6 
                xs:text-Paragraph6 md:text-Paragraph5 lg:text-Paragraph4">
          Connect with trusted coaches, join growth communities, and learn
          through 
          <br className="xs:hidden lg:inline" />
          personalized programs that move you closer to your goals.
        </p>

        {/* Button Join the waitlist */}
        <div className="w-fit mt-6 relative z-10 ">
          <JoinWaitlist_Btn />
        </div>
      </div>

      {/* Image Section */}
      <div className="xs:mt-10 lg:mt-16 xs:mb-5 lg:mb-0 mx-auto xs:w-full xl:w-[1050px] relative">
        <img src={Banner} className="z-10 relative xs:hidden lg:inline lg:relative lg:w-full lg:h-auto " />
        <img src={Banner1} className="z-10 relative xs:inline xs:w-full xs:h-full lg:hidden" />


        {/* left Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-left-60 z-0">
          <img src={LeftShade} alt="" className="" />
        </div>
        {/* Right Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-right-60 z-0">
          <img src={RightShade} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default HeroGrower;
