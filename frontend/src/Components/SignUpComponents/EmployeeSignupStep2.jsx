import React from "react";

const EmployeeSignupStep2 = ({ formData, handleChange }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-6" action="">
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="organizationName"
          >
            Where do you work ?
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-full rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="organizationName"
              name="organizationName"
              placeholder="Organization Name"
              onChange={handleChange}
              value={formData.organizationName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="employeeID"
          >
            Employment Details
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="employeeID"
              name="employeeID"
              placeholder="Employment ID"
              onChange={handleChange}
              value={formData.employeeID}
            />
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="employeeRole"
              name="employeeRole"
              placeholder="Role"
              onChange={handleChange}
              value={formData.employeeRole}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="department"
          >
            Department Info
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="department"
              name="department"
              placeholder="Department"
              onChange={handleChange}
              value={formData.department}
            />
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="managerName"
              name="managerName"
              placeholder="Manager Name"
              onChange={handleChange}
              value={formData.managerName}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeSignupStep2;
