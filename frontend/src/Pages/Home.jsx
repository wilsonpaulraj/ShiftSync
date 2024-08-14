// src/pages/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col justify-between overflow-hidden bg-slate-100">
      <div>
        <Navbar />
        <div className="flex h-128 px-40 py-10 bg-blend-multiply">
          <div className="flex h-128 w-1/2 flex-col py-20">
            <h2 className="mb-2 text-4xl font-bold text-light-text">
              <span className="text-5xl">S</span>ynchronize your shifts
              <br></br>
            </h2>
            <h2 className="mb-5 text-4xl font-bold text-light-text">
              <span className="ml-16">Simplify your Work Life !</span>
            </h2>
            <h3 className="mb-4 mt-8 w-128 text-lg text-gray-700">
              Discover the pinnacle of staff scheduling —— Try out the best app
              on the market today
            </h3>
            <button
              className="text-md w-48 rounded bg-blue-500 p-2 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700"
              onClick={() => {
                navigate("/signup");
              }}
            >
              GET STARTED
            </button>
          </div>
          <div className="h-full w-1/2">
            <img src="/sticky-notes-1.svg" className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
