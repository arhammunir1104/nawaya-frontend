import React, { useContext, useEffect, useState, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { FaChevronDown, FaThLarge, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import Logo from "../assets/Logo3.png";
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
  
  // Two separate refs for two different versions of the UI
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { token, setToken, tempToken,adminToken,setTempToken,setAdminToken } = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside BOTH refs
      const outsideDesktop = !desktopRef.current || !desktopRef.current.contains(event.target);
      const outsideMobile = !mobileRef.current || !mobileRef.current.contains(event.target);

      if (outsideDesktop && outsideMobile) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowOpt(location.pathname === "/" || location.pathname === "/guide");
  }, [location]);

  const handleLogout = (e) => {
    if (e) e.stopPropagation();
    cookies.remove('user_token', { path: '/' });
    cookies.remove('temp_token', { path: '/' });
    cookies.remove('admin_token', { path: '/' });

    setToken(false);
    setTempToken(false);
    setAdminToken(false);
    
    setProfileOpen(false);
    navigate('/');
  };

  const menu = [
    { id: 1, name: "Features", url: "#features" },
    { id: 2, name: "How it Works", url: "#how-it-works" },
    { id: 3, name: "FAQ", url: "#faq" },
  ];

  return (
    <nav className="bg-GrayBg w-full  top-0 z-5 flex justify-center border-b border-gray-100/80 backdrop-blur-md">
      <section className="w-[90vw] 2xl:w-[1400px] flex items-center justify-between py-4">
        
        <div className="flex items-center gap-8 xl:gap-12">
          <NavLink to="/" className="hover:opacity-80 transition-opacity">
            <img src={Logo} alt="Nawaya Logo" className="hidden lg:flex w-12 h-12 xl:w-16 xl:h-16 rounded-[100%] bg-white object-contain" />
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

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center gap-6">
          {showOpt && <RoleToggle role={role} setRole={setRole} />}
          
          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            {token ? (
              <div className="relative" ref={desktopRef}>
  <button 
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      setProfileOpen(!profileOpen);
    }}
    className={`flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border transition-all shadow-sm group cursor-pointer ${profileOpen ? 'border-[#94BD1C]' : 'border-gray-200 hover:border-[#94BD1C]'}`}
  >
    {/* Icon with Brand Gradient */}
    <div 
      className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white transition-all shadow-sm"
      style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}
    >
      <FaUserAlt className="text-xs md:text-sm" />
    </div>

    <span className={`font-Urbanist font-bold text-[10px] md:text-xs tracking-wider transition-colors ${profileOpen ? 'text-[#94BD1C]' : 'text-gray-700'}`}>
      ACCOUNT
    </span>

    <FaChevronDown className={`text-[10px] transition-transform duration-300 ${profileOpen ? 'rotate-180 text-[#94BD1C]' : 'text-gray-400'}`} />
  </button>

  {profileOpen && (
    <div className="absolute right-0 mt-3 w-48 md:w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 transform origin-top-right transition-all z-[9999]">
      <div className="px-4 py-2 border-b border-gray-50 mb-1">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">User Menu</p>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          setProfileOpen(false);
          navigate("/user");
        }}
        className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:bg-gray-50 hover:text-[#94BD1C] transition-colors text-left group/item"
      >
        <FaThLarge className="text-gray-400 text-xs group-hover/item:text-[#94BD1C] transition-colors" /> 
        Dashboard
      </button>

      <button 
        type="button"
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 transition-colors text-left"
      >
        <FaSignOutAlt className="text-xs cursor-pointer" /> 
        Logout
      </button>
    </div>
  )} 
</div>
            ) : (
              <>
                <NavLink to="/login" className="font-Urbanist text-textPrimary hover:text-[#94BD1C] font-bold transition-all text-sm uppercase tracking-wider">
               

                    <button 
                  type="button" 
                  className="group relative inline-flex items-center justify-center px-6 py-[10px] rounded-full font-semibold font-Urbanist transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_8px_22px_rgba(11,191,149,0.12)] active:scale-95"
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-[#AABD05] to-[#0CBF95] transition-opacity duration-300 group-hover:opacity-0"></div>

                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] bg-gradient-to-r from-[#AABD05] to-[#0CBF95]">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>

                  <span className="relative z-10 transition-all duration-300 xs:text-Paragraph6 2xl:text-Paragraph4 font-bold
                    /* Default: Solid White */
                    text-white 
                    /* Hover: Gradient Text */
                    group-hover:bg-gradient-to-r group-hover:from-[#AABD05] group-hover:to-[#0CBF95] group-hover:bg-clip-text group-hover:text-transparent
                  ">
                    Login
                  </span>
                </button>

                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex lg:hidden w-full flex-col gap-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-sm border border-gray-100">
                <GrMenu className="text-lg" />
              </button>
              <NavLink to="/"><img src={Logo} alt="Logo" className="w-10 h-10 bg-white rounded-[100%]" /></NavLink>
            </div>

<div className="flex items-center gap-3">
  {token ? (
    <div className="relative" ref={mobileRef}>
      <button 
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setProfileOpen(!profileOpen);
        }}
        className={`flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border transition-all shadow-sm group cursor-pointer ${profileOpen ? 'border-[#94BD1C]' : 'border-gray-200 hover:border-[#94BD1C]'}`}
      >
        {/* Avatar Circle using brand gradient */}
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm"
             style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}>
          <FaUserAlt className="text-[10px]" />
        </div>
        <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-300 ${profileOpen ? 'rotate-180 text-[#94BD1C]' : ''}`} />
      </button>

      {profileOpen && (
        <div className="absolute cursor-pointer right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 transform origin-top-right transition-all z-[9999]">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setProfileOpen(false);
              navigate("/user");
            }}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:text-[#94BD1C] hover:bg-gray-50 text-left transition-colors"
          >
            Dashboard
          </button>
          <div className="h-[1px] cursor-pointer  bg-gray-50 mx-2"></div>
          <button 
            type="button"
            onClick={handleLogout}
            className="w-full flex cursor-pointer items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 text-left transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center gap-3">
      <NavLink to="/login">
        <button 
          type="button" 
          className="group relative inline-flex items-center justify-center px-6 py-[10px] rounded-full font-semibold font-Urbanist transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_8px_22px_rgba(148,189,28,0.15)] active:scale-95"
        >
          {/* Normal State Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#94BD1C] to-[#29C28C] transition-opacity duration-300 group-hover:opacity-0"></div>

          {/* Hover State Hollow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] bg-gradient-to-r from-[#94BD1C] to-[#29C28C]">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>

          <span className="relative z-10 transition-all duration-300 font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#94BD1C] group-hover:to-[#29C28C] group-hover:bg-clip-text group-hover:text-transparent">
            Login
          </span>
        </button>
      </NavLink>
    </div>
  )}
</div>
          </div>
        </div>
      </section>

      <div className="z-50">
      <SideBar 
        menus={menu} 
        visible={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        isLoggedIn={!!token}
        onLogout={handleLogout}
      />
      </div>
    </nav>
  );
};

export default Navbar;