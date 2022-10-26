import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';

const PrivateRouter = ({children}) => {
    let location = useLocation();
    const {user} = useContext(ProfileContext);
    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRouter;