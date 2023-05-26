import React from "react";
import { image } from "../constants/imageUrl";

const RestaurantCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  lastMileTravelString,
}) => {
  return (
    <div className="border-none rounded-2xl shadow-xl flex flex-col sm:items-center w-full p-2 sm:hover:scale-75 transition duration-300 ease-out hover:ease-in hover:scale-75">
      <img className="w-full h-30 sm:pt-2 sm:w-64 sm:h-36 rounded-md" src={image + cloudinaryImageId} alt="pizza" />
      <h2 className="font-bold text-xl sm:font-medium sm:text-lg sm:self-start pl-1">{name}</h2>
      <p className="font-semibold text-md text-gray-500 sm:font-medium sm:text-sm sm:self-start pl-1">{cuisines[0]+" "+ cuisines[1]}</p>
      <div className="font-semibold text-md text-gray-500 sm:font-medium sm:text-sm sm:self-start pl-1">
        <span className="pr-3">{" • "+costForTwoString }</span>
        <span>{" • "+lastMileTravelString}</span>
      </div>
    </div>
  );
};

export default RestaurantCards;
