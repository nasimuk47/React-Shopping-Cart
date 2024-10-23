/* eslint-disable no-unused-vars */
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2 overflow-hidden border-r-4 border-gray-300">
          <img
            src="../../../public/banner--2_upscaled.jpg"
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full object-cover rounded-tl-[140px] rounded-br-[100px] shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore ans shop many differnt collection from various
            barands here.
          </p>
          <Link to="/category">
            <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
              <FaShoppingBag className="inline-flex" /> Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
