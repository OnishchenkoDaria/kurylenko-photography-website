import { useState } from "react";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/feather/user";


function AbstractForm(props) {

    const [inputFields, setInputFields] = useState(
        [{
            name: '',
            placeholder: '',
            required: false,
            value: ''
        }]
    );
    const [icon, setIcon] = useState(null);


    const toggleVisibility = () => {
      if (type == "password") {
        setIcon(eye);
        setType("notpassword");
      } else {
        setIcon(eyeOff);
        setType("password");
      }
    };

    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    console.log(props);
    console.log(props.data[0].name);
    console.log(props.data[1].name);

    console.log('has icon: ', props.data[0].hasIcon);

    return(
      <div className="md:flex md:items-center mb-6">
        {props.data.map((input, index) => (     
        <div key={index}>
          <label className="block text-white tracking-wider mb-2 md:text-left">{props.data[index].name}</label>

          <div className="md:flex md:items-center mb-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700 mb-3"
              name={props.data[index].name}
              placeholder={props.data[index].placeholder}
              required={props.data[index].required}
              value = {input.email}
              onChange={event => handleChange(index, event)}
            />

          {props.data[index].hasIcon && (
            <span
              className="flex justify-around items-center"
              onClick = {()=>{
                console.log(props.data.isTogglable);
                if(props.data.isTogglable){
                  console.log('check');
              }
            }}
            >
              <Icon className="pl-3 pb-3 text-white" icon={props.data[index].icon} size={25} />
            </span>
          )}

          </div> 
        </div>
        ))}
      </div>
    )
}

export default AbstractForm;