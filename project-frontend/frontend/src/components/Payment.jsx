//import "../styles/Header.css"
import React, { useEffect, useState } from 'react';
import userService from '../services/registerForm'
import DataSelect from './DataTimeSelect'
import PriceBlock from './PriceBlock';
import PathConstants from '../routes/pathConstants';
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { leftArrow } from 'react-icons-kit/feather/arrowLeftCircle';

const Payment = () => {

  const [formData, setFormData] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleButton (bool) {   
    setButtonPressed(() => bool);
  }

  //calling axios, setting state to be passed to liqpay
  const fetchHashInfo = async (value) => {
    try {
      const Info = await userService.hash(value);
      const data = Info.data;
      const signature = Info.signature;

      setFormData({
        data,
        signature,
      });
      setFormData({ data, signature });
      setButtonPressed(true);
      
    } catch (error) {
      console.error('Error fetching hash info:', error.message);
    }    
  };

  return (
    <>
      <div className='text-white'>
        <PriceBlock activateButton={handleButton} service={fetchHashInfo} />
        <Link className='absolute bottom-0 left-0 p-8 hover:underline' to={PathConstants.PAYMENT}>Back</Link>

        {buttonPressed && <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
        <input type="hidden" name="data" value={formData.data}/>
        <input type="hidden" name="signature" value={formData.signature}/>
        <button className='bg-amber-700 rounded-md p-2 mb-3 hover:bg-neutral-800'>Buy photoshoot</button>
        </form>}
      </div>
    </>
  );
};

export default Payment;

