import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assests/Hundai.jpg";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({
    UserName: "",
    Password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", values.UserName);
    console.log("Password:", values.Password);
   

    
    axios
      .post('http://localhost:5000/login', values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/home");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid wholebody">
      <div className="left-div">
        <img className="top-image" src={logo} alt="" />
      </div>

      <div className="right-div">
        <form className="form-div" onSubmit={handleSubmit}>
          <span className="span1">Hyundai Safety Analytics</span>
          <span className="span2">Sign In</span>

          <input
            className="input1"
            type="text"
            id="UserName"
            name="UserName"
            value={values.UserName}
            placeholder="USER ID"
            onChange={(e) => setValues({ ...values, UserName: e.target.value })}
          />

          <input
            className="input1"
            type="password"
            id="Password"
            value={values.Password}
            name="Password"
            placeholder="Password"
            onChange={(e) => setValues({ ...values, Password: e.target.value })}
          />
          <button className="login-button" type="submit" >
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
