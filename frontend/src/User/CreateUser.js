import React, { useState } from 'react'
import './User.css'

const CreateUser = () => {
    const [values, setValues] = useState({
        user:'',
        emailId:'',
        role:'',
        status:''
    })
    const handleSubmit = () =>{

    }
  return (
    <div className='container'>
        
        <span className="span2">Sign In</span>
       <form onSubmit={handleSubmit} className='form-div1'>
      <div className="form-group">
        <div className='loginForm'>
        <label htmlFor="username" className=''>Username:</label>
        <input
          type="text"
          className="form-control"
          id="user"
          name="user"
          value={values.user}
          onChange={(e) => setValues({ ...values, user: e.target.value })}
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
          onChange={(e) => setValues({ ...values, emailId: e.target.value })}
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
          onChange={(e) => setValues({ ...values, role: e.target.value })}
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
          onChange={(e) => setValues({ ...values, status: e.target.value })}
          required
        />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
    
  )
}

export default CreateUser
