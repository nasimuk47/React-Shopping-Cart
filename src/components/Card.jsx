/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-12 shadow-sm">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center w-full"
        >
          <Link to={`/product/${item.id}`}>
            <div className="w-full h-[250px] overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </Link>
          <div className="mt-4 px-4 text-center">
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between w-full">
              <p className="text-black/50 capitalize">{item.category}</p>
              <p className="font-semibold">${item.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
