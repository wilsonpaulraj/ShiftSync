import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  fetchShifts,
  addShift,
  updateShift,
  deleteShift,
} from "../Redux/shiftSlice";

const ShiftManagement = () => {
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shifts.shifts);
  const status = useSelector((state) => state.shifts.status);
  const error = useSelector((state) => state.shifts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShifts());
    }
  }, [status, dispatch]);

  const [newShift, setNewShift] = useState({
    date: "",
    time: "",
    location: "",
    staffRequired: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShift({ ...newShift, [name]: value });
  };

  const handleAddShift = () => {
    dispatch(addShift(newShift));
    setNewShift({ date: "", time: "", location: "", staffRequired: "" });
  };

  const handleDeleteShift = (id) => {
    dispatch(deleteShift(id));
  };

  const handleEditShift = (shift) => {
    const updatedShift = { ...shift, location: "updatedLocation" }; // Update as needed
    dispatch(updateShift(updatedShift));
  };

  return (
    <div className="h-screen w-full bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add a new Shift
        </h1>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={handleAddShift}
        >
          Add Shift
        </button>
      </div>
      <div className="mt-8">
        <div className="mt-4 rounded bg-white p-4 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="date"
              name="date"
              value={newShift.date}
              onChange={handleChange}
              placeholder="Date"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="time"
              value={newShift.time}
              onChange={handleChange}
              placeholder="Time"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="location"
              value={newShift.location}
              onChange={handleChange}
              placeholder="Location"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="number"
              name="staffRequired"
              value={newShift.staffRequired}
              onChange={handleChange}
              placeholder="Staff Required"
              className="rounded border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 rounded bg-white p-4 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Shift List</h2>

        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>{error}</div>}
        <div className="divide-y divide-gray-300">
          {shifts.map((shift, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex-1">
                <span className="font-medium text-gray-700">
                  {shift.date} - {shift.time}
                </span>
                <span className="ml-4 text-gray-500">{shift.location}</span>
              </div>
              <span className="mr-4 text-gray-600">
                {shift.staffRequired} Staff
              </span>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleEditShift(shift)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDeleteShift(shift.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftManagement;
