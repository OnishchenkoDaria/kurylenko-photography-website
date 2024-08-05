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
    <div className="/*w-8/12*/">
      <div className="rounded-3xl p-px min-w-80 bg-gray-600/20 border-t-2 border-l-2 border-gray-400/20 shadow-lg mb-4 ml-12 mr-12 leading-loose">
        <form>
          <h1 className='text-left text-xl pt-4 pb-2 border-b-2 border-gray-400/20 w-auto inline-block'>{props.header}</h1>
          {props.data.map((input, index) => (
            <div key={index} className="text-left ml-6">
              <input
                type={props.data[index].type}
                id={props.data[index].id}
                name={props.data[index].name}
                value={props.data[index].value}
                onChange={(event) =>  handleChoice(index, event)}
              />
              <label htmlFor={props.data[index].id} className='ml-3 text-xl'>
                {props.data[index].label}
              </label>
            </div>
          ))}
        <p className="text-right text-xl mb-3 mr-6">Total: {total}</p>
        </form>
      </div>
    </div>
  );
};

export default AbstractSelect;