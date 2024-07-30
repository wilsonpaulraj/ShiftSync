// src/components/ShiftSwapRequests.jsx
import React, { useState } from "react";

const swapRequests = [
  {
    date: "2024-08-05",
    time: "09:00 - 17:00",
    reason: "Doctor's appointment",
  },
  {
    date: "2024-08-10",
    time: "13:00 - 21:00",
    reason: "Family event",
  },
];

const ShiftSwapRequests = () => {
  const [requests, setRequests] = useState(swapRequests);

  const handleRequest = (index) => {
    // Handle the swap request
    console.log("Shift swap requested:", requests[index]);
  };

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Shift Swap Requests
        </h1>
      </div>
      <div>
        {requests.map((request, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-44">{request.date}</span>
            <span className="w-44">{request.time}</span>
            <span className="w-64">{request.reason}</span>
            <button
              onClick={() => handleRequest(index)}
              className="rounded bg-blue-600 px-5 py-2 font-medium text-white"
            >
              Request Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiftSwapRequests;
