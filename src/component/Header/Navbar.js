import React from 'react'
import style from './Header.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar_main}>
    <ul>
      <li>Home</li>
      <li>Foods</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
    </div>
  )
}

export default Navbar