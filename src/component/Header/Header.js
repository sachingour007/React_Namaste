import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header_main}>
      <img
        src="https://cdn.dotpe.in/longtail/store-logo/7781322/efYdpGRb.jpeg"
        alt="logo"
      />
      <h2>Food Corner</h2>
      <Navbar />
    </div>
  );
};

export default Header;
