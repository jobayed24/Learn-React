import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormState() {
    const {register,handleSubmit,setValue,formState:{errors,isDirty,dirtyFields}}=useForm({defaultValues:{
        'fname':'',
        'lname':''
    }})
    
    console.log('dirtyFields',dirtyFields)

    function handleOnSubmit(formValue){
        console.log(formValue)
    }
  return (
    <>
     <form onSubmit={handleSubmit(handleOnSubmit)}>
       <input placeholder='first Name' type='text' className='border-blue-400 border-2 ' {...register('fname')} />
       <input placeholder='last Name' type='text' className='border-blue-400 border-2 ' {...register('lname')} />
       
        <button type='submit'>Submit</button>
       </form>
    </>
  )
}
