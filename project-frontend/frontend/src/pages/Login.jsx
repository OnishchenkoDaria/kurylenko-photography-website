import React from "react";
import AbstractForm from "../components/AsbtractForm"
import axios from 'axios';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from 'react-router-dom'
import back_pic from '../assets/photo1.jpg'
import { Link } from "react-router-dom";

//icons
import { eye } from "react-icons-kit/feather/eye";
import { mail } from "react-icons-kit/feather/mail";


const Login = () => {

  const formInputData = [ 
    {
      name: 'useremail',
      type: 'email',
      placeholder: 'user@email.com',
      label: 'Email address',
      required: true,
      hasIcon: true,
      icon: mail,
      isTogglable: false,
      autoComplete: 'on'
    },
    {
      name: 'userpassword',
      placeholder: 'password',
      label: 'Password',
      required: true,
      hasIcon: true,
      icon: eye,
      isTogglable: true,
      autoComplete: 'off'
    }
  ];
  
  const navigate = useNavigate();
  axios.post('http://localhost:3001/users/session-hook')
  .then(()=>navigate(PathConstants.ACCOUNT))
  .catch((err)=>console.log('session exist'))
  return (
    <div 
      className="min-h-screen bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${back_pic})` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex justify-center items-center">
        
        <div className="backdrop-blur-md rounded-lg shadow-xl bg-white/30 p-9 ">
          
          <div className="border-b-2">
            <p className="text-white text-4xl pb-6 text-center">Log In</p>
          </div>

          <AbstractForm data={formInputData} type="loginUser"/>
          
          <div className="flex justify-around items-center">
            <p className="text-white text-center text-lg leading-relaxed mt-3">
              Do not have an account yet?
              <br />
              <Link to={PathConstants.REGISTRATION} className="underline hover:text-neutral-700">Register now</Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
