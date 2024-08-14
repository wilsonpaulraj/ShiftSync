import React, { useState, useEffect } from "react";
import axios from "axios";

const ScheduleManagement = () => {
  const [shifts, setShifts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({
    shiftId: "",
    employeeId: "",
  });

  // Fetch shifts and employees on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shiftsResponse = await axios.get("http://localhost:8000/shifts/");
        const employeesResponse = await axios.get("http://localhost:8000/employees/");
        const assigns = await axios.get("http://localhost:8080/assignments");
        setAssignments(assigns.data);
        console.log(shiftsResponse)
        console.log(employeesResponse)
        
        if (shiftsResponse.status === 200) {
          setShifts(shiftsResponse.data);
        } else {
          console.error("Failed to fetch shifts.");
        }
        
        if (employeesResponse.status === 200) {
          setEmployees(employeesResponse.data);
        } else {
          console.error("Failed to fetch employees.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const saveAssignments =  async (e) => {
    try{
    const response = await axios.post("http://localhost:8080/assignments", form);
    }
    catch(err){
      console.log(err)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      shiftId: form.shiftId,
      employeeId: form.employeeId,
    };
    setAssignments([...assignments, newAssignment]);
    setForm({
      shiftId: "",
      employeeId: "",
    });
  };

  // const getEmployeeName = (employeeId) => {
  //   const employee = employees.find((emp) => emp.id === employeeId);
  //   return employee ? employee.employeeID : "Unknown";
  // };

  // const getShiftDetails = (shiftId) => {
  //   const shift = shifts.find((sh) => sh.id === shiftId);
  //   return shift ? `${shift.date} (${shift.startTime} - ${shift.endTime})` : "Unknown";
  // };

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">
          Assign Employees to Shifts
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="mb-4">
          <label className="block text-lg font-medium text-dark-text">
            Shift
          </label>
          <select
            name="shiftId"
            value={form.shiftId}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2"
            required
          >
            <option value="" disabled>
              Select a shift
            </option>
            {shifts.map((shift) => (
              <option key={shift.id} value={`${shift.date} (${shift.startTime} - ${shift.endTime})`}>
                {`${shift.date} (${shift.startTime} - ${shift.endTime})`}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-dark-text">
            Employee
          </label>
          <select
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2"
            required
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employees.map((employee) => (
              <option key={employee.employeeID} value={employee.employeeID}>
                {employee.employeeID}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded bg-green-500 px-5 py-2 font-medium text-white"
          onClick={saveAssignments}
        >
          Assign
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold text-dark-text mb-4">
          Assignments
        </h2>
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-44">
              {assignment.shiftId}
            </span>
            <span className="w-44">
              {assignment.employeeId}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManagement;
