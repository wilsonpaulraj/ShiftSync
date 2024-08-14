import React from "react";
import EmployeeManagement from "../Components/EmployeeManagement";
import ShiftManagement from "../Components/ShiftManagement";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import HelpMore from "../Components/Help";
import Reports from "../Components/Reports";
import ScheduleManagement from "../Components/ScheduleManagement";

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState("employee-list");

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden relative">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex border-t-2 border-white">
        <div className="flex min-h-screen w-1/6 flex-col items-start justify-start bg-slate-200 py-10">
          <div className="w-full border-b-2 px-10">
            <h1 className="text-2xl font-bold text-dark-text">Dashboard</h1>
          </div>
          <ul className="p-10">
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("employee-list");
                }}
              >
                Employee List
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("manage-shifts");
                }}
              >
                Manage Shifts
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button onClick={() => setActiveTab("schedule-management")}>
                Schedule
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button onClick={() => setActiveTab("reports")}>Reports</button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button onClick={() => setActiveTab("help-more")}>
                Help & More
              </button>
            </li>
          </ul>
        </div>
        <div className="w-5/6 overflow-y-scroll bg-white">
          {activeTab === "employee-list" && <EmployeeManagement />}
          {activeTab === "manage-shifts" && <ShiftManagement />}
          {activeTab === "schedule-management" && <ScheduleManagement />}
          {activeTab === "reports" && <Reports />}
          {activeTab === "help-more" && <HelpMore />}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
