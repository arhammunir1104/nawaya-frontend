import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/General/Logo.png";
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2] font-sans selection:bg-[#94BD1C]/30">
      
      {/* Main Container */}
      <div className="w-full max-w-[1100px] h-[90vh] md:h-[700px] bg-white rounded-none md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:flex-row m-0 md:m-6">
        
        {/* LEFT SIDE: Brand Visual (Hidden on mobile) */}
        <div className="hidden md:flex w-1/2 relative p-12 flex-col justify-between overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #94BD1C 0%, #29C28C 100%)' }}>
          
          {/* Abstract Design Elements */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-black/5 rounded-full blur-2xl"></div>

          <NavLink to="/">
            {/* <img src={Logo} alt="Nawaya Logo" className="w-16 border-2 h-16 brightness-0 invert" /> */}
          </NavLink>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
              Empowering Your <br /> Growth Journey.
            </h2>
            <p className="text-white/80 mt-4 text-lg font-medium max-w-sm">
              Log in to access your personalized dashboard, masterclasses, and mentorship sessions.
            </p>
          </div>

          <div className="text-white/60 text-sm font-bold tracking-widest uppercase">
            {/* © 2024 Nawaya Community */}
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 relative bg-white">
          
          {/* Mobile Logo Only */}
          <div className="md:hidden flex justify-center mb-10">
            <img src={Logo} alt="Nawaya Logo" className="w-14 h-14" />
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-black text-[#111111] tracking-tight">Welcome Back</h3>
            <p className="text-[#888888] mt-2 font-medium">Please enter your details to login.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <IoMdMail className="text-gray-400 group-focus-within:text-[#94BD1C] transition-colors" size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-6 py-4 bg-[#F8FAF6] border-2 border-transparent rounded-2xl outline-none focus:border-[#94BD1C]/30 focus:bg-white transition-all font-medium text-[#111111]"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                {/* <a href="#" className="text-xs font-bold text-[#29C28C] hover:underline">Forgot?</a> */}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <IoMdLock className="text-gray-400 group-focus-within:text-[#94BD1C] transition-colors" size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-[#F8FAF6] border-2 border-transparent rounded-2xl outline-none focus:border-[#94BD1C]/30 focus:bg-white transition-all font-medium text-[#111111]"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#111111]"
                >
                  {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full py-4 mt-4 rounded-2xl text-white font-bold shadow-lg shadow-[#94BD1C]/20 hover:shadow-[#94BD1C]/40 transition-all active:scale-[0.98] text-lg"
              style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
            >
              Sign In
            </button>

            {/* Footer Links */}
            {/* <p className="text-center text-[#888888] text-sm mt-8">
              Don't have an account?{" "}
              <NavLink to="/" className="text-[#94BD1C] font-bold hover:underline">
                Join the waitlist
              </NavLink>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;