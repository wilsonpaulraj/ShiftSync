import React from "react";

const OwnerSignupStep1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-2" action="submit">
        <div className="flex flex-col gap-1">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="firstName"
          >
            What should we call you?
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="flex h-2 justify-between">
            {errors.firstName && (
              <p className="-my-1 w-48 p-0 text-sm font-normal text-red-500">
                {errors.firstName}
              </p>
            )}
            {errors.lastName && (
              <p className="-my-1 w-44 text-sm font-normal text-red-500">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium text-slate-800" htmlFor="email">
            Email address
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            required
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <div className="h-2">
            {errors.email && (
              <p className="-my-1 text-sm font-normal text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium text-slate-800" htmlFor="phone">
            Contact Number
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-12 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="countryCode"
              name="countryCode"
              placeholder="+91"
              value={formData.countryCode}
              onChange={handleChange}
            />
            <input
              className="h-10 w-80 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              required
              type="text"
              id="phone"
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              pattern="/d*"
              maxLength={10}
            />
          </div>
          <div className="h-2">
            {errors.phone && (
              <p className="-my-1 text-sm font-normal text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OwnerSignupStep1;
