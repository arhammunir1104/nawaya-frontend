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
    question: "What makes Nawaya different from online courses?",
    answer: "You can start by navigating to the 'Goals' tab in your dashboard. Click 'New Goal', select a template or create a custom one, and define your key metrics and milestones.",
  },
  {
    id: 2,
    question: "How do I find the right coach or guide?",
    answer: "Nawaya matches you with guides based on your goals, interests, and learning style. You can also browse profiles, read reviews, and choose someone who truly understands your journey.",
  },
  { 
    id: 3,
    question: "Are sessions live or recorded?",
    answer: "Absolutely. Naway supports native integrations with major platforms like Slack, Google Analytics, and various CRM systems. Check the 'Integrations' section for a complete list and setup instructions.",
  },
  {
    id: 4,
    question: "How much does it cost to use Nawaya?",
    answer: "We offer 24/7 priority support via chat and email for all paid plans. Users on the Basic plan can access our comprehensive knowledge base and community forums.",
  },
  {
    id: 5,
    question: "Can I switch or message my guide after booking?",
    answer: "Data security is our top priority. We use industry-leading encryption protocols (AES-256) for data at rest and TLS 1.3 for data in transit. We are fully GDPR compliant.",
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