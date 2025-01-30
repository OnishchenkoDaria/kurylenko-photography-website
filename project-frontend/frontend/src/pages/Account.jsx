import { useState, useLayoutEffect } from 'react';
import SessionButtons from '../components/account/SessionButton.jsx';
import axios from 'axios';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from 'react-router-dom';
import PhotoshootStateCard from '../components/account/PhotoshootStateCard.jsx';
import UserService from '../services/registerForm.js';

const Account = () => {
  const [hello, setHello] = useState();
  const [orders, setOrders] = useState([]);
  
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchData = async () => {
      //session check
      try {
        const sessionResponse = await axios.post('http://localhost:3001/users/session-hook');
        //const message = 'welcome, ' + sessionResponse.data;
        setHello(sessionResponse.data);
      } catch {
        navigate(PathConstants.LOGIN);
      }

      //getting user's orders data
      try{
        const ordersData = await UserService.getUserOrders();
        setOrders(ordersData);
      } catch(err){
        console.log('error fetching orders data: ', err);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <div className='flex h-full'>
        <div className=' w-64 '>
          <h1 className='text-center m-4'>welcome, {hello}</h1>
          <SessionButtons />
        </div>
        <div className='bg-neutral-100 shrink w-100'>
          <p className='p-4 text-neutral-500'>My photoshoots</p>
          <PhotoshootStateCard data={orders} />
        </div>
      </div>
    </>
  );
}

export default Account;
