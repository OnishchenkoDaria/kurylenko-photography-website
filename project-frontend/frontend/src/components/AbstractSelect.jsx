import React, { useEffect, useState } from 'react';

//make the buttonPressed marker relay on the name of the input 

function AbstractSelect(props, {changeState} ) {

  const [total, setTotal] = useState(0);
  const [inputData, setInputData] = useState(0);
  
  useEffect(() => {
    setTotal(Number(inputData));
  });

  function handleChoice (index, event) {
    let newInputData = inputData;
    if(event.target.type === 'radio'){
      newInputData = Number(event.target.value);
    }
    else if(event.target.type === 'checkbox'){
      if(event.target.checked){
        newInputData = Number(inputData) + Number(event.target.value);
      }
      else{
        newInputData = Number(inputData) - Number(event.target.value);
      }  
    }
    else{
      console.log('unexpected input type occured');
      return;
    }
    setInputData(newInputData);
    props.changeState(props.index, newInputData, 0);
  }
    
  return(
    <form className="w-full max-w-sm pt-6 text-center">
      <h1 className='mb-3'>{props.header}</h1>
      {props.data.map((input, index) => (
        <div key={index} className="text-left m-2">
          <input
            type={props.data[index].type}
            id={props.data[index].id}
            name={props.data[index].name}
            value={props.data[index].value}
            onChange={(event) =>  handleChoice(index, event)}
          />
          <label htmlFor={props.data[index].id} className='ml-2'>
            {props.data[index].label}
          </label>
        </div>
      ))}
    <p className="text-right">Total: {total}</p>
    </form>
  );
};

export default AbstractSelect;