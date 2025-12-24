import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight, ShieldCheck, Clock, Video, Calendar, Sparkles } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-GrayBg flex items-center justify-center p-4 md:p-6 font-Urbanist relative">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[5%] -right-[5%] w-72 h-72 bg-[#94BD1C]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[5%] -left-[5%] w-72 h-72 bg-[#29C28C]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container - Reduced Max Width for Elegance */}
      <div className="max-w-3xl w-full bg-white rounded-[32px] shadow-[0_20px_60px_rgba(148,189,28,0.08)] overflow-hidden z-10 border border-white/50">
        
        {/* Brand Header Section - More Compact */}
        <div className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] p-6 md:p-10 text-center text-white relative">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner">
              <CheckCircle size={32} className="text-white" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
            🎉 You’re In — Exclusive Access Confirmed
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-xl mx-auto">
            Your one-time payment was successful. You now have exclusive early access to Nawaya.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Left Col: Activation Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7E9] border border-[#94BD1C]/10">
                <div className="bg-white p-2.5 rounded-xl shadow-sm text-[#94BD1C] flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D3A1A] text-sm mb-0.5">Access Activation</h3>
                  <p className="text-[#5C6E46] text-xs leading-relaxed">
                    Access is being activated now. Usually takes up to <span className="font-bold text-[#94BD1C]">10 minutes</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#EAF7F2] border border-[#29C28C]/10">
                <div className="bg-white p-2.5 rounded-xl shadow-sm text-[#29C28C] flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A3A31] text-sm mb-0.5">Check Your Email</h3>
                  <p className="text-[#466E63] text-xs leading-relaxed">
                    You’ll receive your login credentials and confirmation shortly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Founder Access Perks */}
            <div className="bg-gradient-to-br from-white to-[#F7FAF3] rounded-2xl p-6 border border-[#94BD1C]/20 shadow-sm">
               <h3 className="font-black text-[#2D3A1A] uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#94BD1C]"></div> Founder Access Includes:
               </h3>

               <ul className="space-y-3">
                 {[
                   { icon: <Sparkles size={14} />, text: "Early platform access" },
                   { icon: <Video size={14} />, text: "Founder video" },
                   { icon: <Calendar size={14} />, text: "15-minute session booking" }
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-[#4A5D35] font-bold text-xs">
                      <div className="w-6 h-6 rounded-full bg-[#94BD1C]/10 flex items-center justify-center text-[#94BD1C]">
                        {item.icon}
                      </div>
                      {item.text}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Buttons Section - Scaled Down */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#94BD1C] text-white rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Go to Login <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#94BD1C] border-2 border-[#94BD1C] rounded-full font-bold hover:bg-[#94BD1C]/5 transition-all text-center text-sm"
            >
              Back to Homepage
            </Link>
          </div>
        </div>

        {/* Footer Micro-Copy */}
        <div className="bg-[#F0F7E9]/40 p-5 text-center border-t border-[#94BD1C]/5">
          <p className="text-[11px] text-[#7A8C64] font-medium">
            Didn’t receive an email? Check spam or <a href="mailto:support@nawaya.com" className="text-[#94BD1C] font-bold hover:underline">contact support</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;