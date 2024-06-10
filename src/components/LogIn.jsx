import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signWithEmailPassword, signWithGoogle } from '../firebase';
export default function LogIn() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
       try{
        const user=await signWithEmailPassword(email,password)
        if(user.email){
            navigate('/')
        }
       }catch(err){
        console.log(err)
       }
        
    }
    const handleGoogleLogin=async(e)=>{
        e.preventDefault()
        try{
            const res=await signWithGoogle()
        console.log(res)
        }catch(err){
            console.log(err)
        }
     }
  return (
    <>
      <form  className='flex flex-col w-[500px] bg-gray-400 p-4 m-auto'>
        Email: <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter email..' />
        password: <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password' />
        <button onClick={handleOnSubmit} className='text-white cursor-pointer bg-blue-400 border rounded-sm p-2 my-2' type='submit' >Login </button>
        <button className='my-2 p-2 text-white bg-green-500 border rounded-md' onClick={handleGoogleLogin}>Login with Gmail</button>
        <p>don't have an account ? {" "}
        <Link className='underline text-blue' to={'/signin'} >Create account</Link>
      </p>
      </form>
      
      </>
  )
}
