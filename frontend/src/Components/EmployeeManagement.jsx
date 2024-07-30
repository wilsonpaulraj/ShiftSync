import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../Redux/employeeSlice";

const EmployeeManagement = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEmployees());
    }
  }, [status, dispatch]);

  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    dispatch(addEmployee(newEmployee));
    setNewEmployee({ firstName: "", lastName: "", email: "", role: "" });
  };

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEditEmployee = (employee) => {
    const updatedEmployee = { ...employee, role: "updatedRole" };
    dispatch(updateEmployee(updatedEmployee));
  };

  return (
    <div className="h-full w-full bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add new Employee
        </h1>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={handleAddEmployee}
        >
          Add Employee
        </button>
      </div>
      <div className="mt-8">
        <div className="mt-4 rounded bg-white p-4 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="lastName"
              value={newEmployee.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="email"
              name="email"
              value={newEmployee.email}
              onChange={handleChange}
              placeholder="Email"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="role"
              value={newEmployee.role}
              onChange={handleChange}
              placeholder="Role"
              className="rounded border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 min-h-96 rounded bg-white p-4 shadow-md">
        <h2 className="text-2xl font-semibold">Employee List</h2>
        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>{error}</div>}
        <div className="divide-y divide-gray-300">
          {employees.map((employee, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex-1">
                <span className="font-medium text-gray-700">
                  {employee.firstName} {employee.lastName}
                </span>
                <span className="ml-4 text-gray-500">{employee.email}</span>
              </div>
              <span className="mr-4 text-gray-600">{employee.role}</span>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleEditEmployee(employee)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDeleteEmployee(employee.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
