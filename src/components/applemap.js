import React from "react";
import '../assets/main.css';

function AppleMapButton({ long, lat, marker }) {

    return (
        <a href={"http://maps.apple.com/?&q=" + marker + "&ll=" + lat + "," + long + "&z=17&t=s"} 
        className="w-full flex items-center justify-center mt-4 px-8 py-3 
        border border-transparent text-base leading-6 font-medium 
        rounded-md text-white bg-indigo-600 
        hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo 
        focus:border-indigo-300 transition duration-150 ease-in-out 
        md:py-4 md:text-lg md:px-10">
        Öppna Apples karta</a>
    );
  }
  
  export default AppleMapButton;
