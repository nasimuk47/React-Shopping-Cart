/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Featured Posts */}
      <div className="text-center mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Top E-commerce Strategies",
            image: "/images/E-Commerce-Marketing-Strategy.jpg",
          },
          {
            title: "Mastering Product Marketing",
            image: "/images/product-marketing.jfif",
          },
          {
            title: "Digital Tools You Need",
            image: "/images/digital-tools.jfif",
          },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div
              className="h-48 bg-cover bg-center rounded-lg mb-4 border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url('${post.image}')` }}
            >
              <div className="bg-gradient-to-b from-transparent to-gray-900 opacity-70 h-full rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              Stay ahead with these must-read strategies.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Popular Categories */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explore by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "E-commerce",
            "Marketing",
            "Product Reviews",
            "Guides",
            "Industry News",
          ].map((category, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:bg-gradient-to-l transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Posts</h2>
        <p className="text-gray-500 mb-6">
          Dive into our newest content to stay updated.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Building Brand Loyalty",
            image: "/images/brand-loyalty.jfif",
          },
          {
            title: "Essentials of SEO",
            image: "/images/seo-basics.jfif",
          },
          {
            title: "Customer Experience",
            image: "/images/customer-experience.jfif",
          },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div
              className="h-48 bg-cover bg-center rounded-lg mb-4 border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url('${post.image}')` }}
            >
              <div className="bg-gradient-to-b from-transparent to-gray-900 opacity-70 h-full rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how to grow your brand with customer-centric strategies.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-100 rounded-lg p-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates, insights, and trends straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md font-semibold hover:bg-gradient-to-l transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
