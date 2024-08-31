import userService from '../services/registerForm'
import { useNavigate } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'

const SessionButtons = () => {
  const navigate = useNavigate();
  
  //успішне session authentication перевірка
  //пфсля оновлення видає інфу про юзера що зарегався до цього
  //навіть після перелогіну - видає логін вже новозалогіненого юзера
  //після connection break із сервером (xampp) всі дані щезають

    /*const checkUser = async() => {
    console.log('summoned')
    //await userService.getUser()
  }*/

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