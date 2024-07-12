import { useState } from "react";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Col lg={10}>
            <Form.Control
              name="email"
              value={formInput.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Row>
            <Col xs={10}>
              <Form.Control
                type={type}
                name="password"
                value={formInput.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="off"
                required
              />
            </Col>
            <Col xs={1}>
              <span
                className="flex justify-around items-center"
                onClick={toggleVisibility}
              >
                <Icon className="absolute mr-10" icon={icon} size={25} />
              </span>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
        <p className="mt-3">
          Do not have an account yet?
          <br />
          <Link to={PathConstants.REGISTRATION}>Register now</Link>
        </p>
      </Form>
      {message && <p className="text-danger">{message}*</p>}
    </>
  );
};
export default LoginForm;
