/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12">
        We’d love to hear from you! Please fill out the form below, and we’ll
        get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4 text-gray-700">
            <strong>Email:</strong> support@example.com
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>

          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-facebook-square"></i> {/* Facebook icon */}
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-twitter-square"></i> {/* Twitter icon */}
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-instagram-square"></i> {/* Instagram icon */}
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
