import React from "react";
import '../assets/main.css';

function AppleMapButton({ long, lat }) {

    return (
        <a href={"http://maps.apple.com/?&q=Fråga 1&ll=" + lat + "," + long + "&z=17&t=s"} 
        className="w-full flex items-center justify-center mt-4 px-8 py-3 
        border border-transparent text-base leading-6 font-medium 
        rounded-md text-white bg-indigo-600 hover:text-gray-300 
        hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo 
        focus:border-indigo-300 transition duration-150 ease-in-out 
        md:py-4 md:text-lg md:px-10">
        Öppna Apples karta</a>
    );
  }
  
  export default AppleMapButton;
