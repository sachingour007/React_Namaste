import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../../constants/imageUrl";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full mx-auto px-3">
      <img className="w-24 h-20" src={LOGO_URL} alt="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
