import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderShimmer from "../ShimmerUIBox/LoaderShimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const FoodDetails = () => {
  const ParamId = useParams();
  const { id } = ParamId;

  const [cardsDetails, menuList] = useRestaurantMenu(id);
  console.log(menuList);

  // if(!cardsDetails) return null;

  return cardsDetails === null ? (
    <LoaderShimmer />
  ) : (
    <div className="w-3/4 mx-auto ">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-medium">{cardsDetails.name}</h2>
          <h5 className="text-xs text-gray-500">{cardsDetails.cuisines.join(" , ")}</h5>
          <p className="text-xs text-gray-500">
            {cardsDetails.areaName + " " + cardsDetails.avgRatingString + "km"}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`bg-white border-gray-300 border flex items-center justify-center gap-1 font-medium text-xs px-7 sm:px-5 ${
              cardsDetails.avgRating < "4.0"
                ? "text-orange-500"
                : "text-green-600"
            }`}
          >
            <span className="text-sm font-extrabold ">★</span>
            <span className="text-sm font-extrabold ">
              {cardsDetails.avgRating === "--" ? "4.2" : cardsDetails.avgRating}
            </span>
          </div>
          <div className="border-gray-300 border py-1 flex items-center gap-1 font-medium text-xs px-3 sm:px-1">
            <span className="text-xs text-gray-400 ">
              {cardsDetails.totalRatingsString}
            </span>
          </div>
        </div>
      </div>
      <div className="border-gray-100 border-b-2 my-4"></div>

      <div>
        <h1>
         Recommended
         
          
        </h1>

      </div>
    </div>
  );
};
export default FoodDetails;
