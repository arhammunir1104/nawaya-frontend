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
                  className="flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border border-gray-200 hover:border-[#94BD1C] transition-all shadow-sm group cursor-pointer"
                >
                  <div className="bg-[#94BD1C] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white group-hover:bg-[#83a919] transition-colors">
                    <FaUserAlt className="text-xs md:text-sm" />
                  </div>
                  <span className="font-Urbanist font-bold text-[10px] md:text-xs text-textPrimary">ACCOUNT</span>
                  <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} />
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
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:bg-gray-50 hover:text-[#94BD1C] transition-colors text-left"
                    >
                      <FaThLarge className="text-gray-400 text-xs" /> Dashboard
                    </button>
                    <button 
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 transition-colors text-left"
                    >
                      <FaSignOutAlt className="text-xs" /> Logout
                    </button>
                  </div>
                )} 
              </div>
            ) : (
              <>
                <NavLink to="/login" className="font-Urbanist text-textPrimary hover:text-[#94BD1C] font-bold transition-all text-sm uppercase tracking-wider">
                   <button 
                      type="button" 
                      className="btn-join flex z-9 cursor-pointer"
                    >
                      <span className="btn-join__text xs:text-Paragraph6 2xl:text-Paragraph4">
                        LOGIN
                      </span>
                    </button>
                </NavLink>
                {/* {location.pathname !== "/login" || token || tempToken || adminToken && <JoinWaitlist_Btn />} */}
                {/* {
                  (location.pathname == "/login" || token || tempToken || adminToken)
                  ?
                  <></>
                  :
                  <div className="flex z-[9999]">
                   <JoinWaitlist_Btn />
                   </div>
                } */}
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
              <NavLink to="/"><img src={Logo} alt="Logo" className="w-9 h-9" /></NavLink>
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
                    className="flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border border-gray-200 hover:border-[#94BD1C] transition-all shadow-sm group cursor-pointer"
                  >
                    <div className="bg-[#94BD1C] w-7 h-7 rounded-full flex items-center justify-center text-white">
                      <FaUserAlt className="text-xs" />
                    </div>
                    <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 transform origin-top-right transition-all z-[9999]">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setProfileOpen(false);
                          navigate("/user");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:bg-gray-50 text-left"
                      >
                        Dashboard
                      </button>
                      <button 
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 text-left"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <NavLink to="/login" className="font-Urbanist text-textPrimary hover:text-[#94BD1C] font-bold text-[10px] uppercase tracking-wider">Login</NavLink>
                  {/* {location.pathname !== "/login" || token || tempToken || adminToken  && <JoinWaitlist_Btn />} */}
                  {
                  (location.pathname == "/login" || token || tempToken || adminToken)
                  ?
                  <></>
                  :
                  <div className="flex z-20">
                   <JoinWaitlist_Btn />
                   </div>
                }
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