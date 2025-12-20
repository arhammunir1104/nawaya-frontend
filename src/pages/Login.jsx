import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/General/Logo.png";
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { AppContext } from "../context/AppContext";
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const {token ,setToken } = useContext(AppContext);

  // 1. STATE FOR DATA COLLECTION
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);


  useEffect(()=>{
    if(token){
        setPageLoading(true);
        navigate("/");
    }
  },[])

  // 2. SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);

    try {
      // Sending data to backend
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, {
        email,
        password
      });


      if (response.data.status == "success") {
        const token = response.data.token;
        
        // Save token in cookies for 7 days
        cookies.set('user_token', token, { path: '/', maxAge: 604800 });
        
        // Update global context
        setToken(token);
        toast.success("Loggedin Successfully.")
        // Redirect to home or dashboard

        setTimeout(()=>{
          navigate("/");
        }, 1000)
      }
    } catch (error) {
    
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials.")
  
    } finally {
      setLoading(false);
    }
  };

  return (
    pageLoading
    ?
    <></>
    :

    <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2] font-sans selection:bg-[#94BD1C]/30">
      <div className="w-full max-w-[1100px] h-[90vh] md:h-[700px] bg-white rounded-none md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:flex-row m-0 md:m-6">
        
        {/* LEFT SIDE: Brand Visual */}
        <div className="hidden md:flex w-1/2 relative p-12 flex-col justify-between overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #94BD1C 0%, #29C28C 100%)' }}>
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
              Empowering Your <br /> Growth Journey.
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 relative bg-white">
          <div className="mb-10">
            <h3 className="text-3xl font-black text-[#111111] tracking-tight">Welcome Back</h3>
            <p className="text-[#888888] mt-2 font-medium">Please enter your details to login.</p>
          </div>

          {/* 3. ATTACH HANDLER TO FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <IoMdMail className="text-gray-400 group-focus-within:text-[#94BD1C] transition-colors" size={20} />
                </div>
                <input 
                  type="email" 
                  value={email} // Controlled input
                  onChange={(e) => setEmail(e.target.value)} // Update state
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
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <IoMdLock className="text-gray-400 group-focus-within:text-[#94BD1C] transition-colors" size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password} // Controlled input
                  onChange={(e) => setPassword(e.target.value)} // Update state
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
              disabled={loading}
              className="w-full py-4 mt-4 rounded-2xl text-white font-bold shadow-lg shadow-[#94BD1C]/20 hover:shadow-[#94BD1C]/40 transition-all active:scale-[0.98] text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;