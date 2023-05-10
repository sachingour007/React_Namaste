import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderShimmer from "../ShimmerUIBox/LoaderShimmer";

const FoodDetails = () => {
  const ParamId = useParams();
  const { id } = ParamId;
  const [cardsDetails, setCardDetails] = useState(null);

  useEffect(() => {
    getRestroInfo();
  }, []);

  const getRestroInfo = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=${id}&submitAction=ENTER`
    );
    const data = await res.json();
    setCardDetails(data?.data?.cards[0]?.card?.card?.info);

    // console.log(data.data.cards);
  };
  if(!cardsDetails) return null;

  return cardsDetails === null ? (
    <LoaderShimmer />
  ) : (
    <div>
      <h2>{cardsDetails.name}</h2>
      <h5>{cardsDetails.cuisines}</h5>
      <p>{cardsDetails.areaName + " " + cardsDetails.avgRatingString + "km"}</p>
      <h1>Restrarent ID : {cardsDetails.id}</h1>
      <h3>Namster</h3>
    </div>
  );
};
export default FoodDetails;
