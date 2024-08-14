import React from "react";

const EmployeeSignupStep2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-2" action="submit">
        <div className="flex flex-col gap-1">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="organizationName"
          >
            Organization Name
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            required
            type="text"
            id="organizationName"
            name="organizationName"
            placeholder="Your Organization"
            onChange={handleChange}
            value={formData.organizationName}
          />
          {errors.organizationName && (
            <p className="-my-1 text-sm font-normal text-red-500">
              {errors.organizationName}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="employeeID"
          >
            Employment Info
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="employeeID"
              name="employeeID"
              placeholder="Employee ID"
              onChange={handleChange}
              value={formData.employeeID}
            />
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="employeeRole"
              name="employeeRole"
              placeholder="Role"
              onChange={handleChange}
              value={formData.employeeRole}
            />
          </div>
          <div className="flex justify-between">
            {errors.employeeID && (
              <p className="-my-1 w-44 text-sm font-normal text-red-500">
                {errors.employeeID}
              </p>
            )}
            {errors.employeeID && (
              <p className="-my-1 w-48 text-sm font-normal text-red-500">
                {errors.employeeRole}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="department"
          >
            Department
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="department"
              name="department"
              placeholder="Your Department"
              onChange={handleChange}
              value={formData.department}
            />
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="managerID"
              name="managerID"
              placeholder="Your Manager ID"
              onChange={handleChange}
              value={formData.managerID}
            />
          </div>
          <div className="flex justify-between">
            {errors.department && (
              <p className="-my-1 w-44 text-sm font-normal text-red-500">
                {errors.department}
              </p>
            )}
            {errors.managerID && (
              <p className="-my-1 w-48 text-sm font-normal text-red-500">
                {errors.managerID}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeSignupStep2;
