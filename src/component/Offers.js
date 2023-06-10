import React from "react";
import OfferImage from "../assets/Offersimage/paula-vermeulen-URjZkhqsuBk-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();
  return (
    <section className="-mt-7">
      <div className="relative">
        <img className="object-contain" src={OfferImage} alt="offerImg" />
        <div className="absolute md:w-2/4 md:p-3 flex flex-col  justify-center top-2 right-2 text-white leading-4 sm:right-8 sm:top-6">
          <h1 className="text-4xl font-bold font-mono md:text-5xl mb-2 ">Comming Soon !</h1>
          <p className="text-lg font-light font-mono md:text-xl mb-2">This page is under construction</p>
          <button className="text-lg font-light font-mono self-start border-gray-300 border px-2 py-1 rounded-md mt-2" onClick={() => navigate("/")}>GO HOME</button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
