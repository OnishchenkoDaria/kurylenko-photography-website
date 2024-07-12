import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import userService from "../services/registerForm";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [formInput, setFormInput] = useState({
    name: "",
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
    //calling post req with async for proper function fulfillment order
    try {
      par.preventDefault();
      console.log(formInput);

      function newUser() {
        this.username = formInput.name;
        this.useremail = formInput.email;
        this.userpassword = formInput.password;
      }
      const UserInfo = new newUser();

      //creating object from state: UserInfo
      console.log("UserInfo", UserInfo);

      //calling axios with object UserInfo

      //const response = await userService.addUser(UserInfo) --
      //does not work as addUser call does not return anything (neither in try, nor in catch)
      const feedback = await userService.addUser(UserInfo);
      if (feedback.success === true) {
        navigate(PathConstants.ACCOUNT);
      } else {
        setMessage(feedback.message);
      }
      console.log("try executed");
      //
    } catch (err) {
      //error handling
      console.log("catch executed");
      //console.log(err)
      throw err;
    }

    console.log("here");
    setFormInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Col lg={10}>
            <Form.Control
              name="name"
              value={formInput.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </Col>
        </Form.Group>

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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Row>
            <Col lg={10}>
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
            <Col>
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
          Have an account already?
          <br />
          <Link to={PathConstants.LOGIN}>Log in now</Link>
        </p>
      </Form>
      {message && <p className="text-danger">{message}*</p>}
    </>
  );
};

export default RegistrationForm;
