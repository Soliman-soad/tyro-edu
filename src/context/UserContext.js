import React, { createContext } from 'react';

const ProfileContext =createContext()

const UserContext = ({children}) => {

    const authInfo ={}
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;