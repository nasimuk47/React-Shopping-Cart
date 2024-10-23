/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const selectedProduct = data.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  const { image, title, category, price, description, highlights, details } =
    product;

  // Handle adding product to the wishlist
  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isAlreadyInWishlist) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${title} has been added to your wishlist!`);
      navigate("/wishlist"); // Navigate to Wishlist route after adding
    } else {
      alert("This product is already in your wishlist!");
    }
  };

  return (
    <div className="mt-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 pt-8 text-gray-500">
        <Link to="/" className="hover:text-red-500 transition">
          Home
        </Link>
        <span className="text-gray-400"> / </span>
        <span className="font-semibold text-black">{title}</span>
      </div>

      <div className="p-6 lg:p-8 mt-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-gray-800 mb-3">
                {title}
              </h1>
              <p className="text-gray-600 text-md mb-4">{description}</p>
              <div className="text-2xl font-semibold text-red-500 mb-4">
                ${price}
              </div>

              {/* Highlights */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Highlights
              </h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-gray-600">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              {/* Quantity and Wishlist Section */}
              <div className="flex items-center justify-between space-x-4 mb-4">
                <div>
                  <label className="block font-medium mb-2 text-gray-700">
                    Quantity
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-4 w-20 focus:outline-none focus:border-red-500"
                    type="number"
                    defaultValue="1"
                    min="1"
                  />
                </div>

                {/* Wishlist Button */}
                <button
                  className="flex items-center justify-center py-2 px-4 bg-gray-200 text-gray-600 font-bold rounded-md shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
                  title="Add to Wishlist"
                  onClick={handleAddToWishlist}
                >
                  <FaRegHeart className="mr-2" />
                  <span>Wishlist</span>
                </button>
              </div>

              <button
                className="w-full flex items-center justify-center py-3 px-4 bg-red-500 text-white font-bold rounded-md shadow-md hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
                title="Confirm Order"
              >
                <span>Confirm Order</span>
                <FaArrowAltCircleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Additional Information */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Details</h2>
          <p className="text-sm text-gray-600">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
