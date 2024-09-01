import userService from '../../services/registerForm.js'
import { useNavigate } from 'react-router-dom'
import PathConstants from '../../routes/pathConstants.js'

const SessionButtons = () => {
  const navigate = useNavigate();
  
  const checkOut = async() => {
    const success = await userService.logOut()
      if(success){
          console.log('successfully logged out');
          navigate(PathConstants.HOME)
      }
  }

  return (
    <>
        <div>
        <form onSubmit={checkOut} className="text-center m-4">
            <button type='submit' className="border-2 rounded-lg border-amber-500/50 p-2">Log out</button>
        </form>
        </div>
    </>
  );
}

export default SessionButtons;