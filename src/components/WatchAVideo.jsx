import React, { useState, useEffect } from 'react';
import PayButton from './PayButton';

const WatchAVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <button 
        type="button" 
        className="btn-video cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="btn-video__text text-[10px] xs:text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wider">
          Watch a video
        </span>
      </button>

      {isOpen && (
        <div className="fixed w-[100vw]  h-[90vh] inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content - Constrained to 90% of dynamic viewport height */}
          <div className="relative w-full max-w-4xl bg-white rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col max-h-[80dvh] animate-in zoom-in-95 duration-300">
            
            <div className="overflow-y-auto p-5 md:p-10  custom-scrollbar">
              
              {/* Header */}
              <h2 className="text-[#94BD1C] font-serif text-lg md:text-2xl font-bold mb-3 md:mb-5 text-left leading-tight">
                A Message that Awakens Hearts and Minds!
              </h2>

              {/* Video Player Section - Replaced with YouTube Embed */}
              <div className="relative h-[300px] w-full aspect-video rounded-xl md:rounded-3xl overflow-hidden bg-black border-[3px] md:border-[8px] border-[#555555] shadow-lg">
                <iframe
                  className="absolute inset-0 w-[100%] h-[300px]"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Content - Scaled down margins to save space */}
              <div className="mt-5 md:mt-7">
                <h3 className="text-[#94BD1C] font-serif text-base md:text-xl font-bold mb-1 md:mb-2">
                  Take the Next Step in This Journey
                </h3>
                <p className="text-[#666666] text-[10px] md:text-sm leading-relaxed max-w-3xl font-Urbanist">
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
                {/* <button 
                  className="px-6 md:px-8 py-2 md:py-2.5 rounded-full text-white font-bold text-[10px] md:text-sm shadow-xl transition-transform active:scale-95 order-1 sm:order-2"
                  style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
                >
                  Join the waitlist
                </button> */}

                <PayButton text={"Unlock Access for $19.99 (save $30)"}  />
                
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WatchAVideo;