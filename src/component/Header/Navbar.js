import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "./Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex items-center md:flex md:items-center">
        <ul className=" hidden md:flex md:items-center">
          {NavBar.map(({ Title, id, to }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium"
              >
                <NavLink to={to}>{Title}</NavLink>
              </li>
            );
          })}

          <NavLink to={"/cart"}>
            <button className="capitalize font-medium border-2 border-green-300 rounded-lg hover:bg-green-600 transition-all hover:text-white font-mono w-28 h-10 ">
              Cart{" "}
              {cartItems.length === 0 ? "" : <span>{cartItems.length}</span>}
            </button>
          </NavLink>
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer pr-4 z-20 md:hidden "
        >
          {nav ? <CloseRoundedIcon /> : <TableRowsRoundedIcon />}
        </div>
      </div>

      {nav && (
        <ul className=" flex flex-col gap-4 text-xl justify-center items-center absolute top-0 left-0 w-full h-screen z-10 bg-white text-black">
          {NavBar.map(({ Title, id, to }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium"
              >
                <NavLink to={to}>{Title}</NavLink>
              </li>
            );
          })}
          <NavLink to={"/cart"}>
            <button className="capitalize font-medium border-2 border-green-300 rounded-lg hover:bg-green-600 hover:text-white font-mono w-28 h-10 ">
              Cart{" "}
              {cartItems.length === 0 ? "" : <span>{cartItems.length}</span>}
            </button>
          </NavLink>
        </ul>
      )}
    </>
  );
};

export default Navbar;
