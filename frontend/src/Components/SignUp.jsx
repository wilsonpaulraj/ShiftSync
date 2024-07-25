import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, getUser } from "../server";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage("Passwords don't match!");
    } else {
      try {
        const addUserResponse = await addUser(email, password);
        if (addUserResponse.status === 201) {
          setSuccess(true);
          setSuccessMessage("User created successfully!");
          // Optionally, navigate to another page
          navigate("/login");
        }
      } catch (error) {
        setError(true);
        setErrorMessage("An error occurred!");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-300 p-14">
      <div className="flex w-full max-w-lg flex-col items-center rounded-xl bg-slate-100 px-16 py-10 shadow-lg">
        <h1 className="mb-10 text-center text-5xl font-bold text-slate-600">
          Sign Up
        </h1>
        <form className="flex w-full flex-col gap-6" onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="rounded border border-gray-300 p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="rounded border border-gray-300 p-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password2" className="mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              className="rounded border border-gray-300 p-2"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="flex w-24 cursor-pointer self-center rounded bg-slate-500 py-2 text-white hover:bg-slate-600"
          />
          {error && <div className="text-red-500">{errorMessage}</div>}
          {success && <div className="text-green-500">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
