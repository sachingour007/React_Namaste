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
        <div className="m-5 flex justify-center flex-col min-h-[48vh]">
          <h2 className="font-semibold text-3xl text-red-600">Sorry !</h2>
          <h2 className="font-semibold text-3xl text-red-600">
            {" "}
            No items in Cart
          </h2>
        </div>
      ) : (
        <>
          <div className="-mt-7 bg-gradient-to-t from-white to-slate-100 flex flex-col items-center min-h-[60vh] ">
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
          <div className="">
            <div className="bg-white mx-auto w-3/4 my-4 md:w-2/4 flex flex-row  items-center justify-around border rounded-lg">
              <h2 className="font-bold">Total</h2>
              <p className="font-semibold">
                ₹
                {cartItems.reduce((total, { price, defaultPrice }) => {
                  return total + (price ? price : defaultPrice) / 100;
                }, 0)}
                /-
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
