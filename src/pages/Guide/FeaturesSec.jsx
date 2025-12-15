import React from "react";
import ReachPeople from "../../assets/Guide/ReachPeople.png";
import SimpleSetup from "../../assets/Guide/SimpleSetup.png";
import Earn from "../../assets/Guide/Earn.png";
import Track from "../../assets/Guide/Track.png";
import JoinWaitlist_Btn from "../../components/JoinWaitlist_Btn";

const FeaturesSec = () => {
  const GuideFeaturesCards = [
    {
      id: 1,
      image: ReachPeople,
      title: "Reach the Right People",
      description:
        "Get matched with learners who genuinely value your experience and want to grow with your guidance.",
    },
    {
      id: 2,
      image: SimpleSetup,
      title: "Simple Setup",
      description:
        "Skip the tech headaches create sessions, programs, and events in minutes, all from one dashboard.",
    },
    {
      id: 3,
      image: Earn,
      title: "Earn with Purpose",
      description:
        "Share your expertise, make an impact, and get rewarded through sessions, programs, and community events.",
    },
    {
      id: 4,
      image: Track,
      title: "Track Your Impact",
      description:
        "See how your sessions and programs perform with clear insights on engagement, feedback, and earnings.",
    },
  ];

  return (
    <section className="bg-Primarybg py-20">
      <div className="xs:w-[95vw] xl:w-[950px] mx-auto px-6 text-center flex flex-col items-center-safe">
        <h3 className="font-Buenard font-bold text-Paragraph2 text-textGreen">
          Features
        </h3>
        <h1 className="font-Urbanist font-semibold text-Heading1 leading-tight tracking-tight capitalize ">
          Built for Real Guides
        </h1>
        <p className="font-Urbanist font-normal text-Paragraph6 leading-relaxed tracking-normal text-textGray ">
          Nawaya makes it easy to share your expertise, connect with the right 
          <br />
          learners, and grow your impact without the noise or complexity.
        </p>

        {/* 3 feature cards to be added here later */}
        <div className="grid grid-cols-2 mt-12 gap-6">
          {/* Feature cards go here */}

          {GuideFeaturesCards.map((card) => (
            <div
              key={card.id}
              className="bg-btnGray lg:p-5 xl:p-8 rounded-4xl overflow-hidden flex flex-col items-center-safe border border-btnGray shadow-sm"
            >
              {/* Card Image */}
              <img src={card.image} alt={card.title} className="mr-auto" />

              <div className="w-full space-y-2 mt-6">
                <h1 className="font-Urbanist font-semibold lg:text-Heading6 xl:text-Heading5 leading-tight tracking-tight capitalize text-left">
                  {card.title}
                </h1>

                <p className="font-Urbanist font-normal lg:text-Paragraph7 xl:text-Paragraph6 leading-relaxed tracking-normal text-textGray text-left">
                  {card.description}
                </p>
              </div>

              {/* card icon */}
              {/* <div className="absolute w-12 h-12 bg-[#208837]/10 rounded-full top-5 right-5 flex flex-col items-center-safe justify-center-safe">
                {card.icon}
              </div> */}
            </div>
          ))}
        </div>

        {/* join waitlist button */}
        <div className="mt-10">
          <JoinWaitlist_Btn />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSec;
