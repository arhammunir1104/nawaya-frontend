import React, { useContext } from 'react';
import frame1 from "../../assets/Exclusive/frame.png"
import frame2 from "../../assets/Exclusive/frame2.png"
import PayButton from '../../components/PayButton';
import JoinWaitlist_Btn from '../../components/JoinWaitlist_Btn';
import { IoMdMail } from "react-icons/io";
import { AppContext } from '../../context/AppContext';

const ExclusiveAccessCard = ({headline  , subheadline }) => {
  const {waitListEmail, setWaitListEmail} = useContext(AppContext);
  return (
    <div className=" pb-10  bg-gray-100 flex items-center justify-center ">
      {/* Main Container */}
      <div className="relative md:mx-[0] mx-[5%] w-full h-auto md:h-[350px] max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row ">
        
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
          <h1 className="text-xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {headline}
          </h1>
          
          <p className="text-gray-500 text-xs leading-relaxed max-w-md">
           {subheadline}
          </p>

          
              <div className="flex w-[100%] md:w-[120%]  flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24">
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
                          <div className='sm:w-[60%] w-[100%] flex justify-center items-center'>
                              <JoinWaitlist_Btn  /> 
                          </div>
                        </div>
        
        </div>

        {/* Image Section */}
        <div className="relative  z-10 w-full  md:w-2/5 flex md:justify-center md:items-center justify-end items-end ">
         

          <img 
            src={frame1} // Replace with your actual image path
            alt="3D Abstract Knot" 
            className="md:w-full md:flex hidden md:h-full object-cover h-[350px] w-[350px] text-right items-end justify-end drop-shadow-2xl"
            />
       

           <img 
            src={frame2} // Replace with your actual image path
            alt="3D Abstract Knot" 
            className="md:w-full md:hidden  mt-[-40%]  flex md:h-full object-cover w-[100%]  text-right items-end justify-end drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveAccessCard; 