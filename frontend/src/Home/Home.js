import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../NavBar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../App.css';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const [data, setData] = useState([]);
  const navigate =useNavigate();
  const [message,setMessage] = useState("");
  useEffect(() => {
    axios.get('http://localhost:5000/Home')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = (id)=>{
    axios.delete('http://localhost:5000/delete/'+id)
    .then(res =>{
      navigate('/home')
      setMessage("Deleted Successfully");
    })
    .catch(err => console.log(err))
  }
console.log(message,"msfffff")
  return (
    <>

<div class="container-fluid px-0 upperdiv">
  <div class="row">
    <div class="col-md-12">
      <Navbar></Navbar>
    </div>
  </div>
  <div class="maindiv">
    <div class="lefdiv">
      <Sidebar></Sidebar>
    </div>
    <div class="rigdiv">
      {message && <span>{console.log(message)}</span>}
      <div className='d-flex justify-content-end m-3'>
        <Link to='/create' className ='btn btn-success'> Add New </Link>
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
              <Link to={`/edit/${employee.id}`} className='btnedit'><FontAwesomeIcon icon={faEdit} style={{ cursor: 'pointer', color: 'blue', padding:"12px" }} /></Link>
              <Link to={`/delete/${employee.id}`} onClick = {()=> handleDelete(employee.id)} className='btndelete'><FontAwesomeIcon icon={faTrashAlt} style={{ cursor: 'pointer', color: 'blue', padding:"12px" }}/></Link> 
            </td>
            </tr>
          })}
        
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
</div>
    </>
  )
}

export default Home
