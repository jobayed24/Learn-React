import React from 'react';
import { useForm } from 'react-hook-form';
import Field from './Field';
import FieldSet from './FieldSet';
export default function () {
    const {
      register,
      handleSubmit,
    }=useForm()

    function onHandleSubmit(formData){
      console.log(formData)
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onHandleSubmit)}>
    <FieldSet label='Enter a login details'>
        <Field  label='Email' >
            <input
                    {...register('email',{required:'Email is required !'})}
                    className='p-2 border box-border w-[300px] rounded-md '
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter email address'
                    
                />

        </Field>
        <Field label='Password'>
            <input
            {...register('password',{required: 'password is required !'})}
            className='p-2 border box-border w-[300px] rounded-md '
            type='password'
            id='password'
            placeholder='Enter a password'
            name='password' 
            
            />
        </Field>
      </FieldSet>
      <button className='text-md text-white p-1 cursor-pointer rounded-lg bg-purple-500 m-auto'>
        Login
      </button>
    </form>
     
    </div>
  )
}
