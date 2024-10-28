/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-white py-12 xl:px-28 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/tamara-bellis-U2ymajzuqFk-unsplash.jpg"
          alt="Collection Banner"
          className="object-cover w-full h-[650px] opacity-70"
        />
      </div>
      <div className="relative z-10 py-28 flex flex-col md:flex-row justify-between items-center gap-14">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="md:w-1/2 overflow-hidden rounded-lg shadow-lg"
        >
          <motion.img
            src="/banner--2_upscaled.jpg"
            alt="Collection Banner"
            loading="lazy"
            className="mx-auto w-[480px] h-[400px] object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </Tilt>

        <motion.div
          className="md:w-1/2 w-full text-black"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl text-gray-600 font-semibold mb-5 drop-shadow-md">
            Elevate Your Style
          </h1>
          <p className="text-lg text-gray-600 mb-7 max-w-md">
            Discover exclusive collections that reflect your unique taste.
          </p>

          <Link to="/category">
            <motion.button
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 text-white font-bold flex gap-2 items-center rounded-sm shadow-md transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShoppingBag className="inline-flex" /> Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
