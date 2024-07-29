import { useState } from "react";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { Link } from "react-router-dom";

// inout fields icons
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { user } from "react-icons-kit/feather/user";

const LoginForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const toggleVisibility = () => {
    if (type == "password") {
      setIcon(eye);
      setType("notpassword");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleChange = (par) => {
    const { name, value } = par.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = async (par) => {
    try {
      par.preventDefault();

      function newUser() {
        this.useremail = formInput.email;
        this.userpassword = formInput.password;
      }
      const UserInfo = new newUser();

      console.log(UserInfo);

      const feedback = await userService.loginUser(UserInfo);
      userService.getUser();
      if (feedback.success === true) {
        navigate(PathConstants.ACCOUNT);
      } else {
        setMessage(feedback.message);
      }
    } catch (err) {
      console.log("error caught");
      throw err;
    }
  };

  return (
    <>

    <div className="backdrop-blur-md rounded-lg shadow-xl bg-white/30 p-9 ">

    <div className="border-b-2">
      <p className="text-white text-4xl pb-6 text-center">Log In</p>
    </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm pt-6 text-center">

        <label className="block text-white tracking-wider mb-2 md:text-left">Email address</label>
        
        <div className="md:flex md:items-center mb-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700 mb-3"
              name="email"
              value={formInput.email}
              onChange={handleChange}
              placeholder="user@email.com"
              required
            />
            <span
                className="flex justify-around items-center"
              >
                <Icon className="pl-3 pb-3 text-white" icon={user} size={25} />
            </span>
        </div>
        
        <label className="block text-white tracking-wider pr-1 mb-2 md:text-left">Password</label>

        <div className="md:flex md:items-center mb-6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700 mb-3"
                type={type}
                name="password"
                value={formInput.password}
                onChange={handleChange}
                placeholder="password"
                autoComplete="off"
                required
              />
              <span
                className="flex justify-around items-center cursor-pointer"
                onClick={toggleVisibility}
              >
                <Icon className="pl-3 pb-3 text-white" icon={icon} size={25} />
              </span>
        </div>

        <div className="flex justify-around items-center m-3">
          <button className="tracking-wider text-white text-lg shadow hover:outline py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-white text-center text-lg leading-relaxed mt-3">
            Do not have an account yet?
            <br />
            <Link to={PathConstants.REGISTRATION} className="underline hover:text-neutral-700">Register now</Link>
          </p>
        </div>
      </form>
      {message && <p className="text-danger">{message}*</p>}
      </div>
    </>
  );
};
export default LoginForm;
