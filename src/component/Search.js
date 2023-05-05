import React from "react";
import style from "./ResBody.module.css";

const Search = ({ searchText, setSearchText, searchHandler }) => {
  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
