import React from 'react';
import Payment from '../components/Payment';
import back_pic from '../assets/photo5.jpg'

// flex + justify-center (center for X) + items-center (center for Y)

const Purchase = () => {
  
  return (

    <div 
      className="min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${back_pic})` }}
    >
      <div className='backdrop-blur-md bg-black/30 h-dvh text-white text-center tracking-wide'>
        <p className='text-5xl pt-8 pb-4 border-b-2 border-gray-400/20 w-auto inline-block'>Set your photoshoot</p>
        <p className='text-xl mt-3 mb-8'>Select every block with the radio buttons necessarily</p>
        <Payment />
      </div>
    </div>
  );
}

export default Purchase;
