import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NavBar } from "./Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { id } = useParams();
  console.log({ id });
  return (
    <div>
      <nav className="flex items-center md:flex md:items-center">
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

          <button className="capitalize font-medium border-2 border-orange-300 rounded-lg hover:bg-orange-400 hover:text-white font-serif w-28 h-10 ">
            Cart
          </button>
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer pr-4 z-20 md:hidden "
        >
          {nav ? (
            <CloseRoundedIcon sx={{ color: "rgb(251, 146, 60)" }} />
          ) : (
            <TableRowsRoundedIcon sx={{ color: "rgb(251, 146, 60)" }} />
          )}
        </div>
      </nav>

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
          <button className="capitalize font-medium border-2 border-orange-300 rounded-lg hover:bg-orange-400 hover:text-white font-serif w-28 h-10 ">
            Cart
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
