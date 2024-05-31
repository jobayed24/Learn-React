import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
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
    const {fields,append,remove}=useFieldArray({
        name:'socials',
        control
    });
  
    function handleOnSubmit(formData){
        console.log(formData)
    }
  return (
    <div className='bg-gray-200'>
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
            name='age'
            control={control}
            defaultValue=''
            render={({field: {ref,...field}})=>(
                <InputAsNumber 
                id="age"
                className={`px-2 mb-3 border box-border w-[300px] ${
                    errors.age && 'border-red-500'
                }`} 
                {...field} />
            )}
            rules={{
                max:{
                    value:100,
                    message: 'age can be between 1 to 100'
                }
            }}
            />
        </Field>

        
      </FieldSet>
      <FieldSet label='Enter social handles'>
            {fields.map((field,index)=>{
                return(
                    <div className='flex justify-between items-center w-max ' key={field.id}>
                        <Field label='Social Name' error={`socials[${index}].name`}>
                            <input 
                            className="p-2 border box-border w-full rounded-md"
                            {...register(`socials[${index}].name`,{required: 'name needed'})}
                            type='text'
                            id={`socials[${index}].name`}
                            
                            />
                        </Field>
                        <Field label="Social URL" error={`socials[${index}].url`}>
                                    <input
                                        className="p-2 border box-border w-full rounded-md"
                                        type="text"
                                        {...register(`socials[${index}].url`,{required: 'name needed'})}
                                        id={`socials[${index}].url`}
                                        
                                    />
                                </Field>
                                <button
                                    className="mr-2 text-2xl"
                                    onClick={() => remove(index)}>
                                    &#8722;
                                </button>
                    </div>
                )
            })}
            <button
            onClick={()=>append({name:'',url:''})}
             className='mt-8 text-md text-white cursor-pointer border rounded-md bg-gray-500 p-1 m-auto'>
                add social handle
            </button>
      </FieldSet>
      <input type='submit' value='register'  className='text-black bg-blue-400 px-3 py-2 rounded-md uppercase m-2'/>
        </form>
    </div>
  )
}
