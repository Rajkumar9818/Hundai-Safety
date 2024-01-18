import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import Sidebar from '../Home/Sidebar'
import { Link } from 'react-router-dom'
import './User.css'

const Updateuser = () => {
    const [employee, setEmployee] = useState([])
    const [values, setValues] = useState({
        user:'',
        emailId:'',
        role:'',
        status:''
     })
     
 const navigate =useNavigate()
 const {id} =useParams();
 useEffect(()=>{
    
    axios.get('http://localhost:5000/read/'+id)
    .then(res =>{
      console.log(res);
      setValues({...values,user:res.data[0]?.user,emailId:res.data[0]?.emailId, role:res.data[0]?.role, status:res.data[0]?.status})
    //   navigate('/home')
    }).catch(err=> console.log(err))
 },[])

 

 const handleUpdate =(e)=>{
    e.preventDefault();
    axios.put('http://localhost:5000/update/'+id,values)
    .then(res =>{
      console.log(res);
      navigate('/home')
    })
    .catch(err=> console.log(err));
 }
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
        <h3>Update User Details</h3>
        <div className="container">
          <form onSubmit={handleUpdate} className="form-div1">
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
            <div className='subBtn'>
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
  )
}

export default Updateuser
