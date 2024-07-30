import React from "react";
import OwnerSignupStep1 from "../Components/SignUpComponents/OwnerSignupStep1";
import OwnerSignupStep2 from "../Components/SignUpComponents/OwnerSignupStep2";
import OwnerSignupStep3 from "../Components/SignUpComponents/OwnerSignupStep3";
import Stepper from "../Components/SignUpComponents/Stepper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateFormData, resetFormData } from "../Redux/ownerSignupSlice";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/authSlice";

const OwnerSignup = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.ownerSignup);
  const user = useSelector((state) => state.auth.user);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const steps = ["Personal Info", "Business Info", "Complete Setup!"];

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const submitForm = async () => {
    try {
      await axios.post("http://localhost:8080/users", formData);
      dispatch(setUser(formData));
      dispatch(resetFormData());
      console.log("Form Submitted:", formData);
      console.log(user.role);
      navigate("/manager-dashboard");
    } catch (error) {
      console.error("Failed to submit form data", error);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-3/5 items-center justify-center bg-white p-8 md:w-3/5 md:p-24">
        <div className="flex w-96 flex-col items-center justify-center">
          <Stepper steps={steps} currentStep={step} />
          {step === 1 && (
            <OwnerSignupStep1
              formData={formData}
              handleChange={handleChange}
              // nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <OwnerSignupStep2 formData={formData} handleChange={handleChange} />
          )}
          {step === 3 && (
            <OwnerSignupStep3 formData={formData} handleChange={handleChange} />
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
            src="/checkbox-img.svg"
            alt="Checkbox Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerSignup;
