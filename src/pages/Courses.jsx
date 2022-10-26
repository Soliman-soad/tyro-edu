import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar'

const Courses = () => {
    return (
        <div className='grid grid-cols-10 '>
            {/* this section is our sidebar */}
            <div className='col-span-2 '><Sidebar></Sidebar></div>
            {/* this is our course section */}
            <div className='col-span-8 pl-10'>
            <Outlet/>
            </div>
        </div>
    );
};

export default Courses;