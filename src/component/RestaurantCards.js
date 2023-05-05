import React from "react";
import style from "./ResBody.module.css";

const RestaurantCards = () => {
  return (
    <div className={style.card_main}>
      <img
        src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*"
        alt="pizza"
      />
      <h2>Rominus Pizza & Burger</h2>
      <h4>Italian-American, Pizzas</h4>
      <h3>4.1 Satr</h3>
    </div>
  );
};

export default RestaurantCards;
