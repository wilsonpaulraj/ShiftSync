import React from "react";
import { Link } from "react-router-dom";

const EmployeeSignupStep3 = ({ formData, handleChange }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-6" action="">
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="password"
          >
            Create a password for your account
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-full rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="confirmPassword"
          >
            Confirm your password
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input className="w-4" type="checkbox" />
            Accept all the
            <Link
              to="/terms-and-conditions"
              className="text-blue-950 underline"
            >
              Terms and Conditions
            </Link>
          </div>
          <div className="flex gap-2">
            <input className="w-4" type="checkbox" />
            Optionally receive newsletters from ShiftSync
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeSignupStep3;
