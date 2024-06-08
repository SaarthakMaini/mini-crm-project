import React,{useState} from 'react'
import {Link as RouterLink} from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [credentials,setCredentials] = useState({
    email:"",
    password:""
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
      <RouterLink to="/register"><button>Register</button></RouterLink>
      </div>
    </nav>
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" className="login-input" placeholder="Email Address" name="email" value={credentials.email} onChange={handleInputChange} required/>
        <input type="password" className="login-input" placeholder="Password" name="password" value={credentials.password} onChange={handleInputChange} required/>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="create-account-text">Don't have an account? <RouterLink to="/register">Create One</RouterLink></p>
    </div>
    </div>
  )
}

export default Login
