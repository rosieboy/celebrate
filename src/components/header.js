import React from "react";
import '../assets/main.css';

function Header() {
    return (
        <div className="bg-gray-800 text-gray-200 w-screen h-auto">
            <a href="/"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Lenas dag!
        </a>
        </div>
    );
  }
  
  export default Header;
  