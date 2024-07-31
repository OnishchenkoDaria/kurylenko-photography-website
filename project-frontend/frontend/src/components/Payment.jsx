//import "../styles/Header.css"
import React, { useEffect, useState } from 'react';
import userService from '../services/registerForm'
import DataSelect from './DataTimeSelect'
import AbstractSelect from './AbstractSelect';

const Payment = () => {
  //diaplay button state
  const [buttonPressed, setButtonPressed] = useState(false);
  //states for the place payment
  const [placeChosen, setPlaceChosen] = useState(null);
  //states for the additional checkboxes prices
  const [additionalChosen, setAdditionalChosen] = useState(0);
  //states for the duration se;ect
  const [durationChosen, setDuration] = useState(0);
  //state for the total pricing
  const [totalPrice, setTotalPrice] = useState(0);
  //state for generated in backend key and signature for the liqpay to be passed
  const [formData, setFormData] = useState({
    data: '',
    signature: '',
  });

  /* useEffect(() => {
    setTotalPrice(Number(placeChosen) + Number(additionalChosen) + Number(durationChosen));
  }, [placeChosen, additionalChosen, durationChosen]);

  const getPlace = (par) => {
    setPlaceChosen(par.target.value);    
  }

  const getAdditional = (par) => {
    if(par.target.checked){
      setAdditionalChosen(Number(additionalChosen) + Number(par.target.value));
    }
    else{
      setAdditionalChosen(Number(additionalChosen) - Number(par.target.value));
    }
  }

  const getDuration = (par) => {
    const value = Number(par.target.value);
    setDuration(value);
    setButtonPressed(true);
    fetchHashInfo(value + Number(placeChosen) + Number(additionalChosen));
  } */


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

  const inputSelectPlaceData = [
    {
      type: 'radio',
      label: 'Photo studio',
      id: 'place-1',
      name: 'photoshoot',
      value: 15
    },
    {
      type: 'radio',
      label: 'Outdoorss',
      id: 'place-2',
      name: 'photoshoot',
      value: 10
    }
  ]

  const inputSelectOptionsData = [
    {
      type: 'checkbox',
      label: 'Photo studio',
      id: 'place-1',
      name: 'photoshoot',
      value: 9
    },
    {
      type: 'checkbox',
      label: 'Outdoorss',
      id: 'place-2',
      name: 'photoshoot',
      value: 8
    }
  ]

  const inputSelectDurationData = [
    {
      type: 'radio',
      label: '1 hour',
      id: 'time-1',
      name: 'photoshoot',
      value: 1
    },
    {
      type: 'radio',
      label: '2 hours',
      id: 'time-2',
      name: 'photoshoot',
      value: 2
    },
    {
      type: 'radio',
      label: '3 hours',
      id: 'time-2',
      name: 'photoshoot',
      value: 3
    }
  ]

  return (
    <>
      

      <DataSelect />

      <AbstractSelect data={inputSelectPlaceData} header="Place of the photoshoot" />

      <AbstractSelect data={inputSelectOptionsData} header="Additional options for the photoshoot" />

      <AbstractSelect data={inputSelectDurationData} header="Please select she photoshoot duration*" />

      {buttonPressed && <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
      <input type="hidden" name="data" value={formData.data}/>
      <input type="hidden" name="signature" value={formData.signature}/>
      <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
      </form>}
      
    </>
  );
};

export default Payment;

