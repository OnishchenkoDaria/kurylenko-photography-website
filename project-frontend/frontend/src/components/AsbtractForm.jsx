import { useState } from "react";
import { Icon } from "react-icons-kit";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

function AbstractForm(props, type) {

  //console.log(props.data.map(obj => obj.name));
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState(
      [props.data.map(obj => obj.name)]
    );

    const handleChange = (index, event) => {
      setInputFields({...inputFields, [event.target.name] : event.target.value});
    }

    const handleFormSubmit = async (par) => {
      try{
        par.preventDefault();

        function newUser(){
          //props.data.forEact((element) => this.props.data[index].name = formInput.props.data[index].name)
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
          <label className="block text-white tracking-wider mb-2 md:text-left">{props.data[index].label}</label>

          <div className="md:flex md:items-center mb-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700 mb-3"
              name={props.data[index].name}
              placeholder={props.data[index].placeholder}
              required={props.data[index].required}
              value = {inputFields[props.data[index].name] || ''}
              onChange={event => handleChange(index, event)}
              autoComplete={props.data[index].autoComplete}
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