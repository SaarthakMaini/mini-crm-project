import React,{useState} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import '../styles/Login.css'
import '../styles/Register.css'


const Register = () => {
  const [credentials,setCredentials] = useState({
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleInputChange = (event) =>{
    const {name,value} = event.target
    setCredentials({...credentials,[name]:value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <nav className="navbar">
      <h1 className="logo"><RouterLink to="/" id="logo-link">Mini CRM</RouterLink></h1>
      <div className="auth-buttons">
      <RouterLink to="/login"><button>Login</button></RouterLink>
      </div>
    </nav>
    <div className="registration-container">
      <h2 className="registration-heading">Create Your Account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="email" className="registration-input" placeholder="Email Address" value={credentials.email} onChange={handleInputChange} required/>
        </div>
        <div className="input-container">
          <input type="password" className="registration-input" placeholder="Password" value={credentials.password} onChange={handleInputChange} required/>
        </div>
        <div className="input-container">
          <input type="password" className="registration-input" placeholder="Confirm Password" value={credentials.confirmPassword} onChange={handleInputChange} required/>
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
      <p className="login-text">Already have an account? <RouterLink to="/login">Login</RouterLink></p>
    </div>
    </div>
  )
}

export default Register
