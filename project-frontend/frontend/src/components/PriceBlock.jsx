import React, { useEffect, useState } from 'react';
import AbstractSelect from './AbstractSelect';

function PriceBlock(){

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
  
  const optionsBlockDataArray = [
    {
        header: "A",
        data: inputSelectPlaceData,
        state: 0
    }, 
    {
        header: "B",
        data: inputSelectOptionsData,
        state: 0
    },
    {
        header: "C",
        data: inputSelectDurationData,
        state: 0
    }    
  ];

  const [total, setTotal]=useState(0);
  
  function handleChildStateChange(index, value) {
  //    setTotal((prevTotal) => Number(value));
    optionsBlockDataArray[index].state = value;
    setTotal(0);
    let sum = 0;
    for(index in optionsBlockDataArray){
      sum += Number(optionsBlockDataArray[index].state);
      console.log('index', index, 'sum', sum, 'arr value', optionsBlockDataArray[index].state);
    }
    setTotal(Number(sum));
  }

  return(
    <>
      {optionsBlockDataArray.map((input, index) => (
        <AbstractSelect 
          key={index}
          index={index}
          data={optionsBlockDataArray[index].data} 
          header={optionsBlockDataArray[index].header}
          changeState={handleChildStateChange} 
        />
      ))}
      <h1>TOTAL: {total}</h1>
    </>
  )
}

export default PriceBlock;