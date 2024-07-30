// src/components/ScheduleManagement.jsx
import React, { useState } from "react";

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([]);
  const [form, setForm] = useState({
    date: "",
    shift: "",
    employee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchedules([...schedules, form]);
    setForm({
      date: "",
      shift: "",
      employee: "",
    });
  };

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Manage Schedules
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="mb-4">
          <label className="block text-lg font-medium text-dark-text">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-dark-text">
            Shift
          </label>
          <select
            name="shift"
            value={form.shift}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2"
            required
          >
            <option value="" disabled>
              Select a shift
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-dark-text">
            Employee
          </label>
          <input
            type="text"
            name="employee"
            value={form.employee}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded bg-green-500 px-5 py-2 font-medium text-white"
        >
          Add Schedule
        </button>
      </form>
      <div>
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-44">{schedule.date}</span>
            <span className="w-44">{schedule.shift}</span>
            <span className="w-44">{schedule.employee}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManagement;
