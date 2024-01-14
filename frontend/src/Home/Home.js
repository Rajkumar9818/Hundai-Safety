import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/home')
    .then(res => setData(res.data))
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div className='container'>
      <div className='d-flex justify-content-end'>
        <Link to='/create' className ='btn btn-success'> Create </Link>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => {
          return <tr key={index}>
             
          <td>{employee.id}</td>
          <td>{employee.user}</td>
          <td>{employee.emailId}</td>
          <td>{employee.role}</td>
          <td>{employee.status}</td>
          <td>
            <button>edit</button>
            <button>Delete</button>
          </td>
          </tr>
        })}
       
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Home
