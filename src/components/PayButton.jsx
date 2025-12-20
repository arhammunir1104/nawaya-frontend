import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

function PayButton({text}) {
  const { tempToken } = useContext(AppContext);

  const generateStripePay = async (e) =>{
    try{
      e.preventDefault();

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/enableMembership`,
       { headers : {
        'Authorization': `Bearer ${tempToken}`,
          'Content-Type': 'application/json'
        }}
      );

      if(response?.data?.status == "success"){
        window.open(response?.data?.session, '_blank', 'noopener,noreferrer');
      }
      else{
        toast.error(response?.response?.data?.message)
      }

    }
    catch(e){
       toast.error(e?.response?.data?.message || "Something Went Wrong, Please Try Again Later");
      console.log(e)
    }
  }


  return (
    <>
        <button 
            className="px-10 py-3 rounded-full text-white cursor-pointer text-md shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #94BD1C 0%, #29C28C 100%)'
            }}
            onClick={generateStripePay}
          >
            {text}
          </button>
    </>
  ) 
}

export default PayButton