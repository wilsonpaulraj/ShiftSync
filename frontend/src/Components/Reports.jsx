// src/components/Reports.jsx
import React from "react";

const Reports = () => {
  const reports = [
    {
      title: "Monthly Attendance",
      date: "2023-07-01",
      summary: "Summary of attendance for July 2023",
    },
    {
      title: "Shift Performance",
      date: "2023-07-01",
      summary: "Performance report for different shifts",
    },
  ];

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">Reports</h1>
      </div>
      <div>
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-44">{report.title}</span>
            <span className="w-44">{report.date}</span>
            <span className="w-96">{report.summary}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
