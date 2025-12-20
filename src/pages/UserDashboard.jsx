import React, { useContext, useEffect, useState } from 'react';
import { IoMdVideocam, IoMdCalendar, IoMdCheckmarkCircle, IoMdLock, IoMdMail } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userData, setUserData] = useState({ name: "User" });
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/userDashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status == "success") {
        setIsAuthorized(true);
        setUserData(response.data.data || { name: response.data.data.username  });
      } else {
        setIsAuthorized(false);
      }
    } catch (e) {
      console.log("Auth Error:", e);
      setIsAuthorized(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token){
      navigate("/")
    }
    else{
      validateUser();
    }
  }, [token]);

  // 1. Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#94BD1C]"></div>
      </div>
    );
  }

  // 2. Expired / Unauthorized State
  if (!isAuthorized) {
    return <ExpiredMembershipView />;
  }

  // 3. Success State (The Dashboard)
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans p-4 md:p-10 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Hello, <span className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">{userData.username}</span>!
          </h1>
          <p className="text-[#666666] text-lg mt-2 font-medium">Welcome back to your Nawaya space.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#94BD1C]/10 flex items-center justify-center text-[#94BD1C]">
                  <IoMdVideocam size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#111111]">Exclusive Masterclass</h3>
              </div>
              <div className="relative pt-[56.25%] bg-black">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video player" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[#111111] mb-3">Foundations of Strategic Growth</h4>
                <p className="text-[#666666] leading-relaxed">
                  Explore the core principles of building a sustainable career path.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             {/* Schedule Card */}
             <div className="bg-white rounded-[40px] shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center sticky top-24">
                <div className="w-16 h-16 bg-[#94BD1C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#94BD1C]">
                  <IoMdCalendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Book Your Session</h3>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl text-white font-bold text-lg mt-4"
                  style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
                >
                  Schedule Now
                </a>
             </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

// --- THE EXPIRED / ERROR COMPONENT ---
const ExpiredMembershipView = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[50px] shadow-2xl p-10 text-center border border-gray-100 relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#94BD1C]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <IoMdLock size={40} />
          </div>

          <h2 className="text-3xl font-black text-[#111111] mb-4 tracking-tight">Access Locked</h2>
          
          <p className="text-[#666666] font-medium leading-relaxed mb-8">
            Your membership has expired or your account is inactive. Please upgrade your plan to continue your growth journey.
          </p>

          <button 
            className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-xl shadow-[#94BD1C]/20 transition-all hover:scale-[1.02] active:scale-95 mb-6"
            style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
          >
            Upgrade Membership
          </button>

          <div className="pt-8 border-t border-gray-50 mt-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Need Assistance?</p>
            <div className="flex items-center justify-center gap-2 text-[#111111] font-semibold">
              <IoMdMail className="text-[#94BD1C]" size={20} />
              <a href="mailto:admin@nawaya.community" className="hover:text-[#94BD1C] transition-colors">
                admin@nawaya.community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;