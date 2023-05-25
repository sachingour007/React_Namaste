import React from "react";

const Search = ({ searchText, setSearchText, searchHandler }) => {
  return (
    <div className="">
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
