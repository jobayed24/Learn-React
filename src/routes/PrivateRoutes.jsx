import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, Outlet } from "react-router-dom"
import { auth } from "../firebase"
export default function PrivateRoutes() {
    const [user,loading,error]=useAuthState(auth)
    if(loading) return <div>User info loading...</div>
  return (
    <>
    {user ? <Outlet/> : <Navigate to='/login' />}
    </>
  )
}
