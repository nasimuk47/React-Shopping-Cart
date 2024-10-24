/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import payoutAnimation from "../../src/assets/payout-animation.json";

const Payout = () => {
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handlePlaceOrder = () => {
    if (orders.length === 0 || !address || !paymentMethod) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill out all fields and ensure there are orders to process.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Payout Successful",
      text: "Your orders have been processed for payout.",
    }).then(() => {
      localStorage.removeItem("orders");
      setOrders([]);
      setAddress("");
      setPaymentMethod("");
    });
  };

  if (orders.length === 0) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        No orders found!
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg rounded-lg mt-10 text-white">
      <h2 className="text-4xl font-bold mb-6">Payout</h2>

      {/* Lottie Animation */}
      <div className="mb-6 w-36 h-36 mx-auto">
        <Lottie
          animationData={payoutAnimation}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
        <ul className="list-disc list-inside text-white">
          {orders.map((order, idx) => (
            <li key={idx} className="text-sm">
              {order.title} - <span className="font-bold">${order.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Shipping Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 bg-white text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          placeholder="Enter your address"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 bg-white text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200 transform hover:scale-105"
      >
        Place Order
      </button>
    </div>
  );
};

export default Payout;
