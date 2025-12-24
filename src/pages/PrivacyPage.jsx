import React from "react";
import { NavLink } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserShield, FaChevronLeft } from "react-icons/fa";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-GrayBg font-Urbanist text-textPrimary">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-100 py-10 lg:py-16">
        <div className="w-[90vw] max-w-[1000px] mx-auto text-center">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 text-[#94BD1C] font-bold text-sm mb-6 hover:gap-3 transition-all"
          >
            <FaChevronLeft /> BACK TO HOME
          </NavLink>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium">Last Updated: October 2023</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-[90vw] max-w-[900px] mx-auto py-12 md:py-20">
        
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#94BD1C] mb-4">
              <FaShieldAlt size={24} />
            </div>
            <h3 className="font-bold mb-2">Data Protection</h3>
            <p className="text-xs text-gray-500">We encrypt your data to ensure it stays safe and private.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#94BD1C] mb-4">
              <FaLock size={24} />
            </div>
            <h3 className="font-bold mb-2">Safe Access</h3>
            <p className="text-xs text-gray-500">Your credentials are never shared with third parties.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#94BD1C] mb-4">
              <FaUserShield size={24} />
            </div>
            <h3 className="font-bold mb-2">User Control</h3>
            <p className="text-xs text-gray-500">You have full control over your profile and visibility.</p>
          </div>
        </div>

        {/* Policy Sections */}
        <article className="space-y-12 text-sm md:text-base leading-relaxed text-gray-700">
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              To provide the best experience on Nawaya, we collect information that helps us connect Growers with the right Guides. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Details:</strong> Name, email address, and phone number.</li>
              <li><strong>Role-Specific Data:</strong> Farm locations and crop types for <b>Growers</b>; certifications and expertise for <b>Guides</b>.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our features and dashboard.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              2. How We Use Your Data
            </h2>
            <p>We use the collected data to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Facilitate connections between agricultural experts and farmers.</li>
              <li>Improve our dashboard algorithms and user experience.</li>
              <li>Send important updates regarding platform features or security.</li>
              <li>Ensure the safety and integrity of our community.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              3. Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              4. Cookies
            </h2>
            <p>
              We use cookies to understand and save your preferences for future visits. These are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              5. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions regarding this privacy policy, you may contact our support team:
            </p>
            {/* <div className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] p-[1px] rounded-2xl">
                <div className="bg-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="font-bold text-lg">Nawaya Support Team</p>
                        <p className="text-gray-500">Privacy & Data Protection Office</p>
                    </div>
                    <a 
                        href="mailto:support@nawaya.com" 
                        className="px-6 py-3 bg-[#94BD1C] text-white font-bold rounded-xl hover:bg-[#7da118] transition-colors"
                    >
                        Email Support
                    </a>
                </div>
            </div> */}
          </section>

        </article>
      </main>

      {/* Footer Branding */}
      {/* <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Nawaya. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default PrivacyPage;