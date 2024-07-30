import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import RequestTimeOff from "../Components/RequestTimeOff";
import ShiftSwapRequests from "../Components/ShiftSwapRequest";
import ViewSchedule from "../Components/ViewSchedule";
import PerformanceFeedback from "../Components/Feedbacks";
import AvailabilityManagement from "../Components/AvailabilityManagement";
import ProfileManagement from "../Components/EmployeeProfile";

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("view-schedule");

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex h-screen border-t-2 border-white">
        <div className="flex w-1/6 flex-col items-start justify-start bg-slate-200 py-10">
          <div className="w-full border-b-2 px-10">
            <h1 className="text-2xl font-bold text-dark-text">Dashboard</h1>
          </div>
          <ul className="p-10">
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("view-schedule");
                }}
              >
                View Schedule
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("request-time-off");
                }}
              >
                Request Time-Off
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("shift-swap-requests");
                }}
              >
                Shift Swap Requests
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("availability-management");
                }}
              >
                Availability
              </button>
            </li>
            <li className="py-4 text-xl font-medium text-dark-text">
              <button
                onClick={(e) => {
                  setActiveTab("feedback");
                }}
              >
                Feedbacks
              </button>
            </li>
          </ul>
        </div>
        <div className="w-5/6 bg-white p-5">
          {activeTab === "view-schedule" && <ViewSchedule />}
          {activeTab === "request-time-off" && <RequestTimeOff />}
          {activeTab === "shift-swap-requests" && <ShiftSwapRequests />}
          {activeTab === "availability-management" && (
            <AvailabilityManagement />
          )}
          {activeTab === "feedback" && <PerformanceFeedback />}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
