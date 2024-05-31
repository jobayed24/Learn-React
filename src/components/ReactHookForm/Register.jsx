import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
    const {register,handleSubmit,formState: {errors}}=useForm()
    function handleOnSubmit(formData){
       console.log(formData)
    }
  return (
    <>
    <h1>Register Hook</h1>
     <form onSubmit={handleSubmit(handleOnSubmit)}>
     <label>Name</label>
     <input
       type='name'
       className='border-blue-500 border-2 rounded-md'
       {...register('name',{
        required: 
        'value is required',
        maxLength:
        {
            value: '5',
            message: 'max Length 5'
        },
         minLength:
        {
            value: '2',
            message: 'min length 2'
        }
        })}
      />
      <p>{errors?.name?.message}</p>
     <label>Age</label>
     <input
       type='number'
       className='border-blue-500 border-2 rounded-md'
       {...register('age',{value: '27',valueAsNumber: true,deps:['name']})}
      />
      <input type='submit' />
     </form>
    </>
  )
}
