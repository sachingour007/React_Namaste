import React, { useEffect, useState } from "react";
import { image } from "../../constants/imageUrl";
import { useParams } from "react-router-dom";
import LoaderShimmer from "../ShimmerUIBox/LoaderShimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodDetails = () => {
  const ParamId = useParams();
  const { id } = ParamId;
  const dispatch = useDispatch();

  const [cardsDetails, menuList] = useRestaurantMenu(id);
  console.log(menuList);
  console.log(cardsDetails);

  // if(!cardsDetails) return null;
  // if(!menuList) return null;

  const handleAddItem = (card) => {
    dispatch(addItem(card));
    console.log(card);
  };
  console.log(
    menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );

  return cardsDetails === null ? (
    <LoaderShimmer />
  ) : (
    <div className="w-3/4 mx-auto mb-4 ">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-medium">{cardsDetails.name}</h2>
          <h5 className="text-xs text-gray-500">
            {cardsDetails.cuisines.join(" , ")}
          </h5>
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

      {menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards === undefined ? (
        "No Data Found"
      ) : (
        <>
          <h1>
            Recommended (
            {
              menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                () => null
              ).length
            }
            )
          </h1>
          {menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (card) => {
              console.log(card);
              return (
                <div
                  className=" flex flex-col items-center sm:flex-row"
                  key={card?.card?.info?.id}
                >
                  <div className="w-3/4 mx-2 my-3 p-2">
                    <h2 className="text-lg font-semibold">
                      {card?.card?.info?.name}
                    </h2>
                    <h4 className="text-lg font-semibold">
                      {card?.card?.info?.price
                        ? "₹" + card?.card?.info?.price / 100
                        : "₹" + 150}
                    </h4>
                    <p className="text-justify text-gray-500 text-sm font-medium">
                      {card?.card?.info?.description}
                    </p>
                  </div>
                  <div className="sm:w-1/4 flex justify-center flex-col mx-2 my-3 p-2 relative ">
                    <img
                      className="w-40 sm:w-32 h-24 rounded self-center object-cover"
                      src={image + card?.card?.info?.imageId}
                      alt=""
                    />
                    <button
                      className="text-green-500 font-semibold text-lg border self-center px-6 py-1 rounded-lg bg-white absolute -bottom-3"
                      onClick={() => handleAddItem(card?.card?.info)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </>
      )}
    </div>
  );
};
export default FoodDetails;
