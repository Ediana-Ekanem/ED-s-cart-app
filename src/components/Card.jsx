import React from "react";

const Card = ({ item, handleClick }) => {
  const { img, title, price, color } = item;
  return (
    <>
      <div className="mb-20 hover:shadow-lg p-5  w-full max-w-72 hover:border-gray-300  hover:scale-105 transition-transform rounded-lg">
        <div className="flex flex-col justify-center">
          <img src={img} alt="image" />
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-400">Color: {color}</p>
            <p className="text-gray-400 font-semibold">Price - {price}</p>
            <button
              className="bg-orange-500 text-white py-1 px-3 rounded font-semibold "
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
