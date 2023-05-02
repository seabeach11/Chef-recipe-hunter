import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";



const AuthContext = createContext(null);
const auth = getAuth(app);  
export const AuthProvider = ({ children }) => {
  
   const registerUser = (name,email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

   } 
    
    const authInfo = {registerUser};
    
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
