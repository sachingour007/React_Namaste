import React from "react";
import style from "./Header.module.css";
import { NavLink, useParams} from "react-router-dom";


const Navbar = () => {
  const {id} = useParams();
  console.log({id})
  return (
    <div className={style.navbar_main}>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li> <NavLink to ={"/restaurant/id"}>Foods </NavLink></li>
        <li>
          <NavLink to="/contact">Contact </NavLink>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
