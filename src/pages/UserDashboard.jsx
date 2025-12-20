import React from 'react';
import { IoMdVideocam, IoMdCalendar, IoMdCheckmarkCircle } from "react-icons/io";
import Footer from '../components/Footer';

const UserDashboard = ({ userName = "Aarav" }) => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans p-4 md:p-10 lg:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Greeting Section */}
        <header className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Hello, <span className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">{userName}</span>!
          </h1>
          <p className="text-[#666666] text-lg mt-2 font-medium">Welcome back to your Nawaya space.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#94BD1C]/10 flex items-center justify-center text-[#94BD1C]">
                  <IoMdVideocam size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#111111]">Exclusive Masterclass</h3>
              </div>
              
              {/* Responsive Video Embed */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Random placeholder
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[#111111] mb-3">Foundations of Strategic Growth</h4>
                <p className="text-[#666666] leading-relaxed">
                  In this session, we explore the core principles of building a sustainable career path while balancing personal wellbeing. Watch this before our scheduled 1:1.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: Calendly / Action Area */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-[40px] shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center h-fit sticky top-24">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F9FBF7] to-[#E2F3D3] rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                <IoMdCalendar size={40} className="text-[#29C28C]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#111111] mb-2">Book Your Session</h3>
              <p className="text-[#666666] text-sm mb-8 leading-relaxed">
                Ready to take the next step? Schedule your 1:1 strategy meeting with our mentors via Calendly.
              </p>

              {/* Calendly Button - Site Theme Gradient */}
              <a 
                href="https://calendly.com" // Replace with actual link
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg hover:shadow-[#94BD1C]/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
              >
                Schedule Now
              </a>

              <div className="mt-8 pt-8 border-t border-gray-50 w-full">
                <div className="flex items-center gap-3 text-left">
                  <IoMdCheckmarkCircle className="text-[#94BD1C]" size={20} />
                  <span className="text-sm font-semibold text-[#111111]">60-minute duration</span>
                </div>
                <div className="flex items-center gap-3 text-left mt-3">
                  <IoMdCheckmarkCircle className="text-[#94BD1C]" size={20} />
                  <span className="text-sm font-semibold text-[#111111]">Video call via Zoom/Google Meet</span>
                </div>
              </div>
            </div>

           
          </div>

        </div>
      </div>
    </div> 
  );
};

export default UserDashboard;