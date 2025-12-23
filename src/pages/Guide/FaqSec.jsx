import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'; // Changed from Plus/Minus to ChevronUp/ChevronDown
import Top_Image from "../../assets/Grower/faq.png"
// --- DESIGN CONSTANTS ---
const PRIMARY_GREEN = '#00C29F'; // Main accent color (Question text, Chevron icon)
const DARK_GRAY = '#333333';   // Main header and dark text color
const TEXT_GRAY = '#606060';   // Secondary descriptive text color (Answer text)
const LIGHT_GREEN = '#E6FAF5'; // Border color, surrounding container border
// const LIGHT_GRAY = '#F5FFEE';  // Background color for inactive items (custom shade for soft gray-green look)
const LIGHT_GRAY = "#F0F1F2"

// --- FAQ Content Data ---
const faqs = [ 
  {
    id: 1,
    question: "How do I become a guide on Nawaya?",
    answer: "Create a profile and join the waitlist. Once approved, you’ll be able to set up sessions, programs, or circles and start guiding.",
  },
  {
    id: 2,
    question: "Do I need prior coaching experience?",
    answer: `No formal coaching title is required. What matters is real-world experience, clarity, and a genuine desire to help others grow.
That said, all Guides on Nawaya go through a screening and verification process. We review backgrounds, experience, and intent to ensure Guides are who they claim to be and can provide meaningful, high-quality guidance.
This helps protect learners, maintain trust, and create a strong experience for everyone on the platform.
`,
  },
  { 
    id: 3,
    question: "How do I earn from sessions or programs?",
    answer: "You earn by hosting paid sessions, programs, or community experiences. Nawaya takes a small platform fee to support discovery, tools, and payments.",
  },
  {
    id: 4,
    question: "Can I set my own prices and schedule?",
    answer: "Yes. You’re fully in control of your pricing, availability, and format.",
  },
  {
    id: 5,
    question: "How does Nawaya help me get discovered?",
    answer: "Nawaya matches Guides with learners based on goals, interests, and relevance - so the right people find you without needing a large audience.",
  },
];

const FaqSec = () => {
  // State to manage which FAQ item is currently open (stores the ID)
  const [openId, setOpenId] = useState(2); // Defaulting to the first item open

  const toggleFAQ = (id) => {
    // If the currently open item is clicked, close it (set to null), otherwise open the new item
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id='faq' className="font-sans bg-white py-12 md:py-24 relative overflow-hidden">
      
      {/* BACKGROUND IMAGE / SHAPES (Simulating a background design element) */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        {/* Large circle top right */}
        <img src={Top_Image} alt="" />
        
        {/* Smaller shape bottom left */}
        
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Ensures content is above background */}

        {/* HEADER SECTION: Title and Subtitle */}
      

          <div className='mb-8  text-center flex flex-col items-center-safe 
                 '>
          <h3 className="font-Buenard font-bold xs:text-Paragraph4 lg:text-Paragraph2 text-textGreen">
          FAQ
        </h3>
        <h1 className="font-Urbanist mt-1 font-semibold leading-tight tracking-tight capitalize text-textPrimary
                xs:text-Heading8 sm:text-Heading6 md:text-Heading5 lg:text-Heading4 xl:text-Heading3 2xl:text-Heading1">
          Got questions?
        </h1>
        <p className="font-Urbanist font-normal leading-relaxed tracking-normal text-textGray 
                xs:text-Paragraph6 xs:mt-3 md:text-Paragraph5 lg:text-Paragraph4 lg:mt-6">
          Learn how Nawaya helps you grow, earn, and connect - whether you’re here to 
          <br className="hidden md:inline" />
          learn from others or guide them toward their next step.
        </p>
        </div>

        {/* FAQ ACCORDION CONTAINER */}
        <div className="rounded-2xl overflow-hidden relative z-20" >
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                // Dynamic styling for active/inactive state background and border
                className={`
                  transition-all my-2 rounded-2xl duration-300 
                  ${isOpen 
                    ? 'bg-white shadow-sm' // Active: White background, subtle shadow
                    : ''
                  }
                  ${index < faqs.length - 1 ? 'border-b' : ''}
                `}
                style={{ 
                    // Inactive background color and border color for separators
                    backgroundColor: isOpen ? 'white' : LIGHT_GRAY,
                    borderColor: LIGHT_GREEN 
                }}
              >
                {/* Question Button (The Accordion Header) */}
                <button
                  className="w-full flex justify-between items-start text-left py-3 px-6 md:py-4 md:px-8 focus:outline-none transition-colors duration-300"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  {/* Question Text */}
                  <span 
                    className={`text-lg font-semibold transition-colors duration-300`}
                    
                  >
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon (Up/Down) */}
                  <div className="flex-shrink-0 bg-[#faf8f8] p-1 rounded-[100%] h-10 w-10 flex items-center justify-center">
                    {isOpen ? (
                      // Up arrow when open
                      <ChevronUp className="w-5 h-5" style={{ color: DARK_GRAY }} strokeWidth={2.5} />
                    ) : (
                      // Down arrow when closed
                      <ChevronDown className="w-5 h-5" style={{ color: DARK_GRAY }} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer Content (The Accordion Body) */}
                <div 
                  // Dynamic height for smooth collapse/expand transition
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'}`}
                >
                  <p 
                    className="text-base px-6 md:px-8 pb-5 md:pb-6" 
                    style={{ color: TEXT_GRAY }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


export default FaqSec;