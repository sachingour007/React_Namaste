import React, { useState, useEffect } from "react";
import { URL } from "../constants/imageUrl";
import Search from "./Search";
import RestaurantCards from "./RestaurantCards";
import LoaderShimmer from "./ShimmerUIBox/LoaderShimmer";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import DataNotFound from "./DataNotFound";

//SEARCH FUNCTION ALGORITHAM
function filterData(searchText, restroList) {
  const data = restroList.filter((restro) =>
    restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
}

const RestaurantBody = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestroData();
  }, []);

  //SEARCH BUTTON HANDLER
  const searchHandler = () => {
    const data = filterData(searchText, restroList);
    console.log(data);
    setFilteredRestroList(data);
    setSearchText("");
  };

  //API FETCH FROM API SERVER
  const getRestroData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    //Option Chaining
    setRestroList(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestroList(data?.data?.cards[2]?.data?.data?.cards);
  };

  //not render component
  // if (restroList?.length === 0) return null;

  if (filteredRestroList?.length === 0) return <DataNotFound />;

  return (
    <>
      <Home />
      {restroList?.length === 0 ? (
        <LoaderShimmer />
      ) : (
        <>
          <div className=" flex flex-col gap-6 my-10 items-center">
            <div className="flex flex-col sm:justify-around gap-5 sm:w-full ">
              <div className="bg-green-600 self-center py-2 px-3 font-medium text-white">
                Our Menu
              </div>
              <h2 className="font-medium text-xl self-center font-mono">
                Explore Our Menu
              </h2>
              <div className="self-end p-6">
                <Search
                  searchText={searchText}
                  setSearchText={setSearchText}
                  searchHandler={searchHandler}
                />
              </div>
            </div>

            <div className="sm:mx-4 sm:w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3">
              {filteredRestroList?.map((restrorant) => {
                return (
                  <NavLink
                    to={"/restaurant/" + restrorant.data.id}
                    key={restrorant.data.id}
                  >
                    <RestaurantCards {...restrorant.data} />
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="border-[1px] border-gray-300"></div>
        </>
      )}
    </>
  );
};

export default RestaurantBody;
