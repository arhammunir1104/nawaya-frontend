import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import footerIcon from "../assets/General/footer-icon.png"
import JoinWaitlist_Btn from "./JoinWaitlist_Btn";
import facebook from "../assets/General/facebook.png";
import instagram from "../assets/General/instagram.png";
import linkedin from "../assets/General/linkedin.png";
import twitter from "../assets/General/twitter.jpg";
import { Link } from 'react-router-dom';

// --- DESIGN CONSTANTS ---
const BG_DARK = '#131416';
const TEXT_GRAY = '#9FA7B1';
const TEXT_WHITE = '#FFFFFF';
const PRIMARY_GREEN = '#00C29F'; // Nawaya Primary Green

// --- Link Data Structure (Matching the image) ---
const linkColumns = [
  {
    title: "Links",
    links: [{text: "How it works", link :"#works"}, {text: "Features", link :"#features"},{text: "FAQ", link :"#faq"}],
  },
  {
    title: "Legal",
    links: [{text: "Privacy Policy", link :"#"}, {text: "Term of Use", link :"#"}],
  },
  {
    title: "Social",
    email: "hello@nawaya.ai",
    links: [
      { Icon: facebook, href: '#', name: 'Facebook', link:"#" },
    { Icon: instagram, href: '#', name: 'Instagram',link:"#"  },
    { Icon: linkedin, href: '#', name: 'LinkedIn',link:"#" },
    { Icon: twitter, href: '#', name: 'Twitter', link:"#" },
    ]
  },
];



const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    // Use the Nawaya primary green for the icons
    className="text-white hover:text-white transition-colors duration-200"
    style={{ color: PRIMARY_GREEN }}
  >
    <Icon size={24} className="hover:opacity-75 transition-opacity" />
  </a>
);

const Footer = () => {
  return (
    <footer className="font-sans pt-16 pb-8" style={{ backgroundColor: BG_DARK, color: TEXT_WHITE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Top Section: Brand/CTA and Links - using a 5-unit grid where the first column spans 2 units */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand, Description, and Button (Spans 2 units on large screens) */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               {/* Nawaya Logo Placeholder */}
               {/* <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center">
                  <span className="font-bold text-white">N</span>
               </div>
               <span className="text-xl font-bold text-white">Nawaya</span> */}
               <img src={footerIcon} alt="" />
            </div>
            <p style={{color : TEXT_GRAY}} className=" text-sm leading-relaxed mb-6 max-w-sm">
              Grow with guidance, not guesswork. Nawaya connects you with trusted coaches, learning circles, and programs to help you reach your goals with clarity and confidence.
            </p>

            {/* CTA Button */}
            {/* <button 
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 shadow-md hover:opacity-90"
                style={{ backgroundColor: PRIMARY_GREEN }}
            >
                Start Free Trial
            </button> */}
             <div className="w-fit mt-6 relative z-10 ">
              <JoinWaitlist_Btn />
            </div>
          </div>

          {/* Columns 2 & 3: Link Sections */}
          {linkColumns.slice(0, 2).map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-white mb-4  tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="text-sm text-white hover:text-gray-500 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Last Link Section (Company) and Social Icons */}
          <div  className="lg:col-span-1  ">
            <h4 className="text-sm font-semibold text-white mb-4  tracking-wider">
              {linkColumns[2].title}
            </h4>
           <a href={`mailto:${linkColumns[2].email}`}>
            <p>{linkColumns[2].email}</p>
          </a>
            <ul className="space-y-3 mb-2">
              <div className="flex space-x-6 pt-4">
              {linkColumns[2].links.map((item) => {
                  // <SocialIcon key={idx} Icon={item.Icon} href={item.href} />
                  return(
                    <>
                    <Link to={item.link}>
                    <div >
                        <img src={item.Icon} className='md:w-8 md:h-8 w-5 h-5 rounded-2xl' alt="" srcset="" />  
                    </div>
                    </Link>
                    </>
                  )
})}
            </div>
   
            </ul>
                       
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;