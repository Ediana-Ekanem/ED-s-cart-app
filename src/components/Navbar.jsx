import React from "react";
import { IoLogoAngular } from "react-icons/io";
import { FcLike } from "react-icons/fc";

const Navbar = ({ size, setShowModal }) => {
  return (
    <div className="flex  justify-between items-center  px-5 md:px-[100px] shadow-xl h-24  sticky top-0 z-20  bg-white">
      <div className="flex items-center gap-1 ">
        <span>
          <IoLogoAngular className=" text-orange-500 " size={30} />
        </span>
        <span className="font-semibold text-xl">ED's Shoe Collection</span>
      </div>

      <div className="flex gap-2 items-center">
        <div className="grid place-items-center w-[40px] h-[40px] border border-gray-200 rounded-full bg-pink-50">
          <FcLike className=" text-blue-500" size={20} />
        </div>
        <div
          className="grid place-items-center w-[40px] h-[40px] border border-gray-300 rounded-full relative"
          onClick={() => setShowModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            role="img"
            className="icon "
          >
            <path
              d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className=" text-[18px] text-red-500 font-bold absolute bottom-5 left-7  ">
            {size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
