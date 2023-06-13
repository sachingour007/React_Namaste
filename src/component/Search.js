import React from "react";

const Search = ({ searchText, setSearchText, searchHandler }) => {
  return (
    <div className="border-gray-100 border-2  rounded-lg">
      <input className="focus:outline-0 p-1 mx-1 font-mono"
        type="text"
        placeholder="Search the Food"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="font-mono border-none rounded-lg bg-green-600 self-center py-2 px-3 font-medium text-white" onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
