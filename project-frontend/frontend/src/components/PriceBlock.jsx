import React, { useEffect, useState } from 'react';
import AbstractSelect from './AbstractSelect';

function PriceBlock(props){

  const inputSelectPlaceData = [
    {
      type: 'radio',
      label: 'Photo studio',
      id: 'place-1',
      name: 'photoshoot',
      value: 700
    },
    {
      type: 'radio',
      label: 'Outdoors',
      id: 'place-2',
      name: 'photoshoot',
      value: 500
    }
  ]

  const inputSelectOptionsData = [
    {
      type: 'checkbox',
      label: 'With animals',
      id: 'optional-1',
      name: 'photoshoot',
      value: 300
    },
    {
      type: 'checkbox',
      label: 'Night time photoshoot',
      id: 'optional-2',
      name: 'photoshoot',
      value: 400
    },
    {
        type: 'checkbox',
        label: 'With own merch',
        id: 'optional-3',
        name: 'photoshoot',
        value: 150
      }
  ]

  const inputSelectDurationData = [
    {
      type: 'radio',
      label: '1 hour',
      id: 'time-1',
      name: 'photoshoot',
      value: 1000
    },
    {
      type: 'radio',
      label: '2 hours',
      id: 'time-2',
      name: 'photoshoot',
      value: 2000
    },
    {
      type: 'radio',
      label: '3 hours',
      id: 'time-3',
      name: 'photoshoot',
      value: 3000
    }
  ]
  
  const [optionsBlockDataArray, setOptionsBlockDataArray] = useState([
    {
        header: "Place of the photoshoot",
        data: inputSelectPlaceData,
        state: 0,
        selected: false
    }, 
    {
        header: "Additional options for the photoshoot",
        data: inputSelectOptionsData,
        state: 0,
        selected: false
    },
    {
        header: "Please select she photoshoot duration",
        data: inputSelectDurationData,
        state: 0,
        selected: false
    }    
  ]);

  const [total, setTotal] = useState(0);
  
  async function handleChildStateChange(index, value, sum) {
    optionsBlockDataArray[index].state = value;
    optionsBlockDataArray[index].selected = true;
    let checked = true;
    for(let i in optionsBlockDataArray){
      sum += Number(optionsBlockDataArray[i].state);
      if(optionsBlockDataArray[i].selected === false && 
        optionsBlockDataArray[i].data[i].type === 'radio'){
           checked = false; 
      }
    }
    setTotal(Number(sum));
    if(checked){
        await props.service(Number(sum));
        props.activateButton(true);
    }
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
      <h1 className="text-left m-4">TOTAL: {total}</h1>
    </>
  )
}

export default PriceBlock;