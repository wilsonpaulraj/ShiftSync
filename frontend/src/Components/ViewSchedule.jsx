import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewSchedule = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    // Fetch shifts from the backend
    const fetchShifts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/shifts/");
        setShifts(response.data);
      } catch (error) {
        console.error("Error fetching shifts:", error);
      }
    };

    fetchShifts();
  }, []);

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Upcoming Shifts
        </h1>
      </div>
      <div>
        {shifts.map((shift, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-44">{shift.date}</span>
            <span className="w-44">{shift.startTime} - {shift.endTime}</span>
            <span className="w-44">{shift.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSchedule;
