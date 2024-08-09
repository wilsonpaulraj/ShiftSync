// src/pages/ProfilePage.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  // Dummy user data. Replace with actual data from state or props
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow p-10">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="bg-blue-500 p-6 text-white">
            <h1 className="text-3xl font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="mt-1 text-lg">{user.role}</p>
          </div>
          <div className="p-6">
            <div className="mb-6 flex items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 text-3xl font-bold text-white">
                {/* Placeholder for user avatar */}
                {user.firstName[0]}
                {user.lastName[0]}
              </div>
              <div className="ml-6">
                <p className="text-xl font-semibold">{user.email}</p>
                <p className="text-lg">{user.phone}</p>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Contact Information
              </h2>
              <p className="text-lg">{user.address}</p>
            </div>
            <div className="mt-6 border-t border-gray-300 pt-6">
              <button
                className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700"
                onClick={() => alert("Edit Profile")}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
