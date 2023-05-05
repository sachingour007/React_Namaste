import React from "react";
import style from "./ResBody.module.css";
import { image } from "../constants/imageUrl";

const RestaurantCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className={style.card_main}>
      <img src={image + cloudinaryImageId} alt="pizza" />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h3>{lastMileTravelString}</h3>
    </div>
  );
};

export default RestaurantCards;
