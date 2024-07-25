import { useState } from "react";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

/*function inputInfo(inputData) {
  return(
    <>
    {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name={inputData.name}
                placeholder={inputData.placeholder}
                value = {input.name}
                onChange={event => handleChange(index, event)}
              />
            </div>
          )
        })}
    </>
  )
}*/

function AbstractForm(props) {

    const [inputFields, setInputFields] = useState(
        [{
            name: ''
        }]
    );

    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    console.log(props);
    console.log(props.data[0].name);
    console.log(props.data[1].name);



    return(
        <>
        {inputFields.map((input, index) => {

          //console.log(index);

          //console.log(props);

          //console.log(props.name);

         // console.log(props[index]);

          console.log('IN return', props.data[index].name);

          return (
            <div key={index}>
              <input
                name={props.data[index].name}
                placeholder={props.data[index].placeholder}
                required={props.data[index].required}
                value = {input.email}
                onChange={event => handleChange(index, event)}
              />
            </div>
          )
        })}
      </>
    )
}

export default AbstractForm;
//module.export = {AbstractForm};

