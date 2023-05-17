import React from "react";
import HomeBGImage from "../utils/image cover/pexels-cats-coming-1907227.jpg"
import Header from "./Header/Header";

const Home = () => {
    return (
        <div className="w-full h-full mx-auto ">
            <Header/>
            <div className="relative w-full h-96 bg-black">
               <img className="w-full h-full mx-24" src={HomeBGImage} alt="bgImage" />

               <div className="absolute bottom-2/4 left-10 ">
               <h2 className="text-orange-400 text-xs">Discover Your Teste</h2>
               <h1 className="text-orange-400 text-1xl font-medium">We belive good food offer <br /> Greate smile</h1>
                </div>
            </div>
            hello
        </div>
    );
}

export default Home;