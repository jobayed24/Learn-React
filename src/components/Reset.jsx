import React, { useState } from 'react'
import { resetPasswordWithEmailLink } from '../firebase'

export default function Reset() {
  const [email,setEmail]=useState('')
  const handleResetPass=async()=>{
      try{
        const res=await resetPasswordWithEmailLink(email)
        console.log('successfully password reset email sent')
      }catch(err){
        console.log(err)
      }
  }
  return (
    <>
     <form>
      Email: <input placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} type='email' />
      <button type='button' onClick={handleResetPass} className='bg-red-400 text-black p-2'>Send Mail</button>
     </form>
    </>
  )
}
