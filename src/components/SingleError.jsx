import * as React from "react";
import { useForm } from "react-hook-form";



 const SingleError = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onHandleSubmit(data){
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
    <input
    {...register('test')}
    />
    {errors.test && <p>{errors.test.message}</p>}
   <button onClick={()=>{
    setError('test',{type: 'focus'},{shouldFocus: true})
   }}>Focus</button>
    <button type="submit">Submit</button>
    </form>
  );
};

export default SingleError