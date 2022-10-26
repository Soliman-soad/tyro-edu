import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup } from "firebase/auth";
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
    const [user ,setUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
    return () =>{
        unsubscribe()
    }
    },[])
    const changeProfile =(name , img)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }
    const popUpSignIn = (provider) => {
        return signInWithPopup(auth,provider)
    }

    const authInfo ={register,logIn,logOut,user,changeProfile,popUpSignIn };
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;