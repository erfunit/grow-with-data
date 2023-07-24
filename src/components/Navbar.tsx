import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <header className="text-white flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">HOME</li>
        <li className="p-4">COMPANY</li>
        <li className="p-4">RESOURCES</li>
        <li className="p-4">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className={`rounded-full active:scale-50 transition-all active:bg-white/25 p-3 block md:hidden ${
          nav ? "rotate-180" : ""
        }`}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 transition-all ease-in-out duration-300 top-0 w-[60%] h-full border-r bg-[#000300] border-gray-900"
            : "fixed left-[-100%] transition-all ease-in-out duration-300 top-0 w-[60%] h-full border-r bg-[#000300] border-gray-900"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">COMPANY</li>
          <li className="p-4 border-b border-gray-600">RESOURCES</li>
          <li className="p-4 border-b border-gray-600">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
