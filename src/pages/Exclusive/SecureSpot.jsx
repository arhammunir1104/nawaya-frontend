import React from 'react';
import PayButton from '../../components/PayButton';

const SecureSpot = () => {
  return (
    <div className="w-full font-sans">
      {/* SECTION 1: Top Half (Gray Background + Patterns) */}
      <section className="relative w-full py-24 bg-[#F2F2F2] overflow-hidden flex flex-col items-center text-center px-6">
        
        {/* Background Abstract Swirls (Replicating your design's background image) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 300C100 50 500 450 800 200C1100 -50 1400 350 1700 150" stroke="white" strokeWidth="110" strokeLinecap="round"/>
            <path d="M-100 380C200 130 600 530 900 280C1200 30 1500 430 1800 230" stroke="white" strokeWidth="70" strokeLinecap="round" opacity="0.4"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-lg md:text-[56px] font-Urbanist font-bold text-[#111111] mb-4 tracking-tight leading-tight">
            Secure Your Spot
          </h2>
          <p className="text-[#666666] text-md font-Urbanist  md:text-xl mb-12 max-w-2xl mx-auto">
            Join Nawaya's founding community and grow with us from day one.
          </p>

          {/* <button 
            className="px-12 py-4 rounded-full text-white cursor-pointer text-md shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
            }}
          >
            Pay $19.99 – Unlock My Access
          </button>
          
          */}

          <PayButton text={"Pay $19.99 – Unlock My Access"} />
        </div>
      </section>

      {/* SECTION 2: Bottom Half (White Background + Loading Bar) */}
      <section className="w-full py-20 bg-white flex flex-col items-center px-6">
        <div className="w-full max-w-[1000px]">
          
          {/* Progress Bar Container */}
          <div className="relative w-full">
            <div className="w-full h-6   bg-[#E8E8E8] rounded-full overflow-hidden flex items-center">
              {/* 40% Gradient Fill */}
              <div 
                className="h-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  width: '40%',
                  background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
                }}
              >
                40%
              </div>
            </div>

            {/* Percentage Markers */}
            <div className="flex justify-between mt-3 text-[#999999] font-bold text-sm px-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Spots Remaining Text */}
          <div className="text-center mt-2">
            <h3 className="text-md   text-[#111111] tracking-tight">
              Only 500 early member spots available. 472 of 500 Remaining
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecureSpot;