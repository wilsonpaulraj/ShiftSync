// src/pages/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import backgroundImage from "/image.png";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col justify-between overflow-hidden">
      <div>
        <Navbar />
        <div
          className="h-128 bg-white bg-blend-multiply"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-128 w-1/2 flex-col bg-white p-20 pl-44">
            <h1 className="p-5 text-5xl font-bold">
              <span className="text-blue-800">Shift</span>
              <span className="italic text-blue-400">Sync</span>
              <span className="text-blue-400">!</span>
            </h1>
            <h2 className="px-5 text-2xl font-medium text-dark-text">
              "Synchronize Your Shifts, Simplify Your Work Life."
            </h2>
            <button
              className="my-10 ml-4 w-48 rounded bg-blue-500 p-2 px-6 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-900"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
