// src/components/AvailabilityManagement.jsx
import React, { useState } from "react";

const AvailabilityManagement = () => {
  const [availability, setAvailability] = useState({
    startDate: "",
    endDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvailability({ ...availability, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the availability to the backend
    console.log("Availability Updated:", availability);
  };

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Availability Management
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="date"
            name="startDate"
            value={availability.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="endDate">
            End Date
          </label>
          <input
            className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
            type="date"
            name="endDate"
            value={availability.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="notes">
            Notes
          </label>
          <textarea
            className="h-32 w-96 rounded border border-slate-600 p-5 outline-none"
            name="notes"
            value={availability.notes}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center p-10">
          <button
            type="submit"
            className="rounded bg-blue-600 px-10 py-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-900"
          >
            Update Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default AvailabilityManagement;
