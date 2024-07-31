import React, { useEffect, useState } from 'react';

/*[
    {
        type: 'radio',
        label: 'label',
        name: 'name',
        value: 2,
        onChange: ???
    },...{}
]*/

//make the buttonPressed marker relay on the name of the input 

function AbstractSelect(props) {

  const [inputData, setInputData] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(Number(inputData));
  });

  const handleChoice = (index, event) => {
    if(event.target.type === 'radio'){
      setInputData(Number(event.target.value));
      console.log(inputData);
    }
    else if(event.target.type === 'checkbox'){
      if(event.target.checked){
        setInputData(Number(inputData) + Number(event.target.value));
      }
      else{
        setInputData(Number(inputData) - Number(event.target.value));
      }  
    }
    else{
      console.log('unexpected input type occured');
      return;
    }
  }
    
  return(
    <form className="w-full max-w-sm pt-6 text-center">
      <h1>{props.header}</h1>
      {props.data.map((input, index) => (
        <div key={index} className="text-left">
          <input
            type={props.data[index].type}
            id={props.data[index].id}
            name={props.data[index].name}
            value={props.data[index].value}
            onChange={event => handleChoice(index, event)}
          />
          <label htmlFor={props.data[index].id}>
            {props.data[index].label}
          </label>
        </div>
          
      ))}
      <h1>Total: {total}</h1>
    </form>
  );
};

export default AbstractSelect;