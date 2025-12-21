import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import RoleToggle from "../components/RoleToggle";

export default function SideBar({ onClose, visible, menus, role, setRole }) {
  const navRef = useRef(null);
  const ulRef = useRef(null);

  // Function to handle the "Close" button specifically (with animation)
  const handleManualClose = () => {
    gsap.to(navRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => onClose(),
    });
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();

      // Opening Animation
      tl.fromTo(
        navRef.current,
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
      );

      if (ulRef.current) {
        tl.fromTo(
          ulRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      return () => {
        document.body.style.overflow = "auto";
        tl.kill();
      };
    }
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex flex-col pointer-events-none">
      {/* Clicking the overlay closes the menu */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-auto" 
        onClick={handleManualClose} 
      />

      <nav
        ref={navRef}
        className="relative w-full h-full bg-GrayBg text-black flex flex-col overflow-hidden pointer-events-auto"
      >
        {/* Header */}
        <div className="w-full pt-10 pb-6 px-6 flex justify-between items-center shrink-0">
          <div
            onClick={handleManualClose}
            className="bg-Primarybg w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-md"
          >
            <GrMenu className="text-Heading8 rotate-90" />
          </div>
        </div>

        {/* Menu Area */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6">
          <ul ref={ulRef} className="w-full flex flex-col items-center">
            {menus.map((navMenu) => (
              <li key={navMenu.id} className="my-5">
                <a
                  href={navMenu.url}
                  // IMPORTANT: onClose() here happens instantly so the route change works
                  onClick={() => onClose()} 
                  className="font-Urbanist text-2xl font-semibold text-center block"
                >
                  {navMenu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Role Toggle Area */}
        <section className="shrink-0 w-full flex flex-col items-center justify-center pb-12 pt-6 bg-GrayBg border-t border-gray-100/50">
          <RoleToggle role={role} setRole={setRole} onClose={() => onClose()} />
        </section>
      </nav>
    </div>,
    document.body
  );
}