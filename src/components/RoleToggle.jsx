import React, { useCallback } from 'react'
import { LuGraduationCap } from "react-icons/lu"
import { FaRegCompass } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const RoleToggle = ({ role, setRole, onClose }) => {

  const handleSelect = (value) => {
    setRole(value)
    if (onClose) onClose() // ✅ sidebar close
  }

  const onKey = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') handleSelect('grower')
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') handleSelect('guide')
      if (e.key === 'Enter' || e.key === ' ') {
        handleSelect(role === 'grower' ? 'guide' : 'grower')
      }
    },
    [role]
  ) 

  return (
    <div
      className="relative inline-flex items-center rounded-full p-1 bg-white border-4 border-white gap-4"
      role="tablist"
      tabIndex={0}
      onKeyDown={onKey}
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
      <NavLink to={"/"}>
      <button
        type="button"
        onClick={() => handleSelect('grower')}
        className={`relative z-10 flex items-center gap-2 px-5 py-1.5 rounded-full xs:text-Paragraph6 2xl:text-Paragraph4 cursor-pointer
        ${role === 'grower' ? 'text-lime-700' : 'text-gray-400'}`}
      >
        <LuGraduationCap size={18} />
        Grower
      </button>
      </NavLink>

      <NavLink to={"/guide"}>
      <button
        type="button"
        onClick={() => handleSelect('guide')}
        className={`relative z-10 flex items-center gap-2 px-5 py-1.5 rounded-full xs:text-Paragraph6 2xl:text-Paragraph4 cursor-pointer
        ${role === 'guide' ? 'text-lime-700' : 'text-gray-400'}`}
      >
        <FaRegCompass size={18} />
        Guide
      </button>
      </NavLink>
    </div>
  )
}

export default RoleToggle
