import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const ProfileContext =createContext()
const auth =getAuth(app);
const UserContext = ({children}) => {
    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const authInfo ={register,logIn,logOut}
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;