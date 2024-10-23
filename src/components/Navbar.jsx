/* eslint-disable no-unused-vars */
import React, { useState, useContext, useRef, useEffect } from "react";
import { FaBars, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";
import logo from "../assets/Nav-Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  return (
    <header className="bg-white shadow-md w-full z-50 top-0 left-0 right-0">
      <nav className="flex justify-between items-center container mx-auto px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-28 h-12 object-contain" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-500 transition">
            Home
          </NavLink>
          <NavLink to="/category" className="hover:text-blue-500 transition">
            Category
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500 transition">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500 transition">
            Contact Us
          </NavLink>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="h-10 w-10 rounded-full border-2 border-blue-500 cursor-pointer"
                onClick={toggleProfileMenu}
              />
              {isProfileMenuOpen && (
                <div
                  ref={profileMenuRef}
                  className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-40 py-2"
                >
                  <Link to="orderlist">
                    <button className="block w-full text-left text-gray-700 px-4 py-2 hover:bg-blue-500 hover:text-white transition">
                      Order List
                    </button>
                  </Link>
                  <Link to="wishlist">
                    <button className="block w-full text-left text-gray-700 px-4 py-2 hover:bg-blue-500 hover:text-white transition">
                      Wishlist
                    </button>
                  </Link>
                  <button
                    onClick={logOut}
                    className="block w-full text-left text-gray-700 px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login">
              <div className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition">
                <FaUser />
                <span>Sign in</span>
              </div>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 text-gray-800" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                className="text-lg hover:text-blue-400 transition"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-lg hover:text-blue-400 transition"
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg hover:text-blue-400 transition"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-lg hover:text-blue-400 transition"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <button
                    onClick={() => {
                      alert("Navigate to Order List");
                      toggleMenu();
                    }}
                    className="text-lg text-blue-500 underline hover:text-blue-400 transition"
                  >
                    Order List
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      alert("Navigate to Wishlist");
                      toggleMenu();
                    }}
                    className="text-lg text-blue-500 underline hover:text-blue-400 transition"
                  >
                    Wishlist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logOut();
                      toggleMenu();
                    }}
                    className="text-lg text-blue-500 underline hover:text-blue-400 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="text-lg hover:text-blue-400 transition"
                  onClick={toggleMenu}
                >
                  Account
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
