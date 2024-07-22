import React from 'react'
import './CSS/Login.css'
import Navbar from '../Components/Navbar/Navbar'
import Signup_image from '../Components/Asssets/Signup_image.png'

const Login = () => {
  return (
    <>
    <Navbar/>
      <div className='login-container'>
        <div>
          <img src={Signup_image} alt="" />
        </div>
        <div className='login-right'>
         <form  className='login'>
          <h1>login</h1>
          <input type='text'className='input-field'placeholder='Email Id' required  />
		      <input type='password'className='input-field'placeholder='Enter Password' required/>
		      <button type='submit'className='submit-btn'>Login</button>
        </form>  
        </div> 
      </div>
    </>
  )
}

export default Login