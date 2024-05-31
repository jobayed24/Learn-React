import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
    const {register,handleSubmit}=useForm()
    function handleOnSubmit(formData){
        console.log(formData)
    }
  return (
    <>
    <h1>Register Hook</h1>
     <form onSubmit={handleSubmit(handleOnSubmit)}>
     <input
       type='number'
       className='border-blue-500 border-2 rounded-md'
       {...register('firstname',{valueAsNumber: true})}
      />
      <input type='submit' />
     </form>
    </>
  )
}
