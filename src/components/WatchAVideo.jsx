import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // Added for z-index priority
import PayButton from './PayButton';
import { FaPlay } from "react-icons/fa"; // For the placeholder icon

const WatchAVideo = () => {
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
      <div className="relative w-full max-w-4xl bg-white rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col max-h-[80dvh] animate-in zoom-in-95 duration-300">
        
        <div className="overflow-y-auto p-5 md:p-10 custom-scrollbar">
          
          {/* Header */}
          <h2 className="text-[#94BD1C] font-serif text-lg md:text-2xl font-bold mb-3 md:mb-5 text-left leading-tight">
            A Message that Awakens Hearts and Minds!
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

          {/* Text Content */}
          <div className="mt-5 md:mt-7">
            <h3 className="text-[#94BD1C] font-serif text-base md:text-xl font-bold mb-1 md:mb-2 text-left">
              Take the Next Step in This Journey
            </h3>
            <p className="text-[#666666] text-[10px] md:text-sm leading-relaxed max-w-3xl font-Urbanist text-left">
              You can schedule a personal call with our team and become a Premium Member of the waitlist. 
              Your contribution helps us build a global platform for unity, awareness, and growth of the 
              Muslim Ummah. <span className="font-bold text-[#111111]">Join for just $9.99 (30% OFF)</span> — 
              a small step with a great purpose.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 md:mt-7 flex flex-col sm:flex-row justify-end gap-3">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-6 md:px-8 py-2 md:py-2.5 rounded-full border border-[#94BD1C] text-[#94BD1C] font-bold text-[10px] md:text-sm hover:bg-[#F4F6F2] transition-colors order-2 sm:order-1"
            >
              Close
            </button>

            <PayButton text={"Unlock Access for $19.99 (save $30)"} />
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <>
      <button 
        type="button" 
        className="btn-video cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="btn-video__text text-[10px] xs:text-xs md:text-lg 2xl:text-base   tracking-wider">
         Watch a short preview 
        </span>
      </button>

      {/* Portaling the original design to the top of the body for z-score priority */}
      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
};

export default WatchAVideo;