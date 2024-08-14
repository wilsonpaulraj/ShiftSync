import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    // Sample data to simulate initial employee list
    { id: 1, employeeID: "Emp0031", employeeRole: "Developer", firstName: "Wilson", department: "Engineering" },
    { id: 2, employeeID: "Emp0029", employeeRole: "Designer", firstName: "Paulraj ", department: "Design" }
  ]);
  const [newEmployee, setNewEmployee] = useState({
    employeeID: "",
    employeeRole: "",
    firstName: "",
    department: "",
  });
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;
    const employeeData = {
      ...newEmployee,
      id: newId
    };
    setEmployees([...employees, employeeData]);
    setNewEmployee({
      employeeID: "",
      employeeRole: "",
      firstName: "",
      department: "",
    });
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee({
      employeeID: employee.employeeID,
      employeeRole: employee.employeeRole,
      firstName: employee.firstName,
      department: employee.department,
    });
  };

  const handleUpdateEmployee = () => {
    const updatedEmployees = employees.map(emp =>
      emp.id === editingEmployee.id ? { ...emp, ...newEmployee } : emp
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null);
    setNewEmployee({
      employeeID: "",
      employeeRole: "",
      firstName: "",
      department: "",
    });
  };

  const handleDeleteEmployee = (id) => {
    const filteredEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="h-full w-full bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          {editingEmployee ? "Edit Employee" : "Add New Employee"}
        </h1>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
        >
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>
      </div>
      <div className="mt-8">
        <div className="mt-4 rounded bg-white p-4 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="employeeID"
              value={newEmployee.employeeID}
              onChange={handleChange}
              placeholder="Employee ID"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="employeeRole"
              value={newEmployee.employeeRole}
              onChange={handleChange}
              placeholder="Employee Role"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleChange}
              placeholder="Name"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="department"
              value={newEmployee.department}
              onChange={handleChange}
              placeholder="Department"
              className="rounded border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 min-h-96 rounded bg-white p-4 shadow-md">
        <h2 className="text-2xl font-semibold">Employee List</h2>
        <div className="divide-y divide-gray-300">
          {employees.map((employee) => (
            <div key={employee.id} className="flex items-center justify-between py-4">
              <div className="flex-1">
                <span className="font-medium text-gray-700">
                  {employee.firstName}
                </span>
                <span className="ml-4 text-gray-500">{employee.department}</span>
              </div>
              <span className="mr-4 text-gray-600">{employee.employeeRole}</span>
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
