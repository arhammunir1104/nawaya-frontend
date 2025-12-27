import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // Added for z-index priority
import PayButton from './PayButton';
import { FaPlay } from "react-icons/fa"; // For the placeholder icon
import JoinWaitlist_Btn from './JoinWaitlist_Btn';

const WatchAVideoGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Restoring your exact original layout inside the Portal logic
  const modalContent = (
    <div className="fixed w-[100vw] h-[100vh] inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content - Your original structure */}
      <div className="relative overflow-y-hidden w-full max-w-4xl bg-white rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col max-h-[80dvh] animate-in zoom-in-95 duration-300">
        
        <div className=" p-5 overflow-y-hidden md:p-10 custom-scrollbar">
          
          {/* Header */}
          <h2 className="text-[#94BD1C] font-serif text-lg md:text-2xl font-bold mb-3 md:mb-5 text-left leading-tight">
            A Journey of Intention and Growth
          </h2>

          {/* Video Placeholder Section - Kept same size/structure */}
          <div className="relative h-[300px] w-full aspect-video rounded-xl md:rounded-3xl overflow-hidden bg-[#111] border-[3px] md:border-[8px] border-[#555555] shadow-lg flex items-center justify-center">
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#94BD1C] rounded-full flex items-center justify-center text-white shadow-lg mb-2">
                   <FaPlay className="ml-1" />
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Preview Video</span>
             </div>
          </div>


          {/* Action Buttons */}
          <div className="mt-5 md:mt-7 flex flex-row justify-end gap-3">
            <div>
             <button 
              onClick={() => setIsOpen(false)}
              className="px-6 cursor-pointer md:px-8 py-[11px]  rounded-full border border-[#94BD1C] text-[#94BD1C] font-bold font-Urbanist md:text-sm hover:bg-[#F4F6F2] transition-colors order-2 sm:order-1"
              > 
              Close
            </button>
              </div>           

            <div>
            <JoinWaitlist_Btn />
            </div>

            {/* <PayButton text={"Unlock Access for $19.99 (save $30)"} /> */}
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <>

          <button 
        type="button" 
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center justify-center px-6 py-[10px] rounded-full font-semibold font-Urbanist transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_8px_22px_rgba(11,191,149,0.12)] active:scale-95"
      >
        {/* 1. THE GRADIENT BORDER LAYER (Always there) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#AABD05] to-[#0CBF95]"></div>

        {/* 2. NORMAL STATE: White background that disappears on hover */}
        {/* Iske upar p-[2px] ki wajah se default mein border dikhega */}
        <div className="absolute inset-[2px] bg-white rounded-full transition-opacity duration-300 group-hover:opacity-0"></div>

        {/* 3. BUTTON TEXT */}
        <span className="relative z-10 transition-all duration-300 xs:text-Paragraph6 2xl:text-Paragraph4 font-bold
          /* Default: Gradient Text */
          bg-gradient-to-r from-[#AABD05] to-[#0CBF95] bg-clip-text text-transparent

          /* Hover: Solid White */
          group-hover:text-white group-hover:bg-none

          /* Active: Slightly dimmed white */
          group-active:text-[#F4F6F2] group-active:bg-none
        ">
          Watch a Video
        </span>
      </button>

      {/* Portaling the original design to the top of the body for z-score priority */}
      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
};

export default WatchAVideoGuide;