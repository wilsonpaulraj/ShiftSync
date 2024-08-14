import React, { useState } from "react";
import OwnerSignupStep1 from "../Components/SignUpComponents/OwnerSignupStep1";
import OwnerSignupStep2 from "../Components/SignUpComponents/OwnerSignupStep2";
import OwnerSignupStep3 from "../Components/SignUpComponents/OwnerSignupStep3";
import Stepper from "../Components/SignUpComponents/Stepper";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateFormData, resetFormData } from "../Redux/ownerSignupSlice";
import { setUser } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const OwnerSignup = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.ownerSignup);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const steps = ["Personal Info", "Business Info", "Complete Setup!"];

  const validateStep = () => {
    let errors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) {
        errors.firstName = "First Name is required";
      }
      if (!formData.lastName.trim()) {
        errors.lastName = "Last Name is required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        errors.email = "A valid Email is required";
      }
      if (!formData.countryCode) {
        errors.phone = "Enter a valid country code";
      }
      if (!formData.phone) {
        if (errors.phone) {
          errors.phone += " and a valid phone number";
        } else {
          errors.phone = "A valid 10-digit phone number is required";
        }
      }
    }

    if (step === 2) {
      if (!formData.organizationName.trim()) {
        errors.organizationName = "Organization Name is required";
      }
      if (!formData.organizationAddress.trim()) {
        errors.organizationAddress = "Organization Address is required";
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
      }
    }

    if (step === 3) {
      if (!formData.password.trim()) {
        errors.password = "Password is required";
      } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

    return errors;
  };

  const nextStep = () => {
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(errors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const submitForm = async () => {
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post("http://localhost:8000/users/", formData);
        console.log(formData)
        dispatch(setUser(formData));
        dispatch(resetFormData());
        console.log("Form Submitted:", formData);
        navigate("/manager-dashboard");
      } catch (error) {
        console.error("Failed to submit form data", error.response ? error.response.data : error.message);
      }
    } else {
      setErrors(errors);
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
              errors={errors}
            />
          )}
          {step === 2 && (
            <OwnerSignupStep2
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}
          {step === 3 && (
            <OwnerSignupStep3
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}

          <div className="flex w-full items-center justify-between">
            <button
              className={`rounded bg-blue-500 p-2 px-10 text-xl font-semibold text-white transition duration-300 ease-in-out ${step === 1 ? "cursor-not-allowed bg-gray-900 opacity-50" : "hover:bg-blue-800"}`}
              onClick={prevStep}
              disabled={step === 1}
            >
              Back
            </button>
            {step < steps.length ? (
              <button
                className="rounded bg-blue-500 p-2 px-10 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-800"
                onClick={nextStep}
              >
                Next
              </button>
            ) : (
              <button
                className="rounded bg-green-500 p-2 px-10 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-green-800"
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

export default OwnerSignup;
