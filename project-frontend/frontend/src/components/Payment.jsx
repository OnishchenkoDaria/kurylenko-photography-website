//import "../styles/Header.css"
import React, { useEffect, useState } from 'react';
import userService from '../services/registerForm'
import DataSelect from './DataTimeSelect'
import AbstractSelect from './AbstractSelect';
import PriceBlock from './PriceBlock';

const Payment = () => {

  //calling axios, setting state to be passed to liqpay
  const fetchHashInfo = async (value) => {
    console.log(value)
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

      <PriceBlock />

      {buttonPressed && <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
      <input type="hidden" name="data" value={formData.data}/>
      <input type="hidden" name="signature" value={formData.signature}/>
      <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
      </form>}
      
    </>
  );
};

export default Payment;

