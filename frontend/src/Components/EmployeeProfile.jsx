// src/components/ProfileManagement.jsx
import React, { useState } from "react";

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile in the backend
    console.log("Profile updated:", profile);
  };

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Profile Management
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="firstName">
            First Name
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="phone">
            Phone
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center p-10">
          <button
            type="submit"
            className="rounded bg-blue-600 px-10 py-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-900"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileManagement;
