import React from 'react'

function PayButton() {
  return (
    <>
        <button 
            className="px-10 py-3 rounded-full text-white cursor-pointer text-md shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
            }}
          >
            Pay $19.99 – Unlock My Access
          </button>
    </>
  )
}

export default PayButton