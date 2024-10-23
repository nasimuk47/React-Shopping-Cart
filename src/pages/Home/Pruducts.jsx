/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData.slice(0, 8)
        : jsonData.filter((item) => item.category === category).slice(0, 8);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

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

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Featured Products
      </h2>

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              onClick={() => filterItems("all")}
              className={`px-3 py-1 text-sm rounded-sm transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white"
              }`}
            >
              All Products
            </button>

            <button
              onClick={() => filterItems("Dress")}
              className={`px-3 py-1 text-sm rounded-sm transition-all duration-300 ${
                selectedCategory === "Dress"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white"
              }`}
            >
              Clothing
            </button>

            <button
              onClick={() => filterItems("Hoodies")}
              className={`px-3 py-1 text-sm rounded-sm transition-all duration-300 ${
                selectedCategory === "Hoodies"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white"
              }`}
            >
              Hoodies
            </button>

            <button
              onClick={() => filterItems("Bag")}
              className={`px-3 py-1 text-sm rounded-sm transition-all duration-300 ${
                selectedCategory === "Bag"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white"
              }`}
            >
              Bag
            </button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2 ">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default"> Default</option>
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
  );
};

export default Products;
