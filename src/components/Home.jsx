import React from "react";
import data from "../data";
import Card from "./Card";

const Home = ({ handleClick }) => {
  return (
    <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3  ms-20 mt-20 ">
      {data.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Home;
