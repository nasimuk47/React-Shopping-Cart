/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Category = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
        <h2 className="text-3xl font-semibold capitalize text-center my-6"></h2>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex-1 mb-4 md:mb-0 md:pr-4">
              <input
                type="search"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full sm:w-[400px] lg:w-[500px] bg-gray-50 border border-gray-300 text-gray-800 text-lg rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 shadow-md hover:shadow-lg"
              />
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
      <Footer></Footer>
    </div>
  );
};

export default Category;
