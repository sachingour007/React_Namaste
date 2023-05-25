import React from "react";
import { image } from "../constants/imageUrl";

const RestaurantCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="border-none rounded-2xl shadow-xl flex flex-col sm:items-center w-full p-2 sm:hover:scale-75 transition duration-300 ease-out hover:ease-in hover:scale-75">
      <img className="w-full h-30 sm:pt-2 sm:w-64 sm:h-36 rounded-md" src={image + cloudinaryImageId} alt="pizza" />
      <h2 className="font-bold text-xl sm:font-medium sm:text-lg sm:self-start sm:">{name}</h2>
      <p className="font-semibold text-xl sm:font-medium sm:text-sm sm:self-start">{cuisines[0]}</p>
      <h3 className="font-semibold text-xl sm:font-medium sm:text-sm sm:self-start">{lastMileTravelString}</h3>
    </div>
  );
};

export default RestaurantCards;
