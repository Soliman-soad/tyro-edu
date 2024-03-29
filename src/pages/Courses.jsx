import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from './shared/Sidebar'

const Courses = () => {
    const [category,setCategory]= useState([])
  useEffect(()=>{
    fetch('https://tyro-server.vercel.app/category')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])

  if(category.length === 0){
    return(<div className='min-h-screen flex items-center justify-center'>
		<div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
</div>
	</div>)
  }
    return (
        <div className='grid grid-cols-10 bg-white text-gray-900 dark:text-white dark:bg-gray-800 pb-16'>
            {/* this section is our sidebar */}
            <div className='md:col-span-2'><Sidebar category={category}></Sidebar></div>
            {/* this is our course section */}
            <div className='col-span-8 '>
            <Outlet/>
            <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            </div>
        </div>
    );
};

export default Courses;