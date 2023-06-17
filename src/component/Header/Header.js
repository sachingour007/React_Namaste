import React, { useEffect, useState } from "react";
import Logo from "../../assets/image cover/pngwing.com.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateHanlder = () => {
    navigate(0);
  };

  return (
    <nav className="w-full shadow-md sticky top-0 mb-8 bg-white p-2 z-10 ">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <img
            className="w-24 h-20 cursor-pointer"
            src={Logo}
            onClick={navigateHanlder}
            alt="logo"
          />
        </div>

        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
