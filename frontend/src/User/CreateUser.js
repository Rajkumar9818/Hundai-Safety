import React, { useState } from "react";
import "./User.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../Home/Sidebar";

const CreateUser = () => {
  const [values, setValues] = useState({
    user: "",
    emailId: "",
    role: "",
    status: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/create", values).then((res) => {
      console.log(res);
      navigate("/home");
    });
  };
  return (
    <>
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-md-12">
          <Navbar></Navbar>
        </div>
      </div>
      <div class="row">
      <div class="col-md-2">
        <Sidebar></Sidebar>
      </div>
      
      <div class="col-md-9">
      <div className="container">
        <h3>Create User</h3>
        <div className="container">
          <form onSubmit={handleSubmit} className="form-div1">
            <div className="form-group">
              <div className="loginForm">
                <label htmlFor="username" className="">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  name="user"
                  value={values.user}
                  onChange={(e) =>
                    setValues({ ...values, user: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  value={values.emailId}
                  onChange={(e) =>
                    setValues({ ...values, emailId: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Role:</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={(e) =>
                    setValues({ ...values, role: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Status:</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={values.status}
                  onChange={(e) =>
                    setValues({ ...values, status: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="subBtn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default CreateUser;
