import React, { useState } from 'react';
import PriceBlock from './PriceBlock';
import PathConstants from '../routes/pathConstants';
import { Link } from 'react-router-dom';
import LiqPayCheckOut from './LiqPayCheckOut';

const Payment = () => {

  const [total, setTotal] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleButton (bool) {   
    setButtonPressed(() => bool);
  }

  function handleTotal (value) {
    setTotal(() => Number(value));
  }

  return (
    <>
      <div>
        <PriceBlock activateButton={handleButton} setTotal={handleTotal} />
        <h1 className="text-4xl pt-8 pb-4 w-auto inline-block">TOTAL: {total}</h1>
        <Link className='absolute bottom-0 left-0 p-8 hover:underline' to={PathConstants.PAYMENT}>Back</Link>

        <div className='text-white flex flex-col justify-center items-center'>
          {buttonPressed && <LiqPayCheckOut type="auto" price={total} />}
        </div>
      </div>
    </>
  );
};

export default Payment;

