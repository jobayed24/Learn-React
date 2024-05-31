import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Unregister() {
    const {register,unregister,handleSubmit}=useForm()
    const [show,setShow]=useState(true)
    function handleOnClick(){
        unregister('fname')
        setShow(false);

    }
    function handleOnSubmit(formValue){
        console.log(formValue)
    }
  return (
    <>
       <form onSubmit={handleSubmit(handleOnSubmit)}>
       {show && <input placeholder='first Name' type='text' className='border-blue-400 border-2 ' {...register('fname')} />}
       <input placeholder='last Name' type='text' className='border-blue-400 border-2 ' {...register('lname')} />
        <button onClick={handleOnClick}>unmount</button>
        <button type='submit'>Submit</button>
       </form>
    </>
  )
}
