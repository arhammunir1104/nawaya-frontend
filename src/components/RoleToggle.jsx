import React, { useCallback, useEffect, useState } from 'react'
import { LuGraduationCap } from "react-icons/lu"
import { FaRegCompass } from "react-icons/fa"
import { NavLink, useLocation } from 'react-router-dom'

const RoleToggle = ({ onClose }) => {
  const location = useLocation();
  const [role, setRole] = useState("grower");

  // Sync the role state with the actual URL path
  useEffect(() => {
    if (location.pathname === "/guide") {
      setRole('guide');
    } else if (location.pathname === "/") {
      setRole('grower');
    }
  }, [location.pathname, setRole]);

  const handleSelect = (value) => {
    setRole(value)
    if (onClose) onClose() // Close sidebar if open
  }

  return (
    <div
      className="relative inline-flex items-center rounded-full p-1 bg-white border-4 border-white gap-4"
      role="tablist"
      tabIndex={0}
    >
      {/* sliding pill */}
      <div
        aria-hidden
        className={`absolute top-0.5 bottom-0.5 left-0.5 rounded-full
        transition-transform duration-200 ease-in-out
        ${role === 'grower' ? 'translate-x-0' : 'translate-x-full'}
        bg-gradient-to-r from-[#0CBF95]/40 to-[#B7BD05]/40
        pointer-events-none`}
        style={{ width: 'calc(50% - 4px)' }}
      />
      
      <NavLink to={"/"} onClick={() => handleSelect('grower')}>
        <button
          type="button"
          className={`relative z-10 flex items-center gap-2 px-5 py-1.5 rounded-full xs:text-Paragraph6 2xl:text-Paragraph4 cursor-pointer transition-colors
          ${role === 'grower' ? 'text-lime-700 font-bold' : 'text-gray-400'}`}
        >
          <LuGraduationCap size={18} />
          Grower
        </button>
      </NavLink>

      <NavLink to={"/guide"} onClick={() => handleSelect('guide')}>
        <button
          type="button"
          className={`relative z-10 flex items-center gap-2 px-5 py-1.5 rounded-full xs:text-Paragraph6 2xl:text-Paragraph4 cursor-pointer transition-colors
          ${role === 'guide' ? 'text-lime-700 font-bold' : 'text-gray-400'}`}
        >
          <FaRegCompass size={18} />
          Guide
        </button>
      </NavLink>
    </div>
  )
}

export default RoleToggle