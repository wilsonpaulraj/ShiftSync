import React from "react";

const EmployeeSignupStep3 = ({ formData, handleChange, errors }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-6" action="submit">
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeSignupStep3;
