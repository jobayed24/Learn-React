import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createEmailPasswordForUser } from '../firebase';
export default function SignIn() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    const handleOnSubmit=async(event)=>{
        event.preventDefault();
       try{
        const users=await createEmailPasswordForUser(email,password)
        if(users.email){
            navigate('/login')
        }
       }catch(err){
            console.log(err.message)
       }     
    }
  
  return (
    <form className='flex flex-col bg-gray-300 p-4 w-[500px] m-auto'>
        <label htmlFor='email'>Your Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} id='email' placeholder='Enter email..' type='email' />
        <label htmlFor='password'>Your password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password' id='password' />
        <button className='my-2 p-2 text-white bg-blue-500 border rounded-md' onClick={handleOnSubmit} type='submit'>Create account</button>
       
        <p>Already have account ? {" "}
            Please <Link className='underline text-blue' to={'/login'} >LogIn</Link>
        </p>
        <p>Already Forgot Passoword ? {" "}
            Please <Link  className='underline text-blue' to={'/reset'} >Reset</Link>
        </p>
    </form>
  )
}
