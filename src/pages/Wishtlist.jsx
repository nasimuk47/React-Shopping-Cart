/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this product from your wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter((product) => product.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        Swal.fire(
          "Removed!",
          "Product has been removed from your wishlist.",
          "success"
        );
      }
    });
  };

  if (wishlist.length === 0) {
    return <div className="text-center mt-10">Your wishlist is empty!</div>;
  }

  return (
    <div className="mt-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center transition hover:shadow-xl transform hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <div className="text-center">
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {product.title}
              </h2>
              <p className="text-red-500 font-semibold text-lg mb-2">
                ${product.price}
              </p>
            </div>

            <div className="flex justify-between items-center space-x-4 mt-4 w-full">
              <Link
                to={`/product/${product.id}`}
                className="flex items-center justify-center py-2 px-3 w-10 h-10 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
                title="View Product"
              >
                <FaEye className="w-5 h-5" />
              </Link>

              <button
                className="flex items-center justify-center py-2 px-3 w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300"
                title="Remove from Wishlist"
                onClick={() => handleRemoveFromWishlist(product.id)}
              >
                <MdDelete className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
