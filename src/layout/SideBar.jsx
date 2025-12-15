import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import JoinWaitlist_Btn from "../components/JoinWaitlist_Btn";
import RoleToggle from "../components/RoleToggle";

export default function SideBar({ onClose, visible, menus, role, setRole }) {
  const navRef = useRef(null);
  const ulRef = useRef(null);

  const closeSidebar = () => {
    gsap.to(navRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.45,
      ease: "power3.inOut",
      onComplete: () => onClose(),
    });
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();

      // Sidebar open animation
      tl.fromTo(
        navRef.current,
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
      );

      // Nav items animation
      if (ulRef.current) {
        tl.fromTo(
          ulRef.current.children,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      return () => {
        document.body.style.overflow = "auto";
        tl.kill();
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <nav
      ref={navRef}
      className="absolute inset-0 ml-auto py-6 px-5 h-screen z-50 flex flex-col items-center-safe
      lg:hidden text-black bg-GrayBg overflow-hidden"
    >
      {/* Header */}
      <div className="w-[90vw] mt-2 relative flex justify-between items-center">
        <div
          onClick={closeSidebar}
          className="bg-Primarybg w-12 h-12 rounded-full flex justify-center items-center"
        >
          <GrMenu className="text-Heading8 rotate-90" />
        </div>

        {/* JoinWaitlist_Btn */}
        <JoinWaitlist_Btn />
      </div>

      {/* Menu */}
      <ul ref={ulRef} className=" my-2 h-[80vh] flex flex-col items-center-safe justify-center-safe">
        {menus.map((navMenu) => (
          <li key={navMenu.id} className="my-6">
            <NavLink
              to={navMenu.url}
              onClick={closeSidebar}
              className="font-Urbanist text-Paragraph5 font-medium text-center"
            >
              {navMenu.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <section className="flex flex-col items-center-safe justify-center-safe fixed bottom-5">
        <RoleToggle role={role} setRole={setRole} onClose={closeSidebar} />
      </section>
    </nav>
  );
}