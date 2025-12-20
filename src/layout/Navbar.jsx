import React, { useContext, useEffect, useState, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { FaChevronDown, FaThLarge, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import JoinWaitlist_Btn from "../components/JoinWaitlist_Btn";
import RoleToggle from "../components/RoleToggle";
import SideBar from "./SideBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Cookies from 'universal-cookie';

const Navbar = ({ role, setRole }) => {
  const [showOpt, setShowOpt] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { token, setToken } = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowOpt(location.pathname === "/");
  }, [location]);

  const handleLogout = () => {
    console.log("Hello")
    cookies.remove('user_token', { path: '/' });
    setToken(false);
    setProfileOpen(false);
    navigate('/');
  };

  const menu = [
    { id: 1, name: "Features", url: "#features" },
    { id: 2, name: "How it Works", url: "#how-it-works" },
    { id: 3, name: "FAQ", url: "#faq" },
  ];

  // Reusable Profile Dropdown Component to avoid code duplication
  const ProfileDropdown = () => (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border border-gray-200 hover:border-[#94BD1C] transition-all shadow-sm group"
      >
        <div className="bg-[#94BD1C] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white group-hover:bg-[#83a919] transition-colors">
          <FaUserAlt className="text-xs md:text-sm" />
        </div>
        <span className="font-Urbanist font-bold text-[10px] md:text-xs text-textPrimary">ACCOUNT</span>
        <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} />
      </button>

      {profileOpen && (
        <div className="absolute right-0 mt-3 w-48 md:w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 transform origin-top-right transition-all z-[60]">
          <div className="px-4 py-2 border-b border-gray-50 mb-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">User Menu</p>
          </div>
          <NavLink 
            to="/user" 
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:bg-gray-50 hover:text-[#94BD1C] transition-colors"
          >
            <FaThLarge className="text-gray-400 text-xs" /> Dashboard
          </NavLink>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 transition-colors"
          >
            <FaSignOutAlt className="text-xs" /> Logout
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-GrayBg w-full sticky top-0 z-[50] flex justify-center border-b border-gray-100/80 backdrop-blur-md">
      <section className="w-[90vw] 2xl:w-[1400px] flex items-center justify-between py-4">
        
        {/* LEFT: Logo & Links (Desktop) */}
        <div className="flex items-center gap-8 xl:gap-12">
          <NavLink to="/" className="hover:opacity-80 transition-opacity">
            <img src={Logo} alt="Nawaya Logo" className="hidden lg:flex w-10 h-10 xl:w-14 xl:h-14 object-contain" />
          </NavLink>
          
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.url} className="font-Urbanist text-textPrimary hover:text-[#94BD1C] transition-colors font-semibold text-sm xl:text-base">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {showOpt && <RoleToggle role={role} setRole={setRole} />}
          
          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            {token ? (
              <ProfileDropdown />
            ) : (
              <>
                <NavLink 
                  to="/login"
                  className="font-Urbanist text-textPrimary hover:text-[#94BD1C] font-bold transition-all text-sm uppercase tracking-wider"
                >
                  Login
                </NavLink>
                <JoinWaitlist_Btn />
              </>
            )}
          </div>
        </div>

        {/* MOBILE VIEW (Single Logo & Smart Actions) */}
        <div className="flex lg:hidden w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-sm border border-gray-100"
            >
              <GrMenu className="text-lg" />
            </button>
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="w-9 h-9" />
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            {token ? (
              <ProfileDropdown />
            ) : (
              <JoinWaitlist_Btn />
            )}
          </div>
        </div>
      </section>

      <SideBar 
        menus={menu} 
        visible={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        isLoggedIn={!!token}
        onLogout={handleLogout}
      />
    </nav>
  );
};

export default Navbar;