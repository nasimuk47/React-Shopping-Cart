/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./../components/Footer";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="relative bg-cover bg-center h-64 rounded-lg mb-12 flex items-center justify-center shadow-xl"
          style={{
            backgroundImage: `url('/public/images/contact.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 opacity-80 rounded-lg"></div>
          <h1 className="relative text-5xl font-extrabold text-gray-300 text-center">
            Contact Us
          </h1>
        </div>

        <p className="text-center text-gray-700 mb-12 text-lg">
          We’d love to hear from you! Please fill out the form below, and we’ll
          get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-2xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-md hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white shadow-2xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Contact Information
            </h2>
            <p className="mb-4 text-gray-700">
              <strong>Email:</strong> support@silksage.com
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh
            </p>

            <h3 className="text-xl font-bold mb-4 text-blue-600">Follow Us</h3>
            <div className="flex space-x-4 text-3xl">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition duration-200"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transform hover:scale-110 transition duration-200"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-600 transform hover:scale-110 transition duration-200"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-800 transform hover:scale-110 transition duration-200"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
