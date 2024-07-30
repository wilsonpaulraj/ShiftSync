import React from "react";

const OwnerSignupStep2 = ({ formData, handleChange }) => {
  return (
    <div className="w-full py-16">
      <form className="flex flex-col gap-6" action="">
        <div className="flex flex-col gap-2">
          <label className="text-xl font-medium text-slate-800" htmlFor="name">
            What kind of business do you manage ?
          </label>
          <div className="flex justify-between">
            <input
              className="h-10 w-full rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="business-type"
              name="businessType"
              placeholder="Eg. Administration"
              onChange={handleChange}
              value={formData.businessType}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-medium text-slate-800" htmlFor="name">
            Organization Name
          </label>
          <input
            className="h-10 w-96 rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
            type="text"
            id="organization-name"
            name="organizationName"
            placeholder="Eg. MyTech pvt. ltd."
            onChange={handleChange}
            value={formData.organizationName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-medium text-slate-800" htmlFor="name">
            Organization Address (<span className="italic">Optional</span>)
          </label>
          <div className="flex justify-between">
            <textarea
              className="h-20 w-full rounded-md border border-solid border-slate-500 bg-white p-2 outline-none"
              type="text"
              id="organization-address"
              name="organizationAddress"
              placeholder="Eg. 1/123, This Street, That Country, 123456"
              onChange={handleChange}
              value={formData.organizationAddress}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OwnerSignupStep2;
