import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function SingleFieldError() {
    const {
        handleSubmit,
        setError,
        register,
        formState: {errors}
    }=useForm()
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    useEffect(()=>{
        setError('lastName',{
            types:{
                required: 'this is required',
                minLength: 'this is need minlength'
            }
        })
    },[])
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Last Name</label>
        <input 
            {...register('lastName')}
        />
        {errors.lastName && errors.lastName.types && (
            <p>{errors.lastName.types.required}</p>
        )}
        {errors.lastName && errors.lastName.types && (
            <p>{errors.lastName.types.minLength}</p>
        )}
        <input type='submit' />
      </form>
    </>
  )
}
