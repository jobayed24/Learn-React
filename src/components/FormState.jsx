import React from 'react';
import { useForm } from 'react-hook-form';
let counter=0
export default function FormState() {
    const {register,setValue,handleSubmit,formState:{touchedFields}} =useForm({
        defaultValues:{
            firstName: '',
            lastName: '',
            numberAmounts: ''
        }
    });
    console.log('touchedFields',touchedFields)
    const onSubmit=(formData)=>{
      
    }
    counter++
  return (
    
    <>
    <h1>{counter}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input 
        type='text'
            {...register('firstName',{required: true})}
        />

         <label>Last Name</label>
        <input 
        type='text'
            {...register('lastName',{required: true})}
        />
        <label>Number of Amounts</label>
        <input 
        type='number'
            {...register('numberAmounts',{min: 1, max: 100})}
        />
        <button onClick={()=>{
            setValue('numberAmounts',100,{shouldDirty: true})
        }}>change amount</button>
        <input type='submit' />
      </form>
    </>
  )
}
