import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';

const PrivateRouter = ({children}) => {
    let location = useLocation();
    const {user,loading} = useContext(ProfileContext);
    if(loading){
        // loader section
        return(<div className='min-h-screen flex items-center justify-center'>
		<div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
</div>
	</div>)
    }
    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRouter;