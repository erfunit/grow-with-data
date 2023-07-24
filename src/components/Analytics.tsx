import React from "react";

import Laptop from "../assets/laptop.jpg";

const Analytics: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4lx sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centerally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            omnis sequi architecto officiis id reiciendis reprehenderit iusto,
            veniam iure, sit, ipsam non excepturi ut nisi harum libero nihil
            dolor aut.
          </p>
          <button className="text-[#00df9a]  w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
