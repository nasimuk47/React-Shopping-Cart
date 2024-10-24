/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Orderlist = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    Swal.fire({
      icon: "success",
      title: "Order Deleted",
      text: "The order has been removed from your list.",
    });
  };

  if (orders.length === 0) {
    return (
      <div className="text-center text-4xl font-bold mt-10">
        No orders found!
      </div>
    );
  }

  return (
    <div className="mt-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Order List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center bg-white shadow-lg rounded-lg p-6 space-x-4"
          >
            <img
              src={order.image}
              alt={order.title}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {order.title}
                </h2>
                <p className="text-red-500 font-semibold text-lg">
                  ${order.price}
                </p>
              </div>

              <button
                onClick={() => handleDelete(order.id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/payout">
          <button className="py-3 px-6 bg-green-500 text-white font-bold rounded-md shadow-lg hover:bg-green-600 transition duration-300">
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Orderlist;
