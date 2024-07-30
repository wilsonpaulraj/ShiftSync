import React from "react";
import { useState } from "react";
import Stepper from "../Components/SignUpComponents/Stepper";
import EmployeeSignupStep1 from "../Components/SignUpComponents/EmployeeSignupStep1";
import EmployeeSignupStep2 from "../Components/SignUpComponents/EmployeeSignupStep2";
import EmployeeSignupStep3 from "../Components/SignUpComponents/EmployeeSignupStep3";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/authSlice";
import axios from "axios";

import {
  updateEmployeeFormData,
  resetEmployeeFormData,
} from "../Redux/employeeSignupSlice";
import { useNavigate } from "react-router-dom";

const EmployeeSignup = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeeSignup);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const steps = ["Personal Info", "Employement Info", "Complete Setup!"];

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateEmployeeFormData({ [name]: value }));
  };

  const submitForm = async () => {
    try {
      await axios.post("http://localhost:8080/users", formData);
      dispatch(setUser(formData));
      dispatch(resetEmployeeFormData());
      console.log("Form Submitted:", formData);
      navigate("/employee-dashboard");
    } catch (error) {
      console.error("Failed to submit form data", error);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-3/5 items-center justify-center bg-white p-8 md:w-3/5 md:p-24">
        <div className="flex w-96 flex-col items-center justify-center">
          <div className="mb-16">
            {/* <h1 className="text-4xl font-bold text-dark-text">
              Getting Started with <span className="text-blue-600">Shift</span>
              <span className="italic text-blue-400">Sync</span>
              <span className="text-blue-400">!</span>
            </h1> */}
          </div>
          <Stepper steps={steps} currentStep={step} />
          {step === 1 && (
            <EmployeeSignupStep1
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {step === 2 && (
            <EmployeeSignupStep2
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {step === 3 && (
            <EmployeeSignupStep3
              formData={formData}
              handleChange={handleChange}
            />
          )}

          <div className="flex w-full items-center justify-between">
            <button
              className={`transistion rounded bg-blue-500 p-2 px-10 text-xl font-semibold text-white duration-300 ease-in-out ${step === 1 ? "cursor-not-allowed bg-gray-900 opacity-50" : "hover:bg-blue-800"}`}
              onClick={prevStep}
              disabled={step === 1}
            >
              Back
            </button>
            {step < steps.length ? (
              <button
                className="transistion rounded bg-blue-500 p-2 px-10 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-blue-800"
                onClick={nextStep}
              >
                Next
              </button>
            ) : (
              <button
                className="transistion rounded bg-green-500 p-2 px-10 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-green-800"
                onClick={submitForm}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative hidden w-2/5 items-center justify-center overflow-hidden bg-slate-100 md:flex">
        <div className="relative p-4 text-4xl font-bold text-dark-text">
          <img
            className="h-96 w-96 max-w-full"
            src="/signup-img.svg"
            alt="Checkbox Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSignup;
