import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="mb-8 flex w-144 justify-between">
      {steps.map((step, i) => (
        <div
          key={i}
          className={"relative flex w-48 flex-col items-center text-white"}
        >
          <div
            className={`z-10 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold ${
              i + 1 < currentStep
                ? "bg-green-600"
                : i + 1 === currentStep
                  ? "bg-blue-500"
                  : "bg-slate-400"
            }`}
          >
            {i + 1 < currentStep ? (
              <TiTick className="z-10" size={24} />
            ) : (
              i + 1
            )}
          </div>
          <p
            className={`mt-2 text-xl font-semibold ${
              i + 1 < currentStep
                ? "text-green-600"
                : i + 1 === currentStep
                  ? "text-blue-500"
                  : "text-slate-400"
            }`}
          >
            {step}
          </p>
          {i < steps.length - 1 && (
            <div
              className={`absolute left-24 top-1/2 z-0 h-[3px] w-full -translate-y-4 transform ${
                i + 1 < currentStep ? "bg-green-600" : "bg-slate-400"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
