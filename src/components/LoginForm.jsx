import React from 'react';
import { useForm } from 'react-hook-form';
import Field from './Field';
import FieldSet from './FieldSet';
export default function () {
    const {
      register,
      handleSubmit,
      formState:{errors},
      setError
    }=useForm()

    function onHandleSubmit(formData){
      
      const localUserName={
        email: "jk@gmail.com",
        password: "1234"
      }
      const found=formData.email===localUserName.email && formData.password===localUserName.password;
      if(found){
        console.log(formData)
      }
      if(!found){
        setError('root.random',{
          type: 'random',
          message: `the user with email ${formData.email} not found in database`
        })
      }
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onHandleSubmit)}>
    <FieldSet label='Enter a login details'>
        <Field  label='Email' error={errors.email}>
            <input
                    {...register('email',{required:'Email is required !'})}
                    className='p-2 border box-border w-[300px] rounded-md '
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter email address'
                    
                />

        </Field>
        <Field label='Password' error={errors.password}>
            <input
            {...register('password',{required: 'password is required !',maxLength:{
              value: '4',
              message: 'max length 4'
            }})}
            className='p-2 border box-border w-[300px] rounded-md '
            type='password'
            id='password'
            placeholder='Enter a password'
            name='password' 
            
            />
        </Field>
        {errors.root && <p className='text-red-500'>{errors?.root?.random?.message}</p>}
      </FieldSet>
      <button className='text-md text-white p-1 cursor-pointer rounded-lg bg-purple-500 m-auto'>
        Login
      </button>
    </form>
     
    </div>
  )
}
