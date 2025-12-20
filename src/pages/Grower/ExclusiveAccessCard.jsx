import React, { useContext } from 'react';
import frame1 from "../../assets/Exclusive/fram1.png"
import PayButton from '../../components/PayButton';
import JoinWaitlist_Btn from '../../components/JoinWaitlist_Btn';
import { IoMdMail } from "react-icons/io";
import { AppContext } from '../../context/AppContext';

const ExclusiveAccessCard = () => {
  const {waitListEmail, setWaitListEmail} = useContext(AppContext);
  return (
    <div className=" pb-10 bg-gray-100 flex items-center justify-center ">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row ">
        
        {/* Background Gradient Slash (The Green Right Side) */}
        <div 
          className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, #D4EFC7 100%)',
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        ></div>

        {/* Content Section */}
        <div className="relative z-15 w-full md:w-3/5 p-8 md:p-16 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Exclusive Access
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            For a limited time, you can unlock an exclusive message from our founder 
            and join the circle of Nawaya's first 500 early supporters.
          </p>

          {/* <button className="mt-4 px-8 py-4 rounded-full text-white font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
            }}>
            Unlock Access for $19.99 (save $30)
          </button> */}

            {/* <div className='border-2 flex flex-col lg:flex-row w-[100%]'>

            <input type='email' className='border-2 w-[60%]' placeholder='Email' />
            <JoinWaitlist_Btn />
            </div> */}
          {/* <PayButton text={"Unlock Access for $19.99 (save $30)"} /> */}
              <div className="flex w-[100%] flex-row items-center justify-center gap-4 mb-16 md:mb-24">
                          <div className="relative w-full sm:max-w-md group">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                              <IoMdMail className="text-gray-400 group-focus-within:text-[#94BD1C]" size={20} />
                            </div>
                            <input 
                              type="email" 
                              placeholder="Enter your email" 
                              className="w-full pl-12 pr-6 py-3 bg-[#F4F6F2] border-2 border-transparent rounded-full outline-none focus:border-[#94BD1C]/20 focus:bg-white transition-all font-medium"
                              value={waitListEmail}
                              onChange={(e)=>{
                                setWaitListEmail(e.target.value)
                              }}
                            />
                          </div>
                          <div className='w-[60%]'>
                              <JoinWaitlist_Btn /> 
                          </div>
                        </div>
        
        </div>

        {/* Image Section */}
        <div className="md:relative absolute z-10 w-full  md:w-2/5 flex md:justify-center md:items-center justify-end items-end ">
          <img 
            src={frame1} // Replace with your actual image path
            alt="3D Abstract Knot" 
            className="md:w-full md:h-full object-cover h-[350px] w-[350px] text-right items-end justify-end drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveAccessCard; 