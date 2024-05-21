import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function SingleFieldError() {
    const {
        handleSubmit,
        setError,
        register,
        formState: {errors}
    }=useForm({
        criteriaMode:'all'
    })
    const onSubmit=(formData)=>{
        console.log(formData)
    }

    useEffect(()=>{
        setError('lastName',{
            types:{
                required: 'this is requied',
                minLength: 4
            }
        })
    },[setError])
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>LastName:</label>
        <input 
            {...register('lastName')}
        />
        {errors.lastName && errors.lastName.types.required && (
            <p>{errors.lastName.types.required}</p>
        )}
        {errors.lastName && errors.lastName.types.minLength && (
            <p>Minium lenght should: {errors.lastName.types.minLength}</p>
        )}
        <input type='submit' />
      </form>
     </>
  )
}
