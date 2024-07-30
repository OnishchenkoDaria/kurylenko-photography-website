import "../styles/Header.css"
import React, { useEffect, useState } from 'react';
import userService from '../services/registerForm'
import Form from 'react-bootstrap/Form'
import DataSelect from './DataTimeSelect'

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

  useEffect(() => {
    setTotalPrice(Number(placeChosen) + Number(additionalChosen) + Number(durationChosen));
  }, [placeChosen, additionalChosen, durationChosen]);

  const getPlace = (par) => {
    setPlaceChosen(par.target.value);    
  }
  
  //parses the price and calls axios request to generate the key & signature
  /*const getPressed = (par) =>{
    const value = Number(par.target.value);
    setDuration(value);
    setButtonPressed(true);
    fetchHashInfo(value + Number(placeChosen) + Number(additionalChosen));
  };*/

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
  }


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

      <DataSelect />

      <h1>Place of the photoshoot</h1>

      <div className="mb-3">
          <Form.Check 
          type="radio"
          id="photostudio"
          label="Photo studio"          
          name="photoshoot"
          value="15" 
          onChange={getPlace}
          className="mt-3"
          />
          <Form.Check 
          type="radio"
          id="outdoors"
          label="Outdoor"          
          name="photoshoot"
          value="10" 
          onChange={getPlace}
          className="mt-3"
          />
      </div>

      <h1>Additional options for the photoshoot</h1>

      <div className="mb-3">
          <Form.Check 
          type="checkbox"
          id="animals"
          label="with animals"          
          name="photoshoot"
          value="6" 
          onChange={getAdditional}
          className="mt-3"
          />
          <Form.Check 
          type="checkbox"
          id="night"
          label="night time photoshoot"          
          name="photoshoot"
          value="8" 
          onChange={getAdditional}
          className="mt-3"
          />
          <Form.Check 
          type="checkbox"
          id="own_items"
          label="with own staff and merch"          
          name="photoshoot"
          value="7" 
          onChange={getAdditional}
          className="mt-3"
          />
      </div>

      <Form>
        <h1 className="mt-5">Please select she photoshoot duration*</h1>
        <div key={`default-radio`} className="mb-3">
          <Form.Check 
          type="radio"
          id="photoshoot-1"
          label="1 hour --- 1UAH"          
          name="photoshoot"
          value="1" 
          onChange={getDuration}
          className="mt-3"
          />
          <Form.Check 
          type="radio"
          id="photoshoot-2"
          label="2 hours --- 2UAH"          
          name="photoshoot"
          value="2" 
          onChange={getDuration}
          className="mt-3"
          />
          <Form.Check 
          type="radio"
          id="photoshoot-3"
          label="2+ hours --- 3UAH"          
          name="photoshoot"
          value="3" 
          onChange={getDuration}
          className="mt-3"
          />
        </div>  
      </Form>

      <h1>TOTAL: {totalPrice}</h1>

      {buttonPressed && <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
      <input type="hidden" name="data" value={formData.data}/>
      <input type="hidden" name="signature" value={formData.signature}/>
      <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
      </form>}
      
    </>
  );
};

export default Payment;

