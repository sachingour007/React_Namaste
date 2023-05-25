import React, { useEffect, useState } from "react";
import Logo from "../../utils/image cover/pngwing.com.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav className="w-full shadow-md sticky top-0 mb-8 bg-white p-2 z-10 ">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <img className="w-24 h-20" src={Logo} alt="logo" />
        </div>
        
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
