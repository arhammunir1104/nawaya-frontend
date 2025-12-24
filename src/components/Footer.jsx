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

// --- Link Data Structure ---
const linkColumns = [
  {
    title: "Links",
    links: [{text: "How it works", link :"#how-it-works"}, {text: "Features", link :"#features"},{text: "FAQ", link :"#faq"}],
  },
  {
    title: "Legal",
    links: [{text: "Privacy Policy", link :"/privacy-policy"}, {text: "Term of Use", link :"/terms-of-use"}],
  },
  {
    title: "Social",
    email: "hello@nawaya.io",
    links: [
      { Icon: instagram, href: '#', name: 'Instagram', link: "#" },
      { Icon: linkedin, href: '#', name: 'LinkedIn', link: "#" },
      { Icon: twitter, href: '#', name: 'Twitter', link: "#" },
    ]
  },
];

const Footer = () => {
  return (
    <footer className="font-sans pt-16 pb-8" style={{ backgroundColor: BG_DARK, color: TEXT_WHITE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand/CTA and Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand, Description, and Button */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <img src={footerIcon} alt="Nawaya Logo" />
               <p className="text-md text-white font-Urbanist leading-relaxed">Where growth becomes a shared journey.</p>
            </div>
            <p style={{color : TEXT_GRAY}} className="text-sm font-Urbanist leading-relaxed mb-6 max-w-sm">
            Nawaya brings people together to grow and guide through live sessions, programs, and circles - creating meaningful progress through shared knowledge, real connection, and intentional learning.
            </p>

             <div className="w-fit mt-6 relative z-10">
              <JoinWaitlist_Btn />
            </div>
          </div>

          {/* Columns 2 & 3: Link Sections */}
          {linkColumns.slice(0, 2).map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="text-sm text-white hover:text-[#00C29F] transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Last Link Section (Social) */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
              {linkColumns[2].title}
            </h4>
            <a href={`mailto:${linkColumns[2].email}`} className="hover:text-[#00C29F] transition-colors">
              <p className="text-sm">{linkColumns[2].email}</p>
            </a>
            <div className="flex space-x-4 pt-4">
              {linkColumns[2].links.map((item, idx) => (
                <Link key={idx} to={item.link}>
                  <div className="hover:opacity-80 transition-opacity">
                    <img src={item.Icon} className='md:w-8 md:h-8 w-6 h-6 rounded-lg' alt={item.name} />  
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT SECTION */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-sm font-Urbanist" style={{ color: TEXT_GRAY }}>
            © 2025 Nawaya. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;