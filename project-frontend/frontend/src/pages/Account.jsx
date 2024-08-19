import { useState, useLayoutEffect } from 'react';
import SessionButtons from '../components/SessionCheck';
import axios from 'axios';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from 'react-router-dom';
import PhotoshootStateCard from '../components/PhotoshootStateCard';

const Account = () => {
  const [hello, setHello] = useState();
  const [payments] = useState([]);
  
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchData = async () => {
      //session check
      try {
        const sessionResponse = await axios.post('http://localhost:3001/users/session-hook');
        const message = 'welcome, ' + sessionResponse.data;
        setHello(message);
      } catch {
        navigate(PathConstants.LOGIN);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <div className='flex h-full'>
        <div className=' w-64 '>
          <h1 className='text-center m-4'>{hello}</h1>
          <SessionButtons />
        </div>
        <div className='bg-neutral-100 shrink w-100'>
          <p className='p-4 text-neutral-500'>My photoshoots</p>
          <PhotoshootStateCard data={payments} />
        </div>
      </div>
    </>
  );
}

export default Account;
