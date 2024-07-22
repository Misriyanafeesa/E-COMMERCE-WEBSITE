import React from 'react'
import './CSS/Signup.css'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Signup_image from '../Components/Asssets/Signup_image.png'
import axios from 'axios';

const Signup = () => {

  // axios.post('http://localhost:3000/auth/forgotpassword',{email:""})
  // .then
  return (
    <>
    <Navbar/>
      <div className='signup-container'>
        <form  className='signup-left'>
         <img src={Signup_image} alt="" />
	      </form>
        <div className='signup-right'>
        <h1>Signup</h1>
		     <input type='text'className='input-field'placeholder='Username' required/>
		     <input type='email'className='input-field'placeholder='Email Id' required/>
		     <input type='password'className='input-field'placeholder='Enter Password' required/>
		     <input type='password'className='input-field'placeholder='Confirm Password'  required/>                                                 
         <button type='submit'className='submit-btn'>Register</button>
         <p>Already have an account? <Link to='/login'><a href="">Login here</a></Link></p> 
        </div>
      </div>
    </>
  )
}
export default Signup