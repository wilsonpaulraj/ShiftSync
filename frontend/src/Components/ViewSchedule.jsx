// src/components/ViewSchedule.jsx
import React from "react";

const shifts = [
  {
    date: "2024-08-01",
    time: "09:00 - 17:00",
    location: "Office",
  },
  {
    date: "2024-08-02",
    time: "13:00 - 21:00",
    location: "Remote",
  },
];

const ViewSchedule = () => {
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
            <span className="w-44">{shift.time}</span>
            <span className="w-44">{shift.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSchedule;
