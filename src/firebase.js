
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBj-AdxBTRj-kEmwAKc7mBFbXCviSGXnNM",
    authDomain: "ghorihut-otp.firebaseapp.com",
    projectId: "ghorihut-otp",
    storageBucket: "ghorihut-otp.appspot.com",
    messagingSenderId: "866471602601",
    appId: "1:866471602601:web:7a055f6ee71bbc2b90bcb8",
    measurementId: "G-2RGZHM0602"
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

