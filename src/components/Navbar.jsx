/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* Search Icon */}
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />

        {/* Store Name */}
        <Link to="/" className="">
          <div className="text-2xl text-gray-600 font-bold">
            e-commerce store
          </div>
        </Link>

        {/* Account and Shopping Button */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="h-10 rounded-full"
              />

              <button
                onClick={logOut}
                className="text-blue-500 underline block mx-auto"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/Login">
              <div className="flex justify-center items-center">
                <FaUser className="text-blue-500"></FaUser>
                <button className="bg-white-500 text-blue-500 px-3 py-1 rounded-md ml-2">
                  Account
                </button>
              </div>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* Nav Items for Desktop */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Items */}
      <div className="text-center">
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {/* Display user profile in mobile menu */}
          {user ? (
            <>
              <div className="flex justify-center mb-2">
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full mx-auto"
                />
              </div>
              <span className="text-blue-500 underline block mb-2">
                {user.displayName}
              </span>
              <button
                onClick={logOut}
                className="text-blue-500 underline block mx-auto"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/Login">
              <div className="flex justify-center items-center">
                <FaUser className="text-blue-500"></FaUser>
                <button className="bg-white-500 text-blue-500 px-3 py-1 rounded-md ml-2">
                  Account
                </button>
              </div>
            </NavLink>
          )}

          {/* Mobile Nav Items */}
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className=" hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to={path} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
