
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: import.meta.env.VITE_FIREABSE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREABSE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREABSE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREABSE_MESSAGEINGSENDERID,
    appId: import.meta.env.VITE_FIREABSE_APPID,
    measurementId: import.meta.env.VITE_FIREABSE_MEASUREMENTID
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const googleAuthProvider=new GoogleAuthProvider();
const createEmailPasswordForUser=async(email,password)=>{
    try{
        const response=await createUserWithEmailAndPassword(auth,email,password)
        const user= response.user
        return user;
    }catch(error){
        throw error
    }
}
const signWithEmailPassword=async(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
        .then((res)=>res.user)
        .catch((err)=>{throw err})
}
/// login with google 

const signWithGoogle=async()=>{
    try{
      const res=await signInWithPopup(auth,googleAuthProvider)
      const user=res.user;
      return user
    }catch(err){
      throw err
    }

}
// reset password with email links

const resetPasswordWithEmailLink=async(email)=>{
  try{
    const res=await sendPasswordResetEmail(auth,email)
     return res;
  }catch(err){
    throw err
  }
}
export { auth, createEmailPasswordForUser, resetPasswordWithEmailLink, signWithEmailPassword, signWithGoogle };

