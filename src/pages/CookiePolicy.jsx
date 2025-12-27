import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-GrayBg font-Urbanist text-[#444] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#AABD05] to-[#0CBF95] bg-clip-text text-transparent mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-500">Last updated: December 2025</p>
        </motion.div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#AABD05] to-[#0CBF95] rounded-full inline-block"></span>
              What are Cookies?
            </h2>
            <p className="leading-relaxed">
              Cookies are small text files stored on your device to help us provide a better experience. 
              They allow us to remember your preferences, keep you logged in, and understand how you 
              interact with our platform, **Nawaya**.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[30px] bg-[#F4F6F2] border border-[#AABD05]/10">
              <h3 className="font-bold text-[#AABD05] mb-2">Essential Cookies</h3>
              <p className="text-sm">Necessary for the website to function, like secure login and payment processing via Stripe.</p>
            </div>
            <div className="p-6 rounded-[30px] bg-[#F4F6F2] border border-[#0CBF95]/10">
              <h3 className="font-bold text-[#0CBF95] mb-2">Analytics Cookies</h3>
              <p className="text-sm">Helps us understand how visitors move around the site so we can improve the user journey.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#AABD05] to-[#0CBF95] rounded-full inline-block"></span>
              How we use them?
            </h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#0CBF95]">
              <li>To recognize you when you sign in.</li>
              <li>To remember your progress in surveys or waitlist forms.</li>
              <li>To process payments securely through our partners.</li>
              <li>To prevent fraudulent activity and improve security.</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#AABD05]/5 to-[#0CBF95]/5 p-8 rounded-[30px] border-l-4 border-[#0CBF95]">
            <h3 className="font-bold text-[#111] mb-2">Controlling your Cookies</h3>
            <p className="text-sm italic">
              Most web browsers allow you to control cookies through their settings. However, if you 
              limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
          </section>

          <section className="text-center pt-8 border-t border-gray-100">
            <p className="mb-6">Have questions about our use of cookies?</p>
            <a 
              href="mailto:support@nawaya.io"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#AABD05] to-[#0CBF95] text-white font-bold shadow-lg active:scale-95 transition-transform"
            >
              Contact Support
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;