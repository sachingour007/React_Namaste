import React from "react";
import homeImage from "../assets/image cover/hero_image.png";
import discountPNG from "../assets/image cover/Icons/discount.png";
import freshPNG from "../assets/image cover/Icons/fresh.png";
import deliveryPNG from "../assets/image cover/Icons/delivery.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 m-5">
        <div className="">
          <img className="" src={homeImage} alt="Home Image" />
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="bg-green-600 self-start py-1 px-2 text-white">
            50% Off on All Products
          </div>
          <h1 className="text-6xl leading-1 font-medium">
            Enjoy Your Delicious Food
          </h1>
          <p>
          Money won’t be able to buy happiness, but it can get you this delicious meal instead.
          </p>
          <button className="bg-orange-400 self-start py-2 px-3 border-none hover:bg-orange-6 00 ">
            Explore Now
          </button>
        </div>
      </div>
      <section className="mt-12 mx-4 flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-5 md:justify-center gap-5 mb-10 ">
        <div className="flex items-center gap-4 md:ml-7 hover:shadow-lg hover:rounded-lg p-1">
          <img src={discountPNG} alt="discountImg" />
          <div>
            <h2>Discount Voucher</h2>
            <p className="">Grab 50% Off & free Delivery.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 hover:shadow-lg hover:rounded-lg p-1">
          <img src={freshPNG} alt="discountImg" />
          <div>
            <h2>Fresh Healthy Food</h2>
            <p>Healthy eating is a way of life.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:mr-7 hover:shadow-lg hover:rounded-lg p-1">
          <img src={deliveryPNG} alt="discountImg" />
          <div>
            <h2>Fast Home Delivery</h2>
            <p>Food that is delivered at the right time.</p>
          </div>
        </div>
      </section>
      <div className="border-[1px] border-gray-300"></div>
    </>
  );
};

export default Home;
