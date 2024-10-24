/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isAlreadyInWishlist) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: `${title} has been added to your wishlist!`,
      }).then(() => navigate("/wishlist"));
    } else {
      Swal.fire({
        icon: "info",
        title: "Already in Wishlist",
        text: "This product is already in your wishlist!",
      });
    }
  };

  const handleAddToOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const isAlreadyOrdered = orders.some((item) => item.id === product.id);

    if (!isAlreadyOrdered) {
      orders.push(product);
      localStorage.setItem("orders", JSON.stringify(orders));
      Swal.fire({
        icon: "success",
        title: "Order Confirmed",
        text: `${title} has been added to your orders!`,
      }).then(() => navigate("/orderlist"));
    } else {
      Swal.fire({
        icon: "info",
        title: "Already in Orders",
        text: "This product is already in your orders!",
      });
    }
  };

  return (
    <div className="mt-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 pt-8 text-gray-500">
        <Link to="/" className="hover:text-red-500 transition">
          Home
        </Link>
        <span className="text-gray-400"> / </span>
        <span className="font-semibold text-black">{title}</span>
      </div>

      <div className="p-6 lg:p-8 mt-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-gray-800 mb-3">
                {title}
              </h1>
              <p className="text-gray-600 text-md mb-4">{description}</p>
              <div className="text-2xl font-semibold text-red-500 mb-4">
                ${price.toFixed(2)}
              </div>

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
              <button
                className="flex items-center justify-center py-2 px-4 bg-gray-200 text-gray-600 font-bold rounded-md shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 mb-4"
                title="Add to Wishlist"
                onClick={handleAddToWishlist}
              >
                <FaRegHeart className="mr-2" />
                <span>Wishlist</span>
              </button>

              <button
                className="w-full flex items-center justify-center py-3 px-4 bg-red-500 text-white font-bold rounded-md shadow-md hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
                title="Confirm Order"
                onClick={handleAddToOrder}
              >
                <span>Confirm Order</span>
                <FaArrowAltCircleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Details</h2>
          <p className="text-sm text-gray-600">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
