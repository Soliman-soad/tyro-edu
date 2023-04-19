import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header'
import Sidebar from '../pages/shared/Sidebar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;