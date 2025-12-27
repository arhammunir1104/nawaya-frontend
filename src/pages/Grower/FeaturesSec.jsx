import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import Personalized from '../../assets/Grower/Personalized.png';
import Grow from '../../assets/Grower/Grow.png';
import Learn from '../../assets/Grower/Learn.png';
import JoinWaitlist_Btn from "../../components/JoinWaitlist_Btn";

const FeaturesSec = () => {

    const GrowFeaturesCards = [
        {
            id : 1,
            icon: <LuGraduationCap size={24} color="#3E9218" />,
            image: Personalized,
            title: "Personalized Guidance",
            description: "Get matched with verified Guides who understand your journey and support you with clarity, accountability, and real-world experience.",
        },
         {
            id : 2,
            icon: <LuBookMarked size={24} color="#3E9218" />,
            image: Grow,
            title: "Grow at Your Own Pace",
            description: "Follow structured programs and live sessions designed to fit into real life - without pressure, overwhelm, or empty motivation.",
        },
         {
            id : 3,
            icon: <LuUsersRound size={24} color="#3E9218" />,
            image: Learn,
            title: "Learn Together",
            description: "Join circles and group sessions where shared growth, honest conversations, and collective momentum make progress easier - and more human.",
        }
    ]
  return (
    <section id="features" className="bg-Primarybg py-20">
      <div className="mx-auto px-6 text-center flex flex-col items-center-safe 
                  xs:w-[90vw]
                  xl:w-[90vw] 2xl:w-[1400px]">
        <h3 className="font-Buenard font-bold xs:text-Paragraph4 lg:text-Paragraph2 text-textGreen">
          Features
        </h3>
        <h1 className="font-Urbanist mt-1 font-semibold leading-tight tracking-tight capitalize text-textPrimary
                xs:text-Heading8 sm:text-Heading6 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1">
          Made For Real Growth
        </h1>
        <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray 
                xs:text-Paragraph6 xs:mt-3 md:text-Paragraph5 lg:text-Paragraph4 lg:mt-6">
         Nawaya combines human guidance, structure, and community -
          <br className="hidden md:inline" />
          so learning actually turns into action.
        </p>
      

      {/* 3 feature cards to be added here later */}
      {/* Feature Section Container */}
<div className="flex justify-center w-full px-4 md:px-0">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 2xl:gap-10 w-full max-w-[1400px]">
    
    {GrowFeaturesCards.map((card) => (
      <div 
        key={card.id} 
        className="bg-btnGray overflow-hidden flex flex-col relative border border-btnGray shadow-sm
                   transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                   rounded-2xl sm:rounded-3xl xl:rounded-[40px]
                   p-6 sm:p-8 lg:p-6 xl:p-10 w-full h-full"
      >
        {/* Card Image Wrapper - Ensuring it fits the container */}
        <div className="w-full mb-6 flex justify-center lg:justify-start">
          <img 
            src={card.image} 
            alt={card.title} 
            className="w-full h-auto object-cover rounded-xl" 
          />
        </div>

        {/* Card Content */}
        <div className="w-full flex flex-col flex-grow">
          <h1 className="font-Urbanist font-bold text-[#111111]
                         text-xl sm:text-2xl lg:text-xl xl:text-3xl
                         leading-tight tracking-tight capitalize mb-3">
            {card.title}
          </h1>

          <p className="font-Urbanist font-normal text-textGray
                        text-sm sm:text-base lg:text-sm xl:text-lg
                        leading-relaxed tracking-normal">
            {card.description}
          </p>
        </div>

        {/* Floating Icon - Top Right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 
                        w-10 h-10 sm:w-12 sm:h-12 
                        bg-[#208837]/10 rounded-full 
                        flex items-center justify-center">
          <div className="text-[#208837] scale-110 sm:scale-125">
            {card.icon}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* join waitlist button */}
        <div className="w-[100%] mt-10">
            <JoinWaitlist_Btn />
        </div>

        </div>
        
    </section>
  );
};

export default FeaturesSec;
