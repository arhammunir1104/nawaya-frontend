import React, { useState, useEffect } from 'react';
import '../index.css';
import SurveyModal from './SurveyModal';

const JoinWaitlist_Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // window.scrollTo(0,0)
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]); 

  return (


    <>
  <button 
    type="button" 
    onClick={() => setIsModalOpen(true)}
    className="group relative inline-flex items-center justify-center px-6 py-[10px] rounded-full font-semibold font-Urbanist transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_8px_22px_rgba(11,191,149,0.12)] active:scale-95"
  >
    {/* 1. NORMAL STATE BACKGROUND: The solid gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#AABD05] to-[#0CBF95] transition-opacity duration-300 group-hover:opacity-0"></div>

    {/* 2. HOVER STATE BACKGROUND: The white interior with gradient border */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] bg-gradient-to-r from-[#AABD05] to-[#0CBF95]">
      <div className="w-full h-full bg-white rounded-full"></div>
    </div>

    {/* 3. BUTTON TEXT */}
    <span className="relative z-10 transition-all duration-300 xs:text-Paragraph6 2xl:text-Paragraph4 font-bold
      /* Default: Solid White */
      text-white 
      /* Hover: Gradient Text */
      group-hover:bg-gradient-to-r group-hover:from-[#AABD05] group-hover:to-[#0CBF95] group-hover:bg-clip-text group-hover:text-transparent
    ">
      Join the waitlist
    </span>
  </button>

  {isModalOpen && <SurveyModal onClose={() => setIsModalOpen(false)} />}
</>
  );
};

export default JoinWaitlist_Btn;