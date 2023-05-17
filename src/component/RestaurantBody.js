import React, { useState, useEffect } from "react";
import Search from "./Search";
import RestaurantCards from "./RestaurantCards";
import style from "./ResBody.module.css";
import LoaderShimmer from "./ShimmerUIBox/LoaderShimmer";
import { NavLink } from "react-router-dom";

//SEARCH FUNCTION ALGORITHAM
function filterData(searchText, restroList) {
  const data = restroList.filter((restro) =>
    restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
}

const RestaurantBody = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
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
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    //Option Chaining
    setRestroList(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestroList(data?.data?.cards[2]?.data?.data?.cards);
  };

  //not render component
  if(restroList?.length === 0) return null;

  if (filteredRestroList?.length === 0) return <LoaderShimmer />;

  return restroList?.length === 0 ? (
    <LoaderShimmer />
  ) : (
    <>
      <div className={style.main_body}>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          searchHandler={searchHandler}
        />
        <div className={style.cards}>
          {filteredRestroList.map((restrorant) => {
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
    </>
  );
};

export default RestaurantBody;
