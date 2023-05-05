import React from 'react'
import style from "./ResBody.module.css";

const Search = () => {
  return (
    <div className={style.search}>
      <input type="text" placeholder='Search' />
      <button>Search</button>
    </div>
  )
}

export default Search