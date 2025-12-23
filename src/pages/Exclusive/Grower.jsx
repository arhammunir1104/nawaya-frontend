import React, { useContext, useEffect, useState } from 'react'
import HeroGrower from './HeroGrower'
import Card from './Card'
import SecureYourSpot from './SecureSpot'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Grower = () => {
  const {tempToken } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(()=>{
    if(tempToken){
      setLoading(false);
    }
    else{
      navigate("/");
    }
  },[])

  return (

    loading
    ?
    <></>
    :
    <section className='overflow-hidden '>
      <HeroGrower/>
      <Card />
      <SecureYourSpot />
      
    </section>
  )
}

export default Grower