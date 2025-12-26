import React, { useContext, useEffect, useState } from 'react';
import { IoMdVideocam, IoMdCalendar, IoMdCheckmarkCircle, IoMdLock, IoMdMail, IoMdStar } from "react-icons/io";
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

      if (response.data.status === "success") {
        setIsAuthorized(true);
        setUserData(response.data.data || { name: response.data.data.username });
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
    if (!token) {
      navigate("/");
    } else {
      validateUser();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#94BD1C]"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <ExpiredMembershipView />;
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans p-4 md:p-10 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-2xl md:text-4xl font-bold text-[#111111] tracking-tight">
            Welcome to Your Founding Access, <span className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">{userData.username}</span>
          </h1>
          <p className="text-[#666666] text-lg mt-3 font-medium max-w-2xl">
            You’re part of Nawaya’s early circle — a small group helping shape what this platform becomes.
          </p>
        </header>

        {/* CONTEXT STRIP */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 mb-10 border border-white flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2 flex items-center gap-2">
            <IoMdStar className="text-[#94BD1C]" /> Your Founding Access Includes:
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Founder’s private video", "One 15-minute 1:1 session", "30% lifetime discount", "Founding member recognition"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                <IoMdCheckmarkCircle className="text-[#94BD1C]" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT: VIDEO CARD */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#94BD1C]/10 flex items-center justify-center text-[#94BD1C]">
                    <IoMdVideocam size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-[#111111]">Founder’s Message</h3>
                </div>
                <span className="bg-[#94BD1C]/10 text-[#94BD1C] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Exclusive
                </span>
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
                <h4 className="text-2xl font-Urbanist font-bold text-[#111111] mb-4">Why Nawaya Exists — and Where We’re Going</h4>
                <p className="text-[#666666] font-Urbanist leading-relaxed text-base">
                  In this private message, I share the thinking, values, and long-term vision behind Nawaya — and why I believe intentional growth needs a different kind of platform. This video is available exclusively to our founding members.
                </p>

                <div className="flex items-center gap-2 mt-8 py-3 px-4 bg-gray-50 rounded-xl w-fit">
                  <IoMdLock className="text-[#94BD1C]" size={16} />
                  <p className="font-Urbanist text-[11px] md:text-xs font-bold tracking-wide text-gray-500 uppercase">
                    Recorded for early members <span className="mx-1 text-[#94BD1C] opacity-50">•</span> Not public
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 1:1 CALL CARD */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center sticky top-10">
              <div className="w-16 h-16 bg-[#94BD1C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#94BD1C]">
                <IoMdCalendar size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-3">Book a 1:1 Founder Session</h3>
              <p className="text-gray-500 text-sm font-Urbanist mb-8 px-2">
                A 15-minute personal conversation to share feedback, ask questions, or explore how Nawaya can best support your journey.
              </p>
              
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#94BD1C]/20"
                style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
              >
                Schedule My 1:1 Call
              </a>
              
              <div className="mt-6 flex flex-col gap-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Limited availability
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  One session per founding member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER TRUST LINE */}
        <footer className="mt-16 text-center border-t border-gray-200 pt-8">
          <p className="text-[#666666]/60 text-[11px] md:text-xs font-medium italic">
            This content is part of Nawaya’s early access program and is intended for founding members only. Unauthorized distribution is prohibited.
          </p>
        </footer>
      </div>
    </div> 
  );
};

// --- THE EXPIRED / ERROR COMPONENT ---
const ExpiredMembershipView = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[50px] shadow-2xl p-10 text-center border border-gray-100 relative overflow-hidden">
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
              <a href="mailto:support@nawaya.io" className="hover:text-[#94BD1C] transition-colors">
                support@nawaya.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;