import React from "react";
import { NavLink } from "react-router-dom";
import { FaGavel, FaBan, FaCheckCircle, FaChevronLeft } from "react-icons/fa";

const TermPage = () => {
  return (
    <div className="min-h-screen bg-GrayBg font-Urbanist text-textPrimary">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-100 py-10 lg:py-16 text-center">
        <div className="w-[90vw] max-w-[1000px] mx-auto">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 text-[#94BD1C] font-bold text-sm mb-6 hover:gap-3 transition-all"
          >
            <FaChevronLeft /> BACK TO HOME
          </NavLink>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <p className="text-gray-500 font-medium italic">Effective Date: December 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-[90vw] max-w-[900px] mx-auto py-12 md:py-20">
        
        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#29C28C] mb-4 mx-auto">
              <FaCheckCircle size={24} />
            </div>
            <h3 className="font-bold text-center mb-2">Eligibility</h3>
            <p className="text-xs text-center text-gray-500 leading-relaxed">Users must be 18+ and provide accurate credentials to participate.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 mx-auto">
              <FaBan size={24} />
            </div>
            <h3 className="font-bold text-center mb-2">Restrictions</h3>
            <p className="text-xs text-center text-gray-500 leading-relaxed">No scraping, spamming, or fraudulent expert advice is tolerated.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 mx-auto">
              <FaGavel size={24} />
            </div>
            <h3 className="font-bold text-center mb-2">Legal Compliance</h3>
            <p className="text-xs text-center text-gray-500 leading-relaxed">Users must follow local agricultural and digital laws.</p>
          </div>
        </div>

        {/* Legal Sections */}
        <article className="space-y-12 text-sm md:text-base leading-relaxed text-gray-700">
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Nawaya platform, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              2. Account Responsibilities
            </h2>
            <p className="mb-4">
              When you create an account, you are responsible for maintaining the security of your credentials. 
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-green-100 text-[#94BD1C] flex-shrink-0 flex items-center justify-center mt-0.5">✓</div>
                <span className="text-sm"><b>Growers</b> must provide accurate farm data.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-green-100 text-[#94BD1C] flex-shrink-0 flex items-center justify-center mt-0.5">✓</div>
                <span className="text-sm"><b>Guides</b> must represent their expertise truthfully.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              3. Marketplace & Advice Disclaimer
            </h2>
            <p>
              Nawaya acts as a platform to connect agricultural experts with farmers. While we verify Guide profiles, Nawaya is not responsible for the specific outcomes of agricultural advice provided. Users should exercise their own professional judgment when implementing suggestions.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#94BD1C] pl-4">
              4. Prohibited Activities
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the platform for any illegal purpose.</li>
              <li>Attempt to gain unauthorized access to our servers or other user accounts.</li>
              <li>Circumvent any platform fees or off-platform payment solicitations.</li>
              <li>Post content that is defamatory, obscene, or infringing on intellectual property.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              5. Termination of Service
            </h2>
            <p>
              We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the platform.
            </p>
          </section>

          {/* Contact Support */}
          {/* <section className="text-center pt-8">
            <p className="text-gray-500 mb-6">Got questions about our terms?</p>
            <a 
              href="mailto:legal@nawaya.com" 
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Contact Legal Team
            </a>
          </section> */}

        </article>
      </main>

      {/* <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Nawaya. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default TermPage;