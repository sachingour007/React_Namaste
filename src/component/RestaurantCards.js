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
    <div className="p-2 hover:border-gray-300 hover:border hover:shadow">
      <img
        className="p-2 rounded-xl"
        src={image + cloudinaryImageId}
        alt="pizza"
      />
      <div className="pl-2">
        <h4 className="font-semibold text-base">{name}</h4>
        <span className="text-gray-500 text-xs font-semibold">
          {cuisines.join(", ")}
        </span>
        <div>
          <div className="flex items-center gap-2 sm:gap-2">
            <div
              className={`text-white flex items-center gap-1 font-medium text-xs px-2 sm:px-1 ${
                avgRating < "4.0" ? "bg-orange-500" : "bg-green-600"
              }`}
            >
              <span className="text-sm">★</span>
              <span className="">{avgRating === "--" ? "4.2" : avgRating}</span>
            </div>
            <div></div>
            <span className="font-medium text-xs text-gray-500 ">
              {slaString}
            </span>
            <div>
              <span className="font-medium text-xs text-gray-500 ">
                {costForTwoString}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
