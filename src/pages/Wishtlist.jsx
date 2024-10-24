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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold">Product</th>
              <th className="py-2 px-4 text-left font-semibold">Price</th>
              <th className="py-2 px-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 border-b border-gray-200"
              >
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="ml-4 font-semibold text-gray-800">
                    {product.title}
                  </span>
                </td>
                <td className="py-4 px-4 font-semibold text-red-500">
                  ${product.price}
                </td>
                <td className="py-4 px-4 flex space-x-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    title="View Product"
                  >
                    <FaEye className="mr-1" />
                  </Link>
                  <button
                    className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                    title="Remove from Wishlist"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    <MdDelete className="mr-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
