import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar'

const Courses = () => {
    const [category,setCategory]= useState([])
  useEffect(()=>{
    fetch('https://tyro-server.vercel.app/category')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])
    return (
        <div className='grid grid-cols-10 bg-white text-gray-900 dark:text-white dark:bg-gray-800'>
            {/* this section is our sidebar */}
            <div className='md:col-span-2'><Sidebar category={category}></Sidebar></div>
            {/* this is our course section */}
            <div className='col-span-8 '>
            <Outlet/>
            </div>
        </div>
    );
};

export default Courses;