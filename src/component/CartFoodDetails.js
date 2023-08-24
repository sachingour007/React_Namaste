import React from "react";
import { image } from "../constants/imageUrl";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartFoodDetails = ({ imageId, id, name, price, defaultPrice}) => {
  const dispatch = useDispatch();

  const cartRemoveHandler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="bg-white m w-3/4 my-4 md:w-2/4 flex items-center justify-center border rounded-lg">
      <div className="w-36 ">
        <img
          className="p-2 rounded-xl object-cover"
          src={image + imageId}
          alt=""
        />
      </div>
      <div className="flex-1 p-2 m-2">
        <h1 className="text-2xl font-bold text-center m-2">{name}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-around justify-center items-center">
          <div className="p-2 text-lg font-bold">{price ? `₹${price / 100}` : `₹${defaultPrice / 100}`} </div>
          <button
            className="border bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-bold"
            onClick={() => cartRemoveHandler(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFoodDetails;
