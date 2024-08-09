// src/components/Navbar.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HamburgerIcon from "./HamburgerIcon";
import { useLocation } from "react-router-dom";
import { clearUser } from "../Redux/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <nav
      className={`flex w-screen justify-between px-24 py-4 ${location.pathname !== "/" ? "bg-slate-200" : "bg-white"}`}
    >
      <ul className="flex items-center justify-center">
        <Link to="/">
          <li className="flex items-center justify-center pr-20">
            <img className="h-16 w-16" src="/logo.png" alt="logo" />
            <span className="text-2xl font-bold text-blue-900">Shift</span>
            <span className="text-2xl font-bold italic text-blue-400">
              Sync
            </span>
          </li>
        </Link>
        {location.pathname === "/" && (
          <li className="flex items-center justify-between">
            <h3 className="mx-5 text-2xl font-bold text-blue-950">Schedule</h3>
            <h3 className="mx-5 text-2xl font-bold text-blue-900">Features</h3>
            <h3 className="mx-5 text-2xl font-bold text-blue-900">Pricing</h3>
            <h3 className="mx-5 text-2xl font-bold text-blue-900">More</h3>
          </li>
        )}
      </ul>
      {!isAuthenticated && (
        <ul className="flex items-center justify-center">
          <li className="flex justify-between">
            <button
              className="mr-4 text-xl font-bold"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className="duration-1 00 ml-4 rounded bg-blue-500 p-2 px-6 text-xl font-bold text-white transition ease-in-out hover:bg-blue-900"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </button>
          </li>
        </ul>
      )}
      {isAuthenticated && (
        <ul className="relative flex items-center gap-4">
          <li>
            <FontAwesomeIcon
              icon={faBell}
              className={`text-2xl text-blue-800`}
            />
          </li>
          <li
            className={`relative flex h-10 items-center rounded-full border border-blue-600 px-4 md:h-12`}
          >
            <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
            <FaUserCircle className="ml-5 text-2xl text-blue-800" />
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <button
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                  onClick={(e) => {
                    navigate("/settings");
                  }}
                >
                  Settings
                </button>
              </div>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
