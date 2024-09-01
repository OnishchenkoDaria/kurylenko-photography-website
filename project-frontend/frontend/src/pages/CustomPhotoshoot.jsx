import React from 'react';
import Payment from '../components/order/Payment.jsx';
import back_pic from '../assets/photo5.jpg';
import axios from 'axios';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from "react-router-dom";

// flex + justify-center (center for X) + items-center (center for Y)

const CustomPhotoshoot = () => {
  
  //unable the not registered users to buy the phohtoshoot
   const navigate = useNavigate();
  axios.post('http://localhost:3001/users/session-hook')
  .then((par)=>{
    console.log('welcome', par);
  })
  .catch(() => {
    navigate(PathConstants.LOGIN);
  })
  
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
      style={{ backgroundImage: `url(${back_pic})` }}
    >
      <div className='backdrop-blur-md bg-black/30 min-h-screen text-white text-center tracking-wide'>
        <p className='text-4xl pt-8 pb-4 border-b-2 border-gray-400/20 w-auto inline-block'>Set your photoshoot</p>
        <p className='text-xl mt-3 mb-8'>Select every block with the radio buttons necessarily</p>
        <Payment />
      </div>
    </div>
  );
}

export default CustomPhotoshoot;
