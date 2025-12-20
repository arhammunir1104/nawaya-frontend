import React, { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import Logo from "../assets/Logo.png";
import JoinWaitlist_Btn from "../components/JoinWaitlist_Btn";
import RoleToggle from "../components/RoleToggle";
import SideBar from "./SideBar";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ role, setRole }) => {
  const [showOpt, setShowOpt] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cleaner check for home path
    setShowOpt(location.pathname === "/");
  }, [location]);

  const menu = [
    { id: 1, name: "Features", url: "#features" },
    { id: 2, name: "How it Works", url: "" },
    { id: 3, name: "FAQ", url: "#faq" },
  ];

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="bg-GrayBg w-full sticky top-0 z-[50] flex justify-center">
      <section className="w-[90vw] 2xl:w-[1400px] flex items-center justify-between py-5 md:py-8 lg:py-5">
        
        {/* DESKTOP LEFT: Logo & NavLinks */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <NavLink to="/">
            <img src={Logo} alt="Nawaya Logo" className="w-12 h-12 xl:w-16 xl:h-16 object-contain" />
          </NavLink>
          
          <ul className="flex items-center gap-6 xl:gap-8">
            {menu.map((menuItem) => (
              <li key={menuItem.id}>
                <a 
                  href={menuItem.url} 
                  className="font-Urbanist text-textPrimary hover:text-[#94BD1C] transition-colors font-medium lg:text-sm xl:text-base 2xl:text-lg"
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP RIGHT: Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {showOpt && <RoleToggle role={role} setRole={setRole} />}
          <JoinWaitlist_Btn />
        </div>

        <div className="text-black">
          <NavLink to={"/login"}>LOGIN</NavLink>
        </div>

        {/* MOBILE & TABLET VIEW: (Hidden on LG and above) */}
        <div className="flex lg:hidden w-full justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="bg-Primarybg w-11 h-11 md:w-12 md:h-12 rounded-full flex justify-center items-center shadow-sm active:scale-90 transition-transform"
            >
              <GrMenu className="text-xl md:text-2xl" />
            </button>
            
            {/* Mobile Logo (Added this so mobile users see branding) */}
            <NavLink to="/">
              <img src={Logo} alt="Nawaya Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
             {/* Show RoleToggle on Tablet if needed */}
             <div className="hidden md:block">
                {showOpt && <RoleToggle role={role} setRole={setRole} />}
             </div>
             <JoinWaitlist_Btn />
          </div>
        </div>
      </section>

      {/* Sidebar Component */}
      <SideBar 
        menus={menu} 
        visible={sidebarOpen} 
        onClose={closeSidebar} 
        role={role} 
        setRole={setRole} 
      />
    </nav>
  );
};

export default Navbar;