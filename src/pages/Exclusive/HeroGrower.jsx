import React from "react";
import Banner from "../../assets/Grower/SessionsGrower.png";
import Banner1 from "../../assets/Grower/SessionsGrowerMobile.png";
import JoinWaitlist_Btn from "../../components/JoinWaitlist_Btn";
import LeftShade from "../../assets/Grower/LeftShade.png"
import RightShade from "../../assets/Grower/RightShade.png"
import WatchAVideo from "../../components/WatchAVideo";
import ExclusiveAccessCard from "./ExclusiveAccessCard";
import PayButton from "../../components/PayButton";

const HeroGrower = () => {
  return (
    <section className="bg-GrayBg pt-20 overflow-hidden">
      {/* Heading and Paragraph  */}
      <div className=" mx-auto px-6 text-center flex flex-col items-center-safe z-10
                  xs:w-[90vw]
                  xl:w-[90vw] 2xl:w-[1400px]">
        <h1 className="font-Urbanist font-semibold leading-tight tracking-tight capitalize text-textPrimary
                xs:text-Heading8 sm:text-Heading6 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1">
          Step Into the Heart of
          <br />
          Nawaya
        </h1>
        <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray mt-6 
                xs:text-Paragraph6 md:text-Paragraph5 lg:text-Paragraph4">
        Get early access to the vision behind Nawaya, connect directly with the founder,
            <br className="xs:hidden lg:inline" />
            and secure exclusive benefits reserved for our first supporters.
         
        </p>

        {/* Button Join the waitlist */}
        <div className="flex mt-2 flex-row gap-4 items-center justify-center">

          <div className="z-2">
            <PayButton text={"Unlock Access for $19.99"} />
          </div>
        
        <div className="w-fit relative z-2">
          <WatchAVideo />
        </div>
        </div>
        
      </div>

      {/* Image Section */}
      <div className="xs:mt-10 lg:mt-16 xs:mb-5 lg:mb-0 mx-auto xs:w-full xl:w-[1050px] z-0 relative">
        <img src={Banner} className="z-10  blur-sm  relative xs:hidden lg:inline lg:relative lg:w-full lg:h-auto " />
        <img src={Banner1} className="z-10  blur-sm relative xs:inline xs:w-full xs:h-full lg:hidden" />


        {/* left Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-left-60 z-0">
          <img src={LeftShade} alt="" className="" />
        </div>
        {/* Right Shade */}
        <div className="absolute xs:top-0 lg:-top-48 lg:-right-60 z-0">
          <img src={RightShade} alt="" className="" />
        </div>


        <div className="">
          <ExclusiveAccessCard />
        </div>


      </div>
    </section>
  );
};

export default HeroGrower;
