import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const activeStyle = {
		background: '#00796B',
		padding: "5px",
		borderRadius: "5px"
	  };
    return (
        <div>
            <ul className="space-y-4 ">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						end>
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Blog
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