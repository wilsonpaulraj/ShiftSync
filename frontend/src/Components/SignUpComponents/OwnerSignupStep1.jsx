import React from "react";

const OwnerSignupStep1 = ({ formData, handleChange }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-6" action="">
        <div className="flex flex-col gap-2">
          <label
            className="text-xl font-medium text-slate-800"
            htmlFor="first-name"
          >
            What should we call you?
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-48 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              className="h-10 w-44 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="last-name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-medium text-slate-800" htmlFor="email">
            Email address
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-medium text-slate-800" htmlFor="phone">
            Contact Number
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-12 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="phone-code"
              name="phone-code"
              placeholder="+91"
            />
            <input
              className="h-10 w-80 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="phone"
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OwnerSignupStep1;
