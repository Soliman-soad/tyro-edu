import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const activeStyle = {
		background: '#00796B',
		padding: "5px",
		borderRadius: "5px",
    color:'#ffffff'
	  };
    return (
        <div className='p-10 bg-white h-screen sticky top-0 hidden md:block'>
            <ul className="space-y-4 ">
                      
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						end>
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="profile"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="dashboard"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="instructor"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Instructors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          About
                        </NavLink>
                      </li>
                      
                    </ul>
        </div>
    );
};

export default Sidebar;