// src/components/Notifications.jsx
import React from "react";

const notifications = [
  {
    message: "Your shift on 2024-08-05 has been approved.",
    date: "2024-08-01",
  },
  {
    message: "Time-off request for 2024-08-10 has been denied.",
    date: "2024-08-02",
  },
];

const Notifications = () => {
  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">Notifications</h1>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-64">{notification.message}</span>
            <span className="w-32">{notification.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
