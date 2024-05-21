import React from 'react'
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
    // useEffect(()=>{
      
    //         const response=async()=>{
    //             const data=await fetch('https://dummyjson.com/products');
    //             return data;
    //            }
    //            response();
    //   if(response.statusCode>200){
    //     setError('root.serverError',{
    //         type: response.statusCode
    //     })
    //   }
       
    //         // if(response.statusCode >200){
    //         //     setError('root.serverError',{
    //         //         type: response.statusCode
    //         //     })
    //         // }
       
    // },[])
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Last name:</label>
        <input 
            {...register('lastName')}
        />
        <button onClick={async()=>{
            const response = await fetch('https://dummyjson.com/produc')
            
            if(response.status >200){
                setError('root.serverError',{
                    type: response.status
                })
               
            }
        }}>Send Request to server</button>
       
            <p>{errors?.root?.serverError?.type==404 && 'Sever error'}</p>
     
        {errors.lastName && errors.lastName.types && (
            <p>{errors.lastName.types.minLength}</p>
        )}
        <input type='submit' />
      </form>
    </>
  )
}
