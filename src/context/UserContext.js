import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

export const ProfileContext =createContext()
const auth =getAuth(app);
const UserContext = ({children}) => {
    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={register}
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;