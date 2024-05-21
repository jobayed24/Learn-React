import * as React from "react";
import { useForm } from "react-hook-form";



 const MultipleError = () => {
  const {
    register,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  function onHandleSubmit(data){
    console.log(errors)
  }
  register('username')
  register('firstname')
  register('lastname')
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label>Username</label>
        <input 
            type="text"
            name="username"
            onChange={(e)=>{
                setValue('username',e.target.value,{shouldValidate: true})
                setError('username',{
                    type: 'manual',
                    message:'username is required'
                })
            }}

        />
        {errors.username && <p>{errors.username.message}</p>}
        <label>FirstName</label>
        <input 
        onChange={(e)=>{
            setValue('firstname',e.target.value,{shouldValidate: true})
            setError('firstname',{type: 'manual',message: 'first name required'})
        }
        }
    
        type="text"   />
        {errors.firstname && <p>{errors.firstname.message}</p>}
        <label> last name</label>
        <input
        type="text"
        onChange={(e) => {
          setValue("lastName", e.target.value, { shouldValidate: true });
          setError("lastName", {
            types: {
              required: "This is required",
              minLength: "This is minLength"
            },
            message: 'last name is required'
          });
        }}
      />
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.required}</p>
      )}
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.minLength}</p>
      )}
        <button type="button" onClick={()=>{
            [
                {
                    type: 'manual',
                    name: 'username',
                    message: 'double check this'
                },
                {
                    type: 'manual',
                    name: 'firstname',
                    message: 'triple check '
                }
            ].forEach(({name,type,message})=>{
                setError(name,{type,message})
            })
        }}>trigger error</button>
        <input type="submit" />
    </form>
  );
};

export default MultipleError