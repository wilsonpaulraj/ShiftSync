// src/components/PerformanceFeedback.jsx
import React from "react";

const feedback = [
  {
    date: "2024-08-01",
    content: "Great job on the recent project! Your dedication is appreciated.",
  },
  {
    date: "2024-08-15",
    content: "You need to improve your punctuality for morning shifts.",
  },
];

const PerformanceFeedback = () => {
  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Performance Feedback
        </h1>
      </div>
      <div>
        {feedback.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col border-b-2 border-slate-800 p-5"
          >
            <span className="w-32 text-gray-500">{item.date}</span>
            <p className="mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceFeedback;
