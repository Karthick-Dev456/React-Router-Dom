import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Logo */}
            <h1 className="text-xl font-bold">MyApp</h1>

            {/* Menu */}
            <ul className="hidden md:flex space-x-6">
                    
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/student">Student</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>

            {/* Button */}
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
                Login
            </button>

        </div>
    </nav>
  );
};

export default Navbar;