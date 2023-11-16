import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { 
GoogleAuthProvider,
getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
    
  } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate()
  const createUser = async (email, password) => {
    
    console.log(email);
   
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
       // console.log(userCredential);
       toastSuccessNotify("Registered successfully!")
      navigate("/")
     
      
    } catch (error) {
      toastErrorNotify(error.message)
      // console.log(error.message);
    }

  };
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap

  const signIn = async(email , password) =>{
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      let userCredential = await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
      toastSuccessNotify("Logged in successfully!");
      console.log(userCredential);
    } catch (error) {
      // console.log(error.message);
      toastErrorNotify(error.message);
      
    }
  }

 
  const values = { createUser , signIn };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
