import React from "react";
import LoginForm from "../components/LoginForm";
import axios from 'axios';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from 'react-router-dom'
import back_pic from '../assets/photo1.jpg'

const Login = () => {
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
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
