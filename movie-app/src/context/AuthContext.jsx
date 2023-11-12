import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { 
GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
    
  } from "firebase/auth";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
   
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      
    } catch (error) {
      console.log(error);
    }

  };
  const values = { createUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
