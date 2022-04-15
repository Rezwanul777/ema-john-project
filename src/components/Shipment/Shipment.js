import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const Shipment = () => {
   const [user]=useAuthState(auth)
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]=useState('')
   
   const [error,setError]=useState('')

   
   const handleNameBlur=event=>{
      setName(event.target.value)
   }
   const handleAddressBlur=event=>{
      setEmail(event.target.value)
   }

   const handlePhoneBlur=event=>{
      setPhone(event.target.value)
   }
   
   
   const handleCreateUser=event=>{
      event.preventDefault()
      setError('please fill all')
     const shipping={name,email,phone,user}
     console.log(shipping);
   }

   return (
      <div className='form-container'>
         <div>
         <h1>Shipping Information</h1>
         <form onSubmit={handleCreateUser} >
         <div className='input-group'>
           <label htmlFor="name">Your Name</label>
           <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
         
         </div>
         <div className='input-group'>
           <label htmlFor="address">Address</label>
           <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
         
         </div>
         <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
           <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
         </div>
        
         <p style={{color:'coral'}}>{error}</p>
         <input className='form-submit' type="submit" value="Sign Up" />
         </form>
         </div>
        
      </div>
   );
};


export default Shipment;