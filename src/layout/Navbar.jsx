import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import Logo from "../assets/Logo.png";
import JoinWaitlist_Btn from "../components/JoinWaitlist_Btn";
import RoleToggle from "../components/RoleToggle";
import SideBar from "./SideBar";

const Navbar = ({ role, setRole }) => {
  // `role` and `setRole` are received from the parent (AppRoutes)
  const menu = [
    {
      id: 1,
      name: "Features",
      url: "",
    },
    {
      id: 2,
      name: "How it Works",
      url: "",
    },
    {
      id: 3,
      name: "FAQ",
      url: "",
    },
  ];


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="bg-GrayBg flex flex-col justify-center items-center-safe relative">
      <section className="mx-auto flex items-center justify-between gap-5
                    xs:w-[90vw] xs:pt-10
                    lg:py-5
                    xl:w-[90vw] 2xl:w-[1400px]">
        {/* left side Logo & Menus */}
        <div className="xs:hidden lg:w-fit lg:inline-flex lg:justify-start lg:items-center lg:gap-10 xl:w-[614px]">
          {/* Logo */}
          <img src={Logo} alt="Nawaya Logo" className="w-auto h-auto 2xl:w-20 2xl:h-20" />

          {/* Menu */}
          <ul className="">
            {menu.map((menuItem) => (
              <li
                key={menuItem.id}
                className="font-Urbanist inline-block mx-4 text-textPrimary cursor-pointer xs:text-text-Paragraph7 2xl:text-Paragraph4"
              >
                {menuItem.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side Toggle Buttons */}
        <div className="xs:hidden lg:inline-flex lg:justify-end lg:items-center lg:gap-5">
          <RoleToggle role={role} setRole={setRole} />

          {/* Join Waitlist Button */}
          <JoinWaitlist_Btn />
        </div>

        {/* Only Mobile */}
        <div className="w-full flex justify-between items-center lg:hidden">
          {/* Menu Icons */}
          <div 
            onClick={() => setSidebarOpen(true)}
            className="bg-Primarybg w-12 h-12 rounded-full flex justify-center items-center">
            <GrMenu className="text-Heading8" />
          </div>


          {/* Left Side Waitlist Button */}
          <div className="">
            <JoinWaitlist_Btn />
          </div>
        </div>
      </section>
      <SideBar menus={menu} visible={sidebarOpen} onClose={closeSidebar} role={role} setRole={setRole} />
    </nav>
  );
};

export default Navbar;
