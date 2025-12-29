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
      <div className="relative w-full max-w-4xl bg-white rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] animate-in zoom-in-95 duration-300">
        
        <div className="overflow-y-auto p-5 md:p-10 custom-scrollbar">
          
          {/* Header */}
          <h2 className="text-[#94BD1C] font-serif text-lg md:text-3xl font-bold mb-2 text-left leading-tight">
            A Message Meant for Those Who Are Ready to Go Deeper
          </h2>
          <p className="text-[#666666] text-xs md:text-base font-Urbanist mb-5 md:mb-6 text-left opacity-90 italic">
            This is a short preview of a private message from the founder - shared only with those who choose to support Nawaya from the beginning.
          </p>

          {/* Video Placeholder Section */}
          <div className="relative h-[250px] md:h-[350px] w-full aspect-video rounded-xl md:rounded-3xl overflow-hidden bg-[#111] border-[3px] md:border-[8px] border-[#555555] shadow-lg flex items-center justify-center">
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#94BD1C] rounded-full flex items-center justify-center text-white shadow-lg mb-2 cursor-pointer hover:scale-110 transition-transform">
                   <FaPlay className="ml-1" />
                </div>
                <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Preview · Full message unlocked after access</span>
             </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-[#111111] font-Urbanist text-base md:text-xl font-bold mb-3 text-left">
              This message is not content. It’s an intention.
            </h3>
            <div className="text-[#555555] text-[11px] md:text-[15px] leading-relaxed max-w-3xl font-Urbanist text-left space-y-3">
              <p>In the full video, the founder shares <span className="text-[#94BD1C] font-semibold">why Nawaya exists beyond features and platforms</span>, what kind of people this space is being built for, and what it truly means to grow with purpose, clarity, and community.</p>
              
              <p>Accessing the full message means choosing to be part of this journey - not as a spectator, but as an early supporter.</p>
              
              <p className="bg-[#F7FAF3] p-3 md:p-4 rounded-xl border-l-4 border-[#94BD1C] text-[#2D3A1A] font-medium">
                Your contribution helps us build Nawaya slowly, intentionally, and independently - without ads, noise, or outside pressure.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-end items-center gap-4">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-6 md:px-8 py-2 md:py-2.5 rounded-full border border-gray-200 text-gray-500 font-bold text-[10px] md:text-sm hover:bg-gray-50 transition-colors order-2 sm:order-1"
            >
              Close
            </button>

            <div className="flex flex-col items-center sm:items-end gap-1.5 w-full sm:w-auto order-1 sm:order-2">
                <PayButton text={"Unlock Full Message & Early Access - $19.99"} />
                <span className="text-[9px] md:text-[10px] text-gray-400 font-Urbanist px-2">
                   Includes early access perks + one-time founder call
                </span>
            </div>
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
        className="group relative inline-flex items-center justify-center px-10 py-3 rounded-full font-semibold font-Urbanist transition-all duration-300 cursor-pointer overflow-hidden  active:scale-95 hover:scale-105"
      >
        {/* 1. THE GRADIENT BORDER LAYER */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#94BD1C] to-[#29C28C]"></div>

        {/* 2. NORMAL STATE: White background that disappears on hover (preserved original design) */}
        <div className="absolute inset-[2px] bg-white rounded-full transition-opacity duration-300 group-hover:opacity-0"></div>

        {/* 3. BUTTON TEXT */}
        <span className="relative z-10 transition-all duration-300 text-md font-bold
          /* Default: Gradient Text */
          bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent
          /* Hover: Solid White */
          group-hover:text-white group-hover:bg-none
        ">
          Watch a short preview 
        </span>
      </button>

      {/* Portaling the original design to the top of the body for z-score priority */}
      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
};

export default WatchAVideo;