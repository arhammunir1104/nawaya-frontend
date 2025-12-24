import React, { useContext, useEffect, useState, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { FaChevronDown, FaThLarge, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import Logo from "../assets/Logo3.png";
import RoleToggle from "../components/RoleToggle";
import SideBar from "./SideBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Cookies from 'universal-cookie';

const Navbar = ({ role, setRole }) => {
  const [showOpt, setShowOpt] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { token, setToken, setTempToken, setAdminToken } = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <nav className="bg-GrayBg w-full top-0 z-8 flex justify-center border-b border-gray-100/80 backdrop-blur-md">
      <section className="w-[95vw] 2xl:w-[1400px] flex items-center justify-between py-2.5 md:py-4">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className="hover:opacity-80 transition-opacity">
            <img src={Logo} alt="Nawaya Logo" className="w-14 h-14 rounded-full bg-white object-contain shadow-sm" />
          </NavLink>
          <ul className="flex items-center gap-6">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.url} className="font-Urbanist text-textPrimary hover:text-[#94BD1C] transition-colors font-semibold text-sm xl:text-base">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {showOpt && <RoleToggle role={role} setRole={setRole} />}
          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            {token ? (
              <div className="relative" ref={desktopRef}>
                <button 
                  onClick={(e) => { e.stopPropagation(); setProfileOpen(!profileOpen); }}
                  className={`flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full border transition-all shadow-sm ${profileOpen ? 'border-[#94BD1C]' : 'border-gray-200 hover:border-[#94BD1C]'}`}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}>
                    <FaUserAlt size={14} />
                  </div>
                  <span className="font-Urbanist font-bold text-xs tracking-wider text-gray-700">ACCOUNT</span>
                  <FaChevronDown className={`text-[10px] text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-[9999]">
                    <button onClick={() => { navigate("/user"); setProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-gray-700 hover:bg-gray-50 hover:text-[#94BD1C] transition-colors">
                      <FaThLarge className="text-xs" /> Dashboard
                    </button>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-Urbanist font-bold text-red-500 hover:bg-red-50 transition-colors">
                      <FaSignOutAlt className="text-xs" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#AABD05] to-[#0CBF95] text-white font-bold font-Urbanist shadow-lg hover:opacity-90 transition-opacity">Login</button>
              </NavLink>
            )}
          </div>
        </div>

        {/* --- COMPACT MOBILE VIEW --- */}
        <div className="lg:hidden w-full flex items-center justify-between">
          
          {/* Left: Menu & Logo (Smaller Icons) */}
          <div className="flex items-center gap-1.5 min-w-[80px]">
            <button onClick={() => setSidebarOpen(true)} className="bg-white w-8 h-8 rounded-full flex justify-center items-center shadow-sm border border-gray-100">
              <GrMenu className="text-sm" />
            </button>
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="w-8 h-8 bg-white rounded-full object-contain" />
            </NavLink>
          </div>

          {/* Middle: Role Toggle (Heavily Optimized Size) */}
          <div className="flex-1 flex justify-center overflow-hidden">
            <div className="transform scale-[0.60] xs:scale-[0.70] origin-center transition-transform">
               {showOpt && <RoleToggle role={role} setRole={setRole} />}
            </div>
          </div>

          {/* Right: Profile or Login (Reduced Padding) */}
          <div className="flex justify-end min-w-[80px]">
            {token ? (
              <div className="relative" ref={mobileRef}>
                <button 
                  onClick={(e) => { e.stopPropagation(); setProfileOpen(!profileOpen); }}
                  className={`flex items-center gap-1 bg-white p-0.5 pr-1.5 rounded-full border shadow-sm ${profileOpen ? 'border-[#94BD1C]' : 'border-gray-200'}`}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)' }}>
                    <FaUserAlt size={9} />
                  </div>
                  <FaChevronDown className={`text-[7px] text-gray-400 ${profileOpen ? 'rotate-180' : ''}`} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 py-1 z-[9999]">
                    <button onClick={() => { navigate("/user"); setProfileOpen(false); }} className="w-full text-left px-4 py-2.5 text-xs font-Urbanist font-bold text-gray-700">
                      Dashboard
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-xs font-Urbanist font-bold text-red-500 border-t border-gray-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="bg-gradient-to-r from-[#94BD1C] to-[#29C28C] text-white font-bold font-Urbanist text-[10px] xs:text-[11px] px-3 py-1.5 rounded-full shadow-md whitespace-nowrap active:scale-95">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </section>

      <div className="relative z-[200]">
        <SideBar menus={menu} visible={sidebarOpen} onClose={() => setSidebarOpen(false)} isLoggedIn={!!token} onLogout={handleLogout} />
      </div>
    </nav>
  );
};

export default Navbar;