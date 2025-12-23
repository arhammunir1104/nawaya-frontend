import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowBack, IoMdCheckmarkCircle } from "react-icons/io";
import thankyouIcon from "../assets/ThankYou/icon1.png"
import thankyouIconCircle from "../assets/ThankYou/icon2.png"
import PayButton from './PayButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';


const SurveyModal = ({ onClose }) => {
  // 1. State for Form Submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setTempToken, waitListEmail, setWaitListEmail } = useContext(AppContext);
  const cookies = new Cookies();
  // 2. State for Inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: waitListEmail || '',
    seeking: '',
    interests: [],
    country: '',
    languages: [],
    growth: [],
    consent: false
  });

  useEffect(() => {
    if (waitListEmail) {
      setFormData(prev => ({ ...prev, email: waitListEmail }));
    }
  }, [waitListEmail]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const currentArray = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...currentArray, value] });
      } else {
        setFormData({ ...formData, [name]: currentArray.filter(item => item !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const finalData = {
        name: formData.fullName,
        email: formData.email,
        seeking: formData.seeking,
        areaOfInterest: formData.interests,
        languagePreferance: formData.languages,
        grow: formData.growth,
        country: formData.country
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/addSurveyData`,
        finalData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response?.data?.status == "success") {
        toast.success(response?.data?.message);
        setTempToken(response?.data?.data?.token);
        cookies.set('temp_token', response?.data?.data?.token, {
          path: '/',
          maxAge: 604800, // 7 days in seconds
          secure: true,   // Only send over HTTPS
          sameSite: 'lax'
        });

        setWaitListEmail("");
        setTimeout(() => {
          setIsSubmitted(true);
        }, 1500)
      }
      else {
        toast.error(response?.response?.data?.message)
      }


    }
    catch (e) {
      // toast.error("Form Submission error.");
      toast.error(e?.response?.data?.message || "Something Went Wrong, Please Try Again Later");
      // console.log(e)
    };

  };

  // --- VIEW: THANK YOU MODAL ---
  if (isSubmitted) {
    
    return (
      <div className="fixed z-[9999] overflow-y-hidden inset-0 h-screen w-screen flex items-center justify-center p-2">
        <div className="absolute inset-0 overflow-y-hidden bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>
        <div className="relative  w-[95%] overflow-y-hidden md:w-[60%] max-h-[90vh] overflow-y-auto bg-white rounded-[40px] shadow-2xl p-6 md:p-10 text-center animate-in zoom-in-95 duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-14 relative h-14  rounded-full flex items-center justify-center">
              <div>
              <img className='w-14 ' src={thankyouIconCircle} alt="" />
              </div>
                
              <div>
                 <img className='w-6 h-6 top-3/10  opacity-[75%] left-3/10 absolute ' src={thankyouIcon} alt="" />
              </div>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">You’re on the Nawaya Waitlist 🎉</h2>
          <p className="text-[#666666] text-center w-full md:w-[60%] md:ml-[20%] text-[10px] md:text-xs leading-relaxed mb-2">
            Thanks for joining our early community of learners and guides from around the world.
          </p>
          <div className='border-t my-4 border-[#AABD05] '></div>

          <h2 className="text-md md:text-lg font-bold mb-2 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">Want to go one step deeper?</h2>

         

          <div className="max-w-md mb-2 mx-auto">
  {/* Header Text */}
  <p className="font-Urbanist text-xs md:text-sm font-semibold mb-6 text-center text-gray-800 px-3 leading-relaxed">
    Become one of Nawaya’s first <span className="text-[#94BD1C]">500 founding members</span> and unlock:
  </p>

  {/* Styled List */}
  <ul className="space-y-4 px-4">
    {[
      "An exclusive founder’s video sharing the vision behind Nawaya",
      "A personal 15-minute 1:1 call with me",
      "30% off your first year of Nawaya",
      "Early member recognition inside the app"
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        {/* Custom Green Checkmark Icon */}
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#94BD1C]/10 flex items-center justify-center mt-0.5">
          <svg 
            className="w-3 h-3 text-[#94BD1C]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        {/* List Content */}
        <span className="font-Urbanist text-xs md:text-sm text-gray-600 leading-snug">
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>

          <div className='flex md:flex-row flex-col gap-2 justify-center items-center'>
            <button onClick={onClose} type="button" className="btn-video cursor-pointer w-full md:w-auto">
              <span className="btn-video__text text-[10px] md:text-xs">Maybe later</span>
            </button>

            <NavLink to={"/exclusive"} className="w-full md:w-auto">
              <button
                className="w-full px-10 py-3 rounded-full text-white cursor-pointer text-sm md:text-md shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
                }}
              >
               Unlock Founding Access - $19.99
              </button>
            </NavLink>

          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: SURVEY FORM ---
  return (
    <div className="fixed z-20 inset-0 h-screen w-screen flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/42 backdrop-blur-[2px]" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-300">

        {/* Header - Fixed */}
        <div className="w-full py-4 md:py-6 text-center shrink-0 relative" style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}>
          <div className='flex items-center justify-start px-5 absolute top-0 left-0 h-full z-10'>
            <button onClick={onClose} type="button">
              <IoMdArrowBack className="text-2xl md:text-3xl text-white hover:text-red-500 transition-all cursor-pointer" />
            </button>
          </div>
          <h2 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">Join The Waitlist</h2>
        </div>

        {/* Form Body - Scrollable */}
        <div className="overflow-y-auto z-20 p-6 md:p-12 custom-scrollbar flex-1">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl md:text-3xl font-bold text-[#111111]">Help Shape Nawaya From Day One</h3>
            <p className='font-Urbanist text-sm text-gray-500 my-1'>Your answers help us build a meaningful experience for both growers and guides.</p>
          </div>

          <form id="survey-form" className="space-y-6" onSubmit={handleSubmit}>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your full name*"
              className="w-full px-6 font-Urbanist py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C] text-[#111111] placeholder:text-gray-500 text-sm md:text-base"
              required
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email*"
              className="w-full px-6 font-Urbanist py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C] text-[#111111] placeholder:text-gray-500 text-sm md:text-base"
              required
              onChange={handleChange}
              value={formData.email}
            />

            <select
              name="seeking"
              className="w-full font-Urbanist px-6 py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none cursor-pointer text-[#111111] text-sm md:text-base"
              required
              onChange={handleChange}
            >
              <option value="" className="text-gray-500">What brings you to Nawaya?*</option>
              <option value="Mentorship">I want to grow and learn</option>
              <option value="Networking">I want to guide others</option>
              <option value="Growth">Both</option>
            </select>

            <div className="space-y-3">
              <p className="font-bold text-[#111111] text-xs md:text-sm text-left font-Urbanist">What are your area(s) of interest?*</p>
              {['Career / Work', 'Health & Wellbeing', 'Personal Development', 'Relationships', 'Entrepreneurship', 'Parenting / Famiily', 'Financial Growth', 'Leadership', 'Other'].map((interest) => (
                <label key={interest} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    className="w-5 h-5 font-Urbanist accent-[#94BD1C]"
                    onChange={handleChange}
                  />
                  <span className="text-xs md:text-sm font-medium text-[#111111]">{interest}</span>
                </label>
              ))}
            </div>

            <input
              name="country"
              type="text"
              placeholder="Enter your country / region*"
              className="w-full font-Urbanist px-6 py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C] text-[#111111] placeholder:text-gray-500 text-sm md:text-base"
              required
              onChange={handleChange}
            />

            <div className="space-y-3">
              <p className="font-bold text-left font-Urbanist text-[#111111] text-xs md:text-sm px-2">Do you have a language preference?*</p>
              {['Arabic', 'English', 'Both', 'Other Language'].map((lang) => (
                <label key={lang} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer">
                  <input
                    type="checkbox"
                    name="languages"
                    value={lang}
                    className="w-5 font-Urbanist h-5 accent-[#94BD1C]"
                    onChange={handleChange}
                  />
                  <span className="text-xs md:text-sm font-medium text-[#111111]">{lang}</span>
                </label>
              ))}
            </div>

            <div className="space-y-3">
              <p className="font-bold text-left font-Urbanist text-[#111111] text-xs md:text-sm px-2">How would you like to grow?</p>
              {['Connect with like-minded people', 'Join a guided growth circle', 'Get 1:1 mentorship', 'I’m still exploring'].map((growth) => (
                <label key={growth} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer">
                  <input
                    type="checkbox"
                    name="growth"
                    value={growth}
                    className="w-5 h-5 font-Urbanist accent-[#94BD1C]"
                    onChange={handleChange}
                  />
                  <span className="text-xs md:text-sm font-medium text-[#111111]">{growth}</span>
                </label>
              ))}
            </div>

            <label className="flex items-start gap-3 py-4">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#94BD1C]"
                required
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              />
              <span className="text-[10px] md:text-xs text-black font-Urbanist leading-relaxed">I agree to receive updates about Nawaya’s launch and early access opportunities.</span>
            </label>

            <p className='text-black text-[10px] md:text-xs text-left font-Urbanist pb-4'><b>Nawaya </b> is being built with its early community. Once we launch, you’ll hear from us with next steps, early access details, and what’s coming first.</p>
          </form>
        </div>

        {/* Footer - Fixed/Sticky at Bottom */}
        <div className="shrink-0 p-5 md:p-8 bg-white border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          {/* <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 md:py-4 rounded-full border-2 border-[#94BD1C] text-[#94BD1C] font-bold hover:bg-[#F9FBF7] transition-all text-sm md:text-base"
          >
            Go Back
          </button> */}
          <button
            type="submit"
            form="survey-form"
            className="flex-1 py-3 md:py-4 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 text-sm md:text-base"
            style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;