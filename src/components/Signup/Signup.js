import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [confirmPassword,setConfirmPassword]=useState('')
   const [error,setError]=useState('')

   const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
   const navigate=useNavigate()

   const handleEmailBlur=event=>{
      setEmail(event.target.value)
   }

   const handlePasswordBlur=event=>{
      setPassword(event.target.value)
   }
   const confirmPasswordBlur=event=>{
      setConfirmPassword(event.target.value)
   }

   if(user){
      navigate('/shop')
   }
   
   const handleCreateUser=event=>{
      event.preventDefault()
      if(password!==confirmPassword){
         setError('Not Matching !')
         return
      }
      if(password.length<6){
         setError('password should be min six chars or longer')
         return
      }
      
      createUserWithEmailAndPassword(email,password)
   }
   return (
      <div className='form-container'>
         <div>
         <h1>Sign Up</h1>
         <form onSubmit={handleCreateUser} >
         <div className='input-group'>
           <label htmlFor="email">Email</label>
           <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
         
         </div>
         <div className="input-group">
            <label htmlFor="password">Password</label>
           <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
         </div>
         <div className="input-group">
            <label htmlFor="confirm password">Confirm Password</label>
           <input onBlur={confirmPasswordBlur} type="password" name="confirm-password" id="" required/>
         </div>
         <p style={{color:'coral'}}>{error}</p>
         <input className='form-submit' type="submit" value="Sign Up" />
         </form>
         <p>Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
         </div>
        
      </div>
   );
};

export default Signup;