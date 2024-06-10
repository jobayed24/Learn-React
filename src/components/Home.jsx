import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
export default function Home() {
    const [user,loading,error] =useAuthState(auth);
    const navigate=useNavigate();
    if(loading){
        return <div>loading user info ....</div>
    }
    function handleSignOut(){
        signOut(auth)
            .then((res)=>{
                console.log('singout')
                navigate('/login')
            }).catch((err)=>console.log(err))
    }
  
  return (
    <div className='flex flex-col'>
      Welcome, {user && user.email}
      <button className='bg-red-400 tex-black p-2 my-2' onClick={handleSignOut}>SingOut</button>
    </div>
  )
}
