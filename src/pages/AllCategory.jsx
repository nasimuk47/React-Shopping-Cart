/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import Footer from "../components/Footer";
import productsData from "../../public/products.json";

const AllCategory = () => {
  const [jsonData, setJsonData] = useState(productsData);
  const [filteredItems, setFilteredItems] = useState(productsData);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const searchFiltered = jsonData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(searchFiltered);
  };

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
    if (!showSearch) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  };

  const hideSearchBar = () => {
    setShowSearch(false);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mt-2 container mx-auto xl:px-28 px-4 mb-12">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              {!showSearch ? (
                <div
                  onClick={toggleSearchBar}
                  className="p-2 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors duration-200"
                >
                  <FaSearch className="h-6 w-6" />
                </div>
              ) : (
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    onBlur={hideSearchBar}
                    onKeyDown={(e) => e.key === "Enter" && hideSearchBar()}
                    className="w-full sm:w-[400px] lg:w-[500px] bg-gray-50 border border-gray-300 text-gray-800 text-lg rounded-full pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-transform duration-300 transform scale-100 shadow-md hover:shadow-lg"
                    style={{ transition: "width 0.4s" }}
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-black p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-300 shadow-md">
                <FaFilter className="text-white h-5 w-5" />
              </div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-300 shadow-md"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          <Card filteredItems={filteredItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCategory;
