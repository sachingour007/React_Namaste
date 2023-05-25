import React from "react";
import homeImage from "../utils/image cover/hero_image.png";
import discountPNG from "../utils/image cover/Icons/discount.png";
import freshPNG from "../utils/image cover/Icons/fresh.png";
import deliveryPNG from "../utils/image cover/Icons/delivery.png";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            aliquam voluptatum vitae saepe quo expedita!
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
            <p className="">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 hover:shadow-lg hover:rounded-lg p-1">
          <img src={freshPNG} alt="discountImg" />
          <div>
            <h2>Fresh Healthy Food</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:mr-7 hover:shadow-lg hover:rounded-lg p-1">
          <img src={deliveryPNG} alt="discountImg" />
          <div>
            <h2>Fast Home Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
      <div className="border-[1px] border-gray-300"></div>
    </>
  );
};

export default Home;
