import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">GROW WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex flex-row justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">
            Fast, flexiable financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-medium text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platfroms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
