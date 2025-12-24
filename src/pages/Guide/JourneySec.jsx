import React, { useState } from 'react';
import { Plus, Minus, Target, TrendingUp, Clock } from 'lucide-react';
import DASHBOARD_IMAGE_URL from '../../assets/Grower/journey.png';
import feature1 from '../../assets/Guide/feature1.png';
import feature2 from '../../assets/Guide/feature2.png';
import feature3 from '../../assets/Guide/feature3.png';
import feature4 from '../../assets/Guide/feature4.png';
import feature5 from '../../assets/Guide/feature5.png';
import feature6 from '../../assets/Guide/feature6.png';
// Import your other images here:
// import SET_GOALS_IMG from '../../assets/Grower/set-goals.png'; 

// --- DESIGN CONSTANTS ---
const PRIMARY_GREEN = '#3E9218'; 
const LIGHT_GREEN = '#0CBF95'; 
const DARK_GRAY = '#777E87';  
const TEXT_GRAY = '#606060';  
const LIGHT_GRAY = "#E6E8EB";

// --- SECTION 2 CONTENT: Steps List with Image mapping ---
const steps = [
  { id: 1, title: 'Create your profile', content: 'Share who you are, what you guide on, and how you help others grow.', image: feature1 }, 
  { id: 2, title: 'Set up your offerings', content: 'Create 1:1 sessions, group circles, or structured programs - all on your terms.', image: feature2 },
  { id: 3, title: 'Connect with learners', content: 'Get matched with people aligned with your experience and values.', image: feature3 },
  { id: 4, title: 'Guide live & engage', content: 'Host live sessions, build relationships, and support real progress.', image: feature4 },
  { id: 5, title: 'Track and refine', content: 'See what resonates, improve your approach, and grow sustainably.', image: feature5 },
  { id: 6, title: 'Evolve your path', content: 'Adjust formats, topics, and depth as your guiding journey develops.', image: feature6 },
];

const JourneySec = () => {
  const [activeStep, setActiveStep] = useState(2);

  const handleStepClick = (id) => {
    setActiveStep(id);
  };

  return (
    <section id='how-it-works' className="font-sans bg-[#F0F1F2] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className='mb-8 mx-auto px-6 text-center flex flex-col items-center-safe xs:w-[90vw] xl:w-[90vw] 2xl:w-[1400px]'>
          <h3 className="font-Buenard font-bold xs:text-Paragraph4 lg:text-Paragraph2 text-textGreen">
            How it works
          </h3>
          <h1 className="font-Urbanist mt-1 font-semibold leading-tight tracking-tight capitalize text-textPrimary xs:text-Heading8 sm:text-Heading6 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1">
           From Knowledge to Impact
          </h1>
          <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray xs:text-Paragraph6 xs:mt-3 md:text-Paragraph5 lg:text-Paragraph4 lg:mt-6">
            A simple flow to start guiding and keep growing.
          </p>
        </div>

        {/* Updated Container: items-stretch ensures columns share the same height */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-stretch">
          
          {/* LEFT COLUMN: Steps */}
          <div className="w-full  lg:w-1/3 order-1">
            <div className={`p-2 lg:pt-0 rounded-2xl lg:rounded-none flex w-[90%] ml-[5%] lg:ml-0 lg:w-full lg:bg-[#F0F1F2] bg-white lg:flex-col justify-around flex-row lg:space-y-5`}>
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={`flex cursor-pointer transition-all duration-300 w-full
                    ${activeStep === step.id ? "lg:bg-white  lg:p-5 rounded-2xl shadow-sm" : "lg:bg-gray-50  lg:p-5 rounded-2xl hover:lg:bg-white/50"}
                  `}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div 
                    className="flex-shrink-0 text-left w-10  h-10 flex items-center justify-center rounded-full text-lg font-bold mr-4 transition-all duration-300"
                    style={{ 
                      backgroundColor: activeStep === step.id ? `white` : LIGHT_GRAY,
                      color: activeStep === step.id ? PRIMARY_GREEN : DARK_GRAY,
                      border: activeStep !== step.id ? `none` : `2px solid ${PRIMARY_GREEN}`
                    }}
                  >
                    {step.id}
                  </div>

                  <div className="hidden lg:flex flex-col pt-1">
                    <h3 
                      className="text-lg font-bold transition-colors duration-300"
                      style={{ color: activeStep === step.id ? "black" : DARK_GRAY }}
                    >
                      {step.title}
                    </h3>
                    
                    {activeStep === step.id && (
                      <p className="mt-1 text-sm font-medium animate-in fade-in slide-in-from-top-1 duration-300" style={{ color: TEXT_GRAY }}>
                        {step.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT COLUMN: Image container now uses h-full to match left column */}
          <div className="w-full lg:w-2/3 order-2 relative min-h-[300px] lg:min-h-full">
            <div className="lg:sticky lg:top-24 w-full h-full">
                {steps.map((step) => (
                    <img 
                        key={step.id}
                        src={step.image} 
                        alt={step.title} 
                        className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-all duration-500 ease-in-out ${
                            activeStep === step.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    />
                ))}
            </div>
          </div>
        </div>
        
        {/* SECTION 4: Mobile Guides Accordion */}
        <div className="lg:hidden w-[95%] ml-[2.5%] bg-white rounded-2xl mt-2 p-4" >
          <h2 className="text-2xl font-Urbanist font-bold mb-6" style={{ color: "black" }}>
                {steps[activeStep-1]?.title}
          </h2>
          <p className='font-Urbanist' style={{color : DARK_GRAY}}>{steps[activeStep-1]?.content}</p>
        </div>

      </div>
    </section>
  );
};

export default JourneySec;