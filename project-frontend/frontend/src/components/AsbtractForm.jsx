import { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

function AbstractForm(props) {

    const navigate = useNavigate();

    const [message, setMessage] = useState();
    const [icons, setIcons] = useState(
      props.data.map(input => input.icon)
    );
    const [inputFields, setInputFields] = useState(
      [props.data.map(obj => obj.name)]
    );

    const handleChange = (index, event) => {
      setInputFields({...inputFields, [event.target.name] : event.target.value});
    }

    function handleToggle(index){
      if(props.data[index].isTogglable){
        let newIcons = [...icons];

        if(props.data[index].type === "password") {
          props.data[index].type = "text"; 
          newIcons[index] = props.data[index].disabledIcon;
        } else {
          props.data[index].type = "password";
          newIcons[index] = props.data[index].icon;
        }
          
        document.getElementById(index).type = props.data[index].type;
        setIcons(newIcons);
      }
    }
  
    const handleFormSubmit = async (par) => {
      try{
        par.preventDefault();

        function newUser(){
          props.data.forEach((attribute) => {
            this[attribute.name] = inputFields[attribute.name];
          })
        }

        const UserInfo = new newUser();

        console.log(UserInfo);

        const feedback = await userService[props.type](UserInfo);
        
        userService.getUser();
        if (feedback.success === true) {
          navigate(PathConstants.ACCOUNT);
        } else {
          setMessage(feedback.message);
        }
      }catch(err){
        console.log("Error: ", err);
      }
    }

    return(
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm pt-6 text-center">
        {props.data.map((input, index) => (
     
        <div key={index}>
          <label className="block text-white tracking-wider mb-2 md:text-left">{input.label}</label>

          <div className="md:flex md:items-center mb-6">
            
            <input
              id={index}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700 mb-3"
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              value = {inputFields[input.name] || ''}
              onChange={event => handleChange(index, event)}
              autoComplete={input.autoComplete}
            />

            <span
              className="flex justify-around items-center"
              onClick = {() => handleToggle(index)} 
            >
              <Icon className="pl-3 pb-3 text-white" icon={icons[index]} size={25} />
            </span>

          </div> 
        </div>
        ))}

        <div className="flex justify-around items-center m-3">
          <button className="tracking-wider text-white text-lg shadow hover:outline py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </div>

        {message && 
          <div className="text-left bg-gradient-to-r from-red-300 border-l-4 border-red-800 text-red-800 p-3" role="alert">
          <p className="text-lg tracking-wide">
            <span className="font-bold">Error: </span>
            <span className="italic">{message}</span>
          </p>
        </div>
        }

      </form>
    )
}

export default AbstractForm;