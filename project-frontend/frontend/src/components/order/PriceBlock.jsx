import React, { useState } from 'react';
import AbstractSelect from '../AbstractSelect.jsx';

function PriceBlock(props){

  const inputSelectPlaceData = [
    {
      type: 'radio',
      label: 'Photo studio',
      id: 'place-1',
      name: 'photoshoot',
      value: 700,
      description: 'Professional lighting / Controlled environment / Various backgrounds and props'
    },
    {
      type: 'radio',
      label: 'Outdoors',
      id: 'place-2',
      name: 'photoshoot',
      value: 500,
      description: 'Natural light / Variety of settings (parks, streets, beaches) / Ability to use the surroundings'
    }
  ]

  const inputSelectOptionsData = [
    {
      type: 'checkbox',
      label: 'With Pets',
      id: 'optional-1',
      name: 'photoshoot',
      value: 300,
      description: 'Special accessories for animals / Additional time for interacting with pets / Option to have an animal handler present'
    },
    {
      type: 'checkbox',
      label: 'Nighttime Photoshoots',
      id: 'optional-2',
      name: 'photoshoot',
      value: 400,
      description: 'Use of specialized lighting equipment / Creative use of long exposure and light painting techniques'
    },
    {
      type: 'checkbox',
      label: 'With Merchandise',
      id: 'optional-3',
      name: 'photoshoot',
      value: 150,
      description: 'Special lighting for product photography / Additional time for setting up and arranging items / Use of mock-ups and stands'
      },
      {
        type: 'checkbox',
        label: 'Family and Group Photoshoots',
        id: 'optional-4',
        name: 'photoshoot',
        value: 200,
        description: 'Sufficient space to accommodate all participants / Special packages for large groups'
        }
  ]

  const inputSelectSuppliesData = [
    {
      type: 'checkbox',
      label: 'Clothing and Accessories',
      id: 'optional-1',
      name: 'photoshoot',
      value: 300,
      description: 'Option to rent outfits / Presence of a stylist'
    },
    {
      type: 'checkbox',
      label: 'Makeup and Hair',
      id: 'optional-2',
      name: 'photoshoot',
      value: 500,
      description: 'Professional makeup artists and hairdressers / Includes several looks'
    },
    {
      type: 'checkbox',
      label: 'Props',
      id: 'optional-3',
      name: 'photoshoot',
      value: 300,
      description: 'Rental of decorations and furniture / Use of thematic props'
      },
      {
        type: 'checkbox',
        label: 'Transport and Logistics',
        id: 'optional-4',
        name: 'photoshoot',
        value: 200,
        description: 'Delivery of equipment and props / Transportation for participants to the shoot location'
        }
  ]

  const inputSelectDurationData = [
    {
      type: 'radio',
      label: 'Short (up to 1 hour)',
      id: 'time-1',
      name: 'photoshoot',
      value: 1000,
      description: 'Quick session / Limited number of shots / Suitable for individual portraits or small projects'
    },
    {
      type: 'radio',
      label: 'Medium (1-3 hours)',
      id: 'time-2',
      name: 'photoshoot',
      value: 2000,
      description: 'More planned compositions / Ability to change several outfits / Ideal for family sessions or advertising shoots'
    },
    {
      type: 'radio',
      label: 'Long (more than 3 hours)',
      id: 'time-3',
      name: 'photoshoot',
      value: 3000,
      description: 'Multiple looks and locations / Suitable for large projects like wedding photoshoots / Includes breaks for rest and refreshments'
    }
  ]
  
  const [optionsBlockDataArray, setOptionsBlockDataArray] = useState([
    {
        header: "Location",
        data: inputSelectPlaceData,
        state: 0,
        selected: false
    }, 
    {
        header: "Optional Features",
        data: inputSelectOptionsData,
        state: 0,
        selected: false
    },
    {
        header: "Supplies and Services Needed",
        data: inputSelectSuppliesData,
        state: 0,
        selected: false
    },
    {
        header: 'Duration of the Photoshoot',
        data: inputSelectDurationData,
        state: 0,
        selected: false
    }    
  ]);
  
  async function handleChildStateChange(index, value, sum) {
    optionsBlockDataArray[index].state = value;
    optionsBlockDataArray[index].selected = true;
    let checked = true;
    
    for(let i in optionsBlockDataArray){
      sum += Number(optionsBlockDataArray[i].state);
      
      if(optionsBlockDataArray[i].selected === false && 
        optionsBlockDataArray[i].data[0].type === 'radio'){
           checked = false; 
      }
    }

    props.setTotal(sum);

    if(checked){
        props.activateButton(true);
    }
  }

  return(
    <div>
      {optionsBlockDataArray.map((input, index) => (
        <AbstractSelect 
          key={index}
          index={index}
          data={input.data} 
          header={input.header}
          changeState={handleChildStateChange} 
        />
      ))}
    </div>
  )
}

export default PriceBlock;