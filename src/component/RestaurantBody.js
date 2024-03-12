import React, { useState, useEffect } from "react";
import { swiggy_api_URL } from "../constants/imageUrl";
// import { restData } from "../constants/imageUrl";
import Search from "./Search";
import RestaurantCards from "./RestaurantCards";
import LoaderShimmer from "./ShimmerUIBox/LoaderShimmer";
import { NavLink } from "react-router-dom";
import Home from "./Home";

//SEARCH FUNCTION ALGORITHAM
function filterData(searchText, restroList) {
  const data = restroList.filter((restro) =>
    restro?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
}

const RestaurantBody = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState(null);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     getRestroData();
  //   }, 2000);
  //   console.log(restroList);
  //   console.log(filteredRestroList);

  // },[]);

  useEffect(() => {
    searchHandler();
  }, [searchText]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();
      console.log(json);

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setRestroList(resData);
      setFilteredRestroList(resData);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  }

  //SEARCH BUTTON HANDLER
  const searchHandler = () => {
    const data = filterData(searchText, restroList);
    console.log(data);
    setFilteredRestroList(data);
    console.log(filteredRestroList);
  };

  //API FETCH FROM API SERVER
  // const getRestroData = () => {
  //   setFilteredRestroList(restData);
  //   setRestroList(restData);
  // };

  //not render component
  // if (restroList?.length === 0) return null;

  // if (filteredRestroList?.length === 0) return <DataNotFound />;

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
                    to={"/restaurant/" + restrorant?.info?.id}
                    key={restrorant?.info?.id}
                  >
                    <RestaurantCards {...restrorant?.info} />
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
