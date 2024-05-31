import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Field from './Field';
import FieldSet from './FieldSet';
import InputAsNumber from './InputAsNumber';

export default function RegisterForm() {
    const {
        register,
        formState: {errors},
        handleSubmit,
        control
    }=useForm();
    function handleOnSubmit(formData){
        console.log(formData)
    }
  return (
    <>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
        <FieldSet label='Register Form'>
        <Field label='Email' error={errors.email}>
            <input 
                type='email'
                id='email'
                placeholder='Enter email..'
                {...register('email',{required: 'email is required'})}
                className={`px-2 mb-3 border box-border w-[300px] ${
                    errors.email && 'border-red-500'
                }`}
            />  
        </Field>
        <Field label='Password' error={errors.password}>
            <input 
                type='password'
                id='password'
                placeholder='Enter password'
                {...register('password',{required: 'password is required',minLength:{
                    value: 8,
                    message: 'must 8 character'
                }})}
                className={`px-2 mb-3 border box-border w-[300px] ${
                    errors.password && 'border-red-500'
                }`}
            />
        </Field>
        <Field label='First Name' error={errors.firstname}>
            <input 
                type='text'
                id='firstname'
                placeholder='Enter First Name'
                {...register('firstname',{required: 'firstname is required'})}
                className={`px-2 mb-3 border box-border w-[300px] ${
                    errors.firstname && 'border-red-500'
                }`}
            />
        </Field>
        <Field label='Age' error={errors.age}>
            <Controller
            control={control}
            defaultValue='0'
          
            render={({field: {ref,...field}})=>(
                <InputAsNumber 
                id="age"
                className={`px-2 mb-3 border box-border w-[300px] ${
                    errors.age && 'border-red-500'
                }`}
                {...field} />
            )}
                 name="age"
            />
        </Field>
        <input type='submit'  className='bg-blue-400 px-3 py-2 '/>
      </FieldSet>
        </form>
    </>
  )
}
