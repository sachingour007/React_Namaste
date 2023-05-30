import React from "react";
import { image } from "../constants/imageUrl";

const RestaurantCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
}) => {
  return (
    <div className="p-2 hover:border-gray-300 hover:border">
      <img className="p-2 rounded-xl" src={image + cloudinaryImageId} alt="pizza" />
      <div className="pl-2">
        <h4 className="font-semibold text-base">{name}</h4>
        <span className="text-gray-500 text-xs font-semibold">{cuisines.join(", ")}</span>
        <div>
          <div className="flex items-center sm:gap-2">
            <div className="flex items-center gap-1 font-medium text-xs text-white px-2 sm:px-1 bg-green-600 ">
              <span className="text-sm">
              ★
              </span>
              <span>{avgRating === "--" ? "4.2" : avgRating }</span> 
            </div>
            <div></div>
            <span className="font-medium text-xs text-gray-500 ">{slaString}</span>
            <div>
            <span className="font-medium text-xs text-gray-500 ">{costForTwoString}</span>
            </div>
          </div>
        </div>


      </div>

    </div>

    // <div className="border-none rounded-2xl shadow-xl flex flex-col sm:items-center w-full p-2 sm:hover:scale-75 transition duration-300 ease-out hover:ease-in hover:scale-75">
    //   <img className="w-full h-30 sm:pt-2 sm:w-64 sm:h-36 rounded-md" src={image + cloudinaryImageId} alt="pizza" />
    //   <div>
    //   <h2 className="font-bold text-xl sm:font-medium sm:text-lg sm:self-start pl-1">{name}</h2>

    //   {/* <span className="font-semibold text-md text-gray-500 sm:font-medium sm:text-sm sm:flex-wrap pl-1">{cuisines + " "}</span> */}

    //   <div className="font-semibold text-md text-gray-500 sm:font-medium sm:text-sm sm:self-start pl-1">
    //     <span className="pr-3">{" • "+costForTwoString }</span>
    //     <span>{" • "+lastMileTravelString}</span>
    //   </div>

    //   </div>

    // </div>
  );
};

export default RestaurantCards;
