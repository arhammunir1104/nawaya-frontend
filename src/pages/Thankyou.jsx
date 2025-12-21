import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#F4F6F2] flex items-center justify-center p-5 font-Urbanist">
      <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-xl overflow-hidden relative">
        
        {/* Top Decorative Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#94BD1C] to-[#29C28C]"></div>

        <div className="p-8 md:p-16 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#94BD1C]/10 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle size={48} className="text-[#94BD1C]" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Thank You for Joining Us!
          </h1>
          <p className="text-[#666666] text-base md:text-lg mb-10 leading-relaxed">
            Your subscription has been successfully completed. You are now part of a global journey toward unity and growth.
          </p>

          {/* Instruction Box */}
          <div className="bg-[#F8F9F7] rounded-3xl p-6 md:p-8 mb-10 border border-gray-100 text-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Clock size={20} className="text-[#94BD1C]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111]">Estimated Processing Time</h3>
                <p className="text-sm text-[#666666]">
                  Please allow <span className="font-bold text-[#111111]">10-15 minutes</span> for our system to process your account.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Mail size={20} className="text-[#94BD1C]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111]">Check your Email</h3>
                <p className="text-sm text-[#666666]">
                  You will receive a <span className="font-bold text-[#111111]">confirmation message</span> and your 
                  <span className="font-bold text-[#111111]"> login credentials</span> via email shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <ShieldCheck size={20} className="text-[#94BD1C]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111]">Secure Access</h3>
                <p className="text-sm text-[#666666]">
                  Once you receive your credentials, use them to access your premium dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/login"
              className="w-full sm:w-auto px-10 py-4 bg-[#94BD1C] text-white rounded-full font-bold shadow-lg shadow-[#94BD1C]/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Go to Login <ArrowRight size={18} />
            </Link>
            
            <Link 
              to="/"
              className="text-[#666666] hover:text-[#111111] font-semibold text-sm transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>

        {/* Footer Support */}
        <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
          <p className="text-xs text-[#999999]">
            Didn't receive an email after 15 minutes? Check your spam folder or <a href="mailto:support@nawaya.com" className="text-[#94BD1C] underline">contact support</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;