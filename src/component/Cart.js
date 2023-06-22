import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartFoodDetails from "./CartFoodDetails";
import { clearCart } from "../utils/cartSlice";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="m-5 flex justify-center flex-col ">
          <h2 className="font-semibold text-3xl text-red-600">Sorry !</h2>
          <h2 className="font-semibold text-3xl text-red-600">
            {" "}
            No items in Cart
          </h2>
        </div>
      ) : (
        <div className="border-black border -mt-7 bg-gradient-to-t from-white to-slate-100 flex flex-col items-center ">
          <h1 className="self-start ml-5 mt-2 text-lg font-medium ">
            Cart Items :
            <span className="mx-3" onClick={() => clearCartHandler()}>
              <RemoveShoppingCartIcon fontSize="large" />
            </span>
          </h1>
          {cartItems.map((items) => {
            return <CartFoodDetails key={items.id} {...items} />;
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
