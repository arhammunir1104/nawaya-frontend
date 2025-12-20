import React, { useContext, useState } from 'react';
import { IoMdArrowBack, IoMdCheckmarkCircle } from "react-icons/io";
import thankyouIcon from "../assets/ThankYou/icon1.png"
import PayButton from './PayButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Cookies from 'universal-cookie';


const SurveyModal = ({ onClose }) => {
  // 1. State for Form Submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setTempToken } = useContext(AppContext);
  const cookies = new Cookies();
  // 2. State for Inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    seeking: '',
    interests: [],
    country: '',
    languages: [],
    growth: [],
    consent: false
  });

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
    try{
      e.preventDefault();

      const finalData = {
        name : formData.fullName,
        email : formData.email,
        seeking : formData.seeking,
        areaOfInterest : formData.interests,
        languagePreferance : formData.languages,
        grow : formData.growth,
        country : formData.country
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/addSurveyData`,
        finalData,
       { headers : {
          'Content-Type': 'application/json'
        }}
      );

      if(response?.data?.status == "success"){
        toast.success(response?.data?.message);
        setTempToken(response?.data?.data?.token);
        cookies.set('temp_token', response?.data?.data?.token, { 
          path: '/', 
          maxAge: 604800, // 7 days in seconds
          secure: true,   // Only send over HTTPS
          sameSite: 'lax' 
        });

        setTimeout(()=>{
        setIsSubmitted(true);
        }, 1500)
      }
      else{
        toast.error(response?.response?.data?.message)
      }


    }
    catch(e){
      // toast.error("Form Submission error.");
        toast.error(e?.response?.data?.message || "Something Went Wrong, Please Try Again Later");
      // console.log(e)
    };

  };

  // --- VIEW: THANK YOU MODAL ---
  if (isSubmitted) {
    return (
      <div className="fixed z-[9999] inset-0 h-[100vh] w-[100vw] inset-0 z-[9999] flex items-center justify-center p-2">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>
        <div className="relative border-2 mt-[-10%] w-[100%] mr-[5%] ml-[5%] md:w-[60%] bg-white rounded-[40px] shadow-2xl p-10 text-center animate-in zoom-in-95 duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-[#F4F6F2] rounded-full flex items-center justify-center">
              <img className='w-6 h-6' src={thankyouIcon}  alt="" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">You’re officially on the Nawaya waitlist!</h2>
          <p className="text-[#666666] text-center w-[100%] md:w-[60%] md:ml-[20%] text-xs leading-relaxed mb-2">
            Thank you for sharing your thoughts and joining our growing community of international learners and guides. You’ll receive a confirmation email shortly.
          </p>
          <div className='border-1 my-1 border-[#AABD05] '>
            <span></span>
          </div>

          <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">You’re officially on the Nawaya waitlist!</h2>
         
          <p className='font-Urbanist text-sm mb-2 text-center p-3'>Be among the first 500 early members to get 30% off your first year, watch our exclusive message from our founder, and book a personal 15-minute call. 
Limited to the first 500 members only. Once it’s gone, it’s gone.</p>
            
            <div className='flex md:flex-row flex-col gap-2 justify-center items-center'>
           <button onClick={onClose} type="button" className="btn-video cursor-pointer">
            <span className="btn-video__text xs:text-Paragraph6 2xl:text-Paragraph4">Close</span>
            </button>
            
                <PayButton />
            </div>
        </div>
      </div>
    );
  }

  // --- VIEW: SURVEY FORM ---
  return (
    <div className="fixed z-[9999] inset-0 h-[100vh] w-[100vw] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-black/42 backdrop-blur-[2px]" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300">
        
        {/* Header with Back Arrow */}
        <div className='flex items-center justify-start p-5 absolute top-0 left-0 z-10'>
          <button onClick={onClose}>
            <IoMdArrowBack className="text-3xl text-white hover:text-red-500 transition-all cursor-pointer" />
          </button>
        </div>

        <div className="w-full py-6 text-center shrink-0 mt-12 md:mt-0" style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}>
          <h2 className="text-white font-bold text-xl uppercase tracking-widest">Join The Waitlist</h2>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">Help Us Make Nawaya Better</h3>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              name="fullName"
              type="text" 
              placeholder="Enter your full name*" 
              className="w-full px-6 font-Urbanist py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C]" 
              required 
              onChange={handleChange}
            />
            <input 
              name="email"
              type="email" 
              placeholder="Enter your email*" 
              className="w-full px-6 font-Urbanist py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C]" 
              required 
              onChange={handleChange}
            />
            
            <select 
              name="seeking"
              className="w-full font-Urbanist px-6 py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none cursor-pointer" 
              required
              onChange={handleChange}
            >
              <option value="">Select what you are seeking at Nawaya*</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Networking">Networking</option>
              <option value="Growth">Growth Opportunities</option>
            </select>

            <div className="space-y-3">
              <p className="font-bold text-[#111111] text-sm text-left font-Urbanist">What are your area(s) of interest?*</p>
              {['Career / Work', 'Health & Wellbeing', 'Personal Development', 'Relationships', 'Entrepreneurship', 'Parenting / Famiily', 'Financial Growth', 'Leadership', 'Entrepreneurship', 'Other'].map((interest) => (
                <label key={interest} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer hover:bg-gray-100 transition-colors">
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value={interest}
                    className="w-5 h-5 font-Urbanist accent-[#94BD1C]" 
                    onChange={handleChange}
                  />
                  <span className="text-sm font-medium text-[#444]">{interest}</span>
                </label>
              ))}
            </div>

            <input 
              name="country"
              type="text" 
              placeholder="Enter your country / region*" 
              className="w-full font-Urbanist px-6 py-4 rounded-2xl bg-[#F4F6F2] border-none outline-none focus:ring-2 focus:ring-[#94BD1C]" 
              required
              onChange={handleChange}
            />

            <div className="space-y-3">
              <p className="font-bold text-left font-Urbanist text-[#111111] text-sm px-2">Do you have a language preference?*</p>
              {['Arabic', 'English', 'Both', 'Other Language'].map((lang) => (
                <label key={lang} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="languages"
                    value={lang}
                    className="w-5 font-Urbanist h-5 accent-[#94BD1C]" 
                    onChange={handleChange}
                  />
                  <span className="text-sm font-medium text-[#444]">{lang}</span>
                </label>
              ))}
            </div>

            <div className="space-y-3">
              <p className="font-bold text-left font-Urbanist text-[#111111] text-sm px-2">How would you like to grow?</p>
              {['I want to connect with like-minded people', 'I want to join a growth circle', 'I\'m seeking 1:1 mentoring', 'Not sure yet'].map((growth) => (
                <label key={growth} className="flex font-Urbanist items-center gap-4 p-4 rounded-2xl bg-[#F4F6F2] cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="growth"
                    value={growth}
                    className="w-5 h-5 font-Urbanist accent-[#94BD1C]" 
                    onChange={handleChange}
                  />
                  <span className="text-sm font-medium text-[#444]">{growth}</span>
                </label>
              ))}
            </div>

            <label className="flex items-start gap-3 py-4">
              <input 
                type="checkbox" 
                className="mt-1 w-4 h-4 accent-[#94BD1C]" 
                required 
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              />
              <span className="text-xs text-black font-Urbanist leading-relaxed">I agree to receive email updates and information about Nawaya's launch.</span>
            </label>

            <p className='text-black text-xs text-left font-Urbanist'>We’re building <span className='font-bold'> Nawaya </span> together with our early community. Once we launch, we’ll reach out 
with more details about membership and next steps</p>

            <div className="flex w-[100%] md:w-[60%] md:ml-[40%] flex-col sm:flex-row gap-4 pt-6 pb-2">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 py-4 rounded-full border-2 border-[#94BD1C] text-[#94BD1C] font-bold hover:bg-[#F9FBF7] transition-all"
              >
                Go Back
              </button>
              <button 
                type="submit" 
                className="flex-1 py-4 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95"
                style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;